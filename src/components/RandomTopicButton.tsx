"use client";

import { useRouter, usePathname } from "next/navigation";
import { Shuffle } from "lucide-react";
import { topics } from "@/data/topics";
import { getNextRandomTopicSlug } from "@/lib/shuffle";

export default function RandomTopicButton() {
  const router = useRouter();
  const pathname = usePathname();

  function goRandom() {
    const currentSlug = pathname?.startsWith("/topics/") ? pathname.split("/").pop() : undefined;
    const slugs = topics.map((t) => t.slug);
    const next = getNextRandomTopicSlug(slugs, currentSlug);
    router.push(`/topics/${next}`);
  }

  return (
    <button
      onClick={goRandom}
      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] text-white text-sm font-medium px-3.5 py-1.5 hover:opacity-90 transition-opacity"
    >
      <Shuffle size={15} strokeWidth={2.25} />
      Học ngẫu nhiên
    </button>
  );
}
