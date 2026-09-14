"use client";

import { createElement } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { ChevronRight, ChevronDown } from "lucide-react";
import { FlowNodeData } from "@/lib/layout";
import { getBranchIcon } from "@/lib/icons";

/**
 * In the radial layout an edge can arrive from any direction, so every node
 * offers a handle on all four sides; the layout picks the matching one.
 */
function RadialHandles({ color }: { color: string }) {
  const sides = [
    ["top", Position.Top],
    ["right", Position.Right],
    ["bottom", Position.Bottom],
    ["left", Position.Left],
  ] as const;
  return (
    <>
      {sides.map(([name, position]) => (
        <Handle
          key={`t-${name}`}
          id={`t-${name}`}
          type="target"
          position={position}
          style={{ background: color, opacity: 0 }}
        />
      ))}
      {sides.map(([name, position]) => (
        <Handle
          key={`s-${name}`}
          id={`s-${name}`}
          type="source"
          position={position}
          style={{ background: color, opacity: 0 }}
        />
      ))}
    </>
  );
}

export default function VocabNodeComponent({ data, selected }: NodeProps<FlowNodeData>) {
  const { vocab, depth, color, branchColor, branchIndex, hasChildren, collapsed, childCount, onToggleCollapse, radial, circle } = data;
  const isRoot = depth === 0;
  const isBranch = depth === 1;
  const isLeaf = !vocab.children || vocab.children.length === 0;
  const nodeColor = isRoot ? color : branchColor;
  const branchIcon = getBranchIcon(branchIndex);

  const text = vocab.label;

  // Radial root: the big circle in the middle of the poster-style mindmap.
  if (circle) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center rounded-full text-center px-6 cursor-pointer select-none transition-all ${
          selected ? "ring-4 ring-offset-2 ring-offset-[var(--background)] scale-[1.03]" : "shadow-lg hover:shadow-xl"
        }`}
        style={{
          background: nodeColor,
          color: "#fff",
          border: "3px solid rgba(0,0,0,0.85)",
          ...(selected ? ({ ["--tw-ring-color" as string]: nodeColor }) : {}),
        }}
      >
        <RadialHandles color={nodeColor} />
        <span className="font-bold text-[20px] sm:text-[24px] leading-tight whitespace-pre-line">
          {vocab.label.replace(" + ", "\n+\n")}
        </span>
      </div>
    );
  }

  if (isLeaf) {
    return (
      <div
        className={`relative flex items-center gap-2 cursor-pointer select-none rounded-lg px-2 py-1.5 min-w-[160px] max-w-[280px] transition-all ${
          selected ? "bg-[var(--brand-soft)] scale-[1.04]" : "hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
        }`}
      >
        {radial ? (
          <RadialHandles color={nodeColor} />
        ) : (
          <>
            <Handle type="target" position={Position.Left} style={{ background: nodeColor, opacity: 0 }} />
            <Handle type="source" position={Position.Right} style={{ background: nodeColor, opacity: 0 }} />
          </>
        )}
        <span
          className="inline-block h-2.5 w-2.5 rounded-full border-[2.5px] shrink-0"
          style={{ borderColor: nodeColor, background: "var(--surface)" }}
        />
        <span className="text-[14px] sm:text-[15px] leading-snug font-medium" style={{ color: "var(--foreground)" }}>
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center gap-2 text-center rounded-xl px-4 py-2.5 min-w-[150px] max-w-[220px] cursor-pointer select-none transition-all ${
        selected ? "ring-2 ring-offset-2 ring-offset-[var(--background)] scale-[1.05] shadow-lg" : "shadow-sm hover:shadow-md hover:-translate-y-0.5"
      }`}
      style={{
        background: nodeColor,
        color: "#fff",
        ...(selected ? ({ ["--tw-ring-color" as string]: nodeColor }) : {}),
      }}
    >
      {radial ? (
        <RadialHandles color={nodeColor} />
      ) : (
        <>
          <Handle type="target" position={Position.Left} style={{ background: nodeColor, opacity: 0 }} />
          <Handle type="source" position={Position.Right} style={{ background: nodeColor, opacity: 0 }} />
        </>
      )}

      {isBranch &&
        createElement(branchIcon, { size: 16, strokeWidth: 2.25, className: "shrink-0 opacity-90" })}
      <span className={`leading-snug ${isRoot ? "font-bold text-[16px] sm:text-[17px]" : "font-semibold text-[14px] sm:text-[15px]"}`}>
        {text}
      </span>
      {hasChildren && !isRoot && (
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onToggleCollapse?.();
          }}
          title={collapsed ? `Mở rộng (${childCount})` : "Thu gọn"}
          className="shrink-0 flex items-center justify-center gap-0.5 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-colors -mr-1.5 min-w-[30px] min-h-[30px] px-1.5"
        >
          {collapsed ? <ChevronRight size={16} strokeWidth={2.75} /> : <ChevronDown size={16} strokeWidth={2.75} />}
          {collapsed && <span className="text-[11px] font-bold pr-0.5">{childCount}</span>}
        </button>
      )}
    </div>
  );
}
