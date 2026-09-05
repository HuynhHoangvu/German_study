"use client";

import { useEffect } from "react";
import { markTopicVisited } from "@/lib/progress";

export default function VisitTracker({ topicSlug }: { topicSlug: string }) {
  useEffect(() => {
    markTopicVisited(topicSlug);
  }, [topicSlug]);

  return null;
}
