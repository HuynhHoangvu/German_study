import dagre from "dagre";
import { Edge, Node } from "reactflow";
import { VocabNode } from "@/types/topic";

const NODE_WIDTH = 220;
const NODE_HEIGHT = 56;

export type FlowNodeData = {
  vocab: VocabNode;
  depth: number;
  color: string;
};

export function buildFlow(
  root: VocabNode,
  color: string
): { nodes: Node<FlowNodeData>[]; edges: Edge[] } {
  const nodes: Node<FlowNodeData>[] = [];
  const edges: Edge[] = [];

  function walk(vocab: VocabNode, depth: number, parentId?: string) {
    nodes.push({
      id: vocab.id,
      position: { x: 0, y: 0 },
      data: { vocab, depth, color },
      type: "vocab",
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
    if (parentId) {
      edges.push({
        id: `${parentId}-${vocab.id}`,
        source: parentId,
        target: vocab.id,
        style: { stroke: color, strokeWidth: 1.5 },
      });
    }
    vocab.children?.forEach((child) => walk(child, depth + 1, vocab.id));
  }

  walk(root, 0);

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: "LR", nodesep: 24, ranksep: 90 });

  nodes.forEach((n) => g.setNode(n.id, { width: NODE_WIDTH, height: NODE_HEIGHT }));
  edges.forEach((e) => g.setEdge(e.source, e.target));

  dagre.layout(g);

  const laidOutNodes = nodes.map((n) => {
    const pos = g.node(n.id);
    return {
      ...n,
      position: { x: pos.x - NODE_WIDTH / 2, y: pos.y - NODE_HEIGHT / 2 },
    };
  });

  return { nodes: laidOutNodes, edges };
}
