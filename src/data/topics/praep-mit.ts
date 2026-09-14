import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-mit",
  title: "mit + Dativ",
  titleVi: "Giới từ mit",
  description: "sich beschäftigen mit, rechnen mit, umgehen mit … + danh từ đi với mit",
  color: "#075985",
  level: "B2",
  category: "praeposition",
  root: {
    id: "root",
    label: "mit + Dativ",
    meaning: "giới từ mit — luôn đi với Dativ, không có ngoại lệ",
    note: "Câu hỏi: Womit …? (vật) / Mit wem …? (người). Đây là giới từ Dativ thuần túy.",
    children: [
      {
        id: "mit-verben",
        label: "Verben + mit",
        meaning: "động từ đi với mit",
        children: [
          {
            id: "mit-v1",
            label: "1. sich beschäftigen mit + Dat.",
            meaning: "bận tâm, nghiên cứu về",
            definition: "Sich längere Zeit mit einem Thema oder einer Aufgabe befassen.",
            examples: [
              { de: "Ich beschäftige mich seit Jahren mit deutscher Grammatik.", vi: "Tôi nghiên cứu ngữ pháp Đức nhiều năm nay." },
              { de: "Die Studie beschäftigt sich mit dem Verhalten von Jugendlichen.", vi: "Nghiên cứu này bàn về hành vi thanh thiếu niên." },
            ],
          },
          {
            id: "mit-v2",
            label: "2. sich auseinandersetzen mit + Dat.",
            meaning: "phân tích, đối diện với",
            definition: "Sich kritisch und gründlich mit einem Thema befassen.",
            examples: [
              { de: "Man muss sich kritisch mit diesem Thema auseinandersetzen.", vi: "Cần phân tích chủ đề này một cách phê phán." },
              { de: "Sie setzt sich mit ihrer Vergangenheit auseinander.", vi: "Cô ấy đối diện với quá khứ của mình." },
            ],
            note: "Động từ ghi điểm cao trong bài Viết B2.",
          },
          {
            id: "mit-v3",
            label: "3. anfangen / beginnen mit + Dat.",
            meaning: "bắt đầu bằng",
            definition: "Mit einer Tätigkeit beginnen.",
            examples: [
              { de: "Ich fange morgen mit dem neuen Kurs an.", vi: "Ngày mai tôi bắt đầu khóa học mới." },
              { de: "Beginnen wir mit dem wichtigsten Punkt!", vi: "Chúng ta hãy bắt đầu với điểm quan trọng nhất!" },
            ],
          },
          {
            id: "mit-v4",
            label: "4. aufhören mit + Dat.",
            meaning: "ngừng, bỏ (thói quen)",
            definition: "Eine Tätigkeit beenden.",
            examples: [
              { de: "Er hat mit dem Rauchen aufgehört.", vi: "Anh ấy đã bỏ thuốc lá." },
              { de: "Hör bitte mit dem Lärm auf!", vi: "Làm ơn ngừng gây ồn đi!" },
            ],
          },
          {
            id: "mit-v5",
            label: "5. rechnen mit + Dat.",
            meaning: "tính đến, lường trước",
            definition: "Etwas erwarten oder für wahrscheinlich halten.",
            examples: [
              { de: "Mit so einer Reaktion hatte ich nicht gerechnet.", vi: "Tôi đã không lường trước phản ứng như vậy." },
              { de: "Wir rechnen mit steigenden Preisen.", vi: "Chúng tôi dự tính giá sẽ tăng." },
            ],
          },
          {
            id: "mit-v6",
            label: "6. umgehen mit + Dat.",
            meaning: "ứng xử, xử lý với",
            definition: "Sich in einer bestimmten Weise verhalten oder etwas handhaben.",
            examples: [
              { de: "Man muss lernen, mit Kritik umzugehen.", vi: "Phải học cách ứng xử với lời phê bình." },
              { de: "Sie geht sehr sorgfältig mit den Geräten um.", vi: "Cô ấy sử dụng thiết bị rất cẩn thận." },
            ],
            note: "trennbar: geht um, ging um, ist umgegangen.",
          },
          {
            id: "mit-v7",
            label: "7. sich abfinden mit + Dat.",
            meaning: "cam chịu, chấp nhận",
            definition: "Etwas Unangenehmes akzeptieren, weil man es nicht ändern kann.",
            examples: [
              { de: "Ich muss mich mit der Absage abfinden.", vi: "Tôi phải chấp nhận lời từ chối." },
              { de: "Er kann sich nicht mit der Situation abfinden.", vi: "Anh ấy không thể chấp nhận hoàn cảnh này." },
            ],
          },
          {
            id: "mit-v8",
            label: "8. zusammenhängen mit + Dat.",
            meaning: "liên quan đến",
            definition: "In einem Zusammenhang mit etwas stehen.",
            examples: [
              { de: "Das Problem hängt mit dem Klimawandel zusammen.", vi: "Vấn đề này liên quan đến biến đổi khí hậu." },
              { de: "Womit hängt sein Rücktritt zusammen?", vi: "Việc ông ấy từ chức liên quan đến điều gì?" },
            ],
          },
          {
            id: "mit-v9",
            label: "9. vergleichen mit + Dat.",
            meaning: "so sánh với",
            definition: "Untersuchen, was bei zwei Dingen gleich oder anders ist.",
            examples: [
              { de: "Verglichen mit früher ist die Lage heute besser.", vi: "So với trước kia, tình hình nay tốt hơn." },
              { de: "Man kann Deutschland nicht mit Vietnam vergleichen.", vi: "Không thể so sánh nước Đức với Việt Nam." },
            ],
          },
          {
            id: "mit-v10",
            label: "10. übereinstimmen mit + Dat.",
            meaning: "trùng khớp, nhất trí với",
            definition: "Die gleiche Meinung haben oder gleich sein.",
            examples: [
              { de: "Ihre Aussage stimmt nicht mit den Fakten überein.", vi: "Lời khai của cô ấy không khớp với thực tế." },
              { de: "In diesem Punkt stimme ich mit Ihnen überein.", vi: "Ở điểm này tôi nhất trí với quý vị." },
            ],
          },
          {
            id: "mit-v11",
            label: "11. sich unterhalten mit + Dat.",
            meaning: "trò chuyện với",
            definition: "Ein längeres Gespräch mit jemandem führen.",
            examples: [
              { de: "Ich habe mich lange mit meinem Nachbarn unterhalten.", vi: "Tôi đã trò chuyện lâu với người hàng xóm." },
              { de: "Worüber habt ihr euch unterhalten?", vi: "Các bạn đã trò chuyện về chuyện gì?" },
            ],
          },
          {
            id: "mit-v12",
            label: "12. sich begnügen mit + Dat.",
            meaning: "bằng lòng với (ít)",
            definition: "Mit wenig zufrieden sein.",
            examples: [
              { de: "Wir müssen uns vorerst mit einer kleinen Wohnung begnügen.", vi: "Trước mắt chúng tôi phải bằng lòng với căn hộ nhỏ." },
              { de: "Er begnügt sich nicht mit dem zweiten Platz.", vi: "Anh ấy không bằng lòng với vị trí thứ hai." },
            ],
          },
        ],
      },
      {
        id: "mit-nomen",
        label: "Nomen + mit",
        meaning: "danh từ đi với mit",
        children: [
          {
            id: "mit-n1",
            label: "der Umgang mit + Dat.",
            meaning: "cách ứng xử/sử dụng với",
            definition: "Die Art, wie man mit etwas oder jemandem umgeht.",
            examples: [
              { de: "Der Umgang mit sozialen Medien will gelernt sein.", vi: "Cách sử dụng mạng xã hội cần phải học." },
            ],
          },
          {
            id: "mit-n2",
            label: "die Zufriedenheit mit + Dat.",
            meaning: "sự hài lòng với",
            definition: "Das Gefühl, dass etwas gut ist.",
            examples: [
              { de: "Die Zufriedenheit mit dem Service ist gestiegen.", vi: "Mức hài lòng với dịch vụ đã tăng." },
            ],
          },
          {
            id: "mit-n3",
            label: "der Vergleich mit + Dat.",
            meaning: "sự so sánh với",
            definition: "Das Gegenüberstellen von zwei Dingen.",
            examples: [
              { de: "Im Vergleich mit anderen Städten ist die Miete hier niedrig.", vi: "So với các thành phố khác, tiền thuê ở đây thấp." },
            ],
          },
          {
            id: "mit-n4",
            label: "die Beschäftigung mit + Dat.",
            meaning: "việc nghiên cứu/bận tâm về",
            definition: "Das intensive Befassen mit einem Thema.",
            examples: [
              { de: "Die Beschäftigung mit der Sprache macht mir Freude.", vi: "Việc nghiên cứu ngôn ngữ khiến tôi vui." },
            ],
          },
        ],
      },
      {
        id: "mit-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "mit-ue1", label: "Ich beschäftige mich ___ diesem Thema.", meaning: "nghiên cứu chủ đề này", answer: "mit" },
          { id: "mit-ue2", label: "Man muss lernen, ___ Kritik umzugehen.", meaning: "ứng xử với phê bình", answer: "mit" },
          { id: "mit-ue3", label: "Wir rechnen ___ steigenden Preisen.", meaning: "lường trước giá tăng", answer: "mit" },
          { id: "mit-ue4", label: "Er hat ___ dem Rauchen aufgehört.", meaning: "đã bỏ thuốc lá", answer: "mit" },
          { id: "mit-ue5", label: "Ich beschäftige mich mit ___ Thema. (das Thema)", meaning: "điền mạo từ Dativ", answer: "dem" },
        ],
      },
    ],
  },
};

export default topic;
