import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "ernaehrung",
  title: "Ernährung",
  titleVi: "Dinh dưỡng",
  description: "Essgewohnheiten, gesunde Ernährung und Ernährungstrends",
  color: "#65a30d",
  level: "B2",
  root: {
    id: "root",
    label: "Ernährung",
    meaning: "dinh dưỡng",
    children: [
      {
        id: "trends",
        label: "Ernährungstrends",
        meaning: "xu hướng ăn uống",
        children: [
          { id: "vegetarisch", label: "sich vegetarisch ernähren", meaning: "ăn chay", synonyms: ["fleischlos essen"] },
          { id: "vegan", label: "sich ___ ernähren", meaning: "ăn thuần chay", answer: "vegan" },
          { id: "bio", label: "Bio-Lebensmittel", meaning: "thực phẩm hữu cơ", synonyms: ["ökologische Lebensmittel", "Erzeugnisse aus kontrolliert biologischem Anbau"], note: "Bio = kurz für biologisch angebaut, ohne künstliche Zusätze." },
        ],
      },
      {
        id: "gewohnheiten",
        label: "Essgewohnheiten",
        meaning: "thói quen ăn uống",
        children: [
          { id: "fastfood2", label: "der übermäßige Konsum von Fast Food", meaning: "việc tiêu thụ đồ ăn nhanh quá mức", synonyms: ["das Junkfood"] },
          { id: "fertiggerichte", label: "die ___", meaning: "đồ ăn chế biến sẵn", answer: "Fertiggerichte", note: "Fertiggerichte = Essen, das man nur noch aufwärmen muss." },
          { id: "hausgemacht", label: "hausgemachtes Essen", meaning: "đồ ăn tự nấu", synonyms: ["selbstgekochtes Essen"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "mangelernaehrung", label: "die Mangelernährung", meaning: "suy dinh dưỡng", synonyms: ["die Unterernährung"] },
          { id: "zuckerkonsum", label: "übermäßiger ___", meaning: "tiêu thụ đường quá mức", answer: "Zuckerkonsum" },
          { id: "lebensmittelverschwendung", label: "die Lebensmittelverschwendung", meaning: "lãng phí thực phẩm", note: "zusammengesetzt aus: Lebensmittel + Verschwendung." },
        ],
      },
      {
        id: "empfehlungen",
        label: "Empfehlungen",
        meaning: "khuyến nghị",
        children: [
          { id: "ausgewogen2", label: "sich ausgewogen ernähren", meaning: "ăn uống cân bằng", synonyms: ["sich gesund ernähren"] },
          { id: "portionen", label: "die Portionsgröße reduzieren", meaning: "giảm khẩu phần ăn" },
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
              { id: "wa-naehrstoff", label: "der Nährstoff", meaning: "chất dinh dưỡng" },
              { id: "wa-vitamin", label: "das Vitamin", meaning: "vitamin" },
              { id: "wa-kalorie", label: "die Kalorie", meaning: "calo", note: "kalorienreich/kalorienarm = giàu/ít calo." },
              { id: "wa-mahlzeit", label: "die Mahlzeit", meaning: "bữa ăn" },
              { id: "wa-zutaten", label: "die Zutaten", meaning: "nguyên liệu" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-diaet-machen", label: "eine Diät einhalten", meaning: "tuân thủ chế độ ăn kiêng", synonyms: ["eine Diät machen"] },
              { id: "wa-auf-die-ernaehrung-achten", label: "auf die Ernährung achten", meaning: "chú ý đến chế độ ăn" },
              { id: "wa-gesunde-mahlzeit", label: "eine gesunde Mahlzeit zubereiten", meaning: "chuẩn bị một bữa ăn lành mạnh" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-sich-ernaehren", label: "sich ernähren von + Dat.", meaning: "ăn uống bằng/sống nhờ vào" },
              { id: "wa-zunehmen", label: "zunehmen", meaning: "tăng cân", note: "trennbar, unregelmäßig: nimmt zu, nahm zu, hat zugenommen" },
              { id: "wa-abnehmen", label: "abnehmen", meaning: "giảm cân", note: "trennbar, unregelmäßig: nimmt ab, nahm ab, hat abgenommen" },
              { id: "wa-verzichten", label: "verzichten auf + Akk.", meaning: "từ bỏ/kiêng" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-reich-an", label: "reich an + Dat.", meaning: "giàu (chất gì)", note: "reich an Vitaminen" },
              { id: "wa-arm-an", label: "arm an + Dat.", meaning: "nghèo (chất gì)", note: "arm an Fett" },
              { id: "wa-allergisch", label: "allergisch gegen + Akk.", meaning: "dị ứng với" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
