import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-auf",
  title: "auf + Akkusativ",
  titleVi: "Giới từ auf",
  description: "achten auf, warten auf, sich freuen auf … + danh từ và ngoại lệ đi Dativ",
  color: "#0891b2",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "auf + Akkusativ",
    meaning: "giới từ auf — đi với động từ thì hầu như luôn Akkusativ",
    note: "Câu hỏi: Worauf …? (vật) / Auf wen …? (người). Ngoại lệ đi Dativ: bestehen auf, beruhen auf, basieren auf.",
    children: [
      {
        id: "auf-verben",
        label: "Verben + auf",
        meaning: "động từ đi với auf",
        children: [
          {
            id: "auf-v1",
            label: "1. achten auf + Akk.",
            meaning: "chú ý đến, để tâm đến",
            definition: "Auf etwas oder jemanden gut aufpassen.",
            examples: [
              { de: "Ich achte auf meine Gesundheit.", vi: "Tôi chú ý đến sức khỏe của mình." },
              { de: "Achte bitte auf den Verkehr!", vi: "Hãy chú ý đến giao thông nhé!" },
            ],
          },
          {
            id: "auf-v2",
            label: "2. antworten auf + Akk.",
            meaning: "trả lời (điều gì)",
            definition: "Eine Antwort geben.",
            examples: [
              { de: "Er antwortet auf meine E-Mail.", vi: "Anh ấy trả lời email của tôi." },
              { de: "Bitte antworte auf meine Frage!", vi: "Làm ơn trả lời câu hỏi của tôi!" },
            ],
            note: "antworten AUF + Akk. (điều gì) nhưng antworten + Dat. (ai): Er antwortet mir.",
          },
          {
            id: "auf-v3",
            label: "3. warten auf + Akk.",
            meaning: "chờ đợi ai/cái gì",
            definition: "Bleiben, bis jemand oder etwas kommt.",
            examples: [
              { de: "Ich warte seit einer Stunde auf den Bus.", vi: "Tôi đã chờ xe buýt một tiếng rồi." },
              { de: "Wir warten noch auf Ihre Rückmeldung.", vi: "Chúng tôi vẫn đang chờ phản hồi của quý vị." },
            ],
          },
          {
            id: "auf-v4",
            label: "4. sich vorbereiten auf + Akk.",
            meaning: "chuẩn bị cho",
            definition: "Sich für etwas Kommendes bereit machen.",
            examples: [
              { de: "Ich bereite mich intensiv auf die B2-Prüfung vor.", vi: "Tôi đang chuẩn bị ráo riết cho kỳ thi B2." },
              { de: "Er bereitet sich auf das Vorstellungsgespräch vor.", vi: "Anh ấy chuẩn bị cho buổi phỏng vấn." },
            ],
            note: "trennbar: bereitet sich vor, bereitete sich vor, hat sich vorbereitet.",
          },
          {
            id: "auf-v5",
            label: "5. sich freuen auf + Akk.",
            meaning: "mong chờ (điều sắp tới)",
            definition: "Sich auf etwas freuen, das erst in der Zukunft passiert.",
            examples: [
              { de: "Ich freue mich schon auf den Urlaub.", vi: "Tôi đang mong đến kỳ nghỉ." },
              { de: "Sie freut sich auf das Wiedersehen mit ihrer Familie.", vi: "Cô ấy mong đến ngày gặp lại gia đình." },
            ],
            note: "Phân biệt: sich freuen AUF = việc sắp tới; sich freuen ÜBER = việc đã xảy ra.",
          },
          {
            id: "auf-v6",
            label: "6. hoffen auf + Akk.",
            meaning: "hy vọng vào",
            definition: "Sich etwas wünschen und glauben, dass es eintritt.",
            examples: [
              { de: "Wir hoffen auf besseres Wetter.", vi: "Chúng tôi hy vọng thời tiết đẹp hơn." },
              { de: "Die Firma hofft auf einen neuen Auftrag.", vi: "Công ty hy vọng có đơn hàng mới." },
            ],
          },
          {
            id: "auf-v7",
            label: "7. verzichten auf + Akk.",
            meaning: "từ bỏ, không dùng đến",
            definition: "Etwas bewusst nicht tun oder nicht nehmen, obwohl man könnte.",
            examples: [
              { de: "Ich verzichte bewusst auf Zucker.", vi: "Tôi chủ động từ bỏ đường." },
              { de: "Aus Umweltgründen verzichten viele auf das eigene Auto.", vi: "Vì môi trường, nhiều người từ bỏ xe riêng." },
            ],
          },
          {
            id: "auf-v8",
            label: "8. sich verlassen auf + Akk.",
            meaning: "tin cậy, trông cậy vào",
            definition: "Jemandem so vertrauen, dass man sicher ist, er tut es.",
            examples: [
              { de: "Auf ihn kann man sich hundertprozentig verlassen.", vi: "Có thể tin cậy anh ấy tuyệt đối." },
              { de: "Verlass dich nicht auf sein Versprechen!", vi: "Đừng trông cậy vào lời hứa của anh ta!" },
            ],
          },
          {
            id: "auf-v9",
            label: "9. es kommt an auf + Akk.",
            meaning: "phụ thuộc vào, tùy vào",
            definition: "Von etwas abhängen; entscheidend sein.",
            examples: [
              { de: "Es kommt ganz auf das Wetter an.", vi: "Điều đó hoàn toàn tùy thời tiết." },
              { de: "Bei der Bewerbung kommt es vor allem auf die Erfahrung an.", vi: "Khi xin việc, quan trọng nhất là kinh nghiệm." },
            ],
            note: "Chỉ dùng dạng vô nhân xưng với 'es'. Rất hay dùng khi nói.",
          },
          {
            id: "auf-v10",
            label: "10. sich konzentrieren auf + Akk.",
            meaning: "tập trung vào",
            definition: "Die ganze Aufmerksamkeit auf eine Sache richten.",
            examples: [
              { de: "Ich kann mich nicht auf die Arbeit konzentrieren.", vi: "Tôi không thể tập trung vào công việc." },
              { de: "Konzentrier dich auf das Wesentliche!", vi: "Hãy tập trung vào điều cốt lõi!" },
            ],
          },
          {
            id: "auf-v11",
            label: "11. sich spezialisieren auf + Akk.",
            meaning: "chuyên về",
            definition: "Sich beruflich auf ein bestimmtes Gebiet festlegen.",
            examples: [
              { de: "Die Klinik hat sich auf Herzkrankheiten spezialisiert.", vi: "Phòng khám chuyên về bệnh tim." },
              { de: "Er hat sich auf Steuerrecht spezialisiert.", vi: "Anh ấy chuyên về luật thuế." },
            ],
          },
          {
            id: "auf-v12",
            label: "12. stoßen auf + Akk.",
            meaning: "tình cờ gặp, vấp phải",
            definition: "Etwas zufällig finden oder auf Widerstand treffen.",
            examples: [
              { de: "Bei der Recherche bin ich auf interessante Daten gestoßen.", vi: "Khi tra cứu, tôi tình cờ thấy dữ liệu thú vị." },
              { de: "Der Vorschlag stieß auf heftige Kritik.", vi: "Đề xuất vấp phải sự chỉ trích gay gắt." },
            ],
            note: "unregelmäßig mit sein: stößt, stieß, ist gestoßen.",
          },
          {
            id: "auf-v13",
            label: "13. reagieren auf + Akk.",
            meaning: "phản ứng với",
            definition: "Auf etwas antworten oder sich durch etwas verändern.",
            examples: [
              { de: "Sie hat sofort auf meine Nachricht reagiert.", vi: "Cô ấy phản hồi tin nhắn của tôi ngay." },
              { de: "Meine Haut reagiert empfindlich auf die Sonne.", vi: "Da tôi phản ứng nhạy cảm với nắng." },
            ],
          },
          {
            id: "auf-v14",
            label: "14. sich beziehen auf + Akk.",
            meaning: "đề cập, liên hệ đến",
            definition: "Von etwas sprechen, das vorher genannt wurde.",
            examples: [
              { de: "Ich beziehe mich auf Ihr Schreiben vom 5. Mai.", vi: "Tôi xin đề cập đến thư của quý vị ngày 5 tháng 5." },
              { de: "Die Studie bezieht sich auf junge Erwachsene.", vi: "Nghiên cứu này liên quan đến người trẻ trưởng thành." },
            ],
            note: "Cụm chuẩn mở đầu thư trang trọng trong phần Viết B2.",
          },
          {
            id: "auf-v15",
            label: "15. hinweisen auf + Akk.",
            meaning: "chỉ ra, lưu ý về",
            definition: "Jemanden auf etwas Wichtiges aufmerksam machen.",
            examples: [
              { de: "Ich möchte darauf hinweisen, dass die Frist morgen endet.", vi: "Tôi muốn lưu ý rằng hạn chót là ngày mai." },
              { de: "Der Artikel weist auf ein ernstes Problem hin.", vi: "Bài báo chỉ ra một vấn đề nghiêm trọng." },
            ],
          },
        ],
      },
      {
        id: "auf-nomen",
        label: "Nomen + auf",
        meaning: "danh từ đi với auf",
        note: "Danh từ giữ nguyên giới từ của động từ gốc: hoffen auf → die Hoffnung auf.",
        children: [
          {
            id: "auf-n1",
            label: "die Hoffnung auf + Akk.",
            meaning: "niềm hy vọng vào",
            definition: "Der Wunsch, dass etwas Gutes passiert.",
            examples: [
              { de: "Die Hoffnung auf eine schnelle Lösung ist gering.", vi: "Hy vọng về một giải pháp nhanh là rất mong manh." },
            ],
          },
          {
            id: "auf-n2",
            label: "die Antwort auf + Akk.",
            meaning: "câu trả lời cho",
            definition: "Das, was man auf eine Frage sagt.",
            examples: [
              { de: "Auf diese Frage gibt es keine einfache Antwort.", vi: "Với câu hỏi này không có câu trả lời đơn giản." },
            ],
          },
          {
            id: "auf-n3",
            label: "der Anspruch auf + Akk.",
            meaning: "quyền được hưởng",
            definition: "Das Recht, etwas zu bekommen.",
            examples: [
              { de: "Jeder Arbeitnehmer hat Anspruch auf bezahlten Urlaub.", vi: "Mỗi người lao động có quyền nghỉ phép có lương." },
            ],
          },
          {
            id: "auf-n4",
            label: "der Einfluss auf + Akk.",
            meaning: "ảnh hưởng đến",
            definition: "Die Wirkung, die jemand oder etwas auf etwas hat.",
            examples: [
              { de: "Werbung hat großen Einfluss auf das Kaufverhalten.", vi: "Quảng cáo ảnh hưởng lớn đến hành vi mua sắm." },
            ],
          },
          {
            id: "auf-n5",
            label: "Rücksicht nehmen auf + Akk.",
            meaning: "quan tâm, nể nang đến",
            definition: "Die Bedürfnisse anderer beachten.",
            examples: [
              { de: "Man sollte Rücksicht auf ältere Menschen nehmen.", vi: "Nên quan tâm đến người cao tuổi." },
            ],
          },
          {
            id: "auf-n6",
            label: "die Aussicht auf + Akk.",
            meaning: "triển vọng về",
            definition: "Die Chance, dass etwas in Zukunft passiert.",
            examples: [
              { de: "Ohne Abschluss hat man kaum Aussicht auf eine gute Stelle.", vi: "Không có bằng thì khó có triển vọng việc tốt." },
            ],
          },
        ],
      },
      {
        id: "auf-dativ",
        label: "Achtung: auf + Dativ",
        meaning: "ngoại lệ — auf đi với Dativ",
        note: "Chỉ vài động từ, nhưng rất hay ra đề bẫy.",
        children: [
          {
            id: "auf-d1",
            label: "bestehen auf + Dat.",
            meaning: "khăng khăng đòi",
            definition: "Etwas unbedingt fordern und nicht nachgeben.",
            examples: [
              { de: "Der Kunde besteht auf einer sofortigen Rückerstattung.", vi: "Khách hàng khăng khăng đòi hoàn tiền ngay." },
              { de: "Sie bestand auf ihrem Recht.", vi: "Cô ấy khăng khăng giữ quyền của mình." },
            ],
            note: "Phân biệt: bestehen AUS + Dat. = gồm có; eine Prüfung bestehen = thi đỗ.",
          },
          {
            id: "auf-d2",
            label: "beruhen auf + Dat.",
            meaning: "dựa trên, bắt nguồn từ",
            definition: "Die Grundlage in etwas haben.",
            examples: [
              { de: "Das Missverständnis beruht auf einem Übersetzungsfehler.", vi: "Sự hiểu lầm bắt nguồn từ một lỗi dịch thuật." },
              { de: "Seine Theorie beruht auf jahrelanger Forschung.", vi: "Lý thuyết của ông dựa trên nhiều năm nghiên cứu." },
            ],
          },
          {
            id: "auf-d3",
            label: "basieren auf + Dat.",
            meaning: "dựa trên cơ sở",
            definition: "Auf einer Grundlage aufgebaut sein.",
            examples: [
              { de: "Der Film basiert auf einer wahren Begebenheit.", vi: "Bộ phim dựa trên một sự kiện có thật." },
            ],
          },
        ],
      },
      {
        id: "auf-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "auf-ue1", label: "Ich freue mich ___ das Wochenende.", meaning: "mong chờ cuối tuần", answer: "auf" },
          { id: "auf-ue2", label: "Achte bitte ___ den Verkehr!", meaning: "chú ý giao thông", answer: "auf" },
          { id: "auf-ue3", label: "Der Kunde besteht ___ einer Rückerstattung.", meaning: "khăng khăng đòi (+ Dativ)", answer: "auf" },
          { id: "auf-ue4", label: "Ich bereite mich ___ die Prüfung vor.", meaning: "chuẩn bị cho kỳ thi", answer: "auf" },
          { id: "auf-ue5", label: "Jeder hat Anspruch ___ bezahlten Urlaub.", meaning: "quyền nghỉ phép có lương", answer: "auf" },
          { id: "auf-ue6", label: "Es kommt ganz ___ das Wetter an.", meaning: "tùy vào thời tiết", answer: "auf" },
        ],
      },
    ],
  },
};

export default topic;
