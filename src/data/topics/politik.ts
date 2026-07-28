import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "politik",
  title: "Politik & Gesellschaft",
  titleVi: "Chính trị & Xã hội",
  description: "Integration, Gleichberechtigung, Ehrenamt und demografischer Wandel",
  color: "#334155",
  level: "B2",
  root: {
    id: "root",
    label: "Politik & Gesellschaft",
    meaning: "chính trị & xã hội",
    children: [
      {
        id: "integration",
        label: "Integration",
        meaning: "sự hòa nhập",
        children: [
          { id: "migration", label: "die Migration", meaning: "di cư", synonyms: ["die Auswanderung"] },
          { id: "einbuergerung", label: "die ___", meaning: "nhập quốc tịch", answer: "Einbürgerung", note: "ein + Bürger (công dân) + ung: trở thành công dân." },
          { id: "sprachbarriere", label: "die Sprachbarriere", meaning: "rào cản ngôn ngữ", note: "Sprache (ngôn ngữ) + Barriere (rào cản)." },
        ],
      },
      {
        id: "gleichberechtigung",
        label: "Gleichberechtigung",
        meaning: "bình đẳng giới",
        children: [
          { id: "lohngefaelle", label: "das Lohngefälle", meaning: "chênh lệch tiền lương", synonyms: ["der Gehaltsunterschied"] },
          { id: "gleichstellung", label: "die ___ von Mann und Frau", meaning: "bình đẳng nam nữ", answer: "Gleichstellung", synonyms: ["die Gleichberechtigung"] },
          { id: "frauenquote", label: "die Frauenquote", meaning: "hạn ngạch nữ giới", note: "Quote = tỷ lệ bắt buộc, ví dụ trong ban lãnh đạo doanh nghiệp." },
        ],
      },
      {
        id: "ehrenamt",
        label: "Ehrenamt",
        meaning: "hoạt động tình nguyện",
        children: [
          { id: "freiwilligenarbeit", label: "die Freiwilligenarbeit", meaning: "công việc tình nguyện", synonyms: ["ehrenamtliche Arbeit"] },
          { id: "gemeinnuetzig", label: "___ arbeiten", meaning: "làm việc phi lợi nhuận", answer: "gemeinnützig", note: "gemein (chung) + nützig (có ích): vì lợi ích cộng đồng." },
        ],
      },
      {
        id: "demografie",
        label: "Demografischer Wandel",
        meaning: "biến đổi nhân khẩu học",
        children: [
          { id: "alternde", label: "die alternde Gesellschaft", meaning: "xã hội già hóa", synonyms: ["die überalterte Gesellschaft"] },
          { id: "generationenvertrag", label: "der ___", meaning: "hợp đồng liên thế hệ (bảo hiểm xã hội)", answer: "Generationenvertrag", note: "thế hệ đi làm đóng góp nuôi thế hệ nghỉ hưu." },
          { id: "geburtenrate", label: "die niedrige Geburtenrate", meaning: "tỷ lệ sinh thấp", synonyms: ["der Geburtenrückgang"] },
        ],
      },
    ],
  },
};

export default topic;
