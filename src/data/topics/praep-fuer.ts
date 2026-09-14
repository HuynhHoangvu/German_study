import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-fuer",
  title: "für + Akkusativ",
  titleVi: "Giới từ für",
  description: "sich interessieren für, sorgen für, halten für … + danh từ đi với für",
  color: "#c2410c",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "für + Akkusativ",
    meaning: "giới từ für — luôn đi với Akkusativ, không có ngoại lệ",
    note: "Câu hỏi: Wofür …? / Für wen …? Đây là giới từ Akkusativ thuần túy — dễ nhớ vì không bao giờ đổi cách.",
    children: [
      {
        id: "fuer-verben",
        label: "Verben + für",
        meaning: "động từ đi với für",
        children: [
          {
            id: "fuer-v1",
            label: "1. sich interessieren für + Akk.",
            meaning: "quan tâm đến",
            definition: "Interesse an etwas haben.",
            examples: [
              { de: "Ich interessiere mich für deutsche Literatur.", vi: "Tôi quan tâm đến văn học Đức." },
              { de: "Interessierst du dich für Politik?", vi: "Bạn có quan tâm đến chính trị không?" },
            ],
            note: "Dạng trang trọng: interessiert sein AN + Dat.",
          },
          {
            id: "fuer-v2",
            label: "2. sich entscheiden für + Akk.",
            meaning: "quyết định chọn",
            definition: "Nach dem Abwägen eine Wahl treffen.",
            examples: [
              { de: "Ich habe mich für die günstigere Wohnung entschieden.", vi: "Tôi đã quyết định chọn căn hộ rẻ hơn." },
              { de: "Viele entscheiden sich für ein Studium im Ausland.", vi: "Nhiều người chọn du học." },
            ],
            note: "Ngược lại: sich entscheiden GEGEN + Akk.",
          },
          {
            id: "fuer-v3",
            label: "3. sorgen für + Akk.",
            meaning: "lo liệu, đảm bảo cho",
            definition: "Dafür verantwortlich sein, dass etwas da ist oder funktioniert.",
            examples: [
              { de: "Die Eltern sorgen für ihre Kinder.", vi: "Cha mẹ lo cho con cái." },
              { de: "Bitte sorgen Sie für eine ruhige Atmosphäre.", vi: "Xin hãy đảm bảo bầu không khí yên tĩnh." },
            ],
            note: "Phân biệt: sich sorgen UM + Akk. = lo lắng cho.",
          },
          {
            id: "fuer-v4",
            label: "4. halten für + Akk.",
            meaning: "coi là, cho rằng là",
            definition: "Eine bestimmte Meinung über jemanden oder etwas haben.",
            examples: [
              { de: "Ich halte diesen Vorschlag für sinnvoll.", vi: "Tôi cho rằng đề xuất này hợp lý." },
              { de: "Man hielt ihn lange für unschuldig.", vi: "Người ta đã lâu cho rằng anh ta vô tội." },
            ],
            note: "Cấu trúc nêu ý kiến rất mạnh cho B2: Ich halte … für …",
          },
          {
            id: "fuer-v5",
            label: "5. sich bedanken für + Akk.",
            meaning: "cảm ơn vì",
            definition: "Danke sagen.",
            examples: [
              { de: "Ich bedanke mich herzlich für Ihre Hilfe.", vi: "Tôi chân thành cảm ơn vì sự giúp đỡ của quý vị." },
              { de: "Sie bedankte sich bei ihm für das Geschenk.", vi: "Cô ấy cảm ơn anh ta vì món quà." },
            ],
            note: "sich BEI jemandem FÜR etwas bedanken.",
          },
          {
            id: "fuer-v6",
            label: "6. sich eignen für + Akk.",
            meaning: "phù hợp với",
            definition: "Für einen bestimmten Zweck passend sein.",
            examples: [
              { de: "Der Kurs eignet sich besonders für Anfänger.", vi: "Khóa học đặc biệt phù hợp với người mới." },
              { de: "Er eignet sich gut für diese verantwortungsvolle Stelle.", vi: "Anh ấy rất hợp với vị trí nhiều trách nhiệm này." },
            ],
          },
          {
            id: "fuer-v7",
            label: "7. sich einsetzen für + Akk.",
            meaning: "đấu tranh, cống hiến cho",
            definition: "Sich aktiv für ein Ziel oder eine Person engagieren.",
            examples: [
              { de: "Die Organisation setzt sich für den Umweltschutz ein.", vi: "Tổ chức này hoạt động vì bảo vệ môi trường." },
              { de: "Er hat sich für seine Kollegen eingesetzt.", vi: "Anh ấy đã lên tiếng bảo vệ đồng nghiệp." },
            ],
          },
          {
            id: "fuer-v8",
            label: "8. sich engagieren für + Akk.",
            meaning: "dấn thân, tham gia vì",
            definition: "Viel Zeit und Kraft für eine Sache einsetzen.",
            examples: [
              { de: "Viele Jugendliche engagieren sich für soziale Projekte.", vi: "Nhiều bạn trẻ tham gia các dự án xã hội." },
              { de: "Sie engagiert sich ehrenamtlich für Geflüchtete.", vi: "Cô ấy tình nguyện hoạt động vì người tị nạn." },
            ],
          },
          {
            id: "fuer-v9",
            label: "9. sich entschuldigen für + Akk.",
            meaning: "xin lỗi vì",
            definition: "Um Verzeihung bitten.",
            examples: [
              { de: "Ich entschuldige mich für die Verspätung.", vi: "Tôi xin lỗi vì đến muộn." },
              { de: "Er entschuldigte sich bei ihr für sein Verhalten.", vi: "Anh ấy xin lỗi cô vì cách cư xử của mình." },
            ],
          },
          {
            id: "fuer-v10",
            label: "10. ausgeben für + Akk.",
            meaning: "chi tiêu cho",
            definition: "Geld für etwas bezahlen.",
            examples: [
              { de: "Wir geben monatlich viel Geld für Lebensmittel aus.", vi: "Hằng tháng chúng tôi chi nhiều tiền cho thực phẩm." },
              { de: "Wie viel gibst du für Kleidung aus?", vi: "Bạn chi bao nhiêu cho quần áo?" },
            ],
          },
          {
            id: "fuer-v11",
            label: "11. plädieren für + Akk.",
            meaning: "ủng hộ, lên tiếng cho",
            definition: "Öffentlich und mit Argumenten für etwas eintreten.",
            examples: [
              { de: "Die Expertin plädiert für strengere Gesetze.", vi: "Nữ chuyên gia ủng hộ luật chặt chẽ hơn." },
              { de: "Ich plädiere dafür, das Projekt fortzusetzen.", vi: "Tôi ủng hộ việc tiếp tục dự án." },
            ],
          },
          {
            id: "fuer-v12",
            label: "12. gelten für + Akk.",
            meaning: "áp dụng cho, có hiệu lực với",
            definition: "Für eine bestimmte Gruppe oder Situation zutreffen.",
            examples: [
              { de: "Diese Regel gilt für alle Mitarbeiter.", vi: "Quy định này áp dụng cho mọi nhân viên." },
              { de: "Der Rabatt gilt nur für Studierende.", vi: "Ưu đãi chỉ áp dụng cho sinh viên." },
            ],
          },
        ],
      },
      {
        id: "fuer-nomen",
        label: "Nomen + für",
        meaning: "danh từ đi với für",
        children: [
          {
            id: "fuer-n1",
            label: "der Grund für + Akk.",
            meaning: "lý do cho",
            definition: "Die Ursache von etwas.",
            examples: [
              { de: "Der Hauptgrund für den Umzug war die hohe Miete.", vi: "Lý do chính của việc chuyển nhà là tiền thuê cao." },
            ],
          },
          {
            id: "fuer-n2",
            label: "die Verantwortung für + Akk.",
            meaning: "trách nhiệm về",
            definition: "Die Pflicht, für etwas zu sorgen.",
            examples: [
              { de: "Er übernimmt die Verantwortung für das gesamte Team.", vi: "Anh ấy nhận trách nhiệm về cả đội." },
            ],
          },
          {
            id: "fuer-n3",
            label: "das Verständnis für + Akk.",
            meaning: "sự thông cảm với",
            definition: "Die Fähigkeit, die Lage anderer nachzuvollziehen.",
            examples: [
              { de: "Ich habe wenig Verständnis für dieses Verhalten.", vi: "Tôi ít thông cảm với cách cư xử này." },
            ],
          },
          {
            id: "fuer-n4",
            label: "die Voraussetzung für + Akk.",
            meaning: "điều kiện tiên quyết cho",
            definition: "Was erfüllt sein muss, damit etwas möglich ist.",
            examples: [
              { de: "Gute Sprachkenntnisse sind die Voraussetzung für diese Stelle.", vi: "Trình độ ngoại ngữ tốt là điều kiện cho vị trí này." },
            ],
          },
          {
            id: "fuer-n5",
            label: "der Beweis für + Akk.",
            meaning: "bằng chứng cho",
            definition: "Etwas, das zeigt, dass eine Aussage stimmt.",
            examples: [
              { de: "Das ist ein klarer Beweis für den Klimawandel.", vi: "Đó là bằng chứng rõ ràng cho biến đổi khí hậu." },
            ],
          },
          {
            id: "fuer-n6",
            label: "die Entscheidung für + Akk.",
            meaning: "quyết định chọn",
            definition: "Die getroffene Wahl.",
            examples: [
              { de: "Die Entscheidung für diesen Weg war richtig.", vi: "Quyết định chọn con đường này là đúng." },
            ],
          },
        ],
      },
      {
        id: "fuer-uebung",
        label: "Beispielsätze",
        meaning: "câu ví dụ mẫu",
        children: [
          { id: "fuer-ue1", label: "Ich interessiere mich für Kunst.", meaning: "quan tâm đến nghệ thuật" },
          { id: "fuer-ue2", label: "Ich halte den Vorschlag für sinnvoll.", meaning: "cho rằng đề xuất hợp lý" },
          { id: "fuer-ue3", label: "Wer sorgt für die Kinder?", meaning: "ai lo cho bọn trẻ" },
          { id: "fuer-ue4", label: "Sie sorgt sich um ihre Zukunft.", meaning: "lo lắng cho tương lai — sich sorgen um" },
          { id: "fuer-ue5", label: "Gute Sprachkenntnisse sind die Voraussetzung für diese Stelle.", meaning: "điều kiện cho vị trí này" },
        ],
      },
    ],
  },
};

export default topic;
