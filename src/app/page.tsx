import { topics, countBlanks } from "@/data/topics";
import TopicCard from "@/components/TopicCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <section className="mb-10">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[var(--brand)] bg-[var(--brand-soft)] px-3 py-1 rounded-full mb-4">
          Ôn luyện tiếng Đức B2
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
          Học từ vựng tiếng Đức qua sơ đồ tư duy
        </h1>
        <p className="mt-3 text-neutral-500 max-w-xl">
          Mỗi chủ đề là một mindmap tương tác: nhấp vào từng nhánh để xem nghĩa, từ đồng
          nghĩa, ghi chú, và hoàn thành các ô điền từ để ghi nhớ lâu hơn. Tiến độ được lưu
          tự động trên trình duyệt của bạn.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} totalBlanks={countBlanks(topic.root)} />
        ))}
      </section>
    </div>
  );
}
