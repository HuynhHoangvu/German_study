import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "gesundheit",
  title: "Gesundheit",
  titleVi: "Sức khỏe",
  description: "Gewohnheiten, Krankheiten und gesunde Lebensweise",
  color: "#e0900f",
  level: "B1-B2",
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
          { id: "junkfood", label: "zu viel Fast Food essen", meaning: "ăn quá nhiều đồ ăn nhanh", synonyms: ["ungesundes Essen"] },
          { id: "bewegungsmangel", label: "der ___", meaning: "thiếu vận động", answer: "Bewegungsmangel", note: "Bewegung (vận động) + Mangel (sự thiếu hụt)." },
          { id: "rauchen", label: "das Rauchen", meaning: "hút thuốc" },
          { id: "stress", label: "der Stress", meaning: "căng thẳng", synonyms: ["die Anspannung"] },
          { id: "schlafmangel", label: "der Schlafmangel", meaning: "thiếu ngủ", synonyms: ["zu wenig schlafen"] },
        ],
      },
      {
        id: "vorteile-fastfood",
        label: "\"Vorteile\" von Fast Food",
        meaning: "lợi ích của fastfood",
        children: [
          { id: "schnell", label: "schnell und praktisch", meaning: "nhanh và tiện" },
          { id: "guenstig", label: "erschwingliche Preise", meaning: "giá cả phải chăng" },
          { id: "vielfalt", label: "große Auswahl", meaning: "nhiều lựa chọn" },
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
          { id: "bluthochdruck", label: "der Bluthochdruck", meaning: "cao huyết áp" },
        ],
      },
      {
        id: "praevention",
        label: "Prävention",
        meaning: "phòng ngừa",
        children: [
          { id: "sport", label: "regelmäßig Sport treiben", meaning: "tập thể dục đều đặn" },
          { id: "ernaehrung", label: "ausgewogene Ernährung", meaning: "chế độ ăn cân bằng" },
          { id: "vorsorge", label: "die ___", meaning: "khám sức khỏe định kỳ", answer: "Vorsorgeuntersuchung" },
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
              { id: "wa-krankheit", label: "die Krankheit", meaning: "bệnh tật" },
              { id: "wa-symptom", label: "das Symptom", meaning: "triệu chứng" },
              { id: "wa-behandlung", label: "die Behandlung", meaning: "sự điều trị" },
              { id: "wa-immunsystem", label: "das Immunsystem", meaning: "hệ miễn dịch" },
              { id: "wa-lebensweise", label: "die Lebensweise", meaning: "lối sống" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-auf-die-gesundheit-achten", label: "auf die Gesundheit achten", meaning: "chú ý đến sức khỏe" },
              { id: "wa-einen-arzt-aufsuchen", label: "einen Arzt aufsuchen", meaning: "đi khám bác sĩ" },
              { id: "wa-ein-gesundes-leben-fuehren", label: "ein gesundes Leben führen", meaning: "sống một cuộc sống lành mạnh" },
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
              { id: "wa-sich-fit-halten", label: "sich fit halten", meaning: "giữ gìn sức khỏe/thể lực" },
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
