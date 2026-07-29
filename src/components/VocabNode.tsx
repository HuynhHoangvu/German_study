"use client";

import { createElement } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { FlowNodeData } from "@/lib/layout";
import { getBranchIcon } from "@/lib/icons";

function splitBlank(label: string): [string, string] {
  const idx = label.indexOf("___");
  if (idx === -1) return [label, ""];
  return [label.slice(0, idx), label.slice(idx + 3)];
}

export default function VocabNodeComponent({ data, selected }: NodeProps<FlowNodeData>) {
  const { vocab, depth, color, branchColor, branchIndex, solved } = data;
  const isRoot = depth === 0;
  const isBranch = depth === 1;
  const isLeaf = !vocab.children || vocab.children.length === 0;
  const isBlank = Boolean(vocab.answer);
  const nodeColor = isRoot ? color : branchColor;
  const branchIcon = getBranchIcon(branchIndex);

  const [before, after] = isBlank ? splitBlank(vocab.label) : [vocab.label, ""];

  const text = (
    <>
      {isBlank ? (
        <>
          {before}
          <span
            className={`inline-block mx-0.5 px-1.5 rounded font-semibold ${
              solved ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
            }`}
          >
            {solved ? vocab.answer : "____"}
          </span>
          {after}
        </>
      ) : (
        vocab.label
      )}
    </>
  );

  if (isLeaf) {
    return (
      <div
        className={`relative flex items-center gap-2 cursor-pointer select-none rounded-lg px-2 py-1.5 min-w-[160px] max-w-[280px] transition-all ${
          selected ? "bg-[var(--brand-soft)] scale-[1.04]" : "hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
        }`}
      >
        <Handle type="target" position={Position.Left} style={{ background: nodeColor, opacity: 0 }} />
        <Handle type="source" position={Position.Right} style={{ background: nodeColor, opacity: 0 }} />
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
      <Handle type="target" position={Position.Left} style={{ background: nodeColor, opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ background: nodeColor, opacity: 0 }} />

      {isBranch &&
        createElement(branchIcon, { size: 16, strokeWidth: 2.25, className: "shrink-0 opacity-90" })}
      <span className={`leading-snug ${isRoot ? "font-bold text-[16px] sm:text-[17px]" : "font-semibold text-[14px] sm:text-[15px]"}`}>
        {text}
      </span>
    </div>
  );
}
