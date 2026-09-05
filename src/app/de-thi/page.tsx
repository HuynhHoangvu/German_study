"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mockExams } from "@/data/mockExams";
import { getAllExamResults } from "@/lib/examProgress";
import type { ExamResult } from "@/types/exam";

export default function ExamListPage() {
  const [results, setResults] = useState<{ [examId: string]: ExamResult }>({});

  useEffect(() => {
    setResults(getAllExamResults());
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-5 py-10 sm:py-12">
      <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[var(--brand)] bg-[var(--brand-soft)] px-3 py-1 rounded-full mb-4">
        Đề thi thử B2
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
        Luyện đề thi thử đầy đủ 4 kỹ năng
      </h1>
      <p className="mt-3 text-neutral-500 max-w-2xl">
        Mỗi đề gồm Lesen (đọc), Hören (nghe — đọc bằng giọng máy tiếng Đức), Schreiben (viết)
        và Sprechen (nói) bám sát format B2. Lesen/Hören chấm điểm tự động; Schreiben/Sprechen
        tự đánh giá theo checklist tiêu chí vì cần người chấm mới đánh giá chính xác ngữ pháp
        và phát âm.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockExams.map((exam) => {
          const result = results[exam.id];
          return (
            <Link
              key={exam.id}
              href={`/de-thi/${exam.id}`}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-[var(--brand-soft)] text-[var(--brand)] self-start mb-3">
                {exam.topic}
              </span>
              <h3 className="font-semibold text-lg">{exam.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Lesen · Hören · Schreiben · Sprechen
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--brand)]">
                  {result ? "Làm lại đề →" : "Bắt đầu làm đề →"}
                </span>
                {result && (
                  <span className="text-xs font-semibold text-neutral-500">
                    Điểm cao nhất: {result.overallPercent}%
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
