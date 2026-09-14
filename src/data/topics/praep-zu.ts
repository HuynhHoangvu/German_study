import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-zu",
  title: "zu + Dativ",
  titleVi: "Giới từ zu",
  description: "führen zu, beitragen zu, gehören zu … + danh từ đi với zu",
  color: "#1e3a8a",
  level: "B2",
  category: "praeposition",
  root: {
    id: "root",
    label: "zu + Dativ",
    meaning: "giới từ zu — luôn đi với Dativ",
    note: "Câu hỏi: Wozu …? / Zu wem …? Nhóm ý nghĩa: dẫn đến kết quả, thuộc về, mời/kêu gọi. Rất mạnh khi viết câu nhân quả.",
    children: [
      {
        id: "zu-verben",
        label: "Verben + zu",
        meaning: "động từ đi với zu",
        children: [
          {
            id: "zu-v1",
            label: "1. führen zu + Dat.",
            meaning: "dẫn đến (hệ quả)",
            definition: "Eine bestimmte Folge haben.",
            examples: [
              { de: "Stress führt oft zu gesundheitlichen Problemen.", vi: "Căng thẳng thường dẫn đến vấn đề sức khỏe." },
              { de: "Das Gespräch führte zu keinem Ergebnis.", vi: "Cuộc trò chuyện không dẫn đến kết quả nào." },
            ],
            note: "Động từ chủ lực khi nêu nguyên nhân - hệ quả trong bài Viết B2.",
          },
          {
            id: "zu-v2",
            label: "2. beitragen zu + Dat.",
            meaning: "góp phần vào",
            definition: "Einen Teil dazu tun, dass etwas gelingt oder passiert.",
            examples: [
              { de: "Jeder kann zum Umweltschutz beitragen.", vi: "Mỗi người đều có thể góp phần bảo vệ môi trường." },
              { de: "Das trägt wesentlich zur Verbesserung der Lage bei.", vi: "Điều đó góp phần đáng kể cải thiện tình hình." },
            ],
            note: "trennbar, unregelmäßig: trägt bei, trug bei, hat beigetragen.",
          },
          {
            id: "zu-v3",
            label: "3. gehören zu + Dat.",
            meaning: "thuộc về, nằm trong số",
            definition: "Ein Teil von etwas sein.",
            examples: [
              { de: "Pünktlichkeit gehört zu den wichtigsten Tugenden in Deutschland.", vi: "Đúng giờ thuộc những đức tính quan trọng nhất ở Đức." },
              { de: "Er gehört zu den besten Studenten des Jahrgangs.", vi: "Anh ấy nằm trong số sinh viên giỏi nhất khóa." },
            ],
          },
          {
            id: "zu-v4",
            label: "4. gratulieren zu + Dat.",
            meaning: "chúc mừng về",
            definition: "Jemandem Glückwünsche aussprechen.",
            examples: [
              { de: "Ich gratuliere dir zum bestandenen Examen!", vi: "Chúc mừng bạn đã đỗ kỳ thi!" },
              { de: "Wir gratulieren Ihnen herzlich zur Beförderung.", vi: "Chúng tôi chúc mừng anh/chị được thăng chức." },
            ],
            note: "jemandem (Dat.) ZU etwas (Dat.) gratulieren.",
          },
          {
            id: "zu-v5",
            label: "5. einladen zu + Dat.",
            meaning: "mời đến (dịp gì)",
            definition: "Jemanden bitten, zu einem Anlass zu kommen.",
            examples: [
              { de: "Sie hat mich zu ihrer Hochzeit eingeladen.", vi: "Cô ấy đã mời tôi đến đám cưới." },
              { de: "Wir laden Sie herzlich zu unserem Sommerfest ein.", vi: "Chúng tôi trân trọng mời quý vị đến lễ hội mùa hè." },
            ],
          },
          {
            id: "zu-v6",
            label: "6. neigen zu + Dat.",
            meaning: "có xu hướng",
            definition: "Eine Tendenz zu einem bestimmten Verhalten haben.",
            examples: [
              { de: "Er neigt dazu, alles zu dramatisieren.", vi: "Anh ta có xu hướng làm mọi chuyện thành bi kịch." },
              { de: "Junge Menschen neigen zu spontanen Käufen.", vi: "Người trẻ có xu hướng mua sắm bốc đồng." },
            ],
          },
          {
            id: "zu-v7",
            label: "7. auffordern zu + Dat.",
            meaning: "kêu gọi, yêu cầu làm gì",
            definition: "Jemanden deutlich bitten, etwas zu tun.",
            examples: [
              { de: "Die Stadt fordert die Bürger zum Wassersparen auf.", vi: "Thành phố kêu gọi người dân tiết kiệm nước." },
              { de: "Der Lehrer forderte uns zur Mitarbeit auf.", vi: "Thầy giáo yêu cầu chúng tôi tham gia xây dựng bài." },
            ],
          },
          {
            id: "zu-v8",
            label: "8. sich äußern zu + Dat.",
            meaning: "phát biểu về",
            definition: "Seine Meinung zu einem Thema sagen.",
            examples: [
              { de: "Der Minister wollte sich zu den Vorwürfen nicht äußern.", vi: "Bộ trưởng không muốn phát biểu về các cáo buộc." },
              { de: "Möchten Sie sich dazu äußern?", vi: "Quý vị có muốn nêu ý kiến về điều đó không?" },
            ],
          },
          {
            id: "zu-v9",
            label: "9. passen zu + Dat.",
            meaning: "hợp với",
            definition: "Gut zu etwas oder jemandem passen.",
            examples: [
              { de: "Diese Aufgabe passt gut zu deinen Stärken.", vi: "Nhiệm vụ này rất hợp với thế mạnh của bạn." },
              { de: "Der Schal passt nicht zu der Jacke.", vi: "Cái khăn không hợp với áo khoác." },
            ],
          },
          {
            id: "zu-v10",
            label: "10. zwingen / überreden zu + Dat.",
            meaning: "ép buộc / thuyết phục làm gì",
            definition: "Jemanden gegen seinen Willen oder durch Reden zu etwas bringen.",
            examples: [
              { de: "Niemand kann dich zu dieser Entscheidung zwingen.", vi: "Không ai có thể ép bạn quyết định như vậy." },
              { de: "Sie hat mich zum Mitmachen überredet.", vi: "Cô ấy đã thuyết phục tôi tham gia." },
            ],
          },
          {
            id: "zu-v11",
            label: "11. sich entschließen zu + Dat.",
            meaning: "quyết tâm làm",
            definition: "Nach längerem Überlegen eine Entscheidung treffen.",
            examples: [
              { de: "Er hat sich zu einem Neuanfang entschlossen.", vi: "Anh ấy đã quyết tâm bắt đầu lại." },
              { de: "Wir haben uns zum Kauf entschlossen.", vi: "Chúng tôi đã quyết định mua." },
            ],
          },
        ],
      },
      {
        id: "zu-nomen",
        label: "Nomen + zu",
        meaning: "danh từ đi với zu",
        children: [
          {
            id: "zu-n1",
            label: "der Beitrag zu + Dat.",
            meaning: "sự đóng góp vào",
            definition: "Der eigene Anteil an einer Sache.",
            examples: [
              { de: "Das ist ein wichtiger Beitrag zum Klimaschutz.", vi: "Đó là đóng góp quan trọng cho bảo vệ khí hậu." },
            ],
          },
          {
            id: "zu-n2",
            label: "die Bereitschaft zu + Dat.",
            meaning: "sự sẵn sàng cho",
            definition: "Der Wille, etwas zu tun.",
            examples: [
              { de: "Die Bereitschaft zur Zusammenarbeit ist groß.", vi: "Sự sẵn sàng hợp tác là rất lớn." },
            ],
          },
          {
            id: "zu-n3",
            label: "der Zugang zu + Dat.",
            meaning: "sự tiếp cận với",
            definition: "Die Möglichkeit, etwas zu nutzen.",
            examples: [
              { de: "Nicht alle haben Zugang zu guter Bildung.", vi: "Không phải ai cũng được tiếp cận giáo dục tốt." },
            ],
          },
          {
            id: "zu-n4",
            label: "die Stellungnahme zu + Dat.",
            meaning: "bản nêu quan điểm về",
            definition: "Die offizielle Meinung zu einem Thema.",
            examples: [
              { de: "Die Firma veröffentlichte eine Stellungnahme zu den Vorwürfen.", vi: "Công ty đã công bố quan điểm về các cáo buộc." },
            ],
          },
          {
            id: "zu-n5",
            label: "die Einladung zu + Dat.",
            meaning: "lời mời đến",
            definition: "Die Bitte, zu einem Anlass zu kommen.",
            examples: [
              { de: "Vielen Dank für die Einladung zur Feier!", vi: "Cảm ơn vì lời mời đến buổi tiệc!" },
            ],
          },
        ],
      },
      {
        id: "zu-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "zu-ue1", label: "Stress führt oft ___ Problemen.", meaning: "dẫn đến vấn đề", answer: "zu" },
          { id: "zu-ue2", label: "Jeder kann ___ Umweltschutz beitragen. (der Umweltschutz)", meaning: "góp phần — zu + dem = ?", answer: "zum" },
          { id: "zu-ue3", label: "Ich gratuliere dir ___ bestandenen Prüfung! (die Prüfung)", meaning: "chúc mừng — zu + der = ?", answer: "zur" },
          { id: "zu-ue4", label: "Pünktlichkeit gehört ___ den wichtigsten Tugenden.", meaning: "thuộc về những đức tính", answer: "zu" },
          { id: "zu-ue5", label: "Er neigt ___, alles zu dramatisieren.", meaning: "có xu hướng — dạng đại từ", answer: "dazu" },
        ],
      },
    ],
  },
};

export default topic;
