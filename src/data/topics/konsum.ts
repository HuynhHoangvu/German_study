import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "konsum",
  title: "Konsum & Geld",
  titleVi: "Tiêu dùng & Tiền bạc",
  description: "Einkaufsgewohnheiten, Online-Shopping, Sparen und Konsumgesellschaft",
  color: "#16a34a",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Konsum & Geld",
    meaning: "tiêu dùng & tiền bạc",
    children: [
      {
        id: "einkaufen",
        label: "Einkaufsgewohnheiten",
        meaning: "thói quen mua sắm",
        children: [
          { id: "onlineshopping", label: "das Online-Shopping", meaning: "mua sắm trực tuyến" },
          { id: "werbung", label: "die ___", meaning: "quảng cáo", answer: "Werbung" },
          { id: "impulskauf", label: "der Impulskauf", meaning: "mua sắm bốc đồng" },
        ],
      },
      {
        id: "finanzen",
        label: "Finanzen",
        meaning: "tài chính",
        children: [
          { id: "sparen", label: "das Sparen", meaning: "tiết kiệm", synonyms: ["das Rücklagen bilden"] },
          { id: "schulden", label: "die ___", meaning: "nợ nần", answer: "Schulden" },
          { id: "kredit", label: "der Kredit", meaning: "khoản vay" },
          { id: "budget", label: "das Budget planen", meaning: "lập ngân sách" },
        ],
      },
      {
        id: "konsumgesellschaft",
        label: "Konsumgesellschaft",
        meaning: "xã hội tiêu dùng",
        children: [
          { id: "ueberkonsum", label: "der Überkonsum", meaning: "tiêu dùng quá mức" },
          { id: "nachhaltiger", label: "___ konsumieren", meaning: "tiêu dùng bền vững", answer: "nachhaltig" },
          { id: "wegwerfgesellschaft", label: "die Wegwerfgesellschaft", meaning: "xã hội tiêu xài rồi vứt bỏ" },
        ],
      },
      {
        id: "verbraucherschutz",
        label: "Verbraucherschutz",
        meaning: "bảo vệ người tiêu dùng",
        children: [
          { id: "garantie", label: "die Garantie", meaning: "bảo hành" },
          { id: "widerrufsrecht", label: "das Widerrufsrecht", meaning: "quyền hủy đơn hàng" },
        ],
      },
    ],
  },
};

export default topic;
