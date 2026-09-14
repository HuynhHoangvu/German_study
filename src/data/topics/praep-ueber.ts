import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-ueber",
  title: "über + Akkusativ",
  titleVi: "Giới từ über",
  description: "sich ärgern über, diskutieren über, verfügen über … + danh từ đi với über",
  color: "#a21caf",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "über + Akkusativ",
    meaning: "giới từ über — đi với động từ thì luôn Akkusativ",
    note: "Câu hỏi: Worüber …? / Über wen …? Chỉ khi chỉ vị trí (nằm phía trên) mới dùng Dativ: Das Bild hängt über dem Sofa.",
    children: [
      {
        id: "ueber-verben",
        label: "Verben + über",
        meaning: "động từ đi với über",
        children: [
          {
            id: "ueber-v1",
            label: "1. sich ärgern über + Akk.",
            meaning: "bực mình về",
            definition: "Wütend oder verärgert sein wegen etwas.",
            examples: [
              { de: "Ich ärgere mich über den Lärm der Nachbarn.", vi: "Tôi bực mình vì tiếng ồn của hàng xóm." },
              { de: "Sie ärgert sich über ihren eigenen Fehler.", vi: "Cô ấy bực mình vì lỗi của chính mình." },
            ],
          },
          {
            id: "ueber-v2",
            label: "2. sich beschweren über + Akk.",
            meaning: "phàn nàn, khiếu nại về",
            definition: "Offiziell sagen, dass man mit etwas unzufrieden ist.",
            examples: [
              { de: "Die Mieter beschweren sich über die hohen Nebenkosten.", vi: "Người thuê nhà khiếu nại về phí phụ trội cao." },
              { de: "Er hat sich beim Chef über die Arbeitsbedingungen beschwert.", vi: "Anh ấy đã phàn nàn với sếp về điều kiện làm việc." },
            ],
            note: "Cấu trúc đầy đủ: sich BEI jemandem ÜBER etwas beschweren.",
          },
          {
            id: "ueber-v3",
            label: "3. diskutieren über + Akk.",
            meaning: "thảo luận về",
            definition: "Mit anderen ausführlich über ein Thema sprechen.",
            examples: [
              { de: "Wir diskutieren über den Klimawandel.", vi: "Chúng tôi thảo luận về biến đổi khí hậu." },
              { de: "Im Kurs haben wir über Vor- und Nachteile diskutiert.", vi: "Trong lớp chúng tôi đã thảo luận về ưu và nhược điểm." },
            ],
          },
          {
            id: "ueber-v4",
            label: "4. sich freuen über + Akk.",
            meaning: "vui vì (điều đã xảy ra)",
            definition: "Sich über etwas freuen, das schon passiert ist.",
            examples: [
              { de: "Ich freue mich über dein Geschenk.", vi: "Tôi vui vì món quà của bạn." },
              { de: "Sie hat sich sehr über die gute Note gefreut.", vi: "Cô ấy đã rất vui vì điểm tốt." },
            ],
            note: "So sánh: sich freuen AUF + Akk. = mong chờ việc sắp tới.",
          },
          {
            id: "ueber-v5",
            label: "5. nachdenken über + Akk.",
            meaning: "suy nghĩ về",
            definition: "Intensiv und länger über etwas denken.",
            examples: [
              { de: "Ich denke über einen Jobwechsel nach.", vi: "Tôi đang suy nghĩ về việc đổi việc." },
              { de: "Denk noch einmal in Ruhe über mein Angebot nach!", vi: "Hãy bình tĩnh suy nghĩ lại về đề nghị của tôi!" },
            ],
            note: "trennbar: denkt nach, dachte nach, hat nachgedacht.",
          },
          {
            id: "ueber-v6",
            label: "6. sich informieren über + Akk.",
            meaning: "tìm hiểu thông tin về",
            definition: "Informationen über etwas sammeln.",
            examples: [
              { de: "Ich habe mich über den Sprachkurs informiert.", vi: "Tôi đã tìm hiểu về khóa học tiếng." },
              { de: "Vor der Reise sollte man sich über das Land informieren.", vi: "Trước chuyến đi nên tìm hiểu về đất nước đó." },
            ],
          },
          {
            id: "ueber-v7",
            label: "7. berichten über + Akk.",
            meaning: "tường thuật, đưa tin về",
            definition: "Sachlich erzählen, was passiert ist.",
            examples: [
              { de: "Die Zeitung berichtet über den Unfall.", vi: "Tờ báo đưa tin về vụ tai nạn." },
              { de: "Er berichtete über seine Erfahrungen im Ausland.", vi: "Anh ấy kể về trải nghiệm ở nước ngoài." },
            ],
          },
          {
            id: "ueber-v8",
            label: "8. klagen über + Akk.",
            meaning: "than phiền về",
            definition: "Sagen, dass etwas schlecht ist oder wehtut.",
            examples: [
              { de: "Viele Familien klagen über die hohen Mieten.", vi: "Nhiều gia đình than phiền về tiền thuê nhà cao." },
              { de: "Der Patient klagt über starke Rückenschmerzen.", vi: "Bệnh nhân than đau lưng dữ dội." },
            ],
          },
          {
            id: "ueber-v9",
            label: "9. sich wundern über + Akk.",
            meaning: "ngạc nhiên về",
            definition: "Etwas seltsam oder erstaunlich finden.",
            examples: [
              { de: "Ich wundere mich über sein merkwürdiges Verhalten.", vi: "Tôi ngạc nhiên về hành xử kỳ lạ của anh ta." },
              { de: "Darüber brauchst du dich nicht zu wundern.", vi: "Bạn không cần ngạc nhiên về điều đó." },
            ],
          },
          {
            id: "ueber-v10",
            label: "10. verfügen über + Akk.",
            meaning: "có, sở hữu (trang trọng)",
            definition: "Etwas haben, über das man frei bestimmen kann.",
            examples: [
              { de: "Der Bewerber verfügt über langjährige Erfahrung.", vi: "Ứng viên có nhiều năm kinh nghiệm." },
              { de: "Die Wohnung verfügt über einen großen Balkon.", vi: "Căn hộ có một ban công lớn." },
            ],
            note: "Rất hay dùng trong thư xin việc thay cho 'haben'.",
          },
          {
            id: "ueber-v11",
            label: "11. sich aufregen über + Akk.",
            meaning: "nổi nóng, bức xúc về",
            definition: "Sehr emotional und wütend auf etwas reagieren.",
            examples: [
              { de: "Reg dich nicht über Kleinigkeiten auf!", vi: "Đừng nổi nóng vì chuyện vặt!" },
              { de: "Alle regten sich über die Verspätung auf.", vi: "Mọi người đều bức xúc vì sự chậm trễ." },
            ],
          },
          {
            id: "ueber-v12",
            label: "12. urteilen über + Akk.",
            meaning: "phán xét về",
            definition: "Eine Bewertung über jemanden oder etwas abgeben.",
            examples: [
              { de: "Man sollte nicht vorschnell über andere urteilen.", vi: "Không nên vội vàng phán xét người khác." },
              { de: "Darüber kann ich nicht urteilen.", vi: "Về điều đó tôi không thể phán xét." },
            ],
          },
        ],
      },
      {
        id: "ueber-nomen",
        label: "Nomen + über",
        meaning: "danh từ đi với über",
        children: [
          {
            id: "ueber-n1",
            label: "die Diskussion über + Akk.",
            meaning: "cuộc thảo luận về",
            definition: "Das gemeinsame Sprechen über ein Thema.",
            examples: [
              { de: "Die Diskussion über die Rente dauert schon Jahre.", vi: "Cuộc tranh luận về lương hưu đã kéo dài nhiều năm." },
            ],
          },
          {
            id: "ueber-n2",
            label: "die Information über + Akk.",
            meaning: "thông tin về",
            definition: "Das Wissen, das man über etwas bekommt.",
            examples: [
              { de: "Weitere Informationen über den Kurs finden Sie online.", vi: "Thông tin thêm về khóa học có trên mạng." },
            ],
          },
          {
            id: "ueber-n3",
            label: "die Beschwerde über + Akk.",
            meaning: "lời khiếu nại về",
            definition: "Die offizielle Äußerung von Unzufriedenheit.",
            examples: [
              { de: "Es gab zahlreiche Beschwerden über den Lärm.", vi: "Đã có nhiều khiếu nại về tiếng ồn." },
            ],
          },
          {
            id: "ueber-n4",
            label: "die Kontrolle über + Akk.",
            meaning: "sự kiểm soát đối với",
            definition: "Die Macht, etwas zu steuern.",
            examples: [
              { de: "Er hat die Kontrolle über die Situation verloren.", vi: "Anh ấy đã mất kiểm soát tình hình." },
            ],
          },
          {
            id: "ueber-n5",
            label: "der Bericht über + Akk.",
            meaning: "bản tường thuật về",
            definition: "Eine sachliche Darstellung von Ereignissen.",
            examples: [
              { de: "Der Bericht über die Studie erscheint morgen.", vi: "Bản báo cáo về nghiên cứu sẽ ra ngày mai." },
            ],
          },
        ],
      },
      {
        id: "ueber-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "ueber-ue1", label: "Ich ärgere mich ___ den Lärm.", meaning: "bực mình vì tiếng ồn", answer: "über" },
          { id: "ueber-ue2", label: "Der Bewerber verfügt ___ viel Erfahrung.", meaning: "có nhiều kinh nghiệm", answer: "über" },
          { id: "ueber-ue3", label: "Ich denke ___ einen Jobwechsel nach.", meaning: "suy nghĩ về đổi việc", answer: "über" },
          { id: "ueber-ue4", label: "Sie freut sich ___ die gute Note.", meaning: "vui vì điểm tốt (đã xảy ra)", answer: "über" },
          { id: "ueber-ue5", label: "Er hat die Kontrolle ___ die Situation verloren.", meaning: "mất kiểm soát tình hình", answer: "über" },
        ],
      },
    ],
  },
};

export default topic;
