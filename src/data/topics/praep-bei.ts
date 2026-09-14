import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-bei",
  title: "bei + Dativ",
  titleVi: "Giới từ bei",
  description: "helfen bei, sich bedanken bei, sich bewerben bei … — giới từ của thư từ",
  color: "#115e59",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "bei + Dativ",
    meaning: "giới từ bei — luôn đi với Dativ",
    note: "Câu hỏi: Bei wem …? / Wobei …? Mẹo quan trọng: 'bei' chỉ NGƯỜI/NƠI nhận, còn nội dung đi với giới từ khác — sich bei jemandem FÜR etwas bedanken.",
    children: [
      {
        id: "bei-verben",
        label: "Verben + bei",
        meaning: "động từ đi với bei",
        children: [
          {
            id: "bei-v1",
            label: "1. helfen bei + Dat.",
            meaning: "giúp đỡ trong việc",
            definition: "Jemanden bei einer Tätigkeit unterstützen.",
            examples: [
              { de: "Kannst du mir bei den Hausaufgaben helfen?", vi: "Bạn giúp mình làm bài tập được không?" },
              { de: "Die Beratungsstelle hilft bei der Wohnungssuche.", vi: "Trung tâm tư vấn giúp việc tìm nhà." },
            ],
            note: "jemandem (Dat.) BEI etwas (Dat.) helfen.",
          },
          {
            id: "bei-v2",
            label: "2. sich bedanken bei + Dat.",
            meaning: "cảm ơn ai",
            definition: "Jemandem Danke sagen.",
            examples: [
              { de: "Ich bedanke mich bei Ihnen für die schnelle Antwort.", vi: "Tôi cảm ơn quý vị vì phản hồi nhanh chóng." },
              { de: "Er bedankte sich bei allen Helfern.", vi: "Anh ấy cảm ơn tất cả những người giúp sức." },
            ],
            note: "sich BEI jemandem FÜR etwas bedanken — nhớ cả hai giới từ.",
          },
          {
            id: "bei-v3",
            label: "3. sich beschweren bei + Dat.",
            meaning: "khiếu nại với (ai)",
            definition: "Bei einer zuständigen Person seine Unzufriedenheit äußern.",
            examples: [
              { de: "Ich habe mich beim Vermieter über die Heizung beschwert.", vi: "Tôi đã khiếu nại với chủ nhà về hệ thống sưởi." },
              { de: "Beschweren Sie sich bitte bei der Geschäftsleitung.", vi: "Xin hãy khiếu nại với ban giám đốc." },
            ],
            note: "sich BEI jemandem ÜBER etwas beschweren.",
          },
          {
            id: "bei-v4",
            label: "4. sich entschuldigen bei + Dat.",
            meaning: "xin lỗi ai",
            definition: "Jemanden um Verzeihung bitten.",
            examples: [
              { de: "Du solltest dich bei ihr entschuldigen.", vi: "Bạn nên xin lỗi cô ấy." },
              { de: "Ich entschuldige mich bei Ihnen für die Verspätung.", vi: "Tôi xin lỗi quý vị vì đến muộn." },
            ],
          },
          {
            id: "bei-v5",
            label: "5. sich bewerben bei + Dat.",
            meaning: "nộp đơn ở (công ty)",
            definition: "Eine Bewerbung an eine Firma schicken.",
            examples: [
              { de: "Ich habe mich bei mehreren Kliniken beworben.", vi: "Tôi đã nộp đơn ở nhiều bệnh viện." },
              { de: "Sie bewirbt sich bei einer internationalen Firma um eine Stelle.", vi: "Cô ấy nộp đơn xin việc ở một công ty quốc tế." },
            ],
            note: "sich BEI einer Firma UM eine Stelle bewerben.",
          },
          {
            id: "bei-v6",
            label: "6. sich erkundigen bei + Dat.",
            meaning: "hỏi thăm ở (ai/đâu)",
            definition: "Bei einer Stelle um Auskunft bitten.",
            examples: [
              { de: "Erkundigen Sie sich bitte beim Kundenservice.", vi: "Xin hãy hỏi bộ phận chăm sóc khách hàng." },
              { de: "Ich habe mich beim Amt nach den Unterlagen erkundigt.", vi: "Tôi đã hỏi cơ quan về các giấy tờ." },
            ],
          },
          {
            id: "bei-v7",
            label: "7. bleiben bei + Dat.",
            meaning: "giữ nguyên, bám vào",
            definition: "Eine Meinung oder Entscheidung nicht ändern.",
            examples: [
              { de: "Ich bleibe bei meiner Meinung.", vi: "Tôi giữ nguyên quan điểm của mình." },
              { de: "Es bleibt bei der Vereinbarung von gestern.", vi: "Thỏa thuận hôm qua vẫn giữ nguyên." },
            ],
          },
          {
            id: "bei-v8",
            label: "8. unterstützen bei + Dat.",
            meaning: "hỗ trợ trong việc",
            definition: "Jemandem bei einer Aufgabe helfen (formeller).",
            examples: [
              { de: "Der Verein unterstützt Geflüchtete bei Behördengängen.", vi: "Hội hỗ trợ người tị nạn trong việc đi làm thủ tục." },
              { de: "Wir unterstützen Sie gern bei der Organisation.", vi: "Chúng tôi sẵn lòng hỗ trợ quý vị trong khâu tổ chức." },
            ],
          },
          {
            id: "bei-v9",
            label: "9. mitwirken bei / an + Dat.",
            meaning: "tham gia cộng tác vào",
            definition: "An einem Projekt aktiv beteiligt sein.",
            examples: [
              { de: "Viele Ehrenamtliche wirken bei dem Projekt mit.", vi: "Nhiều tình nguyện viên tham gia vào dự án." },
              { de: "Sie wirkte an der Studie mit.", vi: "Cô ấy đã tham gia vào nghiên cứu." },
            ],
          },
        ],
      },
      {
        id: "bei-nomen",
        label: "Nomen & feste Wendungen",
        meaning: "danh từ và cụm cố định với bei",
        children: [
          {
            id: "bei-n1",
            label: "die Hilfe / Unterstützung bei + Dat.",
            meaning: "sự giúp đỡ trong việc",
            definition: "Die Hilfe, die man bei einer Aufgabe bekommt.",
            examples: [
              { de: "Vielen Dank für Ihre Unterstützung bei der Wohnungssuche.", vi: "Cảm ơn quý vị đã hỗ trợ trong việc tìm nhà." },
            ],
          },
          {
            id: "bei-n2",
            label: "bei Fragen / bei Interesse / bei Bedarf",
            meaning: "nếu có thắc mắc / nếu quan tâm / khi cần",
            definition: "Feste Formeln in formellen Briefen und E-Mails.",
            examples: [
              { de: "Bei Fragen stehe ich Ihnen gern zur Verfügung.", vi: "Nếu có thắc mắc, tôi sẵn sàng hỗ trợ quý vị." },
              { de: "Bei Interesse melden Sie sich bitte bis Freitag.", vi: "Nếu quan tâm, xin liên hệ trước thứ Sáu." },
            ],
            note: "Cụm bắt buộc thuộc cho phần Viết thư trang trọng B2.",
          },
          {
            id: "bei-n3",
            label: "beim + Infinitiv (substantiviert)",
            meaning: "khi đang làm gì",
            definition: "Gleichzeitigkeit ausdrücken: beim Essen, beim Lesen, beim Arbeiten.",
            examples: [
              { de: "Beim Lernen höre ich gern Musik.", vi: "Khi học tôi thích nghe nhạc." },
              { de: "Beim Kochen ist mir ein Fehler passiert.", vi: "Khi nấu ăn tôi đã mắc một lỗi." },
            ],
            note: "Cách thay thế cho mệnh đề 'während' — nâng văn phong khi viết.",
          },
        ],
      },
      {
        id: "bei-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "bei-ue1", label: "Kannst du mir ___ den Hausaufgaben helfen?", meaning: "giúp làm bài tập", answer: "bei" },
          { id: "bei-ue2", label: "Ich bedanke mich ___ Ihnen für die Hilfe.", meaning: "cảm ơn quý vị", answer: "bei" },
          { id: "bei-ue3", label: "Ich habe mich ___ Vermieter beschwert. (der Vermieter)", meaning: "khiếu nại với chủ nhà — bei + dem = ?", answer: "beim" },
          { id: "bei-ue4", label: "___ Fragen stehe ich Ihnen gern zur Verfügung.", meaning: "nếu có thắc mắc", answer: "Bei" },
          { id: "bei-ue5", label: "Ich habe mich ___ mehreren Firmen beworben.", meaning: "nộp đơn ở nhiều công ty", answer: "bei" },
        ],
      },
    ],
  },
};

export default topic;
