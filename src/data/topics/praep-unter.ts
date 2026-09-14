import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-unter",
  title: "unter + Dativ",
  titleVi: "Giới từ unter",
  description: "leiden unter, verstehen unter, unter Druck stehen … — nhóm chịu đựng & cụm cố định",
  color: "#831843",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "unter + Dativ",
    meaning: "giới từ unter — đi với động từ thì luôn Dativ",
    note: "Câu hỏi: Worunter …? Nhóm động từ không nhiều nhưng rất nhiều cụm cố định (Nomen-Verb-Verbindungen) ghi điểm ở B2.",
    children: [
      {
        id: "unter-verben",
        label: "Verben + unter",
        meaning: "động từ đi với unter",
        children: [
          {
            id: "unter-v1",
            label: "1. leiden unter + Dat.",
            meaning: "chịu đựng, khổ sở vì",
            definition: "Unter einer schwierigen Situation oder Belastung leiden.",
            examples: [
              { de: "Viele Angestellte leiden unter dem hohen Leistungsdruck.", vi: "Nhiều nhân viên khổ sở vì áp lực thành tích cao." },
              { de: "Die Region leidet unter der anhaltenden Dürre.", vi: "Vùng này đang chịu cảnh hạn hán kéo dài." },
            ],
            note: "leiden UNTER = hoàn cảnh, áp lực; leiden AN + Dat. = bệnh cụ thể.",
          },
          {
            id: "unter-v2",
            label: "2. verstehen unter + Dat.",
            meaning: "hiểu … là gì",
            definition: "Eine bestimmte Bedeutung mit einem Begriff verbinden.",
            examples: [
              { de: "Was verstehen Sie unter dem Begriff Nachhaltigkeit?", vi: "Quý vị hiểu khái niệm bền vững là gì?" },
              { de: "Darunter verstehe ich etwas ganz anderes.", vi: "Với điều đó tôi hiểu theo nghĩa hoàn toàn khác." },
            ],
            note: "Câu hỏi kinh điển trong phần Nói: Was verstehen Sie unter …?",
          },
          {
            id: "unter-v3",
            label: "3. sich vorstellen unter + Dat.",
            meaning: "hình dung thế nào về",
            definition: "Sich eine Vorstellung von einem Begriff machen.",
            examples: [
              { de: "Was stellst du dir unter einem idealen Job vor?", vi: "Bạn hình dung thế nào là công việc lý tưởng?" },
              { de: "Darunter kann ich mir wenig vorstellen.", vi: "Về điều đó tôi khó hình dung được." },
            ],
          },
          {
            id: "unter-v4",
            label: "4. stehen unter + Dat.",
            meaning: "đang ở trong trạng thái",
            definition: "Sich in einem bestimmten Zustand befinden.",
            examples: [
              { de: "Er steht seit Wochen unter enormem Stress.", vi: "Anh ấy chịu căng thẳng lớn suốt nhiều tuần." },
              { de: "Das Gebäude steht unter Denkmalschutz.", vi: "Tòa nhà thuộc diện bảo tồn di tích." },
            ],
          },
          {
            id: "unter-v5",
            label: "5. leiden / zusammenbrechen unter der Last + Gen.",
            meaning: "gục ngã dưới gánh nặng",
            definition: "Von einer Belastung überfordert werden.",
            examples: [
              { de: "Das Gesundheitssystem droht unter der Last der Fälle zusammenzubrechen.", vi: "Hệ thống y tế có nguy cơ sụp đổ dưới gánh nặng số ca bệnh." },
              { de: "Sie brach unter dem Druck fast zusammen.", vi: "Cô ấy gần như gục ngã vì áp lực." },
            ],
          },
        ],
      },
      {
        id: "unter-wendungen",
        label: "Feste Wendungen mit unter",
        meaning: "cụm cố định với unter",
        note: "Đây là nhóm ghi điểm mạnh nhất trong bài Viết B2.",
        children: [
          {
            id: "unter-w1",
            label: "unter Druck stehen / setzen",
            meaning: "chịu áp lực / gây áp lực",
            definition: "Starken Erwartungen ausgesetzt sein oder jemanden dazu drängen.",
            examples: [
              { de: "Junge Leute stehen heute stark unter Druck.", vi: "Người trẻ ngày nay chịu áp lực lớn." },
              { de: "Der Chef setzt sein Team massiv unter Druck.", vi: "Sếp gây áp lực nặng nề lên đội của mình." },
            ],
          },
          {
            id: "unter-w2",
            label: "etwas unter Kontrolle haben / bringen",
            meaning: "kiểm soát được",
            definition: "Eine Situation beherrschen.",
            examples: [
              { de: "Die Feuerwehr hat den Brand unter Kontrolle gebracht.", vi: "Lính cứu hỏa đã khống chế được đám cháy." },
              { de: "Er hat seine Nerven nicht mehr unter Kontrolle.", vi: "Anh ta không còn kiểm soát nổi thần kinh mình." },
            ],
          },
          {
            id: "unter-w3",
            label: "etwas unter Beweis stellen",
            meaning: "chứng minh (năng lực)",
            definition: "Zeigen, dass man etwas wirklich kann.",
            examples: [
              { de: "In der Probezeit muss man sein Können unter Beweis stellen.", vi: "Trong thời gian thử việc phải chứng minh được năng lực." },
              { de: "Sie stellte ihre Führungsqualitäten unter Beweis.", vi: "Cô ấy đã chứng tỏ khả năng lãnh đạo." },
            ],
          },
          {
            id: "unter-w4",
            label: "unter Umständen / unter bestimmten Bedingungen",
            meaning: "trong một số trường hợp / với điều kiện nhất định",
            definition: "Nur wenn bestimmte Voraussetzungen erfüllt sind.",
            examples: [
              { de: "Unter Umständen ist eine Ausnahme möglich.", vi: "Trong một số trường hợp có thể có ngoại lệ." },
              { de: "Unter diesen Bedingungen stimme ich zu.", vi: "Với những điều kiện này thì tôi đồng ý." },
            ],
          },
          {
            id: "unter-w5",
            label: "unter Verdacht / unter Strafe stehen",
            meaning: "bị tình nghi / bị xử phạt theo luật",
            definition: "Rechtssprache: verdächtigt werden oder gesetzlich verboten sein.",
            examples: [
              { de: "Der Mitarbeiter steht unter Verdacht, Daten weitergegeben zu haben.", vi: "Nhân viên đó bị tình nghi đã tuồn dữ liệu ra ngoài." },
              { de: "Schwarzarbeit steht unter Strafe.", vi: "Lao động chui bị xử phạt theo luật." },
            ],
          },
        ],
      },
      {
        id: "unter-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "unter-ue1", label: "Viele leiden ___ dem hohen Leistungsdruck.", meaning: "khổ vì áp lực (hoàn cảnh)", answer: "unter" },
          { id: "unter-ue2", label: "Sie leidet ___ einer chronischen Krankheit.", meaning: "mắc bệnh mãn tính — dùng giới từ nào?", answer: "an" },
          { id: "unter-ue3", label: "Was verstehen Sie ___ dem Begriff Integration?", meaning: "hiểu khái niệm đó là gì", answer: "unter" },
          { id: "unter-ue4", label: "Er steht seit Wochen ___ enormem Stress.", meaning: "chịu căng thẳng lớn", answer: "unter" },
          { id: "unter-ue5", label: "In der Probezeit muss man sein Können ___ Beweis stellen.", meaning: "chứng minh năng lực", answer: "unter" },
        ],
      },
    ],
  },
};

export default topic;
