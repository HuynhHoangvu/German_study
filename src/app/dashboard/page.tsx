"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Headphones, PenLine, Mic } from "lucide-react";
import { topics, countBlanks } from "@/data/topics";
import { getTopicIcon } from "@/lib/icons";
import RandomTopicButton from "@/components/RandomTopicButton";
import SuggestionCard from "@/components/SuggestionCard";
import {
  getAllTopicsProgress,
  getOverallStats,
  getSuggestions,
  type Suggestion,
  type TopicProgressInfo,
} from "@/lib/progress";
import { skillStrategies, redemittel, fourWeekSprint, recommendedMaterials } from "@/data/examPrep";

const skillIcons = [BookOpen, Headphones, PenLine, Mic];

export default function DashboardPage() {
  const [stats, setStats] = useState({
    overallPercent: 0,
    done: 0,
    inProgress: 0,
    notStarted: topics.length,
    totalTopics: topics.length,
  });
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [allProgress, setAllProgress] = useState<TopicProgressInfo[]>([]);

  useEffect(() => {
    setStats(getOverallStats(topics, countBlanks));
    setSuggestions(getSuggestions(topics, countBlanks, 3));
    setAllProgress(getAllTopicsProgress(topics, countBlanks));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 py-10 sm:py-12">
      <section className="mb-8">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[var(--brand)] bg-[var(--brand-soft)] px-3 py-1 rounded-full mb-4">
          Bảng điều khiển ôn tập
        </span>
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
              Gợi ý học tập cho bạn
            </h1>
            <p className="mt-3 text-neutral-500 max-w-xl">
              Theo dõi tiến độ toàn bộ chủ đề và nhận gợi ý nên ôn tiếp theo — dựa trên chủ
              đề đang học dở, chưa bắt đầu, hoặc đã lâu chưa xem lại.
            </p>
          </div>
          <RandomTopicButton />
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <div className="flex items-center justify-between text-sm text-neutral-500 mb-2">
          <span>Tiến độ toàn khoá</span>
          <span className="font-semibold text-[var(--brand)]">{stats.overallPercent}%</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--brand)] transition-all"
            style={{ width: `${stats.overallPercent}%` }}
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-xl font-bold">{stats.done}</div>
            <div className="text-xs text-neutral-400">Đã hoàn thành</div>
          </div>
          <div>
            <div className="text-xl font-bold">{stats.inProgress}</div>
            <div className="text-xs text-neutral-400">Đang học dở</div>
          </div>
          <div>
            <div className="text-xl font-bold">{stats.notStarted}</div>
            <div className="text-xs text-neutral-400">Chưa bắt đầu</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Gợi ý học tiếp theo</h2>
        {suggestions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((s) => (
              <SuggestionCard key={s.slug} suggestion={s} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-neutral-400">
            Chưa có dữ liệu tiến độ. Hãy chọn một chủ đề bên dưới để bắt đầu học!
          </p>
        )}
      </section>

      <section className="mb-12">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[var(--brand)] bg-[var(--brand-soft)] px-3 py-1 rounded-full mb-3">
          Kỹ thuật ôn thi B2
        </span>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Chinh phục kỳ thi B2</h2>
        <p className="text-sm text-neutral-500 max-w-2xl mb-6">
          Chuyển từ &ldquo;giao tiếp cơ bản&rdquo; sang &ldquo;sử dụng ngôn ngữ linh hoạt và chính xác&rdquo; — chiến
          lược làm bài theo từng kỹ năng, cụm từ mẫu (Redemittel), lộ trình nước rút và tài
          liệu khuyến nghị cho Goethe-Zertifikat B2 / telc B2 / TestDaF.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {skillStrategies.map((skill, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <div
                key={skill.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5"
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Icon size={16} strokeWidth={2.25} />
                  </span>
                  <h3 className="font-semibold text-base">{skill.title}</h3>
                </div>
                <p className="text-xs text-neutral-400 mb-3">{skill.timeHint}</p>
                <ul className="space-y-1.5">
                  {skill.tips.map((tip) => (
                    <li key={tip} className="text-sm text-neutral-600 dark:text-neutral-300 flex gap-2">
                      <span className="text-[var(--brand)] shrink-0">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 mb-6">
          <h3 className="font-semibold text-base mb-3">Redemittel — cụm từ mẫu nên thuộc</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {redemittel.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brand)] mb-1.5">
                  {group.category}
                </p>
                <ul className="space-y-1">
                  {group.phrases.map((phrase) => (
                    <li key={phrase} className="text-sm text-neutral-600 dark:text-neutral-300 italic">
                      „{phrase}&rdquo;
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 mb-6">
          <h3 className="font-semibold text-base mb-1">Lộ trình nước rút 4 tuần</h3>
          <p className="text-xs text-neutral-400 mb-3">Phù hợp khi kỳ thi diễn ra trong khoảng 1 tháng tới.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fourWeekSprint.map((w) => (
              <div key={w.week} className="rounded-xl bg-[var(--brand-soft)]/40 p-3">
                <p className="text-xs font-semibold text-[var(--brand)] mb-1">{w.week}</p>
                <p className="text-sm font-medium mb-2">{w.focus}</p>
                <ul className="space-y-1.5">
                  {w.actions.map((a) => (
                    <li key={a} className="text-xs text-neutral-500 flex gap-1.5">
                      <span className="text-[var(--brand)] shrink-0">•</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
          <h3 className="font-semibold text-base mb-3">Tài liệu &amp; bộ đề khuyến nghị</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recommendedMaterials.map((m) => (
              <li key={m.title} className="text-sm">
                <span className="font-medium">{m.title}</span>
                <p className="text-xs text-neutral-400">{m.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Toàn cảnh tiến độ</h2>
          <Link href="/" className="text-sm text-[var(--brand)] hover:underline">
            Xem tất cả chủ đề →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {allProgress.map((t) => {
            const Icon = getTopicIcon(t.slug);
            return (
              <Link
                key={t.slug}
                href={`/topics/${t.slug}`}
                className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 hover:shadow-md transition-shadow"
              >
                <div
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ background: t.color }}
                >
                  <Icon size={16} strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium truncate">{t.titleVi}</div>
                  <div className="h-1 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden mt-1">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${t.percent}%`, background: t.color }}
                    />
                  </div>
                </div>
                <span className="text-[10px] text-neutral-400 shrink-0">{t.percent}%</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
