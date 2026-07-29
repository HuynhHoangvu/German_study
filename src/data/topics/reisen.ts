import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "reisen",
  title: "Reisen & Tourismus",
  titleVi: "Du lịch",
  description: "Reiseformen, Vorteile und Auswirkungen des Tourismus",
  color: "#0284c7",
  level: "B1-B2",
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
              { id: "wa-reiseziel", label: "das Reiseziel", meaning: "điểm đến du lịch" },
              { id: "wa-unterkunft", label: "die Unterkunft", meaning: "chỗ ở/lưu trú" },
              { id: "wa-sehenswuerdigkeit", label: "die Sehenswürdigkeit", meaning: "địa điểm tham quan" },
              { id: "wa-gepaeck", label: "das Gepäck", meaning: "hành lý" },
              { id: "wa-reisepass", label: "der Reisepass", meaning: "hộ chiếu" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-reise-buchen", label: "eine Reise buchen", meaning: "đặt một chuyến đi" },
              { id: "wa-eine-sehenswuerdigkeit-besichtigen", label: "eine Sehenswürdigkeit besichtigen", meaning: "tham quan một địa điểm" },
              { id: "wa-neue-kulturen-entdecken", label: "neue Kulturen entdecken", meaning: "khám phá những nền văn hóa mới" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-buchen", label: "buchen", meaning: "đặt trước (vé, phòng...)" },
              { id: "wa-uebernachten", label: "übernachten", meaning: "ngủ qua đêm" },
              { id: "wa-sich-erholen-reisen", label: "sich erholen von + Dat.", meaning: "nghỉ ngơi hồi phục sau" },
              { id: "wa-erkunden", label: "erkunden", meaning: "khám phá" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-begeistert-reisen", label: "begeistert von + Dat.", meaning: "hào hứng với" },
              { id: "wa-bekannt-reisen", label: "bekannt für + Akk.", meaning: "nổi tiếng vì" },
              { id: "wa-verantwortlich-reisen", label: "verantwortlich für + Akk.", meaning: "có trách nhiệm với (môi trường...)" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
