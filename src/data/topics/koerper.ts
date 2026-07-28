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
    ],
  },
};

export default topic;
