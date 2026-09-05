import { MockExam } from "@/types/exam";
import umwelt from "./umwelt";
import arbeit from "./arbeit";

export const mockExams: MockExam[] = [umwelt, arbeit];

export function getMockExam(id: string): MockExam | undefined {
  return mockExams.find((e) => e.id === id);
}
