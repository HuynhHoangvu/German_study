import dagre from "dagre";
import { Edge, Node } from "reactflow";
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
  solved?: boolean;
};

/**
 * Classic horizontal mind-map layout: root centered vertically on the far
 * left, branches fanning out to the right stacked vertically, each
 * branch's own children fanning further right — matching a traditional
 * hand-drawn mindmap (root -> branch -> leaf, left to right).
 */
export function buildFlow(
  root: VocabNode,
  color: string,
  _direction: "LR" | "TB" = "LR"
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
    nodes.push({
      id: vocab.id,
      position: { x: 0, y: 0 },
      data: { vocab, depth, color, branchColor, branchIndex },
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
