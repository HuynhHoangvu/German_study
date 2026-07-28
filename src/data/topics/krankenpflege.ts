import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "krankenpflege",
  title: "Krankenpflege & Klinik",
  titleVi: "Chăm sóc y tế & Bệnh viện",
  description: "Fachsprache Pflege: Stationen, Schichten, Geräte und Dokumentation",
  color: "#0369a1",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Krankenpflege",
    meaning: "điều dưỡng",
    children: [
      {
        id: "stationen",
        label: "Stationen im Krankenhaus",
        meaning: "các khoa trong bệnh viện",
        children: [
          { id: "station", label: "die Station", meaning: "khoa/phòng bệnh" },
          { id: "intensivstation", label: "die ___", meaning: "khoa hồi sức tích cực", answer: "Intensivstation", note: "kurz: ICU" },
          { id: "notaufnahme", label: "die Notaufnahme", meaning: "khoa cấp cứu", note: "Not (khẩn cấp) + Aufnahme (tiếp nhận)." },
          { id: "pflegeheim", label: "das Pflegeheim", meaning: "viện dưỡng lão", synonyms: ["das Altersheim"] },
        ],
      },
      {
        id: "schichten",
        label: "Schichten",
        meaning: "ca trực",
        children: [
          { id: "fruehschicht", label: "die Frühschicht", meaning: "ca sáng" },
          { id: "spaetschicht", label: "die ___", meaning: "ca chiều", answer: "Spätschicht" },
          { id: "nachtschicht", label: "die Nachtschicht", meaning: "ca đêm" },
          { id: "uebergabe", label: "die Übergabe", meaning: "buổi bàn giao ca trực", note: "über + geben: chuyển giao thông tin bệnh nhân cho ca sau." },
        ],
      },
      {
        id: "geraete",
        label: "Pflegeartikel & Geräte",
        meaning: "dụng cụ & thiết bị y tế",
        children: [
          { id: "spritze", label: "die Spritze", meaning: "mũi tiêm", synonyms: ["die Injektion"] },
          { id: "infusion", label: "die ___", meaning: "dây truyền dịch", answer: "Infusion" },
          { id: "verband", label: "der Verband wechseln", meaning: "thay băng gạc" },
          { id: "rollstuhl", label: "der Rollstuhl", meaning: "xe lăn" },
          { id: "gehhilfe", label: "die Gehhilfe", meaning: "dụng cụ tập đi" },
        ],
      },
      {
        id: "dokumentation",
        label: "Übergabe & Dokumentation",
        meaning: "bàn giao & hồ sơ",
        children: [
          { id: "pflegedokumentation", label: "die Pflegedokumentation", meaning: "hồ sơ theo dõi chăm sóc" },
          { id: "zustand", label: "der ___ hat sich verschlechtert", meaning: "tình trạng xấu đi", answer: "Zustand" },
          { id: "pflegebeduerftig", label: "pflegebedürftig sein", meaning: "cần được chăm sóc", note: "Pflege (chăm sóc) + bedürftig (cần đến)." },
          { id: "visite", label: "die Visite", meaning: "buổi thăm khám cùng bác sĩ" },
        ],
      },
    ],
  },
};

export default topic;
