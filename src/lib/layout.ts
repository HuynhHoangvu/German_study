import dagre from "dagre";
import { Edge, MarkerType, Node } from "reactflow";
import { VocabNode } from "@/types/topic";

const ROOT_SIZE = { width: 160, height: 60 };
const BRANCH_SIZE = { width: 190, height: 46 };
const LEAF_SIZE = { width: 230, height: 40 };

function sizeForDepth(depth: number) {
  if (depth === 0) return ROOT_SIZE;
  if (depth === 1) return BRANCH_SIZE;
  return LEAF_SIZE;
}

const BRANCH_PALETTE = [
  "#7c3aed",
  "#db2777",
  "#dc2626",
  "#2563eb",
  "#059669",
  "#d97706",
  "#0891b2",
  "#4d7c0f",
];

export type FlowNodeData = {
  vocab: VocabNode;
  depth: number;
  color: string;
  branchColor: string;
  branchIndex: number;
  hasChildren: boolean;
  childCount: number;
  collapsed: boolean;
  onToggleCollapse?: () => void;
  /** True when the node is drawn in the radial (circular) layout. */
  radial?: boolean;
  /** The radial root is drawn as a big circle in the centre. */
  circle?: boolean;
};

/**
 * Nodes with children, at this depth or deeper, that should start
 * collapsed by default — keeps the root and top-level branches visible
 * (the classic mindmap fan-out) while hiding deeper detail (Trend-Themen
 * sub-branches, Wortschatz-nach-Wortart groups, etc.) until expanded.
 */
const DEFAULT_COLLAPSE_MIN_DEPTH = 2;

export function getDefaultCollapsed(root: VocabNode): Set<string> {
  const ids = new Set<string>();
  function walk(vocab: VocabNode, depth: number) {
    if (depth >= DEFAULT_COLLAPSE_MIN_DEPTH && (vocab.children?.length ?? 0) > 0) {
      ids.add(vocab.id);
    }
    vocab.children?.forEach((child) => walk(child, depth + 1));
  }
  walk(root, 0);
  return ids;
}

/** All node ids in the tree that have children (i.e. can be collapsed). */
export function getAllCollapsibleIds(root: VocabNode): Set<string> {
  const ids = new Set<string>();
  function walk(vocab: VocabNode) {
    if ((vocab.children?.length ?? 0) > 0) ids.add(vocab.id);
    vocab.children?.forEach(walk);
  }
  walk(root);
  return ids;
}

const RADIAL_ROOT_SIZE = { width: 240, height: 240 };

/** Minimum arc length (px) reserved for each leaf on the outer ring. */
const RADIAL_MIN_ARC = 215;

function radialSizeForDepth(depth: number) {
  if (depth === 0) return RADIAL_ROOT_SIZE;
  if (depth === 1) return BRANCH_SIZE;
  return LEAF_SIZE;
}

type RadialSide = "top" | "right" | "bottom" | "left";

const OPPOSITE_SIDE: Record<RadialSide, RadialSide> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

/** Which side of a node faces the given direction. */
function sideForDirection(dx: number, dy: number): RadialSide {
  if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? "right" : "left";
  return dy >= 0 ? "bottom" : "top";
}

type RadialTreeNode = {
  vocab: VocabNode;
  depth: number;
  branchColor: string;
  branchIndex: number;
  parentId?: string;
  collapsed: boolean;
  hasChildren: boolean;
  children: RadialTreeNode[];
  /** Number of visible leaves below this node — drives its angular share. */
  leafCount: number;
};

/**
 * Radial mind-map layout, matching the classic "preposition in a circle,
 * verbs radiating outwards" poster style: the root sits in the centre as a
 * circle, and every branch gets an angular sector sized by how many leaves
 * it contains, so the outer ring is evenly spaced.
 */
export function buildRadialFlow(
  root: VocabNode,
  color: string,
  collapsedIds: Set<string> = new Set()
): { nodes: Node<FlowNodeData>[]; edges: Edge[] } {
  function build(
    vocab: VocabNode,
    depth: number,
    branchColor: string,
    branchIndex: number,
    parentId?: string
  ): RadialTreeNode {
    const hasChildren = (vocab.children?.length ?? 0) > 0;
    const collapsed = hasChildren && collapsedIds.has(vocab.id);
    const children =
      hasChildren && !collapsed
        ? vocab.children!.map((child, i) =>
            build(
              child,
              depth + 1,
              depth === 0 ? BRANCH_PALETTE[i % BRANCH_PALETTE.length] : branchColor,
              depth === 0 ? i : branchIndex,
              vocab.id
            )
          )
        : [];
    const leafCount = children.length === 0 ? 1 : children.reduce((sum, c) => sum + c.leafCount, 0);
    return { vocab, depth, branchColor, branchIndex, parentId, collapsed, hasChildren, children, leafCount };
  }

  const tree = build(root, 0, color, 0);

  const leafRadius = Math.max(520, (tree.leafCount * RADIAL_MIN_ARC) / (2 * Math.PI));
  const radiusForDepth = (depth: number) => {
    if (depth === 0) return 0;
    if (depth === 1) return leafRadius * 0.46;
    return leafRadius + (depth - 2) * 260;
  };

  const nodes: Node<FlowNodeData>[] = [];
  const edges: Edge[] = [];
  /** Centre point of each laid-out node, used to aim the connecting arrows. */
  const centers = new Map<string, { x: number; y: number }>();

  function place(node: RadialTreeNode, startAngle: number, endAngle: number) {
    const angle = (startAngle + endAngle) / 2;
    const radius = radiusForDepth(node.depth);
    const size = radialSizeForDepth(node.depth);
    const cx = Math.cos(angle) * radius;
    const cy = Math.sin(angle) * radius;
    centers.set(node.vocab.id, { x: cx, y: cy });

    nodes.push({
      id: node.vocab.id,
      position: { x: cx - size.width / 2, y: cy - size.height / 2 },
      data: {
        vocab: node.vocab,
        depth: node.depth,
        color,
        branchColor: node.branchColor,
        branchIndex: node.branchIndex,
        hasChildren: node.hasChildren,
        childCount: node.vocab.children?.length ?? 0,
        collapsed: node.collapsed,
        radial: true,
        circle: node.depth === 0,
      },
      type: "vocab",
      width: size.width,
      height: size.height,
      // The centre node must stay a perfect circle, so its size is fixed
      // on the wrapper instead of being derived from the label length.
      ...(node.depth === 0 ? { style: { width: size.width, height: size.height } } : {}),
    });

    if (node.parentId) {
      const parent = centers.get(node.parentId)!;
      const dx = cx - parent.x;
      const dy = cy - parent.y;
      const sourceSide = sideForDirection(dx, dy);
      edges.push({
        id: `${node.parentId}-${node.vocab.id}`,
        source: node.parentId,
        target: node.vocab.id,
        sourceHandle: `s-${sourceSide}`,
        targetHandle: `t-${OPPOSITE_SIDE[sourceSide]}`,
        type: "straight",
        markerEnd: { type: MarkerType.ArrowClosed, color: node.branchColor, width: 18, height: 18 },
        style: { stroke: node.branchColor, strokeWidth: 2, opacity: 0.8 },
      });
    }

    // Split this node's angular sector among its children, proportionally.
    let cursor = startAngle;
    for (const child of node.children) {
      const share = ((endAngle - startAngle) * child.leafCount) / node.leafCount;
      place(child, cursor, cursor + share);
      cursor += share;
    }
  }

  // Start at the top of the circle so the first branch sits at 12 o'clock.
  const start = -Math.PI / 2;
  place(tree, start, start + 2 * Math.PI);

  return { nodes, edges };
}

/**
 * Classic horizontal mind-map layout: root centered vertically on the far
 * left, branches fanning out to the right stacked vertically, each
 * branch's own children fanning further right — matching a traditional
 * hand-drawn mindmap (root -> branch -> leaf, left to right).
 *
 * Nodes listed in `collapsedIds` are rendered but their children are not
 * walked/laid out, so deep sub-trees can be hidden until expanded.
 */
export function buildFlow(
  root: VocabNode,
  color: string,
  _direction: "LR" | "TB" = "LR",
  collapsedIds: Set<string> = new Set()
): { nodes: Node<FlowNodeData>[]; edges: Edge[] } {
  const nodes: Node<FlowNodeData>[] = [];
  const edges: Edge[] = [];

  function walk(
    vocab: VocabNode,
    depth: number,
    branchColor: string,
    branchIndex: number,
    parentId?: string
  ) {
    const size = sizeForDepth(depth);
    const hasChildren = (vocab.children?.length ?? 0) > 0;
    const collapsed = hasChildren && collapsedIds.has(vocab.id);
    nodes.push({
      id: vocab.id,
      position: { x: 0, y: 0 },
      data: {
        vocab,
        depth,
        color,
        branchColor,
        branchIndex,
        hasChildren,
        childCount: vocab.children?.length ?? 0,
        collapsed,
      },
      type: "vocab",
      width: size.width,
      height: size.height,
    });
    if (parentId) {
      edges.push({
        id: `${parentId}-${vocab.id}`,
        source: parentId,
        target: vocab.id,
        type: "smoothstep",
        pathOptions: { borderRadius: 16 },
        style: { stroke: branchColor, strokeWidth: 2.25, opacity: 0.75 },
      });
    }
    if (collapsed) return;
    vocab.children?.forEach((child, i) => {
      const childBranchColor = depth === 0 ? BRANCH_PALETTE[i % BRANCH_PALETTE.length] : branchColor;
      const childBranchIndex = depth === 0 ? i : branchIndex;
      walk(child, depth + 1, childBranchColor, childBranchIndex, vocab.id);
    });
  }

  walk(root, 0, color, 0);

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: "LR", nodesep: 22, ranksep: 80 });

  nodes.forEach((n) => {
    const size = sizeForDepth((n.data as FlowNodeData).depth);
    g.setNode(n.id, { width: size.width, height: size.height });
  });
  edges.forEach((e) => g.setEdge(e.source, e.target));

  dagre.layout(g);

  // Vertically center the root between the vertical extent of its
  // direct branches (dagre otherwise biases it toward the median rank,
  // which can look lopsided when branches have very different sizes).
  const branchYs = (root.children ?? []).map((c) => g.node(c.id).y);
  if (branchYs.length > 0) {
    const centeredY = (Math.min(...branchYs) + Math.max(...branchYs)) / 2;
    g.node(root.id).y = centeredY;
  }

  const laidOutNodes = nodes.map((n) => {
    const pos = g.node(n.id);
    const size = sizeForDepth((n.data as FlowNodeData).depth);
    return {
      ...n,
      position: { x: pos.x - size.width / 2, y: pos.y - size.height / 2 },
    };
  });

  return { nodes: laidOutNodes, edges };
}
