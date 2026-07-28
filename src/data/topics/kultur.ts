import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "kultur",
  title: "Kultur & Kunst",
  titleVi: "Văn hóa & Nghệ thuật",
  description: "Theater, Musik, Museen, Feste und interkulturelle Unterschiede",
  color: "#9333ea",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Kultur",
    meaning: "văn hóa",
    children: [
      {
        id: "kunstformen",
        label: "Kunstformen",
        meaning: "các loại hình nghệ thuật",
        children: [
          { id: "theater", label: "das Theater", meaning: "nhà hát/kịch nghệ", synonyms: ["die Bühne"] },
          { id: "museum", label: "das ___", meaning: "bảo tàng", answer: "Museum" },
          { id: "musik", label: "die Musik", meaning: "âm nhạc" },
          { id: "literatur", label: "die Literatur", meaning: "văn học" },
        ],
      },
      {
        id: "feste",
        label: "Feste & Traditionen",
        meaning: "lễ hội & truyền thống",
        children: [
          { id: "weihnachten", label: "das Weihnachten", meaning: "lễ Giáng sinh" },
          { id: "brauchtum", label: "das ___", meaning: "phong tục tập quán", answer: "Brauchtum" },
          { id: "volksfest", label: "das Volksfest", meaning: "lễ hội dân gian", synonyms: ["das Oktoberfest"] },
        ],
      },
      {
        id: "interkulturell",
        label: "Interkulturelle Unterschiede",
        meaning: "khác biệt liên văn hóa",
        children: [
          { id: "wertvorstellungen", label: "die Wertvorstellungen", meaning: "quan niệm giá trị", note: "Wert (giá trị) + Vorstellung (quan niệm)." },
          { id: "toleranz", label: "die ___", meaning: "sự khoan dung", answer: "Toleranz" },
          { id: "integration", label: "die Integration", meaning: "sự hòa nhập", synonyms: ["die Eingliederung"] },
        ],
      },
      {
        id: "bedeutung",
        label: "Bedeutung von Kultur",
        meaning: "ý nghĩa của văn hóa",
        children: [
          { id: "identitaet", label: "die kulturelle Identität", meaning: "bản sắc văn hóa", synonyms: ["die kulturelle Zugehörigkeit"] },
          { id: "austausch", label: "der kulturelle Austausch", meaning: "trao đổi văn hóa" },
        ],
      },
    ],
  },
};

export default topic;
