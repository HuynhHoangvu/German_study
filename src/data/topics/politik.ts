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
          { id: "migration", label: "die Migration", meaning: "di cư" },
          { id: "einbuergerung", label: "die ___", meaning: "nhập quốc tịch", answer: "Einbürgerung" },
          { id: "sprachbarriere", label: "die Sprachbarriere", meaning: "rào cản ngôn ngữ" },
        ],
      },
      {
        id: "gleichberechtigung",
        label: "Gleichberechtigung",
        meaning: "bình đẳng giới",
        children: [
          { id: "lohngefaelle", label: "das Lohngefälle", meaning: "chênh lệch tiền lương" },
          { id: "gleichstellung", label: "die ___ von Mann und Frau", meaning: "bình đẳng nam nữ", answer: "Gleichstellung" },
          { id: "frauenquote", label: "die Frauenquote", meaning: "hạn ngạch nữ giới" },
        ],
      },
      {
        id: "ehrenamt",
        label: "Ehrenamt",
        meaning: "hoạt động tình nguyện",
        children: [
          { id: "freiwilligenarbeit", label: "die Freiwilligenarbeit", meaning: "công việc tình nguyện" },
          { id: "gemeinnuetzig", label: "___ arbeiten", meaning: "làm việc phi lợi nhuận", answer: "gemeinnützig" },
        ],
      },
      {
        id: "demografie",
        label: "Demografischer Wandel",
        meaning: "biến đổi nhân khẩu học",
        children: [
          { id: "alternde", label: "die alternde Gesellschaft", meaning: "xã hội già hóa" },
          { id: "generationenvertrag", label: "der ___", meaning: "hợp đồng liên thế hệ (bảo hiểm xã hội)", answer: "Generationenvertrag" },
          { id: "geburtenrate", label: "die niedrige Geburtenrate", meaning: "tỷ lệ sinh thấp" },
        ],
      },
    ],
  },
};

export default topic;
