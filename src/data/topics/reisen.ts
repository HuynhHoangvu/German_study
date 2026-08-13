import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "reisen",
  title: "Reisen & Tourismus",
  titleVi: "Du lịch",
  description: "Reiseformen, Vorteile und Auswirkungen des Tourismus",
  color: "#0284c7",
  level: "B2",
  root: {
    id: "root",
    label: "Reisen",
    meaning: "du lịch",
    children: [
      {
        id: "reiseformen",
        label: "Reiseformen",
        meaning: "hình thức du lịch",
        children: [
          { id: "pauschalreise", label: "die Pauschalreise", meaning: "du lịch trọn gói", note: "Pauschal = trọn gói, đã bao gồm mọi chi phí." },
          { id: "individualreise", label: "die ___", meaning: "du lịch tự túc", answer: "Individualreise" },
          { id: "rucksacktourismus", label: "der Rucksacktourismus", meaning: "du lịch bụi", synonyms: ["das Backpacking"] },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile",
        meaning: "lợi ích",
        children: [
          { id: "horizonterweiterung", label: "die Horizonterweiterung", meaning: "mở mang tầm nhìn", note: "Horizont (chân trời/tầm nhìn) + Erweiterung (mở rộng)." },
          { id: "erholung2", label: "die Erholung vom Alltag", meaning: "nghỉ ngơi khỏi đời thường", synonyms: ["die Entspannung"] },
          { id: "kulturaustausch", label: "der ___", meaning: "trao đổi văn hóa", answer: "Kulturaustausch" },
        ],
      },
      {
        id: "nachteile",
        label: "Negative Auswirkungen",
        meaning: "tác động tiêu cực",
        children: [
          { id: "massentourismus", label: "der Massentourismus", meaning: "du lịch đại trà", synonyms: ["der Overtourism"] },
          { id: "umweltbelastung", label: "die Umweltbelastung", meaning: "gánh nặng môi trường", synonyms: ["die Umweltschädigung"] },
          { id: "co2", label: "hoher CO2-Ausstoß", meaning: "lượng khí thải CO2 cao", synonyms: ["die CO2-Emission"] },
        ],
      },
      {
        id: "nachhaltig",
        label: "Nachhaltiger Tourismus",
        meaning: "du lịch bền vững",
        children: [
          { id: "oekotourismus", label: "der Ökotourismus", meaning: "du lịch sinh thái" },
          { id: "regional", label: "regional und ___ reisen", meaning: "du lịch bền vững, gần địa phương", answer: "nachhaltig" },
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
              { id: "wa-reiseziel", label: "das Reiseziel", meaning: "điểm đến du lịch", note: "oft mit Genitiv: das beliebteste Reiseziel der Region." },
              { id: "wa-unterkunft", label: "die Unterkunftsmöglichkeit", meaning: "phương án chỗ ở/lưu trú", synonyms: ["die Unterkunft"] },
              { id: "wa-sehenswuerdigkeit", label: "die Sehenswürdigkeit", meaning: "địa điểm tham quan nổi tiếng" },
              { id: "wa-gepaeck", label: "das Reisegepäck", meaning: "hành lý du lịch", synonyms: ["das Gepäck"] },
              { id: "wa-reisepass", label: "der Reisepass verlängern", meaning: "gia hạn hộ chiếu" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-reise-buchen", label: "eine Reise im Voraus buchen", meaning: "đặt trước một chuyến đi" },
              { id: "wa-eine-sehenswuerdigkeit-besichtigen", label: "eine Sehenswürdigkeit besichtigen", meaning: "tham quan một địa điểm" },
              { id: "wa-neue-kulturen-entdecken", label: "fremde Kulturen erkunden", meaning: "khám phá những nền văn hóa xa lạ", synonyms: ["neue Kulturen entdecken"] },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-buchen", label: "im Voraus buchen", meaning: "đặt trước (vé, phòng...)", synonyms: ["buchen"] },
              { id: "wa-uebernachten", label: "übernachten", meaning: "ngủ qua đêm", note: "übernachten in + Dat.: in einem Hotel übernachten." },
              { id: "wa-sich-erholen-reisen", label: "sich erholen von + Dat.", meaning: "nghỉ ngơi hồi phục sau" },
              { id: "wa-erkunden", label: "auf eigene Faust erkunden", meaning: "tự mình khám phá, không theo tour", synonyms: ["erkunden"] },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-begeistert-reisen", label: "begeistert von + Dat.", meaning: "hào hứng với" },
              { id: "wa-bekannt-reisen", label: "weltberühmt für + Akk.", meaning: "nổi tiếng khắp thế giới vì", synonyms: ["bekannt für + Akk."] },
              { id: "wa-verantwortlich-reisen", label: "verantwortlich für + Akk.", meaning: "có trách nhiệm với (môi trường...)" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
