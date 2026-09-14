"use client";

import { VocabNode } from "@/types/topic";
import { speakGerman } from "@/lib/speech";

export default function NodeDetailPanel({
  vocab,
  color,
  onClose,
}: {
  vocab: VocabNode | null;
  color: string;
  onClose?: () => void;
}) {
  if (!vocab) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--border)] px-5 py-8 text-center text-sm text-neutral-400">
        Chạm hoặc bấm vào một nhánh trong sơ đồ để xem nghĩa, từ đồng nghĩa và ghi chú tại đây.
      </div>
    );
  }

  const spokenText = vocab.label;

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
          {spokenText}
        </h3>
        <button
          onClick={() => speakGerman(spokenText)}
          aria-label="Nghe phát âm"
          title="Nghe phát âm"
          className="h-7 w-7 flex items-center justify-center rounded-full shrink-0 text-white text-sm"
          style={{ background: color }}
        >
          🔊
        </button>
      </div>

      {vocab.meaning && (
        <p className="text-sm text-neutral-500 mt-1">
          <span className="font-semibold text-neutral-400">Nghĩa: </span>
          {vocab.meaning}
        </p>
      )}

      {vocab.definition && (
        <p className="text-sm text-neutral-500 mt-1">
          <span className="font-semibold text-neutral-400">Bedeutung: </span>
          <span className="italic">{vocab.definition}</span>
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

      {vocab.examples && vocab.examples.length > 0 && (
        <div className="mt-3 space-y-2">
          {vocab.examples.map((example, i) => (
            <div
              key={i}
              className="rounded-lg px-3 py-2 bg-[var(--brand-soft)] border border-[var(--border)]"
            >
              <div className="flex items-start gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wide shrink-0 mt-0.5" style={{ color }}>
                  Beispiel {i + 1}
                </span>
                <button
                  onClick={() => speakGerman(example.de)}
                  aria-label="Nghe câu ví dụ"
                  title="Nghe câu ví dụ"
                  className="ml-auto shrink-0 text-xs opacity-60 hover:opacity-100"
                >
                  🔊
                </button>
              </div>
              <p className="text-sm font-medium mt-0.5" style={{ color: "var(--foreground)" }}>
                {example.de}
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">{example.vi}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
