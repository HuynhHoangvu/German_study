import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-in",
  title: "in + Akkusativ / + Dativ",
  titleVi: "Giới từ in",
  description: "sich verlieben in (Akk.) vs. bestehen in (Dat.) — phân biệt hai cách",
  color: "#581c87",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "in + Akk. / + Dat.",
    meaning: "giới từ in — đi cả Akkusativ lẫn Dativ, tùy động từ",
    note: "Mẹo: in + Akk. khi có chuyển động/biến đổi vào trong (geraten in, investieren in); in + Dat. khi mô tả trạng thái, phạm vi (bestehen in, sich auskennen in).",
    children: [
      {
        id: "in-akk",
        label: "in + Akkusativ",
        meaning: "in đi với Akkusativ",
        children: [
          {
            id: "in-a1",
            label: "1. sich verlieben in + Akk.",
            meaning: "phải lòng, yêu",
            definition: "Anfangen, jemanden zu lieben.",
            examples: [
              { de: "Er hat sich in seine Nachbarin verliebt.", vi: "Anh ấy đã phải lòng cô hàng xóm." },
              { de: "Ich habe mich sofort in diese Stadt verliebt.", vi: "Tôi đã yêu thành phố này ngay lập tức." },
            ],
          },
          {
            id: "in-a2",
            label: "2. investieren in + Akk.",
            meaning: "đầu tư vào",
            definition: "Geld oder Zeit einsetzen, um später zu profitieren.",
            examples: [
              { de: "Der Staat investiert in erneuerbare Energien.", vi: "Nhà nước đầu tư vào năng lượng tái tạo." },
              { de: "Man sollte in seine Bildung investieren.", vi: "Nên đầu tư vào việc học của mình." },
            ],
          },
          {
            id: "in-a3",
            label: "3. geraten in + Akk.",
            meaning: "rơi vào (tình huống xấu)",
            definition: "Ungewollt in eine schwierige Lage kommen.",
            examples: [
              { de: "Die Familie ist in finanzielle Schwierigkeiten geraten.", vi: "Gia đình đó đã rơi vào khó khăn tài chính." },
              { de: "Wir sind in einen heftigen Streit geraten.", vi: "Chúng tôi đã rơi vào cuộc cãi vã gay gắt." },
            ],
            note: "unregelmäßig mit sein: gerät, geriet, ist geraten.",
          },
          {
            id: "in-a4",
            label: "4. sich einmischen in + Akk.",
            meaning: "can thiệp, xen vào",
            definition: "Sich in eine Sache mischen, die einen nichts angeht.",
            examples: [
              { de: "Misch dich nicht in fremde Angelegenheiten ein!", vi: "Đừng xen vào chuyện của người khác!" },
              { de: "Die Eltern mischen sich zu stark in ihr Leben ein.", vi: "Bố mẹ can thiệp quá nhiều vào cuộc sống của cô ấy." },
            ],
          },
          {
            id: "in-a5",
            label: "5. eingreifen in + Akk.",
            meaning: "can thiệp vào",
            definition: "Aktiv in eine laufende Situation eingreifen, um sie zu ändern.",
            examples: [
              { de: "Die Polizei musste in den Streit eingreifen.", vi: "Cảnh sát đã phải can thiệp vào vụ cãi nhau." },
              { de: "Der Staat greift stark in den Wohnungsmarkt ein.", vi: "Nhà nước can thiệp mạnh vào thị trường nhà ở." },
            ],
          },
          {
            id: "in-a6",
            label: "6. einwilligen in + Akk.",
            meaning: "đồng ý với",
            definition: "Offiziell Ja zu etwas sagen.",
            examples: [
              { de: "Der Patient willigte in die Operation ein.", vi: "Bệnh nhân đã đồng ý phẫu thuật." },
              { de: "Sie hat in den Kompromiss eingewilligt.", vi: "Cô ấy đã đồng ý với thỏa hiệp đó." },
            ],
          },
          {
            id: "in-a7",
            label: "7. sich verwandeln in + Akk.",
            meaning: "biến thành",
            definition: "Zu etwas ganz anderem werden.",
            examples: [
              { de: "Das alte Fabrikgelände hat sich in ein Wohnviertel verwandelt.", vi: "Khu nhà máy cũ đã biến thành khu dân cư." },
              { de: "Die Begeisterung verwandelte sich schnell in Enttäuschung.", vi: "Sự hào hứng nhanh chóng biến thành thất vọng." },
            ],
          },
          {
            id: "in-a8",
            label: "8. übersetzen in + Akk.",
            meaning: "dịch sang",
            definition: "Einen Text in eine andere Sprache bringen.",
            examples: [
              { de: "Das Buch wurde in 20 Sprachen übersetzt.", vi: "Cuốn sách đã được dịch sang 20 thứ tiếng." },
              { de: "Können Sie das ins Deutsche übersetzen?", vi: "Anh/chị dịch cái này sang tiếng Đức được không?" },
            ],
          },
        ],
      },
      {
        id: "in-dat",
        label: "in + Dativ",
        meaning: "in đi với Dativ",
        children: [
          {
            id: "in-d1",
            label: "1. bestehen in + Dat.",
            meaning: "nằm ở chỗ, cốt ở",
            definition: "Der Kern oder Inhalt von etwas sein.",
            examples: [
              { de: "Das Problem besteht darin, dass niemand zuständig ist.", vi: "Vấn đề nằm ở chỗ không ai chịu trách nhiệm." },
              { de: "Ihre Aufgabe besteht in der Betreuung der Kunden.", vi: "Nhiệm vụ của cô ấy là chăm sóc khách hàng." },
            ],
            note: "Ba dạng khác nhau: bestehen IN + Dat. = nằm ở; bestehen AUS + Dat. = gồm có; bestehen AUF + Dat. = khăng khăng đòi.",
          },
          {
            id: "in-d2",
            label: "2. sich unterscheiden in + Dat.",
            meaning: "khác nhau ở điểm",
            definition: "In einem bestimmten Punkt anders sein.",
            examples: [
              { de: "Die beiden Modelle unterscheiden sich nur im Preis.", vi: "Hai mẫu chỉ khác nhau ở giá." },
              { de: "Worin unterscheiden sich die Systeme?", vi: "Các hệ thống khác nhau ở điểm nào?" },
            ],
            note: "sich unterscheiden VON + Dat. = khác với cái gì.",
          },
          {
            id: "in-d3",
            label: "3. sich irren in + Dat.",
            meaning: "nhầm về",
            definition: "Eine falsche Meinung über etwas haben.",
            examples: [
              { de: "Da irren Sie sich in einem wichtigen Punkt.", vi: "Ở điểm quan trọng này thì quý vị nhầm rồi." },
              { de: "Ich habe mich in ihm geirrt.", vi: "Tôi đã nhầm về anh ta." },
            ],
          },
          {
            id: "in-d4",
            label: "4. sich auskennen in + Dat.",
            meaning: "rành, thông thạo về",
            definition: "Gute Kenntnisse in einem Bereich haben.",
            examples: [
              { de: "Er kennt sich gut in der deutschen Bürokratie aus.", vi: "Anh ấy rất rành thủ tục hành chính Đức." },
              { de: "Kennst du dich in dieser Gegend aus?", vi: "Bạn có rành khu vực này không?" },
            ],
          },
          {
            id: "in-d5",
            label: "5. unterrichten in + Dat.",
            meaning: "dạy môn gì",
            definition: "Ein Fach lehren.",
            examples: [
              { de: "Sie unterrichtet in Mathematik und Physik.", vi: "Cô ấy dạy toán và vật lý." },
              { de: "Er wird in Deutsch als Fremdsprache unterrichtet.", vi: "Anh ấy được dạy tiếng Đức như ngoại ngữ." },
            ],
          },
        ],
      },
      {
        id: "in-nomen",
        label: "Nomen + in",
        meaning: "danh từ đi với in",
        children: [
          {
            id: "in-n1",
            label: "die Einführung in + Akk.",
            meaning: "phần nhập môn về",
            definition: "Der erste Überblick über ein Thema.",
            examples: [
              { de: "Der Kurs bietet eine Einführung in die deutsche Grammatik.", vi: "Khóa học cung cấp phần nhập môn ngữ pháp Đức." },
            ],
          },
          {
            id: "in-n2",
            label: "die Übersetzung in + Akk.",
            meaning: "bản dịch sang",
            definition: "Ein Text in einer anderen Sprache.",
            examples: [
              { de: "Die Übersetzung ins Vietnamesische ist sehr gelungen.", vi: "Bản dịch sang tiếng Việt rất thành công." },
            ],
          },
          {
            id: "in-n3",
            label: "die Erfahrung in + Dat.",
            meaning: "kinh nghiệm trong lĩnh vực",
            definition: "Praktisches Wissen in einem Bereich.",
            examples: [
              { de: "Wir suchen jemanden mit Erfahrung in der Pflege.", vi: "Chúng tôi tìm người có kinh nghiệm trong ngành điều dưỡng." },
            ],
          },
          {
            id: "in-n4",
            label: "der Unterschied in + Dat.",
            meaning: "sự khác biệt ở",
            definition: "Der Punkt, in dem zwei Dinge nicht gleich sind.",
            examples: [
              { de: "Der Unterschied in der Qualität ist deutlich spürbar.", vi: "Sự khác biệt về chất lượng thấy rõ." },
            ],
          },
        ],
      },
      {
        id: "in-uebung",
        label: "Beispielsätze: Akkusativ vs. Dativ",
        meaning: "câu ví dụ phân biệt hai cách",
        children: [
          { id: "in-ue1", label: "Er hat sich in die Nachbarin verliebt.", meaning: "phải lòng cô hàng xóm — Akkusativ" },
          { id: "in-ue2", label: "Das Problem besteht in der fehlenden Kommunikation.", meaning: "nằm ở việc thiếu giao tiếp — Dativ" },
          { id: "in-ue3", label: "Der Staat investiert in die Bildung.", meaning: "đầu tư vào giáo dục — Akkusativ" },
          { id: "in-ue4", label: "Sie kennt sich in der Gegend gut aus.", meaning: "rành khu vực này — Dativ" },
          { id: "in-ue5", label: "Die Familie ist in die Schwierigkeiten geraten.", meaning: "rơi vào khó khăn — Akkusativ" },
        ],
      },
    ],
  },
};

export default topic;
