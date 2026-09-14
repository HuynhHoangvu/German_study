import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-um",
  title: "um + Akkusativ",
  titleVi: "Giới từ um",
  description: "sich bewerben um, bitten um, es geht um … + danh từ đi với um",
  color: "#92400e",
  level: "B2",
  category: "praeposition",
  layout: "radial",
  root: {
    id: "root",
    label: "um + Akkusativ",
    meaning: "giới từ um — luôn đi với Akkusativ",
    note: "Câu hỏi: Worum …? / Um wen …? Nhóm ý nghĩa: xin/nhờ điều gì, lo lắng cho ai, tranh giành điều gì.",
    children: [
      {
        id: "um-verben",
        label: "Verben + um",
        meaning: "động từ đi với um",
        children: [
          {
            id: "um-v1",
            label: "1. sich bewerben um + Akk.",
            meaning: "nộp đơn xin (vị trí)",
            definition: "Sich schriftlich um eine Stelle oder einen Platz bemühen.",
            examples: [
              { de: "Ich bewerbe mich um eine Stelle als Pflegefachkraft.", vi: "Tôi nộp đơn xin vị trí điều dưỡng viên." },
              { de: "Sie hat sich um ein Stipendium beworben.", vi: "Cô ấy đã xin học bổng." },
            ],
            note: "Đầy đủ: sich BEI einer Firma (Dat.) UM eine Stelle (Akk.) bewerben.",
          },
          {
            id: "um-v2",
            label: "2. bitten um + Akk.",
            meaning: "nhờ, xin (điều gì)",
            definition: "Jemanden höflich fragen, ob er etwas gibt oder tut.",
            examples: [
              { de: "Ich bitte Sie um eine kurze Rückmeldung.", vi: "Tôi xin quý vị phản hồi ngắn gọn." },
              { de: "Er bat seinen Chef um einen Tag frei.", vi: "Anh ấy xin sếp nghỉ một ngày." },
            ],
            note: "unregelmäßig: bittet, bat, hat gebeten. Rất hay dùng trong thư trang trọng.",
          },
          {
            id: "um-v3",
            label: "3. sich kümmern um + Akk.",
            meaning: "chăm lo, để ý đến",
            definition: "Sich um jemanden oder etwas verantwortlich kümmern.",
            examples: [
              { de: "Ich kümmere mich um meine kranke Großmutter.", vi: "Tôi chăm sóc bà tôi đang ốm." },
              { de: "Wer kümmert sich um die Organisation des Festes?", vi: "Ai lo việc tổ chức lễ hội?" },
            ],
          },
          {
            id: "um-v4",
            label: "4. es geht um + Akk.",
            meaning: "vấn đề là về, nói về",
            definition: "Das Thema oder der Inhalt von etwas sein.",
            examples: [
              { de: "In dem Text geht es um den Klimawandel.", vi: "Bài viết nói về biến đổi khí hậu." },
              { de: "Worum geht es in der Besprechung?", vi: "Cuộc họp bàn về chuyện gì?" },
            ],
            note: "Cụm bắt buộc thuộc khi tóm tắt văn bản.",
          },
          {
            id: "um-v5",
            label: "5. es handelt sich um + Akk.",
            meaning: "đó là, liên quan đến",
            definition: "Sagen, was etwas genau ist (formell).",
            examples: [
              { de: "Es handelt sich um einen sehr seltenen Fall.", vi: "Đây là một trường hợp rất hiếm." },
              { de: "Bei dem Schreiben handelt es sich um eine Mahnung.", vi: "Lá thư đó là một giấy nhắc nợ." },
            ],
          },
          {
            id: "um-v6",
            label: "6. sich bemühen um + Akk.",
            meaning: "nỗ lực để đạt được",
            definition: "Sich Mühe geben, etwas zu bekommen oder zu erreichen.",
            examples: [
              { de: "Er bemüht sich seit Monaten um eine bezahlbare Wohnung.", vi: "Anh ấy nỗ lực nhiều tháng tìm căn hộ giá phải chăng." },
              { de: "Wir bemühen uns um eine schnelle Lösung.", vi: "Chúng tôi cố gắng tìm giải pháp nhanh." },
            ],
          },
          {
            id: "um-v7",
            label: "7. sich sorgen um + Akk.",
            meaning: "lo lắng cho",
            definition: "Angst haben, dass jemandem etwas passiert.",
            examples: [
              { de: "Die Eltern sorgen sich um ihre Kinder.", vi: "Cha mẹ lo lắng cho con cái." },
              { de: "Viele sorgen sich um ihre berufliche Zukunft.", vi: "Nhiều người lo cho tương lai nghề nghiệp." },
            ],
            note: "Phân biệt: sorgen FÜR + Akk. = lo liệu, chu cấp.",
          },
          {
            id: "um-v8",
            label: "8. kämpfen um + Akk.",
            meaning: "tranh đấu để giành",
            definition: "Sich stark anstrengen, um etwas zu bekommen oder zu behalten.",
            examples: [
              { de: "Das Team kämpft um den Sieg.", vi: "Đội bóng tranh đấu để giành chiến thắng." },
              { de: "Sie kämpft um ihren Arbeitsplatz.", vi: "Cô ấy đấu tranh để giữ chỗ làm." },
            ],
            note: "kämpfen UM = để giành được; FÜR = vì lý tưởng; GEGEN = chống lại.",
          },
          {
            id: "um-v9",
            label: "9. sich drehen um + Akk.",
            meaning: "xoay quanh (chủ đề)",
            definition: "Das zentrale Thema von etwas sein.",
            examples: [
              { de: "In der Debatte dreht sich alles um das Geld.", vi: "Trong cuộc tranh luận, mọi thứ xoay quanh tiền." },
              { de: "Sein Leben dreht sich nur um die Arbeit.", vi: "Cuộc đời anh ta chỉ xoay quanh công việc." },
            ],
          },
          {
            id: "um-v10",
            label: "10. beneiden um + Akk.",
            meaning: "ghen tị vì",
            definition: "Wollen, was ein anderer hat.",
            examples: [
              { de: "Ich beneide dich um deine Geduld.", vi: "Tôi ghen tị với sự kiên nhẫn của bạn." },
              { de: "Viele beneiden ihn um seinen Erfolg.", vi: "Nhiều người ghen tị với thành công của anh ấy." },
            ],
          },
        ],
      },
      {
        id: "um-nomen",
        label: "Nomen + um",
        meaning: "danh từ đi với um",
        children: [
          {
            id: "um-n1",
            label: "die Bitte um + Akk.",
            meaning: "lời đề nghị/xin",
            definition: "Der höfliche Wunsch, etwas zu bekommen.",
            examples: [
              { de: "Ich schreibe Ihnen mit der Bitte um einen Termin.", vi: "Tôi viết thư với đề nghị xin một cuộc hẹn." },
            ],
            note: "Cụm chuẩn mở đầu thư trang trọng: mit der Bitte um …",
          },
          {
            id: "um-n2",
            label: "die Bewerbung um + Akk.",
            meaning: "đơn xin (vị trí)",
            definition: "Der Antrag auf eine Stelle.",
            examples: [
              { de: "Meine Bewerbung um den Ausbildungsplatz war erfolgreich.", vi: "Đơn xin chỗ học nghề của tôi đã thành công." },
            ],
          },
          {
            id: "um-n3",
            label: "die Sorge um + Akk.",
            meaning: "nỗi lo cho",
            definition: "Die Angst, dass jemandem etwas passiert.",
            examples: [
              { de: "Die Sorge um die Umwelt wächst weltweit.", vi: "Nỗi lo về môi trường tăng trên toàn thế giới." },
            ],
          },
          {
            id: "um-n4",
            label: "der Kampf um + Akk.",
            meaning: "cuộc tranh giành",
            definition: "Der Einsatz, um etwas zu bekommen.",
            examples: [
              { de: "Der Kampf um bezahlbaren Wohnraum wird härter.", vi: "Cuộc tranh giành nhà ở giá phải chăng ngày càng gay gắt." },
            ],
          },
        ],
      },
      {
        id: "um-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "um-ue1", label: "Ich bewerbe mich ___ eine Stelle.", meaning: "xin một vị trí", answer: "um" },
          { id: "um-ue2", label: "Ich bitte Sie ___ eine kurze Rückmeldung.", meaning: "xin phản hồi ngắn", answer: "um" },
          { id: "um-ue3", label: "In dem Text geht es ___ den Klimawandel.", meaning: "bài viết nói về", answer: "um" },
          { id: "um-ue4", label: "Die Eltern sorgen sich ___ ihre Kinder.", meaning: "lo lắng cho con cái", answer: "um" },
          { id: "um-ue5", label: "Wer kümmert sich ___ die Organisation?", meaning: "ai lo việc tổ chức", answer: "um" },
        ],
      },
    ],
  },
};

export default topic;
