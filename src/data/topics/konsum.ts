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
          { id: "werbung", label: "die ___", meaning: "quảng cáo", answer: "Werbung", synonyms: ["die Reklame"] },
          { id: "impulskauf", label: "der Impulskauf", meaning: "mua sắm bốc đồng", note: "Impuls (bốc đồng) + Kauf (việc mua): mua không suy nghĩ trước." },
        ],
      },
      {
        id: "finanzen",
        label: "Finanzen",
        meaning: "tài chính",
        children: [
          { id: "sparen", label: "das Sparen", meaning: "tiết kiệm", synonyms: ["das Rücklagen bilden"] },
          { id: "schulden", label: "die ___", meaning: "nợ nần", answer: "Schulden" },
          { id: "kredit", label: "der Kredit", meaning: "khoản vay", synonyms: ["das Darlehen"] },
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
      {
        id: "wortarten",
        label: "Wortschatz nach Wortart",
        meaning: "từ vựng theo loại từ",
        children: [
          {
            id: "wortarten-nomen",
            label: "Nomen",
            meaning: "danh từ",
            children: [
              { id: "wa-preis", label: "der Preis", meaning: "giá cả" },
              { id: "wa-rabatt", label: "der Rabatt", meaning: "giảm giá" },
              { id: "wa-rechnung", label: "die Rechnung", meaning: "hóa đơn" },
              { id: "wa-verbraucher", label: "der Verbraucher", meaning: "người tiêu dùng" },
              { id: "wa-ausgaben", label: "die Ausgaben", meaning: "chi tiêu" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-geld-ausgeben", label: "Geld für etwas ausgeben", meaning: "chi tiền cho việc gì" },
              { id: "wa-preise-vergleichen", label: "Preise vergleichen", meaning: "so sánh giá" },
              { id: "wa-ein-schnaeppchen-machen", label: "ein Schnäppchen machen", meaning: "mua được món hời" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-ausgeben", label: "ausgeben", meaning: "chi tiêu", note: "trennbar, unregelmäßig: gibt aus, gab aus, hat ausgegeben" },
              { id: "wa-sparen", label: "sparen", meaning: "tiết kiệm" },
              { id: "wa-sich-leisten", label: "sich leisten + Akk.", meaning: "đủ khả năng mua" },
              { id: "wa-zurueckgeben", label: "zurückgeben", meaning: "trả lại (hàng)", note: "trennbar, unregelmäßig: gibt zurück, gab zurück, hat zurückgegeben" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-zufrieden-konsum", label: "zufrieden mit + Dat.", meaning: "hài lòng với (sản phẩm)" },
              { id: "wa-abhaengig-konsum", label: "abhängig von + Dat.", meaning: "phụ thuộc vào" },
              { id: "wa-verantwortlich-konsum", label: "verantwortlich für + Akk.", meaning: "có trách nhiệm về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
