import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-von",
  title: "von + Dativ",
  titleVi: "Giới từ von",
  description: "abhängen von, profitieren von, halten von … + danh từ đi với von",
  color: "#1d4ed8",
  level: "B2",
  category: "praeposition",
  root: {
    id: "root",
    label: "von + Dativ",
    meaning: "giới từ von — luôn đi với Dativ",
    note: "Câu hỏi: Wovon …? / Von wem …? Cũng là giới từ chỉ tác nhân trong câu bị động: Der Antrag wird VOM Amt geprüft.",
    children: [
      {
        id: "von-verben",
        label: "Verben + von",
        meaning: "động từ đi với von",
        children: [
          {
            id: "von-v1",
            label: "1. abhängen von + Dat.",
            meaning: "phụ thuộc vào",
            definition: "Von jemandem oder etwas bestimmt werden.",
            examples: [
              { de: "Meine Entscheidung hängt vom Gehalt ab.", vi: "Quyết định của tôi phụ thuộc vào mức lương." },
              { de: "Das hängt ganz von den Umständen ab.", vi: "Điều đó hoàn toàn tùy hoàn cảnh." },
            ],
            note: "trennbar, unregelmäßig: hängt ab, hing ab, hat abgehangen.",
          },
          {
            id: "von-v2",
            label: "2. profitieren von + Dat.",
            meaning: "hưởng lợi từ",
            definition: "Einen Vorteil aus etwas ziehen.",
            examples: [
              { de: "Von der Digitalisierung profitieren vor allem junge Leute.", vi: "Người trẻ đặc biệt hưởng lợi từ số hóa." },
              { de: "Beide Seiten profitieren von dieser Zusammenarbeit.", vi: "Cả hai bên đều hưởng lợi từ hợp tác này." },
            ],
          },
          {
            id: "von-v3",
            label: "3. halten von + Dat.",
            meaning: "nghĩ thế nào về",
            definition: "Eine bestimmte Meinung über etwas oder jemanden haben.",
            examples: [
              { de: "Was hältst du von diesem Vorschlag?", vi: "Bạn nghĩ sao về đề xuất này?" },
              { de: "Ich halte nicht viel von solchen Diäten.", vi: "Tôi không đánh giá cao những kiểu ăn kiêng đó." },
            ],
            note: "Câu hỏi kinh điển trong phần Nói: Was halten Sie von …?",
          },
          {
            id: "von-v4",
            label: "4. überzeugen von + Dat.",
            meaning: "thuyết phục về",
            definition: "Jemanden dazu bringen, dass er etwas glaubt.",
            examples: [
              { de: "Er hat mich von seinem Plan überzeugt.", vi: "Anh ấy đã thuyết phục tôi về kế hoạch của mình." },
              { de: "Ich bin davon überzeugt, dass sich das lohnt.", vi: "Tôi tin chắc rằng việc đó đáng giá." },
            ],
            note: "Cụm nêu quan điểm: Ich bin davon überzeugt, dass …",
          },
          {
            id: "von-v5",
            label: "5. träumen von + Dat.",
            meaning: "mơ về, ước mơ",
            definition: "Sich etwas sehr wünschen oder im Schlaf davon träumen.",
            examples: [
              { de: "Sie träumt von einem eigenen Haus.", vi: "Cô ấy mơ về một căn nhà riêng." },
              { de: "Ich habe letzte Nacht von meiner Kindheit geträumt.", vi: "Đêm qua tôi mơ về tuổi thơ." },
            ],
          },
          {
            id: "von-v6",
            label: "6. sich erholen von + Dat.",
            meaning: "hồi phục sau",
            definition: "Nach einer Anstrengung oder Krankheit wieder fit werden.",
            examples: [
              { de: "Ich muss mich erst von der Grippe erholen.", vi: "Tôi cần hồi phục sau đợt cúm đã." },
              { de: "Im Urlaub erhole ich mich vom Stress im Büro.", vi: "Trong kỳ nghỉ tôi hồi phục sau căng thẳng công sở." },
            ],
          },
          {
            id: "von-v7",
            label: "7. ausgehen von + Dat.",
            meaning: "giả định rằng, xuất phát từ",
            definition: "Etwas als Grundlage annehmen.",
            examples: [
              { de: "Ich gehe davon aus, dass alle pünktlich kommen.", vi: "Tôi cho rằng mọi người sẽ đến đúng giờ." },
              { de: "Die Experten gehen von steigenden Kosten aus.", vi: "Các chuyên gia giả định chi phí sẽ tăng." },
            ],
            note: "Cụm trang trọng để nêu giả định trong bài Viết.",
          },
          {
            id: "von-v8",
            label: "8. sich verabschieden von + Dat.",
            meaning: "chào tạm biệt",
            definition: "Beim Weggehen Auf Wiedersehen sagen.",
            examples: [
              { de: "Ich habe mich von meinen Kollegen verabschiedet.", vi: "Tôi đã chào tạm biệt các đồng nghiệp." },
              { de: "Sie verabschiedete sich herzlich von der Gastfamilie.", vi: "Cô ấy chia tay thân mật với gia đình bản xứ." },
            ],
          },
          {
            id: "von-v9",
            label: "9. abraten von + Dat.",
            meaning: "khuyên can, khuyên đừng",
            definition: "Jemandem raten, etwas nicht zu tun.",
            examples: [
              { de: "Der Arzt hat mir von dieser Behandlung abgeraten.", vi: "Bác sĩ khuyên tôi đừng theo liệu pháp này." },
              { de: "Ich rate dringend davon ab.", vi: "Tôi khẩn thiết khuyên đừng làm vậy." },
            ],
            note: "Ngược lại: raten ZU + Dat. = khuyên nên làm.",
          },
          {
            id: "von-v10",
            label: "10. sich distanzieren von + Dat.",
            meaning: "tách mình khỏi, phủ nhận",
            definition: "Deutlich sagen, dass man mit etwas nichts zu tun hat.",
            examples: [
              { de: "Die Partei distanzierte sich von den Äußerungen.", vi: "Đảng đã tách mình khỏi những phát ngôn đó." },
              { de: "Er distanziert sich klar von jeder Form von Gewalt.", vi: "Anh ấy dứt khoát phản đối mọi hình thức bạo lực." },
            ],
          },
          {
            id: "von-v11",
            label: "11. leben von + Dat.",
            meaning: "sống bằng",
            definition: "Das Geld oder die Mittel zum Leben aus etwas beziehen.",
            examples: [
              { de: "Viele Studierende leben von einem Nebenjob.", vi: "Nhiều sinh viên sống bằng việc làm thêm." },
              { de: "Von diesem Gehalt kann man kaum leben.", vi: "Với mức lương này khó mà sống nổi." },
            ],
          },
        ],
      },
      {
        id: "von-nomen",
        label: "Nomen + von",
        meaning: "danh từ đi với von",
        children: [
          {
            id: "von-n1",
            label: "die Abhängigkeit von + Dat.",
            meaning: "sự lệ thuộc vào",
            definition: "Der Zustand, ohne etwas nicht auszukommen.",
            examples: [
              { de: "Die Abhängigkeit von fossilen Brennstoffen muss sinken.", vi: "Sự lệ thuộc vào nhiên liệu hóa thạch phải giảm." },
            ],
          },
          {
            id: "von-n2",
            label: "der Traum von + Dat.",
            meaning: "giấc mơ về",
            definition: "Ein großer Wunsch.",
            examples: [
              { de: "Der Traum vom eigenen Haus bleibt für viele unerfüllt.", vi: "Giấc mơ về căn nhà riêng với nhiều người vẫn dang dở." },
            ],
          },
          {
            id: "von-n3",
            label: "der Abschied von + Dat.",
            meaning: "sự chia tay với",
            definition: "Das Weggehen und Auf-Wiedersehen-Sagen.",
            examples: [
              { de: "Der Abschied von der Heimat fiel mir schwer.", vi: "Việc chia tay quê hương với tôi thật khó khăn." },
            ],
          },
          {
            id: "von-n4",
            label: "die Überzeugung von + Dat.",
            meaning: "niềm tin chắc vào",
            definition: "Die feste Meinung, dass etwas richtig ist.",
            examples: [
              { de: "Aus Überzeugung von der Sache arbeitet sie ehrenamtlich.", vi: "Vì tin vào lý tưởng đó, cô ấy làm tình nguyện." },
            ],
          },
        ],
      },
      {
        id: "von-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "von-ue1", label: "Meine Entscheidung hängt ___ dem Gehalt ab.", meaning: "phụ thuộc vào lương", answer: "von" },
          { id: "von-ue2", label: "Was hältst du ___ diesem Vorschlag?", meaning: "nghĩ sao về đề xuất", answer: "von" },
          { id: "von-ue3", label: "Beide Seiten profitieren ___ der Zusammenarbeit.", meaning: "hưởng lợi từ hợp tác", answer: "von" },
          { id: "von-ue4", label: "Ich gehe ___ aus, dass alle kommen.", meaning: "tôi cho rằng — dạng đại từ davon", answer: "davon" },
          { id: "von-ue5", label: "Der Arzt hat mir ___ dieser Behandlung abgeraten.", meaning: "khuyên đừng theo liệu pháp", answer: "von" },
        ],
      },
    ],
  },
};

export default topic;
