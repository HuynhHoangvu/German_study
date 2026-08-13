import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "koerper",
  title: "Menschlicher Körper & Anatomie",
  titleVi: "Cơ thể người & Giải phẫu cơ bản",
  description: "Körperteile, innere Organe und das Skelett",
  color: "#be123c",
  level: "B2",
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
          { id: "herz", label: "das Herz", meaning: "tim", synonyms: ["das Herzorgan"], note: "medizinisch: kardial (Adjektiv), z. B. kardiale Beschwerden." },
          { id: "lunge", label: "die ___", meaning: "phổi", answer: "Lunge", note: "medizinisch: die Atmungsorgane, pulmonal (Adjektiv)." },
          { id: "magen", label: "der Magen", meaning: "dạ dày", note: "medizinisch: gastral (Adjektiv), z. B. gastrale Beschwerden." },
          { id: "niere", label: "die Niere", meaning: "thận", note: "medizinisch: renal (Adjektiv), z. B. eine renale Erkrankung." },
          { id: "leber", label: "die Leber", meaning: "gan", note: "medizinisch: hepatisch (Adjektiv), z. B. eine hepatische Funktionsstörung." },
        ],
      },
      {
        id: "skelett",
        label: "Skelett & Gelenke",
        meaning: "xương & khớp",
        children: [
          { id: "knochen", label: "der Knochen", meaning: "xương", synonyms: ["das Skelettteil"] },
          { id: "wirbelsaeule", label: "die ___", meaning: "cột sống", answer: "Wirbelsäule", note: "Wirbel (đốt sống) + Säule (cột)." },
          { id: "gelenk", label: "das Gelenk", meaning: "khớp", note: "medizinisch: artikulär (Adjektiv)." },
          { id: "muskel", label: "der Muskel", meaning: "cơ bắp", synonyms: ["die Muskulatur"] },
        ],
      },
      {
        id: "aeussere-koerperteile",
        label: "Äußere Körperteile",
        meaning: "bộ phận cơ thể bên ngoài",
        children: [
          { id: "kopf", label: "der Kopf", meaning: "đầu", synonyms: ["der Schädel"] },
          { id: "brustkorb", label: "der ___", meaning: "lồng ngực", answer: "Brustkorb", note: "Brust (ngực) + Korb (cái giỏ/lồng); medizinisch: der Thorax." },
          { id: "gliedmassen", label: "die Gliedmaßen", meaning: "tứ chi", synonyms: ["die Extremitäten"] },
        ],
      },
      {
        id: "sinne",
        label: "Sinne & Nervensystem",
        meaning: "giác quan & hệ thần kinh",
        children: [
          { id: "nervensystem", label: "das Nervensystem", meaning: "hệ thần kinh", note: "zentrales Nervensystem (ZNS) vs. peripheres Nervensystem." },
          { id: "gehirn", label: "das Gehirn", meaning: "não bộ", synonyms: ["das Hirn"], note: "medizinisch: zerebral (Adjektiv), z. B. eine zerebrale Störung." },
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
              { id: "wa-blut", label: "der Blutkreislauf", meaning: "tuần hoàn máu", synonyms: ["das Blut"] },
              { id: "wa-nerv", label: "der Nerv", meaning: "dây thần kinh" },
              { id: "wa-verletzung", label: "die Verletzung", meaning: "chấn thương", synonyms: ["das Trauma"] },
              { id: "wa-funktion", label: "die Funktionsweise", meaning: "cách thức vận hành (cơ quan)", synonyms: ["die Funktion"] },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-wichtige-rolle-spielen", label: "eine entscheidende Rolle spielen", meaning: "đóng vai trò then chốt", synonyms: ["eine wichtige Rolle spielen"] },
              { id: "wa-den-koerper-versorgen", label: "den Körper mit Nährstoffen versorgen", meaning: "cung cấp dưỡng chất cho cơ thể" },
              { id: "wa-schmerzen-verursachen", label: "Beschwerden hervorrufen", meaning: "gây ra khó chịu/triệu chứng", synonyms: ["Schmerzen verursachen"] },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-funktionieren", label: "funktionieren", meaning: "hoạt động (chức năng)" },
              { id: "wa-schmerzen", label: "schmerzen", meaning: "gây đau (trang trọng hơn wehtun)", note: "unpersönliches Verb; z. B. Der Rücken schmerzt. Umgangssprachlich: wehtun (tut weh, tat weh, hat wehgetan)." },
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
