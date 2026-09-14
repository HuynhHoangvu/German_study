import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-nach",
  title: "nach + Dativ",
  titleVi: "Giới từ nach",
  description: "fragen nach, suchen nach, streben nach … + danh từ đi với nach",
  color: "#155e75",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "nach + Dativ",
    meaning: "giới từ nach — luôn đi với Dativ",
    note: "Câu hỏi: Wonach …? / Nach wem …? Nhóm ý nghĩa: hỏi/tìm kiếm, khao khát, theo chuẩn nào.",
    children: [
      {
        id: "nach-verben",
        label: "Verben + nach",
        meaning: "động từ đi với nach",
        children: [
          {
            id: "nach-v1",
            label: "1. fragen nach + Dat.",
            meaning: "hỏi thăm về",
            definition: "Eine Information über jemanden oder etwas erbitten.",
            examples: [
              { de: "Ein Tourist hat nach dem Weg gefragt.", vi: "Một du khách đã hỏi đường." },
              { de: "Sie fragte nach deiner Gesundheit.", vi: "Cô ấy hỏi thăm sức khỏe của bạn." },
            ],
          },
          {
            id: "nach-v2",
            label: "2. suchen nach + Dat.",
            meaning: "tìm kiếm",
            definition: "Sich bemühen, etwas oder jemanden zu finden.",
            examples: [
              { de: "Ich suche seit Wochen nach einer bezahlbaren Wohnung.", vi: "Tôi tìm căn hộ giá phải chăng đã nhiều tuần." },
              { de: "Die Polizei sucht nach Zeugen des Unfalls.", vi: "Cảnh sát đang tìm nhân chứng vụ tai nạn." },
            ],
          },
          {
            id: "nach-v3",
            label: "3. sich erkundigen nach + Dat.",
            meaning: "hỏi thăm (lịch sự)",
            definition: "Höflich um Auskunft bitten.",
            examples: [
              { de: "Ich möchte mich nach den Öffnungszeiten erkundigen.", vi: "Tôi muốn hỏi về giờ mở cửa." },
              { de: "Er erkundigte sich nach dem Stand der Bewerbung.", vi: "Anh ấy hỏi thăm về tình trạng hồ sơ xin việc." },
            ],
            note: "Trang trọng hơn 'fragen nach' — rất hợp cho email B2.",
          },
          {
            id: "nach-v4",
            label: "4. sich sehnen nach + Dat.",
            meaning: "khao khát, nhớ da diết",
            definition: "Etwas oder jemanden sehr stark vermissen.",
            examples: [
              { de: "Ich sehne mich nach meiner Heimat.", vi: "Tôi nhớ quê hương da diết." },
              { de: "Nach der stressigen Woche sehnt sie sich nach Ruhe.", vi: "Sau tuần căng thẳng, cô ấy khao khát yên tĩnh." },
            ],
          },
          {
            id: "nach-v5",
            label: "5. streben nach + Dat.",
            meaning: "phấn đấu vì",
            definition: "Sich zielstrebig um etwas bemühen.",
            examples: [
              { de: "Viele streben nach beruflichem Erfolg.", vi: "Nhiều người phấn đấu vì thành công nghề nghiệp." },
              { de: "Das Unternehmen strebt nach mehr Nachhaltigkeit.", vi: "Doanh nghiệp hướng tới sự bền vững hơn." },
            ],
          },
          {
            id: "nach-v6",
            label: "6. sich richten nach + Dat.",
            meaning: "tuân theo, tùy theo",
            definition: "Sich an etwas orientieren oder von etwas abhängen.",
            examples: [
              { de: "Der Preis richtet sich nach der Größe der Wohnung.", vi: "Giá tùy theo diện tích căn hộ." },
              { de: "Ich richte mich ganz nach deinen Wünschen.", vi: "Tôi hoàn toàn theo ý bạn." },
            ],
          },
          {
            id: "nach-v7",
            label: "7. riechen / schmecken nach + Dat.",
            meaning: "có mùi/vị như",
            definition: "Einen bestimmten Geruch oder Geschmack haben.",
            examples: [
              { de: "Hier riecht es nach frischem Kaffee.", vi: "Ở đây có mùi cà phê mới pha." },
              { de: "Die Suppe schmeckt stark nach Ingwer.", vi: "Món súp có vị gừng đậm." },
            ],
          },
          {
            id: "nach-v8",
            label: "8. greifen nach + Dat.",
            meaning: "với tay lấy",
            definition: "Die Hand nach etwas ausstrecken, um es zu nehmen.",
            examples: [
              { de: "Das Kind griff nach meiner Hand.", vi: "Đứa bé nắm lấy tay tôi." },
              { de: "Viele greifen aus Stress nach Süßigkeiten.", vi: "Nhiều người vì căng thẳng mà với tay lấy đồ ngọt." },
            ],
          },
          {
            id: "nach-v9",
            label: "9. urteilen nach + Dat.",
            meaning: "đánh giá dựa theo",
            definition: "Eine Beurteilung auf einer Grundlage treffen.",
            examples: [
              { de: "Man sollte nicht nach dem Aussehen urteilen.", vi: "Không nên đánh giá qua vẻ bề ngoài." },
              { de: "Nach seinen Worten zu urteilen, ist er zufrieden.", vi: "Đánh giá qua lời anh ấy nói thì anh ấy hài lòng." },
            ],
          },
        ],
      },
      {
        id: "nach-nomen",
        label: "Nomen + nach",
        meaning: "danh từ đi với nach",
        children: [
          {
            id: "nach-n1",
            label: "die Suche nach + Dat.",
            meaning: "sự tìm kiếm",
            definition: "Das Bemühen, etwas zu finden.",
            examples: [
              { de: "Die Suche nach einer Wohnung dauert oft Monate.", vi: "Việc tìm nhà thường mất nhiều tháng." },
            ],
          },
          {
            id: "nach-n2",
            label: "die Frage nach + Dat.",
            meaning: "câu hỏi về",
            definition: "Der Wunsch nach einer Information.",
            examples: [
              { de: "Die Frage nach der Finanzierung bleibt offen.", vi: "Câu hỏi về nguồn tài chính vẫn bỏ ngỏ." },
            ],
          },
          {
            id: "nach-n3",
            label: "die Sehnsucht nach + Dat.",
            meaning: "nỗi khao khát",
            definition: "Das starke Verlangen nach etwas.",
            examples: [
              { de: "Die Sehnsucht nach der Familie wird im Ausland groß.", vi: "Nỗi nhớ gia đình ở nước ngoài rất lớn." },
            ],
          },
          {
            id: "nach-n4",
            label: "das Streben nach + Dat.",
            meaning: "sự theo đuổi",
            definition: "Das zielstrebige Bemühen um etwas.",
            examples: [
              { de: "Das Streben nach Anerkennung motiviert viele Menschen.", vi: "Sự theo đuổi được công nhận thúc đẩy nhiều người." },
            ],
          },
          {
            id: "nach-n5",
            label: "die Nachfrage nach + Dat.",
            meaning: "nhu cầu về",
            definition: "Das Interesse des Marktes an einem Produkt.",
            examples: [
              { de: "Die Nachfrage nach Pflegekräften steigt stetig.", vi: "Nhu cầu về nhân lực điều dưỡng tăng đều." },
            ],
          },
        ],
      },
      {
        id: "nach-uebung",
        label: "Beispielsätze",
        meaning: "câu ví dụ mẫu",
        children: [
          { id: "nach-ue1", label: "Ich suche nach einer Wohnung.", meaning: "tìm một căn hộ" },
          { id: "nach-ue2", label: "Ich möchte mich nach den Öffnungszeiten erkundigen.", meaning: "hỏi về giờ mở cửa" },
          { id: "nach-ue3", label: "Der Preis richtet sich nach der Größe.", meaning: "giá tùy theo diện tích" },
          { id: "nach-ue4", label: "Die Nachfrage nach Fachkräften steigt.", meaning: "nhu cầu nhân lực lành nghề" },
          { id: "nach-ue5", label: "Ich sehne mich nach meiner Heimat.", meaning: "nhớ quê hương" },
        ],
      },
    ],
  },
};

export default topic;
