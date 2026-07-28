import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "arbeit",
  title: "Arbeit & Beruf",
  titleVi: "Công việc",
  description: "Arbeitswelt, Bewerbung und Work-Life-Balance",
  color: "#6d28d9",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Arbeit",
    meaning: "công việc",
    children: [
      {
        id: "bewerbung",
        label: "Bewerbung",
        meaning: "hồ sơ xin việc",
        children: [
          { id: "lebenslauf", label: "der Lebenslauf", meaning: "sơ yếu lý lịch", synonyms: ["der CV"] },
          { id: "anschreiben", label: "das ___", meaning: "thư xin việc", answer: "Anschreiben", synonyms: ["das Motivationsschreiben"] },
          { id: "vorstellungsgespraech", label: "das Vorstellungsgespräch", meaning: "buổi phỏng vấn", synonyms: ["das Bewerbungsgespräch"] },
          { id: "qualifikation", label: "die Qualifikation", meaning: "trình độ chuyên môn" },
        ],
      },
      {
        id: "arbeitsformen",
        label: "Arbeitsformen",
        meaning: "hình thức làm việc",
        children: [
          { id: "vollzeit", label: "die Vollzeitstelle", meaning: "công việc toàn thời gian" },
          { id: "teilzeit", label: "die Teilzeitstelle", meaning: "công việc bán thời gian" },
          { id: "homeoffice", label: "das ___", meaning: "làm việc tại nhà", answer: "Homeoffice" },
          { id: "selbststaendig", label: "selbstständig arbeiten", meaning: "làm việc tự do", synonyms: ["freiberuflich arbeiten"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme im Job",
        meaning: "vấn đề trong công việc",
        children: [
          { id: "arbeitsdruck", label: "der Arbeitsdruck", meaning: "áp lực công việc", synonyms: ["der Leistungsdruck"] },
          { id: "burnout", label: "das Burnout", meaning: "kiệt sức", note: "trạng thái kiệt sức toàn diện do làm việc quá tải kéo dài." },
          { id: "unsicherheit2", label: "die Arbeitsplatzunsicherheit", meaning: "sự bất ổn công việc", note: "Arbeitsplatz (nơi làm việc) + Unsicherheit (sự bất an)." },
        ],
      },
      {
        id: "worklife",
        label: "Work-Life-Balance",
        meaning: "cân bằng cuộc sống - công việc",
        children: [
          { id: "flexible", label: "flexible Arbeitszeiten", meaning: "giờ làm việc linh hoạt" },
          { id: "urlaub", label: "genügend ___", meaning: "đủ ngày nghỉ", answer: "Urlaub" },
          { id: "erholung", label: "die Erholung", meaning: "sự nghỉ ngơi hồi phục" },
        ],
      },
    ],
  },
};

export default topic;
