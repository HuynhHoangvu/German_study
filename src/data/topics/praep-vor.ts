import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-vor",
  title: "vor + Dativ",
  titleVi: "Giới từ vor",
  description: "Angst haben vor, warnen vor, schützen vor … — nhóm sợ hãi & bảo vệ",
  color: "#86198f",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "vor + Dativ",
    meaning: "giới từ vor — đi với động từ thì luôn Dativ",
    note: "Nhóm ý nghĩa: sợ hãi, cảnh báo, bảo vệ, trốn chạy. Câu hỏi: Wovor …? / Vor wem …? Chỉ khi chỉ hướng di chuyển mới dùng Akkusativ: Ich stelle den Stuhl vor die Tür.",
    children: [
      {
        id: "vor-verben",
        label: "Verben + vor",
        meaning: "động từ đi với vor",
        children: [
          {
            id: "vor-v1",
            label: "1. Angst haben vor + Dat.",
            meaning: "sợ điều gì",
            definition: "Furcht vor etwas oder jemandem empfinden.",
            examples: [
              { de: "Viele Menschen haben Angst vor dem Fliegen.", vi: "Nhiều người sợ đi máy bay." },
              { de: "Ich habe keine Angst vor der Prüfung.", vi: "Tôi không sợ kỳ thi." },
            ],
          },
          {
            id: "vor-v2",
            label: "2. sich fürchten vor + Dat.",
            meaning: "e sợ",
            definition: "Angst vor etwas haben (etwas gehobener).",
            examples: [
              { de: "Das Kind fürchtet sich vor der Dunkelheit.", vi: "Đứa bé sợ bóng tối." },
              { de: "Er fürchtet sich vor dem Gespräch mit dem Chef.", vi: "Anh ấy e ngại cuộc nói chuyện với sếp." },
            ],
          },
          {
            id: "vor-v3",
            label: "3. warnen vor + Dat.",
            meaning: "cảnh báo về",
            definition: "Jemanden auf eine Gefahr aufmerksam machen.",
            examples: [
              { de: "Der Wetterdienst warnt vor schweren Stürmen.", vi: "Cơ quan khí tượng cảnh báo về bão lớn." },
              { de: "Ärzte warnen vor den Folgen von Schlafmangel.", vi: "Bác sĩ cảnh báo về hậu quả của thiếu ngủ." },
            ],
          },
          {
            id: "vor-v4",
            label: "4. schützen vor + Dat.",
            meaning: "bảo vệ khỏi",
            definition: "Dafür sorgen, dass jemandem nichts passiert.",
            examples: [
              { de: "Die Creme schützt die Haut vor der Sonne.", vi: "Kem bảo vệ da khỏi nắng." },
              { de: "Impfungen schützen vor schweren Krankheiten.", vi: "Tiêm chủng bảo vệ khỏi các bệnh nặng." },
            ],
          },
          {
            id: "vor-v5",
            label: "5. fliehen vor + Dat.",
            meaning: "chạy trốn khỏi",
            definition: "Vor einer Gefahr weglaufen.",
            examples: [
              { de: "Millionen Menschen fliehen vor Krieg und Gewalt.", vi: "Hàng triệu người chạy trốn chiến tranh và bạo lực." },
              { de: "Er floh vor der Verantwortung.", vi: "Anh ta trốn tránh trách nhiệm." },
            ],
            note: "unregelmäßig mit sein: flieht, floh, ist geflohen.",
          },
          {
            id: "vor-v6",
            label: "6. sich ekeln vor + Dat.",
            meaning: "ghê tởm, kinh tởm",
            definition: "Etwas sehr unangenehm oder widerlich finden.",
            examples: [
              { de: "Ich ekle mich vor Spinnen.", vi: "Tôi ghê tởm nhện." },
              { de: "Sie ekelt sich vor dem Geruch.", vi: "Cô ấy thấy kinh tởm cái mùi đó." },
            ],
          },
          {
            id: "vor-v7",
            label: "7. bewahren / retten vor + Dat.",
            meaning: "giữ gìn, cứu khỏi",
            definition: "Jemanden vor etwas Schlimmem schützen.",
            examples: [
              { de: "Das hat ihn vor einem großen Fehler bewahrt.", vi: "Điều đó đã giữ anh ấy khỏi một sai lầm lớn." },
              { de: "Die Feuerwehr rettete die Familie vor den Flammen.", vi: "Lính cứu hỏa đã cứu gia đình khỏi biển lửa." },
            ],
          },
          {
            id: "vor-v8",
            label: "8. Respekt haben vor + Dat.",
            meaning: "kính trọng, nể",
            definition: "Jemanden oder etwas sehr achten.",
            examples: [
              { de: "Ich habe großen Respekt vor ihrer Leistung.", vi: "Tôi rất nể thành tích của cô ấy." },
              { de: "Man sollte Respekt vor anderen Kulturen haben.", vi: "Nên tôn trọng các nền văn hóa khác." },
            ],
          },
          {
            id: "vor-v9",
            label: "9. sich verstecken vor + Dat.",
            meaning: "trốn khỏi, giấu mình",
            definition: "Sich so verbergen, dass jemand einen nicht findet.",
            examples: [
              { de: "Das Kind versteckt sich vor seinem Bruder.", vi: "Đứa bé trốn anh trai mình." },
              { de: "Du kannst dich nicht ewig vor dem Problem verstecken.", vi: "Bạn không thể trốn tránh vấn đề mãi được." },
            ],
          },
          {
            id: "vor-v10",
            label: "10. sich hüten vor + Dat.",
            meaning: "đề phòng, coi chừng",
            definition: "Vorsichtig sein, um Schaden zu vermeiden.",
            examples: [
              { de: "Hüten Sie sich vor unseriösen Angeboten!", vi: "Hãy coi chừng những lời chào mời không đáng tin!" },
              { de: "Man sollte sich vor voreiligen Schlüssen hüten.", vi: "Nên đề phòng những kết luận vội vàng." },
            ],
          },
        ],
      },
      {
        id: "vor-nomen",
        label: "Nomen + vor",
        meaning: "danh từ đi với vor",
        children: [
          {
            id: "vor-n1",
            label: "die Angst vor + Dat.",
            meaning: "nỗi sợ đối với",
            definition: "Das Gefühl der Furcht.",
            examples: [
              { de: "Die Angst vor dem Scheitern lähmt viele Menschen.", vi: "Nỗi sợ thất bại làm nhiều người tê liệt." },
            ],
          },
          {
            id: "vor-n2",
            label: "der Schutz vor + Dat.",
            meaning: "sự bảo vệ khỏi",
            definition: "Die Sicherheit gegen eine Gefahr.",
            examples: [
              { de: "Zum Schutz vor Infektionen sollte man die Hände waschen.", vi: "Để phòng nhiễm khuẩn, nên rửa tay." },
            ],
          },
          {
            id: "vor-n3",
            label: "die Warnung vor + Dat.",
            meaning: "lời cảnh báo về",
            definition: "Der Hinweis auf eine Gefahr.",
            examples: [
              { de: "Die Warnung vor dem Unwetter kam rechtzeitig.", vi: "Lời cảnh báo về giông bão đến kịp thời." },
            ],
          },
          {
            id: "vor-n4",
            label: "der Respekt vor + Dat.",
            meaning: "sự kính trọng đối với",
            definition: "Die Achtung gegenüber jemandem.",
            examples: [
              { de: "Der Respekt vor älteren Menschen ist in Vietnam sehr wichtig.", vi: "Sự kính trọng người cao tuổi rất quan trọng ở Việt Nam." },
            ],
          },
          {
            id: "vor-n5",
            label: "die Flucht vor + Dat.",
            meaning: "sự chạy trốn khỏi",
            definition: "Das Weglaufen vor einer Gefahr.",
            examples: [
              { de: "Die Flucht vor der Realität hilft niemandem.", vi: "Trốn chạy thực tại không giúp được ai." },
            ],
          },
        ],
      },
      {
        id: "vor-uebung",
        label: "Beispielsätze",
        meaning: "câu ví dụ mẫu",
        children: [
          { id: "vor-ue1", label: "Viele haben Angst vor dem Fliegen.", meaning: "sợ đi máy bay" },
          { id: "vor-ue2", label: "Die Creme schützt die Haut vor der Sonne.", meaning: "bảo vệ da khỏi nắng" },
          { id: "vor-ue3", label: "Ärzte warnen vor den Folgen von Stress.", meaning: "cảnh báo về hậu quả căng thẳng" },
          { id: "vor-ue4", label: "Ich habe großen Respekt vor ihrer Leistung.", meaning: "nể thành tích của cô ấy" },
          { id: "vor-ue5", label: "Sie fürchtet sich vor der Dunkelheit.", meaning: "sợ bóng tối — mạo từ ở Dativ" },
        ],
      },
    ],
  },
};

export default topic;
