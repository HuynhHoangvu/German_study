"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Volume2, Mic, Square, CheckCircle2 } from "lucide-react";
import { getMockExam } from "@/data/mockExams";
import { saveExamResult } from "@/lib/examProgress";
import QuestionList from "@/components/exam/QuestionList";
import ChecklistScorer from "@/components/exam/ChecklistScorer";

type Step = "lesen" | "hoeren" | "schreiben" | "sprechen" | "result";
const STEPS: Step[] = ["lesen", "hoeren", "schreiben", "sprechen", "result"];
const STEP_LABELS: Record<Step, string> = {
  lesen: "Lesen",
  hoeren: "Hören",
  schreiben: "Schreiben",
  sprechen: "Sprechen",
  result: "Kết quả",
};

function speakGerman(lines: string[], onDone: () => void) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onDone();
    return;
  }
  window.speechSynthesis.cancel();
  let i = 0;
  function next() {
    if (i >= lines.length) {
      onDone();
      return;
    }
    const text = lines[i].replace(/^[^:]+:\s*/, "");
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "de-DE";
    utter.rate = 0.95;
    utter.onend = () => {
      i += 1;
      next();
    };
    window.speechSynthesis.speak(utter);
  }
  next();
}

export default function ExamRunnerPage() {
  const params = useParams<{ examId: string }>();
  const exam = getMockExam(params.examId);

  const [step, setStep] = useState<Step>("lesen");
  const [lesenAnswers, setLesenAnswers] = useState<Record<string, number>>({});
  const [hoerenAnswers, setHoerenAnswers] = useState<Record<string, number>>({});
  const [schreibenText, setSchreibenText] = useState("");
  const [schreibenChecked, setSchreibenChecked] = useState<boolean[]>([]);
  const [sprechenChecked, setSprechenChecked] = useState<boolean[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const wordCount = useMemo(
    () => schreibenText.trim().split(/\s+/).filter(Boolean).length,
    [schreibenText]
  );

  if (!exam) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-neutral-500">Không tìm thấy đề thi này.</p>
        <Link href="/de-thi" className="text-[var(--brand)] hover:underline text-sm mt-2 inline-block">
          ← Quay lại danh sách đề
        </Link>
      </div>
    );
  }

  const stepIndex = STEPS.indexOf(step);

  function goNext() {
    const idx = STEPS.indexOf(step);
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1]);
  }

  function toggleChecklist(list: boolean[], setList: (v: boolean[]) => void, i: number) {
    const next = [...list];
    next[i] = !next[i];
    setList(next);
  }

  function playHoeren() {
    if (!exam) return;
    setIsSpeaking(true);
    speakGerman(exam.hoeren.script, () => setIsSpeaking(false));
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setRecordingUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };
      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    } catch {
      alert("Không thể truy cập micro. Bạn có thể tự luyện nói mà không ghi âm.");
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  }

  function finishExam() {
    if (!exam) return;
    const lesenTotal = exam.lesen.questions.length;
    const lesenScore = exam.lesen.questions.filter((q) => lesenAnswers[q.id] === q.correctIndex).length;
    const hoerenTotal = exam.hoeren.questions.length;
    const hoerenScore = exam.hoeren.questions.filter((q) => hoerenAnswers[q.id] === q.correctIndex).length;
    const schreibenScore = Math.round(
      (schreibenChecked.filter(Boolean).length / exam.schreiben.checklist.length) * 100
    );
    const sprechenScore = Math.round(
      (sprechenChecked.filter(Boolean).length / exam.sprechen.checklist.length) * 100
    );
    const overallPercent = Math.round(
      ((lesenScore / lesenTotal) * 100 +
        (hoerenScore / hoerenTotal) * 100 +
        schreibenScore +
        sprechenScore) /
        4
    );

    saveExamResult({
      examId: exam.id,
      lesenScore,
      lesenTotal,
      hoerenScore,
      hoerenTotal,
      schreibenScore,
      sprechenScore,
      overallPercent,
      completedAt: Date.now(),
    });

    setStep("result");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-5 py-8 sm:py-10">
      <Link href="/de-thi" className="text-sm text-neutral-400 hover:text-[var(--brand)]">
        ← Tất cả đề thi
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">{exam.title}</h1>

      <div className="flex items-center gap-1.5 mt-5 mb-8 flex-wrap">
        {STEPS.map((s, i) => (
          <div
            key={s}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
              i === stepIndex
                ? "bg-[var(--brand)] text-white"
                : i < stepIndex
                ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400"
            }`}
          >
            {STEP_LABELS[s]}
          </div>
        ))}
      </div>

      {step === "lesen" && (
        <section>
          <h2 className="text-lg font-semibold mb-2">{exam.lesen.title}</h2>
          <div className="rounded-xl bg-[var(--brand-soft)]/40 p-4 text-sm leading-relaxed whitespace-pre-line mb-6">
            {exam.lesen.passage}
          </div>
          <QuestionList
            questions={exam.lesen.questions}
            answers={lesenAnswers}
            onAnswer={(id, i) => setLesenAnswers((prev) => ({ ...prev, [id]: i }))}
          />
          <button
            onClick={goNext}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Tiếp tục → Hören
          </button>
        </section>
      )}

      {step === "hoeren" && (
        <section>
          <h2 className="text-lg font-semibold mb-1">{exam.hoeren.title}</h2>
          <p className="text-sm text-neutral-500 mb-4">{exam.hoeren.intro}</p>
          <button
            onClick={playHoeren}
            disabled={isSpeaking}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity disabled:opacity-60 mb-6"
          >
            <Volume2 size={16} />
            {isSpeaking ? "Đang đọc..." : "Nghe đoạn hội thoại"}
          </button>
          <p className="text-xs text-neutral-400 mb-6">
            Giọng đọc dùng công nghệ tổng hợp giọng nói của trình duyệt (Web Speech API) —
            có thể nghe lại nhiều lần. Nếu trình duyệt không hỗ trợ giọng tiếng Đức, hãy đọc
            script bên dưới.
          </p>
          <QuestionList
            questions={exam.hoeren.questions}
            answers={hoerenAnswers}
            onAnswer={(id, i) => setHoerenAnswers((prev) => ({ ...prev, [id]: i }))}
          />
          <button
            onClick={goNext}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Tiếp tục → Schreiben
          </button>
        </section>
      )}

      {step === "schreiben" && (
        <section>
          <h2 className="text-lg font-semibold mb-2">{exam.schreiben.title}</h2>
          <div className="rounded-xl bg-[var(--brand-soft)]/40 p-4 text-sm leading-relaxed whitespace-pre-line mb-4">
            {exam.schreiben.prompt}
          </div>
          <textarea
            value={schreibenText}
            onChange={(e) => setSchreibenText(e.target.value)}
            placeholder="Viết bài của bạn ở đây..."
            rows={10}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
          <p
            className={`text-xs mb-6 ${
              wordCount >= exam.schreiben.minWords ? "text-green-600" : "text-neutral-400"
            }`}
          >
            {wordCount} / {exam.schreiben.minWords} từ tối thiểu
          </p>

          <h3 className="font-semibold text-sm mb-2">Tự chấm theo checklist</h3>
          <p className="text-xs text-neutral-400 mb-3">
            Đọc lại bài viết của bạn và tự đánh giá — đây không phải chấm ngữ pháp chính xác
            100%, nhưng giúp bạn tự kiểm tra đủ ý và cấu trúc bài.
          </p>
          <ChecklistScorer
            items={exam.schreiben.checklist}
            checked={schreibenChecked}
            onToggle={(i) => toggleChecklist(schreibenChecked, setSchreibenChecked, i)}
          />
          <button
            onClick={goNext}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Tiếp tục → Sprechen
          </button>
        </section>
      )}

      {step === "sprechen" && (
        <section>
          <h2 className="text-lg font-semibold mb-2">{exam.sprechen.title}</h2>
          <div className="rounded-xl bg-[var(--brand-soft)]/40 p-4 text-sm leading-relaxed whitespace-pre-line mb-4">
            {exam.sprechen.prompt}
          </div>
          <p className="text-xs text-neutral-400 mb-4">
            Gợi ý: chuẩn bị ý trong {Math.round(exam.sprechen.prepSeconds / 60)} phút, sau đó
            nói liên tục khoảng {Math.round(exam.sprechen.talkSeconds / 60)} phút. Ghi âm lại để
            tự nghe và đánh giá phát âm/độ trôi chảy (không bắt buộc).
          </p>

          <div className="flex items-center gap-3 mb-6">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
              >
                <Mic size={16} /> Bắt đầu ghi âm
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="inline-flex items-center gap-2 rounded-full bg-red-500 text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
              >
                <Square size={16} /> Dừng ghi âm
              </button>
            )}
            {recordingUrl && <audio src={recordingUrl} controls className="h-9" />}
          </div>

          <h3 className="font-semibold text-sm mb-2">Tự chấm theo checklist</h3>
          <ChecklistScorer
            items={exam.sprechen.checklist}
            checked={sprechenChecked}
            onToggle={(i) => toggleChecklist(sprechenChecked, setSprechenChecked, i)}
          />
          <button
            onClick={finishExam}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Nộp bài & Xem kết quả
          </button>
        </section>
      )}

      {step === "result" && (
        <ResultView
          exam={exam}
          lesenAnswers={lesenAnswers}
          hoerenAnswers={hoerenAnswers}
          schreibenChecked={schreibenChecked}
          sprechenChecked={sprechenChecked}
          onRetry={() => window.location.reload()}
        />
      )}
    </div>
  );
}

function ResultView({
  exam,
  lesenAnswers,
  hoerenAnswers,
  schreibenChecked,
  sprechenChecked,
  onRetry,
}: {
  exam: NonNullable<ReturnType<typeof getMockExam>>;
  lesenAnswers: Record<string, number>;
  hoerenAnswers: Record<string, number>;
  schreibenChecked: boolean[];
  sprechenChecked: boolean[];
  onRetry: () => void;
}) {
  const lesenTotal = exam.lesen.questions.length;
  const lesenScore = exam.lesen.questions.filter((q) => lesenAnswers[q.id] === q.correctIndex).length;
  const hoerenTotal = exam.hoeren.questions.length;
  const hoerenScore = exam.hoeren.questions.filter((q) => hoerenAnswers[q.id] === q.correctIndex).length;
  const schreibenScore = Math.round(
    (schreibenChecked.filter(Boolean).length / exam.schreiben.checklist.length) * 100
  );
  const sprechenScore = Math.round(
    (sprechenChecked.filter(Boolean).length / exam.sprechen.checklist.length) * 100
  );
  const overallPercent = Math.round(
    ((lesenScore / lesenTotal) * 100 + (hoerenScore / hoerenTotal) * 100 + schreibenScore + sprechenScore) / 4
  );

  return (
    <section>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center mb-8">
        <CheckCircle2 className="mx-auto text-[var(--brand)] mb-2" size={32} />
        <p className="text-sm text-neutral-500">Điểm tổng kết</p>
        <p className="text-4xl font-bold text-[var(--brand)]">{overallPercent}%</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <ScoreTile label="Lesen" value={`${lesenScore}/${lesenTotal}`} />
        <ScoreTile label="Hören" value={`${hoerenScore}/${hoerenTotal}`} />
        <ScoreTile label="Schreiben" value={`${schreibenScore}%`} />
        <ScoreTile label="Sprechen" value={`${sprechenScore}%`} />
      </div>

      <h3 className="font-semibold text-sm mb-2">Đáp án Lesen</h3>
      <QuestionList questions={exam.lesen.questions} answers={lesenAnswers} onAnswer={() => {}} showResult />

      <h3 className="font-semibold text-sm mt-6 mb-2">Đáp án Hören</h3>
      <QuestionList questions={exam.hoeren.questions} answers={hoerenAnswers} onAnswer={() => {}} showResult />

      <div className="flex gap-3 mt-8">
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Làm lại đề này
        </button>
        <Link
          href="/de-thi"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] text-sm font-medium px-4 py-2 hover:border-[var(--brand)] transition-colors"
        >
          Chọn đề khác
        </Link>
      </div>
    </section>
  );
}

function ScoreTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] p-4 text-center">
      <p className="text-xs text-neutral-400">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
