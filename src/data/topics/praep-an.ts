import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-an",
  title: "an + Akkusativ / + Dativ",
  titleVi: "Giới từ an",
  description: "denken an (Akk.) vs. teilnehmen an (Dat.) — phân biệt hai cách",
  color: "#5b21b6",
  level: "B2",
  category: "praeposition",
  root: {
    id: "root",
    label: "an + Akk. / + Dat.",
    meaning: "giới từ an — đi cả Akkusativ lẫn Dativ, tùy động từ",
    note: "Mẹo: an + Akk. thường hướng tới điều gì đó (denken an, glauben an); an + Dat. thường là tham gia/gắn với (teilnehmen an, leiden an). Phải học thuộc theo động từ.",
    children: [
      {
        id: "an-akk",
        label: "an + Akkusativ",
        meaning: "an đi với Akkusativ",
        note: "Câu hỏi: Woran …? / An wen …?",
        children: [
          {
            id: "an-a1",
            label: "1. denken an + Akk.",
            meaning: "nghĩ đến, nhớ làm gì",
            definition: "Jemanden oder etwas im Kopf haben.",
            examples: [
              { de: "Ich denke oft an meine Familie in Vietnam.", vi: "Tôi thường nghĩ đến gia đình ở Việt Nam." },
              { de: "Denk bitte an den Termin am Montag!", vi: "Nhớ cuộc hẹn thứ Hai nhé!" },
            ],
          },
          {
            id: "an-a2",
            label: "2. sich erinnern an + Akk.",
            meaning: "nhớ về, hồi tưởng",
            definition: "Etwas aus der Vergangenheit wieder im Gedächtnis haben.",
            examples: [
              { de: "Ich erinnere mich gut an meinen ersten Schultag.", vi: "Tôi nhớ rõ ngày đầu tiên đi học." },
              { de: "Erinnerst du dich noch an ihn?", vi: "Bạn còn nhớ anh ấy không?" },
            ],
          },
          {
            id: "an-a3",
            label: "3. sich gewöhnen an + Akk.",
            meaning: "làm quen với",
            definition: "Etwas mit der Zeit normal finden.",
            examples: [
              { de: "Ich habe mich schnell an das deutsche Wetter gewöhnt.", vi: "Tôi nhanh chóng quen với thời tiết Đức." },
              { de: "An die neuen Kollegen muss ich mich erst gewöhnen.", vi: "Tôi còn phải làm quen với đồng nghiệp mới." },
            ],
          },
          {
            id: "an-a4",
            label: "4. glauben an + Akk.",
            meaning: "tin vào",
            definition: "Überzeugt sein, dass es etwas gibt oder dass etwas gelingt.",
            examples: [
              { de: "Ich glaube fest an dich!", vi: "Tôi tin chắc ở bạn!" },
              { de: "Sie glaubt an den Erfolg des Projekts.", vi: "Cô ấy tin vào thành công của dự án." },
            ],
            note: "glauben AN + Akk. = tin tưởng; glauben + Dat. = tin lời ai (Ich glaube dir).",
          },
          {
            id: "an-a5",
            label: "5. sich wenden an + Akk.",
            meaning: "liên hệ, tìm đến (ai)",
            definition: "Jemanden um Hilfe oder Auskunft bitten.",
            examples: [
              { de: "Bei Fragen wenden Sie sich bitte an das Sekretariat.", vi: "Nếu có thắc mắc, xin liên hệ văn phòng." },
              { de: "Er wandte sich an einen Anwalt.", vi: "Anh ấy đã tìm đến một luật sư." },
            ],
            note: "Cụm chuẩn trong thư hành chính.",
          },
          {
            id: "an-a6",
            label: "6. appellieren an + Akk.",
            meaning: "kêu gọi",
            definition: "Jemanden eindringlich bitten, etwas zu tun.",
            examples: [
              { de: "Die Regierung appelliert an die Vernunft der Bürger.", vi: "Chính phủ kêu gọi sự lý trí của người dân." },
              { de: "Ich appelliere an Ihr Verständnis.", vi: "Tôi mong nhận được sự thông cảm của quý vị." },
            ],
          },
          {
            id: "an-a7",
            label: "7. sich richten an + Akk.",
            meaning: "hướng đến (đối tượng)",
            definition: "Für eine bestimmte Zielgruppe gedacht sein.",
            examples: [
              { de: "Das Angebot richtet sich an Berufstätige.", vi: "Ưu đãi này hướng đến người đi làm." },
              { de: "Der Kurs richtet sich an fortgeschrittene Lernende.", vi: "Khóa học dành cho người học trình độ cao." },
            ],
          },
          {
            id: "an-a8",
            label: "8. sich anpassen an + Akk.",
            meaning: "thích nghi với",
            definition: "Sich an neue Bedingungen angleichen.",
            examples: [
              { de: "Man muss sich an die neue Kultur anpassen.", vi: "Phải thích nghi với nền văn hóa mới." },
              { de: "Die Firma passt sich an den Markt an.", vi: "Công ty thích ứng với thị trường." },
            ],
          },
        ],
      },
      {
        id: "an-dat",
        label: "an + Dativ",
        meaning: "an đi với Dativ",
        note: "Nhóm này hay bị nhầm sang Akkusativ — lỗi kinh điển ở B2.",
        children: [
          {
            id: "an-d1",
            label: "1. teilnehmen an + Dat.",
            meaning: "tham gia vào",
            definition: "Bei einer Veranstaltung oder Aktion dabei sein.",
            examples: [
              { de: "Ich nehme an einem Integrationskurs teil.", vi: "Tôi tham gia một khóa hội nhập." },
              { de: "Über 200 Personen nahmen an der Demonstration teil.", vi: "Hơn 200 người đã tham gia cuộc biểu tình." },
            ],
            note: "trennbar, unregelmäßig: nimmt teil, nahm teil, hat teilgenommen.",
          },
          {
            id: "an-d2",
            label: "2. leiden an + Dat.",
            meaning: "mắc (bệnh)",
            definition: "Eine bestimmte Krankheit haben.",
            examples: [
              { de: "Sie leidet an Diabetes.", vi: "Cô ấy mắc bệnh tiểu đường." },
              { de: "Immer mehr Menschen leiden an Allergien.", vi: "Ngày càng nhiều người mắc dị ứng." },
            ],
            note: "leiden AN = bệnh cụ thể; leiden UNTER + Dat. = chịu đựng hoàn cảnh/áp lực.",
          },
          {
            id: "an-d3",
            label: "3. arbeiten an + Dat.",
            meaning: "đang làm, hoàn thiện",
            definition: "Sich intensiv mit einem Projekt beschäftigen.",
            examples: [
              { de: "Ich arbeite gerade an meiner Bachelorarbeit.", vi: "Tôi đang làm luận văn cử nhân." },
              { de: "Du musst noch an deiner Aussprache arbeiten.", vi: "Bạn còn phải luyện thêm phát âm." },
            ],
          },
          {
            id: "an-d4",
            label: "4. zweifeln an + Dat.",
            meaning: "nghi ngờ",
            definition: "Nicht sicher sein, ob etwas stimmt oder klappt.",
            examples: [
              { de: "Ich zweifle an der Richtigkeit dieser Zahlen.", vi: "Tôi nghi ngờ tính chính xác của các con số này." },
              { de: "Er zweifelte nie an ihrem Können.", vi: "Anh ấy chưa bao giờ nghi ngờ năng lực của cô." },
            ],
          },
          {
            id: "an-d5",
            label: "5. es liegt an + Dat.",
            meaning: "là do, nguyên nhân là",
            definition: "Die Ursache für etwas sein.",
            examples: [
              { de: "Es liegt am Wetter, dass so wenige gekommen sind.", vi: "Do thời tiết nên ít người đến như vậy." },
              { de: "Woran liegt das eigentlich?", vi: "Rốt cuộc điều đó là do đâu?" },
            ],
          },
          {
            id: "an-d6",
            label: "6. sich beteiligen an + Dat.",
            meaning: "tham gia góp phần vào",
            definition: "Bei etwas aktiv mitmachen.",
            examples: [
              { de: "Alle Schüler beteiligen sich an dem Projekt.", vi: "Tất cả học sinh tham gia dự án." },
              { de: "Er beteiligte sich rege an der Diskussion.", vi: "Anh ấy tham gia sôi nổi vào thảo luận." },
            ],
          },
          {
            id: "an-d7",
            label: "7. es mangelt / es fehlt an + Dat.",
            meaning: "thiếu hụt",
            definition: "Zu wenig von etwas vorhanden sein.",
            examples: [
              { de: "In vielen Kliniken mangelt es an Pflegepersonal.", vi: "Nhiều bệnh viện thiếu nhân lực điều dưỡng." },
              { de: "Es fehlt ihm nicht an Selbstbewusstsein.", vi: "Anh ta không thiếu sự tự tin." },
            ],
            note: "Từ trang trọng, thay cho 'zu wenig … geben'.",
          },
          {
            id: "an-d8",
            label: "8. sich orientieren an + Dat.",
            meaning: "lấy làm chuẩn, định hướng theo",
            definition: "Sich nach einem Vorbild oder Maßstab richten.",
            examples: [
              { de: "Die Preise orientieren sich am Markt.", vi: "Giá được định theo thị trường." },
              { de: "Viele Jugendliche orientieren sich an Vorbildern aus dem Netz.", vi: "Nhiều bạn trẻ lấy hình mẫu trên mạng làm chuẩn." },
            ],
          },
        ],
      },
      {
        id: "an-nomen",
        label: "Nomen + an",
        meaning: "danh từ đi với an",
        children: [
          {
            id: "an-n1",
            label: "die Teilnahme an + Dat.",
            meaning: "sự tham gia vào",
            definition: "Das Dabeisein bei einer Veranstaltung.",
            examples: [
              { de: "Die Teilnahme an dem Seminar ist kostenlos.", vi: "Việc tham gia hội thảo là miễn phí." },
            ],
          },
          {
            id: "an-n2",
            label: "das Interesse an + Dat.",
            meaning: "sự quan tâm đến",
            definition: "Der Wunsch, mehr über etwas zu erfahren.",
            examples: [
              { de: "Sie hat großes Interesse an einer Zusammenarbeit.", vi: "Cô ấy rất quan tâm đến việc hợp tác." },
            ],
            note: "Nhưng động từ lại là: sich interessieren FÜR + Akk.",
          },
          {
            id: "an-n3",
            label: "der Mangel an + Dat.",
            meaning: "sự thiếu hụt",
            definition: "Zu wenig von etwas.",
            examples: [
              { de: "Der Mangel an Fachkräften wird immer größer.", vi: "Tình trạng thiếu nhân lực lành nghề ngày càng trầm trọng." },
            ],
          },
          {
            id: "an-n4",
            label: "die Erinnerung an + Akk.",
            meaning: "ký ức về",
            definition: "Das, was man noch im Gedächtnis hat.",
            examples: [
              { de: "Die Erinnerung an meine Kindheit ist sehr lebendig.", vi: "Ký ức về tuổi thơ của tôi rất sống động." },
            ],
          },
          {
            id: "an-n5",
            label: "die Kritik an + Dat.",
            meaning: "sự phê phán về",
            definition: "Die negative Beurteilung von etwas.",
            examples: [
              { de: "Die Kritik an der Reform wurde immer lauter.", vi: "Sự phê phán về cuộc cải cách ngày càng gay gắt." },
            ],
          },
          {
            id: "an-n6",
            label: "der Zweifel an + Dat.",
            meaning: "mối nghi ngờ về",
            definition: "Die Unsicherheit, ob etwas richtig ist.",
            examples: [
              { de: "Es gibt keinen Zweifel an seiner Kompetenz.", vi: "Không có nghi ngờ gì về năng lực của anh ấy." },
            ],
          },
        ],
      },
      {
        id: "an-uebung",
        label: "Übung: Akkusativ oder Dativ?",
        meaning: "luyện tập: chọn đúng cách",
        note: "Điền mạo từ đúng để phân biệt Akkusativ và Dativ.",
        children: [
          { id: "an-ue1", label: "Ich denke oft an ___ Zukunft. (die Zukunft)", meaning: "nghĩ về tương lai — Akkusativ", answer: "die" },
          { id: "an-ue2", label: "Ich nehme an ___ Kurs teil. (der Kurs)", meaning: "tham gia khóa học — Dativ", answer: "dem" },
          { id: "an-ue3", label: "Sie leidet an ___ schweren Krankheit. (die Krankheit)", meaning: "mắc bệnh nặng — Dativ", answer: "einer" },
          { id: "an-ue4", label: "Erinnerst du dich an ___ Abend? (der Abend)", meaning: "nhớ buổi tối đó — Akkusativ", answer: "den" },
          { id: "an-ue5", label: "Ich arbeite an ___ neuen Projekt. (das Projekt)", meaning: "đang làm dự án mới — Dativ", answer: "einem" },
          { id: "an-ue6", label: "Wenden Sie sich bitte an ___ Sekretariat. (das Sekretariat)", meaning: "liên hệ văn phòng — Akkusativ", answer: "das" },
        ],
      },
    ],
  },
};

export default topic;
