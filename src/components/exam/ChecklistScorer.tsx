export default function ChecklistScorer({
  items,
  checked,
  onToggle,
}: {
  items: string[];
  checked: boolean[];
  onToggle: (index: number) => void;
}) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <label
          key={item}
          className="flex items-start gap-2.5 rounded-lg border border-[var(--border)] px-3 py-2.5 text-sm cursor-pointer hover:border-[var(--brand)] transition-colors"
        >
          <input
            type="checkbox"
            checked={checked[i] ?? false}
            onChange={() => onToggle(i)}
            className="mt-0.5 accent-[var(--brand)]"
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}
