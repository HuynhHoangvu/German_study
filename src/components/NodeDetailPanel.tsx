"use client";

import { useEffect, useState } from "react";
import { VocabNode } from "@/types/topic";
import { markBlankSolved } from "@/lib/progress";
import { speakGerman } from "@/lib/speech";

export default function NodeDetailPanel({
  vocab,
  color,
  topicSlug,
  solved,
  onSolved,
  onClose,
}: {
  vocab: VocabNode | null;
  color: string;
  topicSlug: string;
  solved: boolean;
  onSolved: (id: string) => void;
  onClose?: () => void;
}) {
  const [input, setInput] = useState("");
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    setInput("");
    setWrong(false);
  }, [vocab?.id]);

  if (!vocab) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--border)] px-5 py-8 text-center text-sm text-neutral-400">
        Chạm hoặc bấm vào một nhánh trong sơ đồ để xem nghĩa, từ đồng nghĩa và ghi chú tại đây.
      </div>
    );
  }

  const isBlank = Boolean(vocab.answer);
  const spokenText = vocab.label.replace("___", vocab.answer ?? "");

  function check() {
    if (!vocab || !vocab.answer) return;
    const ok = input.trim().toLowerCase() === vocab.answer.trim().toLowerCase();
    if (ok) {
      setWrong(false);
      markBlankSolved(topicSlug, vocab.id);
      onSolved(vocab.id);
    } else {
      setWrong(true);
    }
  }

  return (
    <div
      className="relative rounded-2xl border px-5 py-4 bg-[var(--surface)] transition-all"
      style={{ borderColor: color }}
    >
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-3 right-3 h-7 w-7 flex items-center justify-center rounded-full text-neutral-400 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] hover:text-neutral-600"
        >
          ✕
        </button>
      )}
      <div className="flex items-center gap-2 flex-wrap pr-8">
        <h3 className="text-lg font-bold" style={{ color }}>
          {isBlank && !solved ? vocab.label.replace("___", "____") : spokenText}
        </h3>
        {(!isBlank || solved) && (
          <button
            onClick={() => speakGerman(spokenText)}
            aria-label="Nghe phát âm"
            title="Nghe phát âm"
            className="h-7 w-7 flex items-center justify-center rounded-full shrink-0 text-white text-sm"
            style={{ background: color }}
          >
            🔊
          </button>
        )}
        {isBlank && solved && <span className="text-green-600 text-sm font-semibold">✓ Đã hoàn thành</span>}
      </div>

      {vocab.meaning && (
        <p className="text-sm text-neutral-500 mt-1">
          <span className="font-semibold text-neutral-400">Nghĩa: </span>
          {vocab.meaning}
        </p>
      )}

      {vocab.synonyms && vocab.synonyms.length > 0 && (
        <p className="text-sm text-neutral-500 mt-1">
          <span className="font-semibold text-neutral-400">Từ đồng nghĩa: </span>
          {vocab.synonyms.join(", ")}
        </p>
      )}

      {vocab.note && (
        <p className="text-sm text-neutral-500 mt-1">
          <span className="font-semibold text-neutral-400">Ghi chú: </span>
          {vocab.note}
        </p>
      )}

      {isBlank && !solved && (
        <div className="mt-3 flex gap-2 max-w-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && check()}
            placeholder="Điền từ tiếng Đức còn thiếu..."
            className={`flex-1 border rounded-lg px-3 py-2 text-sm outline-none bg-transparent ${
              wrong ? "border-red-400" : "border-[var(--border)]"
            }`}
          />
          <button
            onClick={check}
            className="px-4 py-2 rounded-lg text-white text-sm font-semibold shrink-0"
            style={{ background: color }}
          >
            Kiểm tra
          </button>
        </div>
      )}
      {wrong && <p className="text-red-500 text-xs mt-1">Chưa đúng, thử lại nhé!</p>}
    </div>
  );
}
