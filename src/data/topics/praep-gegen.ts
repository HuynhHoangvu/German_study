import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-gegen",
  title: "gegen + Akkusativ",
  titleVi: "Giới từ gegen",
  description: "protestieren gegen, verstoßen gegen, sich wehren gegen … — nhóm phản đối",
  color: "#9f1239",
  level: "B2",
  category: "praeposition",
  root: {
    id: "root",
    label: "gegen + Akkusativ",
    meaning: "giới từ gegen — luôn đi với Akkusativ",
    note: "Câu hỏi: Wogegen …? / Gegen wen …? Nhóm ý nghĩa: chống lại, phản đối, vi phạm.",
    children: [
      {
        id: "gegen-verben",
        label: "Verben + gegen",
        meaning: "động từ đi với gegen",
        children: [
          {
            id: "gegen-v1",
            label: "1. protestieren gegen + Akk.",
            meaning: "phản đối",
            definition: "Öffentlich zeigen, dass man mit etwas nicht einverstanden ist.",
            examples: [
              { de: "Tausende protestieren gegen die neue Regelung.", vi: "Hàng nghìn người phản đối quy định mới." },
              { de: "Die Anwohner protestieren gegen den Bau der Autobahn.", vi: "Cư dân phản đối việc xây đường cao tốc." },
            ],
          },
          {
            id: "gegen-v2",
            label: "2. sich wehren gegen + Akk.",
            meaning: "chống lại, tự vệ trước",
            definition: "Sich gegen einen Angriff oder Vorwurf verteidigen.",
            examples: [
              { de: "Sie wehrt sich gegen die ungerechte Kritik.", vi: "Cô ấy phản bác lời phê bình bất công." },
              { de: "Man muss sich gegen Diskriminierung wehren.", vi: "Phải chống lại sự phân biệt đối xử." },
            ],
          },
          {
            id: "gegen-v3",
            label: "3. kämpfen gegen + Akk.",
            meaning: "đấu tranh chống lại",
            definition: "Aktiv etwas Negatives bekämpfen.",
            examples: [
              { de: "Die Stadt kämpft gegen die Luftverschmutzung.", vi: "Thành phố đấu tranh chống ô nhiễm không khí." },
              { de: "Er kämpft seit Jahren gegen seine Sucht.", vi: "Anh ấy chiến đấu với cơn nghiện nhiều năm nay." },
            ],
          },
          {
            id: "gegen-v4",
            label: "4. verstoßen gegen + Akk.",
            meaning: "vi phạm (quy định)",
            definition: "Eine Regel oder ein Gesetz brechen.",
            examples: [
              { de: "Das verstößt gegen die Hausordnung.", vi: "Điều đó vi phạm nội quy nhà chung cư." },
              { de: "Wer gegen die Vorschriften verstößt, muss eine Strafe zahlen.", vi: "Ai vi phạm quy định phải nộp phạt." },
            ],
            note: "unregelmäßig: verstößt, verstieß, hat verstoßen.",
          },
          {
            id: "gegen-v5",
            label: "5. sich entscheiden gegen + Akk.",
            meaning: "quyết định không chọn",
            definition: "Nach dem Abwägen etwas nicht wählen.",
            examples: [
              { de: "Wir haben uns gegen einen Umzug entschieden.", vi: "Chúng tôi quyết định không chuyển nhà." },
              { de: "Sie entschied sich gegen die teurere Variante.", vi: "Cô ấy quyết định không chọn phương án đắt hơn." },
            ],
          },
          {
            id: "gegen-v6",
            label: "6. demonstrieren gegen + Akk.",
            meaning: "biểu tình phản đối",
            definition: "Auf der Straße öffentlich protestieren.",
            examples: [
              { de: "Studierende demonstrieren gegen die Studiengebühren.", vi: "Sinh viên biểu tình phản đối học phí." },
              { de: "Sie demonstrierten friedlich gegen den Krieg.", vi: "Họ biểu tình ôn hòa phản đối chiến tranh." },
            ],
          },
          {
            id: "gegen-v7",
            label: "7. etwas haben gegen + Akk.",
            meaning: "phản đối, không ưa",
            definition: "Mit jemandem oder etwas nicht einverstanden sein.",
            examples: [
              { de: "Hast du etwas gegen meinen Vorschlag?", vi: "Bạn có phản đối đề xuất của tôi không?" },
              { de: "Ich habe nichts gegen Überstunden, wenn sie bezahlt werden.", vi: "Tôi không phản đối làm thêm giờ nếu được trả lương." },
            ],
          },
          {
            id: "gegen-v8",
            label: "8. stimmen gegen + Akk.",
            meaning: "bỏ phiếu chống",
            definition: "Bei einer Abstimmung Nein sagen.",
            examples: [
              { de: "Die Mehrheit stimmte gegen den Vorschlag.", vi: "Đa số đã bỏ phiếu chống đề xuất." },
              { de: "Nur wenige Abgeordnete stimmten gegen das Gesetz.", vi: "Chỉ vài nghị sĩ bỏ phiếu chống dự luật." },
            ],
            note: "Ngược lại: stimmen FÜR + Akk.",
          },
          {
            id: "gegen-v9",
            label: "9. vorgehen gegen + Akk.",
            meaning: "có biện pháp chống lại",
            definition: "Maßnahmen ergreifen, um etwas zu stoppen.",
            examples: [
              { de: "Die Behörden gehen konsequent gegen Schwarzarbeit vor.", vi: "Nhà chức trách xử lý triệt để lao động chui." },
              { de: "Gegen solche Betrüger muss man rechtlich vorgehen.", vi: "Phải xử lý pháp lý với những kẻ lừa đảo như vậy." },
            ],
          },
          {
            id: "gegen-v10",
            label: "10. sich sträuben gegen + Akk.",
            meaning: "cưỡng lại, không chịu",
            definition: "Sich innerlich gegen etwas wehren.",
            examples: [
              { de: "Viele Betriebe sträuben sich gegen mehr Digitalisierung.", vi: "Nhiều doanh nghiệp cưỡng lại việc số hóa nhiều hơn." },
              { de: "Er sträubte sich lange gegen den Umzug.", vi: "Anh ấy đã lâu không chịu chuyển nhà." },
            ],
          },
        ],
      },
      {
        id: "gegen-nomen",
        label: "Nomen + gegen",
        meaning: "danh từ đi với gegen",
        children: [
          {
            id: "gegen-n1",
            label: "der Protest gegen + Akk.",
            meaning: "sự phản đối",
            definition: "Die öffentliche Ablehnung von etwas.",
            examples: [
              { de: "Der Protest gegen die Reform wächst.", vi: "Sự phản đối cuộc cải cách đang tăng." },
            ],
          },
          {
            id: "gegen-n2",
            label: "der Widerstand gegen + Akk.",
            meaning: "sự chống đối",
            definition: "Die aktive Ablehnung einer Maßnahme.",
            examples: [
              { de: "Es gab großen Widerstand gegen das Bauprojekt.", vi: "Đã có sự chống đối lớn với dự án xây dựng." },
            ],
          },
          {
            id: "gegen-n3",
            label: "der Verstoß gegen + Akk.",
            meaning: "sự vi phạm",
            definition: "Das Brechen einer Regel.",
            examples: [
              { de: "Ein Verstoß gegen den Datenschutz kann teuer werden.", vi: "Vi phạm bảo vệ dữ liệu có thể rất tốn kém." },
            ],
          },
          {
            id: "gegen-n4",
            label: "das Mittel gegen + Akk.",
            meaning: "thuốc/biện pháp chống",
            definition: "Was gegen ein Problem hilft.",
            examples: [
              { de: "Bewegung ist das beste Mittel gegen Stress.", vi: "Vận động là biện pháp tốt nhất chống căng thẳng." },
            ],
          },
        ],
      },
      {
        id: "gegen-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "gegen-ue1", label: "Tausende protestieren ___ die Reform.", meaning: "phản đối cuộc cải cách", answer: "gegen" },
          { id: "gegen-ue2", label: "Das verstößt ___ die Hausordnung.", meaning: "vi phạm nội quy", answer: "gegen" },
          { id: "gegen-ue3", label: "Bewegung ist das beste Mittel ___ Stress.", meaning: "biện pháp chống căng thẳng", answer: "gegen" },
          { id: "gegen-ue4", label: "Wir haben uns ___ einen Umzug entschieden.", meaning: "quyết định không chuyển nhà", answer: "gegen" },
          { id: "gegen-ue5", label: "Die Stadt kämpft ___ die Luftverschmutzung.", meaning: "chống ô nhiễm không khí", answer: "gegen" },
        ],
      },
    ],
  },
};

export default topic;
