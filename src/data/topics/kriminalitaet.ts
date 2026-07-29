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
              { id: "wa-taeter", label: "der Täter", meaning: "thủ phạm" },
              { id: "wa-opfer", label: "das Opfer", meaning: "nạn nhân" },
              { id: "wa-zeuge", label: "der Zeuge", meaning: "nhân chứng" },
              { id: "wa-gericht", label: "das Gericht", meaning: "tòa án" },
              { id: "wa-strafe", label: "die Strafe", meaning: "hình phạt" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-ein-verbrechen-begehen", label: "ein Verbrechen begehen", meaning: "phạm tội" },
              { id: "wa-anzeige-erstatten", label: "Anzeige erstatten", meaning: "trình báo/tố cáo" },
              { id: "wa-zu-einer-strafe-verurteilen", label: "zu einer Strafe verurteilen", meaning: "kết án" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-begehen", label: "begehen", meaning: "gây ra (tội)", note: "unregelmäßig: begeht, beging, hat begangen" },
              { id: "wa-verurteilen", label: "verurteilen zu + Dat.", meaning: "kết án" },
              { id: "wa-anklagen", label: "anklagen wegen + Gen.", meaning: "buộc tội vì" },
              { id: "wa-verhaften", label: "verhaften", meaning: "bắt giữ" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-schuldig", label: "schuldig an + Dat.", meaning: "có tội về" },
              { id: "wa-verantwortlich-krim", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-unschuldig", label: "unschuldig an + Dat.", meaning: "vô tội về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
