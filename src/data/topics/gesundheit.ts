import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "gesundheit",
  title: "Gesundheit",
  titleVi: "Sức khỏe",
  description: "Gewohnheiten, Krankheiten und gesunde Lebensweise",
  color: "#e0900f",
  level: "B2",
  root: {
    id: "root",
    label: "Gesundheit",
    meaning: "sức khỏe",
    children: [
      {
        id: "schlechte-gewohnheiten",
        label: "Schlechte Gewohnheiten",
        meaning: "thói quen xấu",
        children: [
          { id: "junkfood", label: "sich übermäßig von Fast Food ernähren", meaning: "ăn quá nhiều đồ ăn nhanh", synonyms: ["einseitige Ernährung"] },
          { id: "bewegungsmangel", label: "der ___", meaning: "thiếu vận động", answer: "Bewegungsmangel", note: "Bewegung (vận động) + Mangel (sự thiếu hụt); Genitivobjekt: Mangel an Bewegung." },
          { id: "rauchen", label: "der Nikotinkonsum", meaning: "việc hút thuốc/tiêu thụ nicotin", synonyms: ["das Rauchen"] },
          { id: "stress", label: "die chronische Erschöpfung", meaning: "kiệt sức mãn tính", synonyms: ["der Dauerstress"] },
          { id: "schlafmangel", label: "der Schlafmangel", meaning: "thiếu ngủ", synonyms: ["die Schlafdefizite"] },
        ],
      },
      {
        id: "vorteile-fastfood",
        label: "\"Vorteile\" von Fast Food",
        meaning: "lợi ích của fastfood",
        children: [
          { id: "schnell", label: "die rasche Verfügbarkeit", meaning: "sự sẵn có nhanh chóng" },
          { id: "guenstig", label: "erschwingliche Preise", meaning: "giá cả phải chăng" },
          { id: "vielfalt", label: "die breite Produktpalette", meaning: "danh mục sản phẩm đa dạng" },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề sức khỏe",
        children: [
          { id: "uebergewicht", label: "das Übergewicht", meaning: "béo phì", synonyms: ["die Fettleibigkeit"] },
          { id: "diabetes", label: "der ___", meaning: "tiểu đường", answer: "Diabetes", synonyms: ["die Zuckerkrankheit"] },
          { id: "herzkrankheit", label: "die Herzkrankheit", meaning: "bệnh tim mạch", synonyms: ["die Herzerkrankung"] },
          { id: "schlafstoerung", label: "die Schlafstörung", meaning: "rối loạn giấc ngủ" },
          { id: "bluthochdruck", label: "der Bluthochdruck", meaning: "cao huyết áp", note: "auch: der erhöhte Blutdruck." },
        ],
      },
      {
        id: "praevention",
        label: "Prävention",
        meaning: "phòng ngừa",
        children: [
          { id: "sport", label: "sich körperlich betätigen", meaning: "vận động thể chất thường xuyên", synonyms: ["regelmäßig Sport treiben"] },
          { id: "ernaehrung", label: "eine ausgewogene Ernährung praktizieren", meaning: "duy trì chế độ ăn cân bằng" },
          { id: "vorsorge", label: "die ___", meaning: "khám sức khỏe định kỳ", answer: "Vorsorgeuntersuchung", note: "auch: die Früherkennungsuntersuchung." },
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
              { id: "wa-krankheit", label: "das Krankheitsbild", meaning: "bệnh cảnh lâm sàng", synonyms: ["die Krankheit"] },
              { id: "wa-symptom", label: "das Symptom", meaning: "triệu chứng" },
              { id: "wa-behandlung", label: "die Behandlungsmethode", meaning: "phương pháp điều trị", synonyms: ["die Therapie"] },
              { id: "wa-immunsystem", label: "das Immunsystem", meaning: "hệ miễn dịch" },
              { id: "wa-lebensweise", label: "die Lebensweise", meaning: "lối sống", synonyms: ["der Lebensstil"] },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-auf-die-gesundheit-achten", label: "auf die Gesundheit achten", meaning: "chú ý đến sức khỏe" },
              { id: "wa-einen-arzt-aufsuchen", label: "ärztlichen Rat einholen", meaning: "tìm lời khuyên của bác sĩ", synonyms: ["einen Arzt aufsuchen"] },
              { id: "wa-ein-gesundes-leben-fuehren", label: "einen gesundheitsbewussten Lebensstil führen", meaning: "sống một lối sống ý thức về sức khỏe" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-sich-erholen", label: "sich erholen von + Dat.", meaning: "hồi phục sau (bệnh gì)" },
              { id: "wa-leiden", label: "leiden an + Dat.", meaning: "mắc phải (bệnh gì)", note: "unregelmäßig: leidet, litt, hat gelitten" },
              { id: "wa-vorbeugen", label: "vorbeugen + Dat.", meaning: "phòng ngừa", note: "trennbar: beugt vor, beugte vor, hat vorgebeugt" },
              { id: "wa-sich-fit-halten", label: "sich fit halten", meaning: "giữ gìn sức khỏe/thể lực", note: "reflexives Verb; auch: seine Fitness erhalten." },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-anfaellig", label: "anfällig für + Akk.", meaning: "dễ mắc phải" },
              { id: "wa-gesund-fuer", label: "gesund für + Akk.", meaning: "tốt cho sức khỏe của" },
              { id: "wa-abhaengig-gesundheit", label: "abhängig von + Dat.", meaning: "phụ thuộc vào (thuốc, chất...)" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
