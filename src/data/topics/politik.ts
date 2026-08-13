import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "politik",
  title: "Politik & Gesellschaft",
  titleVi: "Chính trị & Xã hội",
  description: "Integration, Gleichberechtigung, Ehrenamt und demografischer Wandel",
  color: "#334155",
  level: "B2",
  root: {
    id: "root",
    label: "Politik & Gesellschaft",
    meaning: "chính trị & xã hội",
    children: [
      {
        id: "integration",
        label: "Integration",
        meaning: "sự hòa nhập",
        children: [
          { id: "migration", label: "die Migration", meaning: "di cư", synonyms: ["die Auswanderung"] },
          { id: "einbuergerung", label: "die ___", meaning: "nhập quốc tịch", answer: "Einbürgerung", note: "ein + Bürger (công dân) + ung: trở thành công dân." },
          { id: "sprachbarriere", label: "die Sprachbarriere", meaning: "rào cản ngôn ngữ", note: "Sprache (ngôn ngữ) + Barriere (rào cản)." },
        ],
      },
      {
        id: "gleichberechtigung",
        label: "Gleichberechtigung",
        meaning: "bình đẳng giới",
        children: [
          { id: "lohngefaelle", label: "das Lohngefälle", meaning: "chênh lệch tiền lương", synonyms: ["der Gehaltsunterschied"] },
          { id: "gleichstellung", label: "die ___ von Mann und Frau", meaning: "bình đẳng nam nữ", answer: "Gleichstellung", synonyms: ["die Gleichberechtigung"] },
          { id: "frauenquote", label: "die Frauenquote", meaning: "hạn ngạch nữ giới", note: "Quote = tỷ lệ bắt buộc, ví dụ trong ban lãnh đạo doanh nghiệp." },
        ],
      },
      {
        id: "ehrenamt",
        label: "Ehrenamt",
        meaning: "hoạt động tình nguyện",
        children: [
          { id: "freiwilligenarbeit", label: "die Freiwilligenarbeit", meaning: "công việc tình nguyện", synonyms: ["ehrenamtliche Arbeit"] },
          { id: "gemeinnuetzig", label: "___ arbeiten", meaning: "làm việc phi lợi nhuận", answer: "gemeinnützig", note: "gemein (chung) + nützig (có ích): vì lợi ích cộng đồng." },
        ],
      },
      {
        id: "demografie",
        label: "Demografischer Wandel",
        meaning: "biến đổi nhân khẩu học",
        children: [
          { id: "alternde", label: "die alternde Gesellschaft", meaning: "xã hội già hóa", synonyms: ["die überalterte Gesellschaft"] },
          { id: "generationenvertrag", label: "der ___", meaning: "hợp đồng liên thế hệ (bảo hiểm xã hội)", answer: "Generationenvertrag", note: "thế hệ đi làm đóng góp nuôi thế hệ nghỉ hưu." },
          { id: "geburtenrate", label: "die niedrige Geburtenrate", meaning: "tỷ lệ sinh thấp", synonyms: ["der Geburtenrückgang"] },
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
              { id: "wa-regierung", label: "die Bundesregierung", meaning: "chính phủ liên bang", synonyms: ["die Regierung"] },
              { id: "wa-gesetz", label: "der Gesetzesentwurf", meaning: "dự thảo luật", synonyms: ["das Gesetz"] },
              { id: "wa-buerger", label: "der Staatsbürger", meaning: "công dân của nhà nước", synonyms: ["der Bürger"] },
              { id: "wa-wahl", label: "die Bundestagswahl", meaning: "cuộc bầu cử quốc hội liên bang", synonyms: ["die Wahl"] },
              { id: "wa-gerechtigkeit", label: "die soziale Gerechtigkeit", meaning: "sự công bằng xã hội", synonyms: ["die Chancengleichheit"] },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-ein-gesetz-verabschieden", label: "ein Gesetz verabschieden", meaning: "thông qua một đạo luật" },
              { id: "wa-an-der-wahl-teilnehmen", label: "sein Wahlrecht ausüben", meaning: "thực hiện quyền bầu cử của mình", synonyms: ["an der Wahl teilnehmen"] },
              { id: "wa-fuer-gleichheit-kaempfen", label: "für Gleichheit eintreten", meaning: "đứng lên đấu tranh vì sự bình đẳng", synonyms: ["für Gleichheit kämpfen"] },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-sich-engagieren", label: "sich engagieren für + Akk.", meaning: "tích cực tham gia/đấu tranh cho" },
              { id: "wa-diskriminieren", label: "diskriminieren aufgrund + Gen.", meaning: "phân biệt đối xử dựa trên", note: "diskriminiert werden aufgrund seiner Herkunft." },
              { id: "wa-integrieren", label: "sich integrieren in + Akk.", meaning: "hòa nhập vào" },
              { id: "wa-abstimmen", label: "abstimmen über + Akk.", meaning: "bỏ phiếu về", note: "trennbar: stimmt ab, stimmte ab, hat abgestimmt" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-gleichberechtigt", label: "gleichberechtigt mit + Dat.", meaning: "bình đẳng với" },
              { id: "wa-verantwortlich-politik", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-engagiert", label: "engagiert für + Akk.", meaning: "tích cực dấn thân vì" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
