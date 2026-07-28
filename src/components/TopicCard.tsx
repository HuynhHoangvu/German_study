"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Topic } from "@/types/topic";
import { getTopicProgress } from "@/lib/progress";
import { getTopicIcon } from "@/lib/icons";

export default function TopicCard({ topic, totalBlanks }: { topic: Topic; totalBlanks: number }) {
  const [progress, setProgress] = useState(0);
  const Icon = getTopicIcon(topic.slug);

  useEffect(() => {
    setProgress(getTopicProgress(topic.slug, totalBlanks));
  }, [topic.slug, totalBlanks]);

  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
        style={{ background: topic.color }}
      >
        <Icon size={20} strokeWidth={2.25} />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-base">{topic.title}</h3>
        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
          {topic.level}
        </span>
      </div>
      <p className="text-sm text-neutral-500 mt-0.5">{topic.titleVi}</p>
      <p className="text-xs text-neutral-400 mt-2 line-clamp-2">{topic.description}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
          <span>Tiến độ</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${progress}%`, background: topic.color }}
          />
        </div>
      </div>
    </Link>
  );
}
