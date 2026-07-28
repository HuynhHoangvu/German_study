import { notFound } from "next/navigation";
import Link from "next/link";
import { getTopic, topics, countBlanks, countNodes } from "@/data/topics";
import MindMap from "@/components/MindMap";
import { getTopicIcon } from "@/lib/icons";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const blanks = countBlanks(topic.root);
  const nodeCount = countNodes(topic.root);
  const Icon = getTopicIcon(topic.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-5 py-6 sm:py-8">
      <Link href="/" className="text-sm text-neutral-400 hover:text-[var(--brand)]">
        ← Tất cả chủ đề
      </Link>

      <div className="mt-3 flex items-start justify-between flex-wrap gap-3">
        <div className="flex items-start gap-3">
          <div
            className="hidden sm:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
            style={{ background: topic.color }}
          >
            <Icon size={22} strokeWidth={2.25} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-3xl font-bold" style={{ color: topic.color }}>
                {topic.title}
              </h1>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                {topic.level}
              </span>
            </div>
            <p className="text-neutral-500 mt-1 text-sm sm:text-base">
              {topic.titleVi} · {topic.description}
            </p>
          </div>
        </div>
        <div className="text-xs text-neutral-400 text-right">
          <div>{nodeCount} nút từ vựng</div>
          <div>{blanks} bài điền từ</div>
        </div>
      </div>

      <p className="mt-4 text-xs text-neutral-400">
        💡 Chạm/nhấp vào một nhánh để xem nghĩa, từ đồng nghĩa, ghi chú ở khung bên dưới — hoặc
        điền từ còn thiếu nếu có ô trống.
      </p>

      <div className="mt-4">
        <MindMap topic={topic} />
      </div>
    </div>
  );
}
