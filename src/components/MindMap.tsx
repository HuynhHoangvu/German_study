"use client";

import { useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import { Topic } from "@/types/topic";
import { buildFlow } from "@/lib/layout";
import VocabNodeComponent from "@/components/VocabNode";

const nodeTypes = { vocab: VocabNodeComponent };

export default function MindMap({ topic }: { topic: Topic }) {
  const { nodes, edges } = useMemo(() => buildFlow(topic.root, topic.color), [topic]);

  return (
    <div className="w-full h-[75vh] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.2}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#d4d4d8" />
        <Controls />
        <MiniMap
          nodeColor={() => topic.color}
          maskColor="rgba(0,0,0,0.05)"
          pannable
          zoomable
        />
      </ReactFlow>
    </div>
  );
}
