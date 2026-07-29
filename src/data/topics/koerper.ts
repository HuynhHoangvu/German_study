import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "koerper",
  title: "Menschlicher Körper & Anatomie",
  titleVi: "Cơ thể người & Giải phẫu cơ bản",
  description: "Körperteile, innere Organe und das Skelett",
  color: "#be123c",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Der Körper",
    meaning: "cơ thể",
    children: [
      {
        id: "organe",
        label: "Innere Organe",
        meaning: "cơ quan nội tạng",
        children: [
          { id: "herz", label: "das Herz", meaning: "tim" },
          { id: "lunge", label: "die ___", meaning: "phổi", answer: "Lunge" },
          { id: "magen", label: "der Magen", meaning: "dạ dày" },
          { id: "niere", label: "die Niere", meaning: "thận" },
          { id: "leber", label: "die Leber", meaning: "gan" },
        ],
      },
      {
        id: "skelett",
        label: "Skelett & Gelenke",
        meaning: "xương & khớp",
        children: [
          { id: "knochen", label: "der Knochen", meaning: "xương" },
          { id: "wirbelsaeule", label: "die ___", meaning: "cột sống", answer: "Wirbelsäule", note: "Wirbel (đốt sống) + Säule (cột)." },
          { id: "gelenk", label: "das Gelenk", meaning: "khớp" },
          { id: "muskel", label: "der Muskel", meaning: "cơ bắp", synonyms: ["die Muskulatur"] },
        ],
      },
      {
        id: "aeussere-koerperteile",
        label: "Äußere Körperteile",
        meaning: "bộ phận cơ thể bên ngoài",
        children: [
          { id: "kopf", label: "der Kopf", meaning: "đầu" },
          { id: "brustkorb", label: "der ___", meaning: "lồng ngực", answer: "Brustkorb", note: "Brust (ngực) + Korb (cái giỏ/lồng)." },
          { id: "gliedmassen", label: "die Gliedmaßen", meaning: "tứ chi", synonyms: ["die Extremitäten"] },
        ],
      },
      {
        id: "sinne",
        label: "Sinne & Nervensystem",
        meaning: "giác quan & hệ thần kinh",
        children: [
          { id: "nervensystem", label: "das Nervensystem", meaning: "hệ thần kinh" },
          { id: "gehirn", label: "das Gehirn", meaning: "não bộ", synonyms: ["das Hirn"] },
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
              { id: "wa-haut", label: "die Haut", meaning: "da" },
              { id: "wa-blut", label: "das Blut", meaning: "máu" },
              { id: "wa-nerv", label: "der Nerv", meaning: "dây thần kinh" },
              { id: "wa-verletzung", label: "die Verletzung", meaning: "chấn thương" },
              { id: "wa-funktion", label: "die Funktion", meaning: "chức năng" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-wichtige-rolle-spielen", label: "eine wichtige Rolle spielen", meaning: "đóng vai trò quan trọng" },
              { id: "wa-den-koerper-versorgen", label: "den Körper mit Nährstoffen versorgen", meaning: "cung cấp dưỡng chất cho cơ thể" },
              { id: "wa-schmerzen-verursachen", label: "Schmerzen verursachen", meaning: "gây ra đau đớn" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-funktionieren", label: "funktionieren", meaning: "hoạt động (chức năng)" },
              { id: "wa-schmerzen", label: "wehtun", meaning: "gây đau", note: "trennbar, unregelmäßig: tut weh, tat weh, hat wehgetan" },
              { id: "wa-atmen", label: "atmen", meaning: "thở" },
              { id: "wa-bestehen-aus", label: "bestehen aus + Dat.", meaning: "bao gồm/cấu tạo từ", note: "unregelmäßig: besteht, bestand, hat bestanden" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-verantwortlich-koerper", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm cho (chức năng gì)" },
              { id: "wa-empfindlich", label: "empfindlich gegen + Akk.", meaning: "nhạy cảm với" },
              { id: "wa-verbunden", label: "verbunden mit + Dat.", meaning: "kết nối với" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
