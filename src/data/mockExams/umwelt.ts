import { MockExam } from "@/types/exam";

const exam: MockExam = {
  id: "umwelt",
  title: "Đề số 1 — Umwelt & Nachhaltigkeit",
  topic: "Môi trường & Phát triển bền vững",
  lesen: {
    title: "Plastik im Alltag",
    passage: `Immer mehr Städte in Deutschland verbieten Einwegplastik in öffentlichen Kantinen und
auf Wochenmärkten. Der Grund dafür ist einfach: Plastikmüll landet oft nicht im Recycling,
sondern in Flüssen und schließlich im Meer. Umweltschützer fordern seit Jahren strengere
Regeln, doch viele Unternehmen befürchten höhere Kosten durch alternative Verpackungen aus
Papier oder Glas. Verbraucherstudien zeigen jedoch, dass die meisten Kunden bereit wären,
etwas mehr zu zahlen, wenn dadurch weniger Plastik verwendet wird. Kritiker weisen allerdings
darauf hin, dass auch Papierverpackungen bei der Herstellung viel Energie und Wasser
verbrauchen. Eine einfache Lösung gibt es also nicht — Expertinnen und Experten sind sich
einig, dass vor allem der bewusste Konsum jedes Einzelnen den größten Unterschied macht.`,
    questions: [
      {
        id: "l1",
        text: "Warum verbieten manche Städte Einwegplastik?",
        options: [
          "Weil Plastik zu teuer in der Herstellung ist.",
          "Weil Plastikmüll oft in der Natur landet.",
          "Weil Kunden das ausdrücklich verlangt haben.",
        ],
        correctIndex: 1,
      },
      {
        id: "l2",
        text: "Wie reagieren viele Unternehmen auf strengere Regeln?",
        options: [
          "Sie begrüßen die Regeln sofort.",
          "Sie befürchten höhere Kosten.",
          "Sie ignorieren die Diskussion komplett.",
        ],
        correctIndex: 1,
      },
      {
        id: "l3",
        text: "Was zeigen die Verbraucherstudien laut Text?",
        options: [
          "Kunden wollen kein Geld mehr für Verpackungen ausgeben.",
          "Kunden würden für weniger Plastik mehr bezahlen.",
          "Kunden kennen das Thema Plastikmüll nicht.",
        ],
        correctIndex: 1,
      },
      {
        id: "l4",
        text: "Welches Problem nennen Kritiker bei Papierverpackungen?",
        options: [
          "Sie sind nicht recycelbar.",
          "Ihre Herstellung braucht viel Energie und Wasser.",
          "Sie sind gesetzlich verboten.",
        ],
        correctIndex: 1,
      },
      {
        id: "l5",
        text: "Was betonen Expertinnen und Experten am Ende des Textes?",
        options: [
          "Nur der Staat kann das Problem lösen.",
          "Bewusster Konsum jedes Einzelnen ist entscheidend.",
          "Das Problem lässt sich nicht lösen.",
        ],
        correctIndex: 1,
      },
    ],
  },
  hoeren: {
    title: "Gespräch: Mülltrennung in der WG",
    intro: "Zwei WG-Mitbewohner, Lena und Tom, sprechen über Mülltrennung.",
    script: [
      "Lena: Tom, hast du schon wieder die Plastikverpackung in den Restmüll geworfen?",
      "Tom: Ehrlich gesagt, ich verstehe die Regeln hier nicht so richtig. Bei uns zu Hause war das anders.",
      "Lena: Kein Problem, ich erkläre es dir gern. Gelb ist für Verpackungen, Blau für Papier und Pappe.",
      "Tom: Und was ist mit Essensresten?",
      "Lena: Die kommen in die braune Biotonne, nicht in den Restmüll.",
      "Tom: Okay, das ergibt Sinn. Ich dachte, es wäre komplizierter.",
      "Lena: Am Anfang ist es ungewohnt, aber nach ein paar Wochen macht man es automatisch.",
      "Tom: Gut, dann pass ich ab jetzt besser auf. Danke für die Erklärung!",
    ],
    questions: [
      {
        id: "h1",
        text: "Worüber sprechen Lena und Tom?",
        options: ["Über die Miete", "Über Mülltrennung", "Über einen Ausflug"],
        correctIndex: 1,
      },
      {
        id: "h2",
        text: "In welche Tonne gehört Papier laut Lena?",
        options: ["Gelbe Tonne", "Blaue Tonne", "Braune Tonne"],
        correctIndex: 1,
      },
      {
        id: "h3",
        text: "Wohin gehören Essensreste?",
        options: ["Restmüll", "Gelbe Tonne", "Biotonne"],
        correctIndex: 2,
      },
      {
        id: "h4",
        text: "Wie fand Tom das System am Ende?",
        options: [
          "Komplizierter als gedacht",
          "Einfacher als gedacht",
          "Er hat es immer noch nicht verstanden",
        ],
        correctIndex: 1,
      },
    ],
  },
  schreiben: {
    title: "Forumsbeitrag: Sollte Plastik komplett verboten werden?",
    prompt: `In einem Online-Forum wird diskutiert, ob Einwegplastik komplett verboten werden sollte.
Schreiben Sie einen Beitrag zu diesem Thema. Gehen Sie dabei auf folgende Punkte ein:
- Wie ist die Situation in Ihrem Heimatland?
- Nennen Sie Vor- und Nachteile eines kompletten Plastikverbots.
- Schlagen Sie eine alternative Lösung vor.
- Geben Sie am Ende Ihre persönliche Meinung wieder.`,
    minWords: 150,
    checklist: [
      "Mở bài giới thiệu chủ đề rõ ràng",
      "Có mô tả tình hình ở Việt Nam (hoặc quê hương bạn)",
      "Nêu ít nhất 1 ưu điểm và 1 nhược điểm của lệnh cấm nhựa",
      "Đề xuất được một giải pháp thay thế cụ thể",
      "Có câu nêu quan điểm cá nhân rõ ràng ở phần kết",
      "Dùng ít nhất 2 Redemittel (einerseits...andererseits, meiner Meinung nach...)",
      "Đủ số từ tối thiểu yêu cầu (150 từ)",
      "Không có lỗi der/die/das hoặc chia động từ rõ ràng khi tự đọc lại",
    ],
  },
  sprechen: {
    title: "Präsentation & Diskussion: Umweltschutz im Alltag",
    prompt: `Teil 1 — Kurzpräsentation (ca. 3 Minuten): Stellen Sie das Thema "Umweltschutz im Alltag"
vor. Sprechen Sie über die Situation in Ihrem Land, nennen Sie Vor- und Nachteile von
umweltfreundlichem Verhalten und geben Sie Ihre persönliche Meinung wieder.

Teil 2 — Diskussion (ca. 2 Minuten): Ihr Gesprächspartner ist der Meinung, dass Umweltschutz
vor allem Aufgabe der Regierung ist, nicht der einzelnen Person. Reagieren Sie auf diese
Meinung und begründen Sie Ihre eigene Position.`,
    prepSeconds: 180,
    talkSeconds: 180,
    checklist: [
      "Có phần mở đầu giới thiệu chủ đề",
      "Mô tả được tình hình ở đất nước bạn",
      "Nêu được ít nhất 1 ưu điểm và 1 nhược điểm",
      "Dùng từ nối cao cấp (einerseits...andererseits, im Gegensatz dazu)",
      "Phản hồi trực tiếp ý kiến của người đối thoại (Teil 2)",
      "Có câu kết luận rõ ràng",
      "Nói trôi chảy, không dừng quá lâu giữa các câu",
    ],
  },
};

export default exam;
