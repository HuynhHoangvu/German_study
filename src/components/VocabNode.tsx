"use client";

import { useState, useEffect, useCallback } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { FlowNodeData } from "@/lib/layout";
import { getSolvedBlanks, markBlankSolved } from "@/lib/progress";

function splitBlank(label: string): [string, string] {
  const idx = label.indexOf("___");
  if (idx === -1) return [label, ""];
  return [label.slice(0, idx), label.slice(idx + 3)];
}

export default function VocabNodeComponent({ data, id }: NodeProps<FlowNodeData>) {
  const { vocab, depth, color } = data;
  const isRoot = depth === 0;
  const isBlank = Boolean(vocab.answer);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [solved, setSolved] = useState(false);
  const [wrong, setWrong] = useState(false);

  const topicSlug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() ?? "" : "";

  useEffect(() => {
    if (isBlank && topicSlug) {
      setSolved(getSolvedBlanks(topicSlug).has(id));
    }
  }, [isBlank, topicSlug, id]);

  const check = useCallback(() => {
    if (!vocab.answer) return;
    const ok = input.trim().toLowerCase() === vocab.answer.trim().toLowerCase();
    if (ok) {
      setSolved(true);
      setWrong(false);
      if (topicSlug) markBlankSolved(topicSlug, id);
    } else {
      setWrong(true);
    }
  }, [input, vocab.answer, topicSlug, id]);

  const [before, after] = isBlank ? splitBlank(vocab.label) : [vocab.label, ""];

  return (
    <div
      className="group relative rounded-xl border shadow-sm px-3 py-2 min-w-[180px] max-w-[240px] bg-white dark:bg-neutral-900 transition-transform hover:scale-[1.03] hover:shadow-md cursor-pointer"
      style={{
        borderColor: color,
        borderWidth: isRoot ? 2.5 : 1.5,
        background: isRoot ? color : undefined,
      }}
      onClick={() => setOpen((o) => !o)}
    >
      <Handle type="target" position={Position.Left} style={{ background: color, opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ background: color, opacity: 0 }} />

      <div
        className={`text-sm font-medium leading-snug ${isRoot ? "text-white text-base font-bold" : "text-neutral-800 dark:text-neutral-100"}`}
      >
        {isBlank ? (
          <span>
            {before}
            <span
              className={`inline-block mx-0.5 px-1 rounded ${
                solved ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              } font-semibold`}
            >
              {solved ? vocab.answer : "____"}
            </span>
            {after}
          </span>
        ) : (
          vocab.label
        )}
        {isBlank && solved && <span className="ml-1 text-green-600">✓</span>}
      </div>

      {!isRoot && vocab.meaning && (
        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{vocab.meaning}</div>
      )}

      {open && !isRoot && (
        <div
          className="absolute z-20 top-full left-0 mt-2 w-64 rounded-lg border bg-white dark:bg-neutral-800 shadow-xl p-3 text-xs space-y-2"
          style={{ borderColor: color }}
          onClick={(e) => e.stopPropagation()}
        >
          {vocab.meaning && (
            <div>
              <span className="font-semibold text-neutral-500">Nghĩa: </span>
              <span>{vocab.meaning}</span>
            </div>
          )}
          {vocab.synonyms && vocab.synonyms.length > 0 && (
            <div>
              <span className="font-semibold text-neutral-500">Đồng nghĩa: </span>
              <span>{vocab.synonyms.join(", ")}</span>
            </div>
          )}
          {vocab.note && (
            <div>
              <span className="font-semibold text-neutral-500">Ghi chú: </span>
              <span>{vocab.note}</span>
            </div>
          )}
          {isBlank && !solved && (
            <div className="pt-1 flex gap-1">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && check()}
                placeholder="Điền từ tiếng Đức..."
                className={`flex-1 border rounded px-2 py-1 text-xs outline-none ${
                  wrong ? "border-red-400" : "border-neutral-300"
                }`}
              />
              <button
                onClick={check}
                className="px-2 py-1 rounded text-white text-xs font-semibold"
                style={{ background: color }}
              >
                Kiểm tra
              </button>
            </div>
          )}
          {wrong && <div className="text-red-500">Chưa đúng, thử lại nhé!</div>}
        </div>
      )}
    </div>
  );
}
