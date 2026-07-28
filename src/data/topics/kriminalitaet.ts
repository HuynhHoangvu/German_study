import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "kriminalitaet",
  title: "Kriminalität",
  titleVi: "Tội phạm",
  description: "Ursachen, Arten und Bekämpfung von Kriminalität",
  color: "#c0264f",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Kriminalität",
    meaning: "tội phạm",
    children: [
      {
        id: "arten",
        label: "Arten von Straftaten",
        meaning: "các loại tội phạm",
        children: [
          { id: "diebstahl", label: "der Diebstahl", meaning: "sự trộm cắp", synonyms: ["der Klau (ugs.)", "der Raub"] },
          { id: "einbruch", label: "der Einbruch", meaning: "sự đột nhập" },
          { id: "betrug", label: "der ___", meaning: "sự lừa đảo", answer: "Betrug", note: "Er wurde wegen Betrugs angeklagt." },
          { id: "gewalt", label: "die Gewaltverbrechen", meaning: "tội phạm bạo lực" },
          { id: "cyberkrim", label: "die Cyberkriminalität", meaning: "tội phạm mạng" },
        ],
      },
      {
        id: "ursachen",
        label: "Ursachen",
        meaning: "nguyên nhân",
        children: [
          { id: "armut", label: "die Armut", meaning: "nghèo đói", synonyms: ["die Not"] },
          { id: "arbeitslosigkeit", label: "die ___", meaning: "thất nghiệp", answer: "Arbeitslosigkeit" },
          { id: "drogen", label: "die Drogensucht", meaning: "nghiện ma túy" },
          { id: "erziehung", label: "mangelnde Erziehung", meaning: "giáo dục thiếu sót" },
          { id: "ungleichheit", label: "die soziale Ungleichheit", meaning: "bất bình đẳng xã hội" },
        ],
      },
      {
        id: "folgen",
        label: "Folgen",
        meaning: "hậu quả",
        children: [
          { id: "unsicherheit", label: "das Unsicherheitsgefühl", meaning: "cảm giác bất an" },
          { id: "vertrauensverlust", label: "der Vertrauensverlust", meaning: "mất niềm tin" },
          { id: "kosten", label: "hohe Kosten für den Staat", meaning: "chi phí cao cho nhà nước", synonyms: ["die Ausgaben"] },
        ],
      },
      {
        id: "bekaempfung",
        label: "Bekämpfung",
        meaning: "phòng chống",
        children: [
          { id: "polizei", label: "die Polizeipräsenz erhöhen", meaning: "tăng cường cảnh sát" },
          { id: "praevention", label: "die ___", meaning: "phòng ngừa", answer: "Prävention" },
          { id: "strafen", label: "strengere Strafen", meaning: "hình phạt nghiêm khắc hơn", synonyms: ["härtere Sanktionen"] },
          { id: "resozial", label: "die Resozialisierung", meaning: "tái hòa nhập xã hội" },
        ],
      },
      {
        id: "meinung",
        label: "Meine Meinung",
        meaning: "quan điểm cá nhân",
        children: [
          { id: "meinung1", label: "Prävention ist besser als Strafe", meaning: "câu chủ đề mẫu để luyện nói" },
          { id: "meinung2", label: "Bildung als Schlüssel", meaning: "giáo dục là chìa khóa" },
        ],
      },
    ],
  },
};

export default topic;
