"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  Node,
  ReactFlowInstance,
} from "reactflow";
import { BookMarked, TrendingUp, Maximize2, Minimize2 } from "lucide-react";
import "reactflow/dist/style.css";
import { Topic, VocabNode } from "@/types/topic";
import { buildFlow, FlowNodeData, getDefaultCollapsed, getAllCollapsibleIds } from "@/lib/layout";
import VocabNodeComponent from "@/components/VocabNode";
import NodeDetailPanel from "@/components/NodeDetailPanel";
import { getSolvedBlanks } from "@/lib/progress";
import { speakGerman } from "@/lib/speech";

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

  const reactFlowInstance = useRef<ReactFlowInstance | null>(null);
  const hasWortarten = useMemo(
    () => (topic.root.children ?? []).some((c) => c.id === "wortarten"),
    [topic]
  );
  const hasTrends = useMemo(
    () => (topic.root.children ?? []).some((c) => c.id === "trends"),
    [topic]
  );
  const allCollapsibleIds = useMemo(() => getAllCollapsibleIds(topic.root), [topic]);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(() => getDefaultCollapsed(topic.root));

  useEffect(() => {
    setSolvedIds(getSolvedBlanks(topic.slug));
    setSelectedId(null);
    setCollapsedIds(getDefaultCollapsed(topic.root));
  }, [topic]);

  const handleSolved = useCallback((id: string) => {
    setSolvedIds((prev) => new Set(prev).add(id));
  }, []);

  const toggleCollapse = useCallback((id: string) => {
    setCollapsedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const expandNode = useCallback((id: string) => {
    setCollapsedIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const jumpTo = useCallback(
    (id: string) => {
      expandNode(id);
      setTimeout(() => {
        reactFlowInstance.current?.fitView({ nodes: [{ id }], padding: 0.3, duration: 400 });
      }, 30);
    },
    [expandNode]
  );

  const allExpanded = collapsedIds.size === 0;
  const toggleExpandAll = useCallback(() => {
    setCollapsedIds(allExpanded ? allCollapsibleIds : new Set());
  }, [allExpanded, allCollapsibleIds]);

  const { nodes: baseNodes, edges } = useMemo(
    () => buildFlow(topic.root, topic.color, "LR", collapsedIds),
    [topic, collapsedIds]
  );

  const nodes: Node<FlowNodeData>[] = useMemo(
    () =>
      baseNodes.map((n) => ({
        ...n,
        selected: n.id === selectedId,
        data: {
          ...n.data,
          solved: solvedIds.has(n.id),
          onToggleCollapse: n.data.hasChildren ? () => toggleCollapse(n.id) : undefined,
        },
      })),
    [baseNodes, selectedId, solvedIds, toggleCollapse]
  );

  const selectedVocab = selectedId ? findVocab(topic.root, selectedId) : null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {hasWortarten && (
          <button
            onClick={() => jumpTo("wortarten")}
            className="inline-flex items-center gap-1.5 rounded-full text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 hover:opacity-90 transition-opacity"
            style={{ background: topic.color }}
          >
            <BookMarked size={15} strokeWidth={2.25} />
            Wortschatz nach Wortart
          </button>
        )}
        {hasTrends && (
          <button
            onClick={() => jumpTo("trends")}
            className="inline-flex items-center gap-1.5 rounded-full text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 hover:opacity-90 transition-opacity"
            style={{ background: topic.color }}
          >
            <TrendingUp size={15} strokeWidth={2.25} />
            Trend-Themen
          </button>
        )}
        <button
          onClick={toggleExpandAll}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] text-xs sm:text-sm font-medium px-3.5 py-1.5 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors"
          style={{ color: "var(--foreground)" }}
        >
          {allExpanded ? <Minimize2 size={15} strokeWidth={2.25} /> : <Maximize2 size={15} strokeWidth={2.25} />}
          {allExpanded ? "Thu gọn tất cả" : "Mở rộng tất cả"}
        </button>
      </div>
      <div className="relative w-full h-[70vh] sm:h-[70vh] lg:h-[75vh] rounded-2xl border border-[var(--border)] overflow-hidden bg-neutral-50 dark:bg-neutral-950">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onInit={(instance) => {
            reactFlowInstance.current = instance;
          }}
          onNodeClick={(_, node) => {
            setSelectedId(node.id);
            const data = node.data as FlowNodeData;
            const vocab = data.vocab;
            const isBlank = Boolean(vocab.answer);
            const alreadySolved = solvedIds.has(node.id);
            if (!isBlank || alreadySolved) {
              speakGerman(vocab.label.replace("___", vocab.answer ?? ""));
            }
          }}
          onPaneClick={() => setSelectedId(null)}
          fitView
          fitViewOptions={{ padding: 0.15, minZoom: 0.3, maxZoom: 1 }}
          minZoom={0.15}
          maxZoom={2}
          nodesDraggable={false}
          nodesConnectable={false}
          panOnDrag
          zoomOnPinch
          panOnScroll
          panOnScrollMode="free"
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
