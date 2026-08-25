import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "ehrenamt",
  title: "Ehrenamtliches Engagement",
  titleVi: "Hoạt động tình nguyện",
  description: "Freiwilligenarbeit, Motivation und gesellschaftliches Engagement",
  color: "#059669",
  level: "B2",
  root: {
    id: "root",
    label: "Ehrenamt",
    meaning: "hoạt động tình nguyện",
    children: [
      {
        id: "arten",
        label: "Arten von ehrenamtlicher Arbeit",
        meaning: "các hình thức hoạt động tình nguyện",
        children: [
          { id: "sozialarbeit", label: "die soziale ___", meaning: "công tác xã hội", answer: "Arbeit", note: "z. B. Altenheime, Obdachlosenhilfe besuchen." },
          { id: "umweltschutz-ehrenamt", label: "sich im Umweltschutz engagieren", meaning: "tham gia hoạt động bảo vệ môi trường", synonyms: ["Müllsammelaktionen organisieren"] },
          { id: "nachhilfe", label: "kostenlose Nachhilfe geben", meaning: "dạy kèm miễn phí", note: "häufig für Kinder aus einkommensschwachen Familien." },
          { id: "katastrophenhilfe", label: "die ___", meaning: "cứu trợ thiên tai", answer: "Katastrophenhilfe", synonyms: ["die Nothilfe"] },
        ],
      },
      {
        id: "motivation",
        label: "Motivation",
        meaning: "động lực tham gia",
        children: [
          { id: "sinnstiftung", label: "eine sinnstiftende Tätigkeit", meaning: "công việc mang lại ý nghĩa", note: "sinnstiftend = tạo ra ý nghĩa cho bản thân người làm." },
          { id: "gesellschaft-mitgestalten", label: "die Gesellschaft mitgestalten", meaning: "góp phần định hình xã hội" },
          { id: "sozialekompetenz", label: "soziale Kompetenzen erwerben", meaning: "trau dồi kỹ năng xã hội", synonyms: ["soziale Fähigkeiten entwickeln"] },
          { id: "dankbarkeit", label: "etwas an die Gesellschaft ___", meaning: "trả ơn/cống hiến lại cho xã hội", answer: "zurückgeben" },
        ],
      },
      {
        id: "organisation",
        label: "Organisation",
        meaning: "cách tổ chức hoạt động tình nguyện",
        children: [
          { id: "verein", label: "der gemeinnützige Verein", meaning: "hội/đoàn phi lợi nhuận", note: "gemeinnützig = vì lợi ích công cộng, được miễn thuế." },
          { id: "freiwilligendienst", label: "ein freiwilliges soziales Jahr (FSJ) leisten", meaning: "tham gia một năm phục vụ xã hội tự nguyện" },
          { id: "ehrenamtskarte", label: "die ___", meaning: "thẻ ưu đãi cho người tình nguyện", answer: "Ehrenamtskarte", note: "nhiều bang ở Đức cấp thẻ này để tri ân người tình nguyện." },
          { id: "koordination", label: "die Koordination der Freiwilligen", meaning: "sự điều phối tình nguyện viên", synonyms: ["das Freiwilligenmanagement"] },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-ehrenamt",
            label: "Ehrenamtliches Engagement",
            meaning: "hoạt động tình nguyện",
            children: [
              {
                id: "trend-ehrenamt-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "eh-v1", label: "wertvolle soziale Kompetenzen sammeln", meaning: "tích lũy kỹ năng xã hội quý giá" },
                  { id: "eh-v2", label: "sich im Lebenslauf positiv abheben", meaning: "làm nổi bật CV một cách tích cực" },
                  { id: "eh-v3", label: "ein starkes Gefühl der Sinnstiftung erleben", meaning: "cảm nhận ý nghĩa sâu sắc trong công việc" },
                ],
              },
              {
                id: "trend-ehrenamt-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "eh-n1", label: "der erhebliche Zeitaufwand neben Job oder Studium", meaning: "tốn nhiều thời gian bên cạnh công việc/học tập" },
                  { id: "eh-n2", label: "die fehlende finanzielle Vergütung", meaning: "không có thù lao tài chính" },
                  { id: "eh-n3", label: "die Gefahr der Überforderung", meaning: "nguy cơ bị quá tải" },
                ],
              },
              {
                id: "trend-ehrenamt-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "eh-a1", label: "Geld spenden, statt Zeit zu investieren", meaning: "quyên góp tiền thay vì đầu tư thời gian" },
                  { id: "eh-a2", label: "kurzzeitige Freiwilligenarbeit bei Einzelevents leisten", meaning: "làm tình nguyện ngắn hạn theo từng sự kiện" },
                ],
              },
              {
                id: "trend-ehrenamt-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "eh-vn1", label: "die Kampagne „Mùa hè xanh“ als bekanntes studentisches Freiwilligenprogramm", meaning: "chiến dịch \"Mùa hè xanh\" là chương trình tình nguyện sinh viên nổi tiếng" },
                  { id: "eh-vn2", label: "das wachsende Engagement junger Menschen in NGOs", meaning: "sự tham gia ngày càng tăng của giới trẻ vào các tổ chức phi chính phủ" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "wortarten",
        label: "Wortschatz nach Wortart",
        meaning: "từ vựng theo loại từ",
        children: [
          {
            id: "wortarten-nomen",
            label: "Nomen",
            meaning: "danh từ",
            children: [
              { id: "wa-freiwillige", label: "der Freiwillige / die Freiwillige", meaning: "người tình nguyện", synonyms: ["der Ehrenamtliche"] },
              { id: "wa-spende", label: "die Spende", meaning: "khoản quyên góp" },
              { id: "wa-verein2", label: "der Verein", meaning: "hội, đoàn" },
              { id: "wa-engagement", label: "das Engagement", meaning: "sự dấn thân, cam kết" },
              { id: "wa-hilfsbereitschaft", label: "die Hilfsbereitschaft", meaning: "tinh thần sẵn lòng giúp đỡ" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-gesellschaftliches-engagement", label: "gesellschaftliches Engagement zeigen", meaning: "thể hiện sự cống hiến cho xã hội" },
              { id: "wa-verantwortung-uebernehmen2", label: "Verantwortung für andere übernehmen", meaning: "nhận trách nhiệm vì người khác" },
              { id: "wa-ehrenamtliche-taetigkeit", label: "eine ehrenamtliche Tätigkeit ausüben", meaning: "thực hiện một công việc tình nguyện" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-engagieren", label: "sich engagieren für + Akk.", meaning: "dấn thân/cống hiến vì điều gì", note: "sich engagieren für den Klimaschutz." },
              { id: "wa-spenden", label: "spenden", meaning: "quyên góp", note: "regelmäßig; Geld oder Sachen spenden." },
              { id: "wa-unterstuetzen", label: "unterstützen", meaning: "hỗ trợ" },
              { id: "wa-sich-einsetzen", label: "sich einsetzen für + Akk.", meaning: "tận tâm/tranh đấu vì điều gì", synonyms: ["sich engagieren für"] },
              { id: "wa-organisieren", label: "eine Aktion organisieren", meaning: "tổ chức một hoạt động" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-ehrenamtlich", label: "ehrenamtlich tätig sein", meaning: "làm việc với tư cách tình nguyện viên", note: "ehrenamtlich = không được trả lương." },
              { id: "wa-gemeinnuetzig", label: "gemeinnützig", meaning: "vì lợi ích công cộng" },
              { id: "wa-engagiert", label: "engagiert für + Akk.", meaning: "tận tâm/tích cực vì điều gì" },
              { id: "wa-bereit", label: "bereit zu + Dat.", meaning: "sẵn sàng làm gì" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
