import { MockExam } from "@/types/exam";

const exam: MockExam = {
  id: "arbeit",
  title: "Đề số 2 — Arbeit & Homeoffice",
  topic: "Công việc & Làm việc từ xa",
  lesen: {
    title: "Homeoffice — Fluch oder Segen?",
    passage: `Seit einigen Jahren arbeiten immer mehr Menschen zumindest teilweise von zu Hause aus.
Befürworter loben die Flexibilität: Man spart Zeit für den Arbeitsweg und kann Beruf und
Familie besser vereinbaren. Kritiker geben allerdings zu bedenken, dass die Grenze zwischen
Arbeit und Freizeit zunehmend verschwimmt. Viele Beschäftigte berichten, dass sie im
Homeoffice sogar länger arbeiten als im Büro, weil niemand ihnen sagt, wann Feierabend ist.
Auch der informelle Austausch mit Kolleginnen und Kollegen fehlt vielen. Unternehmen
reagieren unterschiedlich: Manche Firmen setzen auf ein hybrides Modell mit festen
Bürotagen, andere lassen ihren Mitarbeitenden völlig freie Wahl. Studien deuten darauf hin,
dass die Produktivität im Homeoffice nicht sinkt, solange klare Regeln und Absprachen im
Team bestehen.`,
    questions: [
      {
        id: "l1",
        text: "Was loben Befürworter des Homeoffice?",
        options: [
          "Die höhere Bezahlung",
          "Die Flexibilität und Zeitersparnis",
          "Die strengeren Regeln im Büro",
        ],
        correctIndex: 1,
      },
      {
        id: "l2",
        text: "Welches Problem nennen Kritiker?",
        options: [
          "Arbeit und Freizeit vermischen sich.",
          "Die Miete für Büros steigt.",
          "Es gibt zu viele Meetings.",
        ],
        correctIndex: 0,
      },
      {
        id: "l3",
        text: "Was fehlt vielen Beschäftigten im Homeoffice laut Text?",
        options: [
          "Ein eigener Schreibtisch",
          "Der informelle Austausch mit Kollegen",
          "Ein schnelles Internet",
        ],
        correctIndex: 1,
      },
      {
        id: "l4",
        text: "Wie reagieren Unternehmen laut Text auf Homeoffice?",
        options: [
          "Alle verbieten es komplett.",
          "Alle erlauben nur Vollzeit-Homeoffice.",
          "Unterschiedlich — manche hybrid, manche völlig frei.",
        ],
        correctIndex: 2,
      },
      {
        id: "l5",
        text: "Was zeigen Studien über die Produktivität im Homeoffice?",
        options: [
          "Sie sinkt deutlich.",
          "Sie sinkt nicht, wenn klare Regeln bestehen.",
          "Sie lässt sich nicht messen.",
        ],
        correctIndex: 1,
      },
    ],
  },
  hoeren: {
    title: "Gespräch: Bewerbungsgespräch vorbereiten",
    intro: "Anna berät ihren Freund Markus vor seinem Vorstellungsgespräch.",
    script: [
      "Anna: Markus, hast du dich schon auf das Vorstellungsgespräch morgen vorbereitet?",
      "Markus: Teilweise. Ich habe die Firma recherchiert, aber ich bin trotzdem nervös.",
      "Anna: Das ist normal. Überleg dir am besten konkrete Beispiele aus deiner bisherigen Arbeit.",
      "Markus: Guter Tipp. Und was, wenn sie nach meinem Gehaltswunsch fragen?",
      "Anna: Dann solltest du eine realistische Zahl nennen, am besten mit einer kleinen Spanne.",
      "Markus: Okay. Ich habe auch Angst, dass ich keine Fragen einfallen, wenn sie mich am Ende fragen.",
      "Anna: Bereite dir vorher zwei oder drei Fragen zur Unternehmenskultur vor, das kommt immer gut an.",
      "Markus: Danke, das hilft mir wirklich weiter.",
    ],
    questions: [
      {
        id: "h1",
        text: "Worauf bereitet sich Markus vor?",
        options: ["Auf eine Prüfung", "Auf ein Vorstellungsgespräch", "Auf einen Umzug"],
        correctIndex: 1,
      },
      {
        id: "h2",
        text: "Was empfiehlt Anna bezüglich der Erfahrung?",
        options: [
          "Konkrete Beispiele aus der Arbeit nennen",
          "Nichts über frühere Jobs sagen",
          "Nur über die Ausbildung sprechen",
        ],
        correctIndex: 0,
      },
      {
        id: "h3",
        text: "Wie soll Markus beim Gehaltswunsch vorgehen?",
        options: [
          "Keine Zahl nennen",
          "Eine realistische Zahl mit Spanne nennen",
          "Immer die höchstmögliche Zahl fordern",
        ],
        correctIndex: 1,
      },
      {
        id: "h4",
        text: "Welchen Tipp gibt Anna für das Ende des Gesprächs?",
        options: [
          "Sofort gehen",
          "Eigene Fragen zur Unternehmenskultur vorbereiten",
          "Nach mehr Urlaubstagen fragen",
        ],
        correctIndex: 1,
      },
    ],
  },
  schreiben: {
    title: "E-Mail: Terminverschiebung für ein Vorstellungsgespräch",
    prompt: `Sie haben ein Vorstellungsgespräch bei einer Firma, können aber aus wichtigem Grund nicht
zum vereinbarten Termin erscheinen. Schreiben Sie eine formelle E-Mail an die
Personalabteilung. Gehen Sie dabei auf folgende Punkte ein:
- Grund für Ihre Anfrage
- Entschuldigung für die kurzfristige Absage
- Vorschlag für einen alternativen Termin
- Höflicher Abschluss`,
    minWords: 120,
    checklist: [
      "Có lời chào trang trọng đầu thư (Sehr geehrte Damen und Herren,)",
      "Nêu rõ lý do cần đổi lịch hẹn",
      "Có lời xin lỗi vì báo muộn/gấp",
      "Đề xuất cụ thể một ngày/giờ thay thế",
      "Có câu kết trang trọng và chữ ký (Mit freundlichen Grüßen)",
      "Đủ số từ tối thiểu yêu cầu (120 từ)",
      "Giọng văn trang trọng, không dùng từ ngữ quá thân mật",
    ],
  },
  sprechen: {
    title: "Präsentation & Diskussion: Homeoffice vs. Büroarbeit",
    prompt: `Teil 1 — Kurzpräsentation (ca. 3 Minuten): Vergleichen Sie Homeoffice und Arbeit im Büro.
Sprechen Sie über die Situation in Ihrem Land, nennen Sie Vor- und Nachteile beider Modelle
und geben Sie Ihre persönliche Meinung wieder.

Teil 2 — Diskussion (ca. 2 Minuten): Ihr Gesprächspartner meint, dass Homeoffice die
Teamarbeit zerstört. Reagieren Sie auf diese Meinung und begründen Sie Ihre eigene Position.`,
    prepSeconds: 180,
    talkSeconds: 180,
    checklist: [
      "Có phần mở đầu giới thiệu chủ đề",
      "So sánh được cả 2 mô hình (Homeoffice và làm ở văn phòng)",
      "Nêu được ít nhất 1 ưu điểm và 1 nhược điểm mỗi bên",
      "Dùng từ nối cao cấp (im Vergleich dazu, während...)",
      "Phản hồi trực tiếp ý kiến của người đối thoại (Teil 2)",
      "Có câu kết luận rõ ràng",
      "Nói trôi chảy, không dừng quá lâu giữa các câu",
    ],
  },
};

export default exam;
