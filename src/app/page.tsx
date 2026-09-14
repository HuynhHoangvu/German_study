import { themaTopics, grammatikTopics, praepositionTopics, countNodes } from "@/data/topics";
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
          nghĩa, ghi chú và câu ví dụ kèm phát âm. Tiến độ học được lưu tự động trên trình
          duyệt của bạn.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-1">Chủ đề từ vựng</h2>
        <p className="text-sm text-neutral-500 mb-4">
          Từ vựng theo chủ đề kèm nhánh Trend-Themen (ưu điểm, nhược điểm, giải pháp, tình hình ở
          Việt Nam) cho phần Nói &amp; Viết.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {themaTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} totalNodes={countNodes(topic.root)} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-1">Sơ đồ giới từ (Präpositionen)</h2>
        <p className="text-sm text-neutral-500 mb-4">
          Mỗi giới từ một sơ đồ riêng: giới từ + đúng cách (Akkusativ / Dativ / cả hai) ở trung
          tâm, xung quanh là động từ và danh từ trình độ B2, kèm định nghĩa tiếng Đức và Beispiel
          1 / Beispiel 2.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {praepositionTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} totalNodes={countNodes(topic.root)} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-1">Ngữ pháp &amp; Redemittel</h2>
        <p className="text-sm text-neutral-500 mb-4">
          Động từ/tính từ đi với giới từ, liên từ, cấu trúc ngữ pháp B2 và mẫu câu thi — mỗi mục
          đều có định nghĩa tiếng Đức và ví dụ kèm bản dịch.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {grammatikTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} totalNodes={countNodes(topic.root)} />
          ))}
        </div>
      </section>
    </div>
  );
}
