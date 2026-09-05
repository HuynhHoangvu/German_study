import type { ExamQuestion } from "@/types/exam";

export default function QuestionList({
  questions,
  answers,
  onAnswer,
  showResult,
}: {
  questions: ExamQuestion[];
  answers: Record<string, number>;
  onAnswer: (id: string, index: number) => void;
  showResult?: boolean;
}) {
  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const selected = answers[q.id];
        const isCorrect = selected === q.correctIndex;
        return (
          <div key={q.id} className="rounded-xl border border-[var(--border)] p-4">
            <p className="font-medium text-sm mb-3">
              {qi + 1}. {q.text}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const isChosen = selected === oi;
                let optionClass = "border-[var(--border)] hover:border-[var(--brand)]";
                if (showResult && isChosen) {
                  optionClass = isCorrect
                    ? "border-green-500 bg-green-500/10"
                    : "border-red-500 bg-red-500/10";
                } else if (showResult && oi === q.correctIndex) {
                  optionClass = "border-green-500 bg-green-500/10";
                } else if (isChosen) {
                  optionClass = "border-[var(--brand)] bg-[var(--brand-soft)]";
                }
                return (
                  <label
                    key={oi}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${optionClass}`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      checked={isChosen}
                      onChange={() => onAnswer(q.id, oi)}
                      disabled={showResult}
                      className="accent-[var(--brand)]"
                    />
                    {opt}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
