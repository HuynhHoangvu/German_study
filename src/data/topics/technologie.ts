import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "technologie",
  title: "Technologie & Medien",
  titleVi: "Công nghệ & truyền thông",
  description: "Digitalisierung, soziale Medien und ihre Auswirkungen",
  color: "#4338ca",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Technologie",
    meaning: "công nghệ",
    children: [
      {
        id: "digitalisierung",
        label: "Digitalisierung",
        meaning: "số hóa",
        children: [
          { id: "smartphone", label: "das Smartphone", meaning: "điện thoại thông minh" },
          { id: "kuenstlicheintelligenz", label: "die ___", meaning: "trí tuệ nhân tạo", answer: "künstliche Intelligenz", note: "kurz: KI" },
          { id: "homeoffice2", label: "das digitale Arbeiten", meaning: "làm việc số hóa" },
        ],
      },
      {
        id: "sozialemedien",
        label: "Soziale Medien",
        meaning: "mạng xã hội",
        children: [
          { id: "vernetzung", label: "die Vernetzung", meaning: "kết nối", synonyms: ["die Verbindung"] },
          { id: "informationsaustausch", label: "der ___", meaning: "trao đổi thông tin", answer: "Informationsaustausch" },
          { id: "sucht", label: "die Social-Media-Sucht", meaning: "nghiện mạng xã hội", note: "Sucht = chứng nghiện, dùng cho nhiều loại (Handysucht, Spielsucht...)." },
        ],
      },
      {
        id: "risiken",
        label: "Risiken",
        meaning: "rủi ro",
        children: [
          { id: "datenschutz", label: "der Datenschutz", meaning: "bảo mật dữ liệu", synonyms: ["der Datenmissbrauch (Gegenteil)"] },
          { id: "fakenews", label: "die Fake News", meaning: "tin giả", synonyms: ["die Falschmeldung"] },
          { id: "cybermobbing", label: "das ___", meaning: "bắt nạt trên mạng", answer: "Cybermobbing" },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile",
        meaning: "lợi ích",
        children: [
          { id: "zugang", label: "schneller Informationszugang", meaning: "truy cập thông tin nhanh" },
          { id: "effizienz", label: "höhere Effizienz", meaning: "hiệu suất cao hơn" },
        ],
      },
    ],
  },
};

export default topic;
