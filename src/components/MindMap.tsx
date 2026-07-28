"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { Topic, VocabNode } from "@/types/topic";
import { buildFlow, FlowNodeData } from "@/lib/layout";
import VocabNodeComponent from "@/components/VocabNode";
import NodeDetailPanel from "@/components/NodeDetailPanel";
import { getSolvedBlanks } from "@/lib/progress";

const nodeTypes = { vocab: VocabNodeComponent };

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

function findVocab(node: VocabNode, id: string): VocabNode | null {
  if (node.id === id) return node;
  for (const child of node.children ?? []) {
    const found = findVocab(child, id);
    if (found) return found;
  }
  return null;
}

export default function MindMap({ topic }: { topic: Topic }) {
  const isMobile = useIsMobile();
  const { nodes: baseNodes, edges } = useMemo(
    () => buildFlow(topic.root, topic.color, "LR"),
    [topic]
  );

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    setSolvedIds(getSolvedBlanks(topic.slug));
    setSelectedId(null);
  }, [topic.slug]);

  const handleSolved = useCallback((id: string) => {
    setSolvedIds((prev) => new Set(prev).add(id));
  }, []);

  const nodes: Node<FlowNodeData>[] = useMemo(
    () =>
      baseNodes.map((n) => ({
        ...n,
        selected: n.id === selectedId,
        data: { ...n.data, solved: solvedIds.has(n.id) },
      })),
    [baseNodes, selectedId, solvedIds]
  );

  const selectedVocab = selectedId ? findVocab(topic.root, selectedId) : null;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-[70vh] sm:h-[70vh] lg:h-[75vh] rounded-2xl border border-[var(--border)] overflow-hidden bg-neutral-50 dark:bg-neutral-950">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={(_, node) => setSelectedId(node.id)}
          onPaneClick={() => setSelectedId(null)}
          fitView
          fitViewOptions={{ padding: 0.15, minZoom: 0.3, maxZoom: 1 }}
          minZoom={0.15}
          maxZoom={2}
          nodesDraggable={false}
          nodesConnectable={false}
          panOnDrag
          zoomOnPinch
          panOnScroll={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#d4d4d8" />
          <Controls />
          {!isMobile && (
            <MiniMap nodeColor={() => topic.color} maskColor="rgba(0,0,0,0.05)" pannable zoomable />
          )}
        </ReactFlow>

        {selectedVocab && (
          <>
            <div
              className="absolute inset-0 bg-black/25 backdrop-blur-[1px] z-10"
              onClick={() => setSelectedId(null)}
            />
            <div className="absolute inset-x-2 bottom-2 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[380px] z-20">
              <NodeDetailPanel
                vocab={selectedVocab}
                color={topic.color}
                topicSlug={topic.slug}
                solved={selectedId ? solvedIds.has(selectedId) : false}
                onSolved={handleSolved}
                onClose={() => setSelectedId(null)}
              />
            </div>
          </>
        )}
      </div>

      {!selectedVocab && (
        <div className="rounded-2xl border border-dashed border-[var(--border)] px-5 py-8 text-center text-sm text-neutral-400">
          Chạm hoặc bấm vào một nhánh trong sơ đồ để xem nghĩa, từ đồng nghĩa và ghi chú tại đây.
        </div>
      )}
    </div>
  );
}
