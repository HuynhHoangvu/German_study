import Link from "next/link";
import { getTopicIcon } from "@/lib/icons";
import type { Suggestion } from "@/lib/progress";

const REASON_LABEL: Record<Suggestion["reason"], string> = {
  continue: "Đang học dở",
  new: "Chưa bắt đầu",
  review: "Ôn lại — đã lâu chưa xem",
};

export default function SuggestionCard({ suggestion }: { suggestion: Suggestion }) {
  const Icon = getTopicIcon(suggestion.slug);

  return (
    <Link
      href={`/topics/${suggestion.slug}`}
      className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="self-start text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-[var(--brand-soft)] text-[var(--brand)] mb-3">
        {REASON_LABEL[suggestion.reason]}
      </span>

      <div className="flex items-center gap-3">
        <div
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ background: suggestion.color }}
        >
          <Icon size={20} strokeWidth={2.25} />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-base truncate">{suggestion.title}</h3>
          <p className="text-sm text-neutral-500 truncate">{suggestion.titleVi}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
          <span>Tiến độ</span>
          <span>{suggestion.percent}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${suggestion.percent}%`, background: suggestion.color }}
          />
        </div>
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)]">
        Học ngay →
      </span>
    </Link>
  );
}
