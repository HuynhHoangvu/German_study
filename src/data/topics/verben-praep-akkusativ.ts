import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "verben-praep-akkusativ",
  title: "Verben + Präposition (Akkusativ)",
  titleVi: "Động từ + giới từ (Akkusativ)",
  description: "auf, über, für, um, an, gegen, in + Akkusativ — kèm định nghĩa và ví dụ",
  color: "#0e7490",
  level: "B2",
  category: "grammatik",
  root: {
    id: "root",
    label: "Verben + Präposition (Akk.)",
    meaning: "động từ đi với giới từ + Akkusativ",
    note: "Mỗi động từ có một giới từ cố định. Học theo cụm (Verb + Präposition + Kasus), đừng dịch từng từ.",
    children: [
      {
        id: "auf-akk",
        label: "auf + Akkusativ",
        meaning: "auf + Akk.",
        note: "Nhóm lớn nhất và hay ra thi nhất. Câu hỏi: Worauf...? / Auf wen...?",
        children: [
          {
            id: "auf-achten",
            label: "achten auf + Akk.",
            meaning: "chú ý đến, để tâm đến",
            definition: "Auf etwas oder jemanden gut aufpassen.",
            examples: [
              { de: "Ich achte auf meine Gesundheit.", vi: "Tôi chú ý đến sức khỏe của mình." },
              { de: "Achte bitte auf den Verkehr!", vi: "Hãy chú ý đến giao thông nhé!" },
            ],
          },
          {
            id: "auf-antworten",
            label: "antworten auf + Akk.",
            meaning: "trả lời (điều gì)",
            definition: "Eine Antwort geben.",
            examples: [
              { de: "Er antwortet auf meine E-Mail.", vi: "Anh ấy trả lời email của tôi." },
              { de: "Bitte antworte auf meine Frage!", vi: "Làm ơn trả lời câu hỏi của tôi!" },
            ],
            note: "antworten auf + Akk. (điều gì) nhưng antworten + Dat. (ai): Er antwortet mir.",
          },
          {
            id: "auf-warten",
            label: "warten auf + Akk.",
            meaning: "chờ đợi ai/cái gì",
            definition: "Bleiben, bis jemand oder etwas kommt.",
            examples: [
              { de: "Ich warte seit einer Stunde auf den Bus.", vi: "Tôi đã chờ xe buýt một tiếng rồi." },
              { de: "Wir warten noch auf Ihre Antwort.", vi: "Chúng tôi vẫn đang chờ câu trả lời của quý vị." },
            ],
          },
          {
            id: "auf-sich-freuen",
            label: "sich freuen auf + Akk.",
            meaning: "mong chờ (điều sắp tới)",
            definition: "Sich auf etwas freuen, das erst in der Zukunft passiert.",
            examples: [
              { de: "Ich freue mich auf den Urlaub.", vi: "Tôi mong chờ kỳ nghỉ." },
              { de: "Sie freut sich auf das Wiedersehen mit ihrer Familie.", vi: "Cô ấy mong đến ngày gặp lại gia đình." },
            ],
            note: "Phân biệt: sich freuen AUF = việc sắp tới; sich freuen ÜBER = việc đã xảy ra.",
          },
          {
            id: "auf-hoffen",
            label: "hoffen auf + Akk.",
            meaning: "hy vọng vào",
            definition: "Sich etwas wünschen und glauben, dass es eintritt.",
            examples: [
              { de: "Wir hoffen auf besseres Wetter.", vi: "Chúng tôi hy vọng thời tiết đẹp hơn." },
              { de: "Die Firma hofft auf einen neuen Auftrag.", vi: "Công ty hy vọng có đơn hàng mới." },
            ],
          },
          {
            id: "auf-verzichten",
            label: "verzichten auf + Akk.",
            meaning: "từ bỏ, không dùng đến",
            definition: "Etwas bewusst nicht tun oder nicht nehmen, obwohl man könnte.",
            examples: [
              { de: "Ich verzichte auf Zucker.", vi: "Tôi từ bỏ đường." },
              { de: "Aus Umweltgründen verzichten viele auf das eigene Auto.", vi: "Vì lý do môi trường, nhiều người từ bỏ xe riêng." },
            ],
          },
          {
            id: "auf-sich-vorbereiten",
            label: "sich vorbereiten auf + Akk.",
            meaning: "chuẩn bị cho",
            definition: "Sich für etwas Kommendes bereit machen.",
            examples: [
              { de: "Ich bereite mich auf die B2-Prüfung vor.", vi: "Tôi đang chuẩn bị cho kỳ thi B2." },
              { de: "Er bereitet sich gründlich auf das Vorstellungsgespräch vor.", vi: "Anh ấy chuẩn bị kỹ cho buổi phỏng vấn." },
            ],
            note: "trennbar: bereitet sich vor, bereitete sich vor, hat sich vorbereitet.",
          },
          {
            id: "auf-sich-konzentrieren",
            label: "sich konzentrieren auf + Akk.",
            meaning: "tập trung vào",
            definition: "Die ganze Aufmerksamkeit auf eine Sache richten.",
            examples: [
              { de: "Ich kann mich nicht auf die Arbeit konzentrieren.", vi: "Tôi không thể tập trung vào công việc." },
              { de: "Konzentrier dich auf das Wesentliche!", vi: "Hãy tập trung vào điều cốt lõi!" },
            ],
          },
          {
            id: "auf-sich-spezialisieren",
            label: "sich spezialisieren auf + Akk.",
            meaning: "chuyên về",
            definition: "Sich beruflich auf ein bestimmtes Gebiet festlegen.",
            examples: [
              { de: "Die Klinik hat sich auf Herzkrankheiten spezialisiert.", vi: "Phòng khám chuyên về bệnh tim." },
              { de: "Er hat sich auf Steuerrecht spezialisiert.", vi: "Anh ấy chuyên về luật thuế." },
            ],
          },
          {
            id: "auf-reagieren",
            label: "reagieren auf + Akk.",
            meaning: "phản ứng với",
            definition: "Auf etwas antworten oder sich durch etwas verändern.",
            examples: [
              { de: "Sie hat sofort auf meine Nachricht reagiert.", vi: "Cô ấy phản hồi tin nhắn của tôi ngay lập tức." },
              { de: "Meine Haut reagiert empfindlich auf die Sonne.", vi: "Da tôi phản ứng nhạy cảm với ánh nắng." },
            ],
          },
          {
            id: "auf-sich-verlassen",
            label: "sich verlassen auf + Akk.",
            meaning: "tin cậy vào, trông cậy vào",
            definition: "Jemandem so vertrauen, dass man sicher ist, er tut es.",
            examples: [
              { de: "Auf ihn kann man sich hundertprozentig verlassen.", vi: "Có thể tin cậy anh ấy tuyệt đối." },
              { de: "Verlass dich nicht auf sein Versprechen!", vi: "Đừng trông cậy vào lời hứa của anh ta!" },
            ],
          },
          {
            id: "auf-ankommen",
            label: "es kommt an auf + Akk.",
            meaning: "phụ thuộc vào, tùy vào",
            definition: "Von etwas abhängen; entscheidend sein.",
            examples: [
              { de: "Es kommt ganz auf das Wetter an.", vi: "Điều đó hoàn toàn phụ thuộc vào thời tiết." },
              { de: "Bei der Bewerbung kommt es vor allem auf die Erfahrung an.", vi: "Khi xin việc, điều quan trọng nhất là kinh nghiệm." },
            ],
            note: "Chỉ dùng ở dạng vô nhân xưng với 'es'. Rất hay dùng trong phần Nói B2.",
          },
          {
            id: "auf-sich-beziehen",
            label: "sich beziehen auf + Akk.",
            meaning: "đề cập/liên hệ đến",
            definition: "Von etwas sprechen, das vorher genannt wurde.",
            examples: [
              { de: "Ich beziehe mich auf Ihr Schreiben vom 5. Mai.", vi: "Tôi xin đề cập đến thư của quý vị ngày 5 tháng 5." },
              { de: "Die Studie bezieht sich auf junge Erwachsene.", vi: "Nghiên cứu này liên quan đến người trẻ trưởng thành." },
            ],
            note: "Cụm chuẩn mở đầu thư trang trọng trong phần Viết B2.",
          },
          {
            id: "auf-hinweisen",
            label: "hinweisen auf + Akk.",
            meaning: "chỉ ra, lưu ý về",
            definition: "Jemanden auf etwas Wichtiges aufmerksam machen.",
            examples: [
              { de: "Ich möchte darauf hinweisen, dass die Frist morgen endet.", vi: "Tôi muốn lưu ý rằng hạn chót là ngày mai." },
              { de: "Der Artikel weist auf ein ernstes Problem hin.", vi: "Bài báo chỉ ra một vấn đề nghiêm trọng." },
            ],
            note: "trennbar: weist hin, wies hin, hat hingewiesen.",
          },
          {
            id: "auf-wert-legen",
            label: "Wert legen auf + Akk.",
            meaning: "coi trọng điều gì",
            definition: "Etwas für besonders wichtig halten.",
            examples: [
              { de: "Ich lege großen Wert auf Pünktlichkeit.", vi: "Tôi rất coi trọng sự đúng giờ." },
              { de: "Der Betrieb legt Wert auf eine gute Ausbildung.", vi: "Doanh nghiệp coi trọng việc đào tạo tốt." },
            ],
          },
        ],
      },
      {
        id: "ueber-akk",
        label: "über + Akkusativ",
        meaning: "über + Akk.",
        note: "Câu hỏi: Worüber...? / Über wen...?",
        children: [
          {
            id: "ueber-sich-aergern",
            label: "sich ärgern über + Akk.",
            meaning: "bực mình về",
            definition: "Wütend oder verärgert sein wegen etwas.",
            examples: [
              { de: "Ich ärgere mich über den Lärm der Nachbarn.", vi: "Tôi bực mình vì tiếng ồn của hàng xóm." },
              { de: "Sie ärgert sich über ihren eigenen Fehler.", vi: "Cô ấy bực mình vì lỗi của chính mình." },
            ],
          },
          {
            id: "ueber-sich-beschweren",
            label: "sich beschweren über + Akk.",
            meaning: "phàn nàn, khiếu nại về",
            definition: "Offiziell sagen, dass man mit etwas unzufrieden ist.",
            examples: [
              { de: "Die Mieter beschweren sich über die hohen Nebenkosten.", vi: "Người thuê nhà khiếu nại về phí phụ trội cao." },
              { de: "Er hat sich beim Chef über die Arbeitsbedingungen beschwert.", vi: "Anh ấy đã phàn nàn với sếp về điều kiện làm việc." },
            ],
            note: "sich bei jemandem über etwas beschweren — cấu trúc đầy đủ, rất hay dùng trong thư khiếu nại.",
          },
          {
            id: "ueber-diskutieren",
            label: "diskutieren über + Akk.",
            meaning: "thảo luận về",
            definition: "Mit anderen ausführlich über ein Thema sprechen.",
            examples: [
              { de: "Wir diskutieren über den Klimawandel.", vi: "Chúng tôi thảo luận về biến đổi khí hậu." },
              { de: "Im Kurs haben wir über Vor- und Nachteile diskutiert.", vi: "Trong lớp chúng tôi đã thảo luận về ưu và nhược điểm." },
            ],
          },
          {
            id: "ueber-sich-freuen",
            label: "sich freuen über + Akk.",
            meaning: "vui vì (điều đã xảy ra)",
            definition: "Sich über etwas freuen, das schon passiert ist.",
            examples: [
              { de: "Ich freue mich über dein Geschenk.", vi: "Tôi vui vì món quà của bạn." },
              { de: "Sie hat sich sehr über die gute Note gefreut.", vi: "Cô ấy đã rất vui vì điểm số tốt." },
            ],
            note: "So sánh với sich freuen AUF (việc sắp tới).",
          },
          {
            id: "ueber-nachdenken",
            label: "nachdenken über + Akk.",
            meaning: "suy nghĩ về",
            definition: "Intensiv und länger über etwas denken.",
            examples: [
              { de: "Ich denke über einen Jobwechsel nach.", vi: "Tôi đang suy nghĩ về việc đổi việc." },
              { de: "Denk noch einmal in Ruhe über mein Angebot nach!", vi: "Hãy bình tĩnh suy nghĩ lại về đề nghị của tôi!" },
            ],
            note: "trennbar: denkt nach, dachte nach, hat nachgedacht.",
          },
          {
            id: "ueber-sich-informieren",
            label: "sich informieren über + Akk.",
            meaning: "tìm hiểu thông tin về",
            definition: "Informationen über etwas sammeln.",
            examples: [
              { de: "Ich habe mich über den Sprachkurs informiert.", vi: "Tôi đã tìm hiểu về khóa học tiếng." },
              { de: "Vor der Reise sollte man sich über das Land informieren.", vi: "Trước chuyến đi nên tìm hiểu về đất nước đó." },
            ],
          },
          {
            id: "ueber-berichten",
            label: "berichten über + Akk.",
            meaning: "tường thuật, đưa tin về",
            definition: "Sachlich erzählen, was passiert ist.",
            examples: [
              { de: "Die Zeitung berichtet über den Unfall.", vi: "Tờ báo đưa tin về vụ tai nạn." },
              { de: "Er berichtete über seine Erfahrungen im Ausland.", vi: "Anh ấy kể về những trải nghiệm ở nước ngoài." },
            ],
          },
          {
            id: "ueber-klagen",
            label: "klagen über + Akk.",
            meaning: "than phiền về",
            definition: "Sagen, dass etwas schlecht ist oder wehtut.",
            examples: [
              { de: "Viele Familien klagen über die hohen Mieten.", vi: "Nhiều gia đình than phiền về tiền thuê nhà cao." },
              { de: "Der Patient klagt über starke Rückenschmerzen.", vi: "Bệnh nhân than đau lưng dữ dội." },
            ],
          },
          {
            id: "ueber-sich-wundern",
            label: "sich wundern über + Akk.",
            meaning: "ngạc nhiên về",
            definition: "Etwas seltsam oder erstaunlich finden.",
            examples: [
              { de: "Ich wundere mich über sein merkwürdiges Verhalten.", vi: "Tôi ngạc nhiên về hành xử kỳ lạ của anh ta." },
              { de: "Darüber brauchst du dich nicht zu wundern.", vi: "Bạn không cần phải ngạc nhiên về điều đó." },
            ],
          },
          {
            id: "ueber-verfuegen",
            label: "verfügen über + Akk.",
            meaning: "có, sở hữu (trang trọng)",
            definition: "Etwas haben, über das man frei bestimmen kann.",
            examples: [
              { de: "Der Bewerber verfügt über langjährige Erfahrung.", vi: "Ứng viên có nhiều năm kinh nghiệm." },
              { de: "Die Wohnung verfügt über einen großen Balkon.", vi: "Căn hộ có một ban công lớn." },
            ],
            note: "Rất hay dùng trong thư xin việc thay cho 'haben'.",
          },
          {
            id: "ueber-sich-aufregen",
            label: "sich aufregen über + Akk.",
            meaning: "nổi nóng, bức xúc về",
            definition: "Sehr emotional und wütend auf etwas reagieren.",
            examples: [
              { de: "Reg dich nicht über Kleinigkeiten auf!", vi: "Đừng nổi nóng vì chuyện vặt vãnh!" },
              { de: "Alle regten sich über die Verspätung des Zuges auf.", vi: "Mọi người đều bức xúc vì tàu đến muộn." },
            ],
          },
        ],
      },
      {
        id: "fuer-akk",
        label: "für + Akkusativ",
        meaning: "für + Akk.",
        note: "Câu hỏi: Wofür...? / Für wen...?",
        children: [
          {
            id: "fuer-sich-interessieren",
            label: "sich interessieren für + Akk.",
            meaning: "quan tâm đến",
            definition: "Interesse an etwas haben.",
            examples: [
              { de: "Ich interessiere mich für deutsche Literatur.", vi: "Tôi quan tâm đến văn học Đức." },
              { de: "Interessierst du dich für Politik?", vi: "Bạn có quan tâm đến chính trị không?" },
            ],
          },
          {
            id: "fuer-sich-entscheiden",
            label: "sich entscheiden für + Akk.",
            meaning: "quyết định chọn",
            definition: "Nach dem Abwägen eine Wahl treffen.",
            examples: [
              { de: "Ich habe mich für die günstigere Wohnung entschieden.", vi: "Tôi đã quyết định chọn căn hộ rẻ hơn." },
              { de: "Viele entscheiden sich heute für ein Studium im Ausland.", vi: "Ngày nay nhiều người chọn du học." },
            ],
          },
          {
            id: "fuer-sich-bedanken",
            label: "sich bedanken für + Akk.",
            meaning: "cảm ơn vì",
            definition: "Danke sagen.",
            examples: [
              { de: "Ich bedanke mich herzlich für Ihre Hilfe.", vi: "Tôi chân thành cảm ơn vì sự giúp đỡ của quý vị." },
              { de: "Sie bedankte sich bei ihm für das Geschenk.", vi: "Cô ấy cảm ơn anh ta vì món quà." },
            ],
            note: "sich bei jemandem für etwas bedanken.",
          },
          {
            id: "fuer-sorgen",
            label: "sorgen für + Akk.",
            meaning: "lo liệu, đảm bảo cho",
            definition: "Dafür verantwortlich sein, dass etwas da ist oder funktioniert.",
            examples: [
              { de: "Die Eltern sorgen für ihre Kinder.", vi: "Cha mẹ lo cho con cái." },
              { de: "Bitte sorgen Sie für eine ruhige Atmosphäre.", vi: "Xin hãy đảm bảo một bầu không khí yên tĩnh." },
            ],
          },
          {
            id: "fuer-sich-eignen",
            label: "sich eignen für + Akk.",
            meaning: "phù hợp với",
            definition: "Für einen bestimmten Zweck passend sein.",
            examples: [
              { de: "Der Kurs eignet sich besonders für Anfänger.", vi: "Khóa học đặc biệt phù hợp với người mới bắt đầu." },
              { de: "Er eignet sich gut für diese verantwortungsvolle Stelle.", vi: "Anh ấy rất phù hợp với vị trí nhiều trách nhiệm này." },
            ],
          },
          {
            id: "fuer-sich-einsetzen",
            label: "sich einsetzen für + Akk.",
            meaning: "đấu tranh, cống hiến cho",
            definition: "Sich aktiv für ein Ziel oder eine Person engagieren.",
            examples: [
              { de: "Die Organisation setzt sich für den Umweltschutz ein.", vi: "Tổ chức này hoạt động vì bảo vệ môi trường." },
              { de: "Er hat sich für seine Kollegen eingesetzt.", vi: "Anh ấy đã lên tiếng bảo vệ đồng nghiệp." },
            ],
            note: "trennbar: setzt sich ein, setzte sich ein, hat sich eingesetzt.",
          },
          {
            id: "fuer-sich-engagieren",
            label: "sich engagieren für + Akk.",
            meaning: "dấn thân, tham gia vì",
            definition: "Viel Zeit und Kraft für eine Sache einsetzen.",
            examples: [
              { de: "Viele Jugendliche engagieren sich für soziale Projekte.", vi: "Nhiều bạn trẻ tham gia các dự án xã hội." },
              { de: "Sie engagiert sich ehrenamtlich für Geflüchtete.", vi: "Cô ấy tình nguyện hoạt động vì người tị nạn." },
            ],
          },
          {
            id: "fuer-halten",
            label: "halten für + Akk.",
            meaning: "coi là, cho rằng là",
            definition: "Eine bestimmte Meinung über jemanden oder etwas haben.",
            examples: [
              { de: "Ich halte diesen Vorschlag für sinnvoll.", vi: "Tôi cho rằng đề xuất này hợp lý." },
              { de: "Man hielt ihn lange für unschuldig.", vi: "Người ta đã lâu cho rằng anh ta vô tội." },
            ],
            note: "Cấu trúc nêu ý kiến rất hay trong phần Nói/Viết B2: Ich halte ... für ...",
          },
          {
            id: "fuer-sich-entschuldigen",
            label: "sich entschuldigen für + Akk.",
            meaning: "xin lỗi vì",
            definition: "Um Verzeihung bitten.",
            examples: [
              { de: "Ich entschuldige mich für die Verspätung.", vi: "Tôi xin lỗi vì đến muộn." },
              { de: "Er entschuldigte sich bei ihr für sein Verhalten.", vi: "Anh ấy xin lỗi cô vì cách cư xử của mình." },
            ],
          },
          {
            id: "fuer-ausgeben",
            label: "ausgeben für + Akk.",
            meaning: "chi tiêu cho",
            definition: "Geld für etwas bezahlen.",
            examples: [
              { de: "Wir geben monatlich viel Geld für Lebensmittel aus.", vi: "Hằng tháng chúng tôi chi nhiều tiền cho thực phẩm." },
              { de: "Wie viel gibst du für Kleidung aus?", vi: "Bạn chi bao nhiêu cho quần áo?" },
            ],
          },
          {
            id: "fuer-plaedieren",
            label: "plädieren für + Akk.",
            meaning: "ủng hộ, lên tiếng cho",
            definition: "Öffentlich und mit Argumenten für etwas eintreten.",
            examples: [
              { de: "Die Expertin plädiert für strengere Gesetze.", vi: "Nữ chuyên gia ủng hộ luật chặt chẽ hơn." },
              { de: "Ich plädiere dafür, das Projekt fortzusetzen.", vi: "Tôi ủng hộ việc tiếp tục dự án." },
            ],
            note: "Từ trang trọng, ghi điểm trong phần tranh luận B2.",
          },
        ],
      },
      {
        id: "um-akk",
        label: "um + Akkusativ",
        meaning: "um + Akk.",
        note: "Câu hỏi: Worum...? / Um wen...?",
        children: [
          {
            id: "um-sich-bewerben",
            label: "sich bewerben um + Akk.",
            meaning: "nộp đơn xin (vị trí)",
            definition: "Sich schriftlich um eine Stelle oder einen Platz bemühen.",
            examples: [
              { de: "Ich bewerbe mich um eine Stelle als Pflegefachkraft.", vi: "Tôi nộp đơn xin vị trí điều dưỡng viên." },
              { de: "Sie hat sich um ein Stipendium beworben.", vi: "Cô ấy đã xin học bổng." },
            ],
            note: "Cũng dùng: sich bewerben BEI + Dat. (công ty) UM + Akk. (vị trí).",
          },
          {
            id: "um-bitten",
            label: "bitten um + Akk.",
            meaning: "nhờ, xin (điều gì)",
            definition: "Jemanden höflich fragen, ob er etwas gibt oder tut.",
            examples: [
              { de: "Ich bitte Sie um eine kurze Rückmeldung.", vi: "Tôi xin quý vị phản hồi ngắn gọn." },
              { de: "Er bat seinen Chef um einen Tag frei.", vi: "Anh ấy xin sếp nghỉ một ngày." },
            ],
            note: "unregelmäßig: bittet, bat, hat gebeten.",
          },
          {
            id: "um-sich-kuemmern",
            label: "sich kümmern um + Akk.",
            meaning: "chăm lo, để ý đến",
            definition: "Sich um jemanden oder etwas verantwortlich kümmern.",
            examples: [
              { de: "Ich kümmere mich um meine kranke Großmutter.", vi: "Tôi chăm sóc bà tôi đang ốm." },
              { de: "Wer kümmert sich um die Organisation des Festes?", vi: "Ai lo việc tổ chức lễ hội?" },
            ],
          },
          {
            id: "um-es-geht",
            label: "es geht um + Akk.",
            meaning: "vấn đề là về, nói về",
            definition: "Das Thema oder der Inhalt von etwas sein.",
            examples: [
              { de: "In dem Text geht es um den Klimawandel.", vi: "Bài viết nói về biến đổi khí hậu." },
              { de: "Worum geht es in der Besprechung?", vi: "Cuộc họp bàn về chuyện gì?" },
            ],
            note: "Cụm bắt buộc thuộc khi tóm tắt văn bản trong phần Viết/Nói.",
          },
          {
            id: "um-sich-handeln",
            label: "es handelt sich um + Akk.",
            meaning: "đó là, liên quan đến",
            definition: "Sagen, was etwas genau ist (formell).",
            examples: [
              { de: "Es handelt sich um einen sehr seltenen Fall.", vi: "Đây là một trường hợp rất hiếm." },
              { de: "Bei dem Schreiben handelt es sich um eine Mahnung.", vi: "Lá thư đó là một giấy nhắc nợ." },
            ],
          },
          {
            id: "um-sich-bemuehen",
            label: "sich bemühen um + Akk.",
            meaning: "nỗ lực để đạt được",
            definition: "Sich Mühe geben, etwas zu bekommen oder zu erreichen.",
            examples: [
              { de: "Er bemüht sich seit Monaten um eine bezahlbare Wohnung.", vi: "Anh ấy nỗ lực nhiều tháng để tìm căn hộ giá phải chăng." },
              { de: "Wir bemühen uns um eine schnelle Lösung.", vi: "Chúng tôi cố gắng tìm giải pháp nhanh chóng." },
            ],
          },
          {
            id: "um-sich-sorgen",
            label: "sich sorgen um + Akk.",
            meaning: "lo lắng cho",
            definition: "Angst haben, dass jemandem etwas passiert.",
            examples: [
              { de: "Die Eltern sorgen sich um ihre Kinder.", vi: "Cha mẹ lo lắng cho con cái." },
              { de: "Viele sorgen sich um ihre berufliche Zukunft.", vi: "Nhiều người lo lắng cho tương lai nghề nghiệp." },
            ],
            note: "Đồng nghĩa: sich Sorgen machen um + Akk.",
          },
          {
            id: "um-kaempfen",
            label: "kämpfen um + Akk.",
            meaning: "tranh đấu để giành",
            definition: "Sich stark anstrengen, um etwas zu bekommen.",
            examples: [
              { de: "Das Team kämpft um den Sieg.", vi: "Đội bóng tranh đấu để giành chiến thắng." },
              { de: "Sie kämpft um ihren Arbeitsplatz.", vi: "Cô ấy đấu tranh để giữ chỗ làm." },
            ],
            note: "Phân biệt: kämpfen UM = để giành được; kämpfen FÜR = vì lý tưởng; kämpfen GEGEN = chống lại.",
          },
        ],
      },
      {
        id: "an-akk",
        label: "an + Akkusativ",
        meaning: "an + Akk.",
        note: "Câu hỏi: Woran...? / An wen...?",
        children: [
          {
            id: "an-denken",
            label: "denken an + Akk.",
            meaning: "nghĩ đến, nhớ làm gì",
            definition: "Jemanden oder etwas im Kopf haben.",
            examples: [
              { de: "Ich denke oft an meine Familie in Vietnam.", vi: "Tôi thường nghĩ đến gia đình ở Việt Nam." },
              { de: "Denk bitte an den Termin am Montag!", vi: "Nhớ cuộc hẹn thứ Hai nhé!" },
            ],
          },
          {
            id: "an-sich-erinnern",
            label: "sich erinnern an + Akk.",
            meaning: "nhớ về, hồi tưởng",
            definition: "Etwas aus der Vergangenheit wieder im Gedächtnis haben.",
            examples: [
              { de: "Ich erinnere mich gut an meinen ersten Schultag.", vi: "Tôi nhớ rõ ngày đầu tiên đi học." },
              { de: "Erinnerst du dich noch an ihn?", vi: "Bạn còn nhớ anh ấy không?" },
            ],
            note: "erinnern AN dùng cho ký ức; jemanden AN etwas erinnern = nhắc ai nhớ điều gì.",
          },
          {
            id: "an-sich-gewoehnen",
            label: "sich gewöhnen an + Akk.",
            meaning: "làm quen với",
            definition: "Etwas mit der Zeit normal finden.",
            examples: [
              { de: "Ich habe mich schnell an das deutsche Wetter gewöhnt.", vi: "Tôi nhanh chóng quen với thời tiết Đức." },
              { de: "An die neuen Kollegen muss ich mich erst gewöhnen.", vi: "Tôi còn phải làm quen với các đồng nghiệp mới." },
            ],
          },
          {
            id: "an-glauben",
            label: "glauben an + Akk.",
            meaning: "tin vào",
            definition: "Überzeugt sein, dass es etwas gibt oder dass etwas klappt.",
            examples: [
              { de: "Ich glaube an dich!", vi: "Tôi tin ở bạn!" },
              { de: "Sie glaubt fest an den Erfolg des Projekts.", vi: "Cô ấy tin chắc vào thành công của dự án." },
            ],
            note: "glauben AN + Akk. = tin tưởng; glauben + Dat. = tin lời ai (Ich glaube dir).",
          },
          {
            id: "an-sich-wenden",
            label: "sich wenden an + Akk.",
            meaning: "liên hệ, tìm đến (ai)",
            definition: "Jemanden um Hilfe oder Auskunft bitten.",
            examples: [
              { de: "Bei Fragen wenden Sie sich bitte an das Sekretariat.", vi: "Nếu có thắc mắc, xin liên hệ văn phòng." },
              { de: "Er wandte sich an einen Anwalt.", vi: "Anh ấy đã tìm đến một luật sư." },
            ],
            note: "Cụm chuẩn trong thư hành chính.",
          },
          {
            id: "an-appellieren",
            label: "appellieren an + Akk.",
            meaning: "kêu gọi",
            definition: "Jemanden eindringlich bitten, etwas zu tun.",
            examples: [
              { de: "Die Regierung appelliert an die Vernunft der Bürger.", vi: "Chính phủ kêu gọi sự lý trí của người dân." },
              { de: "Ich appelliere an Ihr Verständnis.", vi: "Tôi mong nhận được sự thông cảm của quý vị." },
            ],
          },
          {
            id: "an-sich-richten",
            label: "sich richten an + Akk.",
            meaning: "hướng đến (đối tượng)",
            definition: "Für eine bestimmte Zielgruppe gedacht sein.",
            examples: [
              { de: "Das Angebot richtet sich an Berufstätige.", vi: "Ưu đãi này hướng đến người đi làm." },
              { de: "Der Kurs richtet sich an fortgeschrittene Lernende.", vi: "Khóa học dành cho người học trình độ cao." },
            ],
          },
          {
            id: "an-teilnehmen",
            label: "teilnehmen an + Dat.",
            meaning: "tham gia vào",
            definition: "Bei einer Veranstaltung oder Aktion dabei sein.",
            examples: [
              { de: "Ich nehme an einem Integrationskurs teil.", vi: "Tôi tham gia một khóa hội nhập." },
              { de: "Über 200 Personen nahmen an der Demonstration teil.", vi: "Hơn 200 người đã tham gia cuộc biểu tình." },
            ],
            note: "Chú ý: 'an' ở đây đi với DATIV, không phải Akkusativ — lỗi rất hay gặp.",
          },
        ],
      },
      {
        id: "gegen-akk",
        label: "gegen + Akkusativ",
        meaning: "gegen + Akk.",
        note: "'gegen' luôn đi với Akkusativ. Ý nghĩa: chống lại, phản đối.",
        children: [
          {
            id: "gegen-protestieren",
            label: "protestieren gegen + Akk.",
            meaning: "phản đối",
            definition: "Öffentlich zeigen, dass man mit etwas nicht einverstanden ist.",
            examples: [
              { de: "Tausende protestieren gegen die neue Regelung.", vi: "Hàng nghìn người phản đối quy định mới." },
              { de: "Die Anwohner protestieren gegen den Bau der Autobahn.", vi: "Cư dân phản đối việc xây đường cao tốc." },
            ],
          },
          {
            id: "gegen-sich-wehren",
            label: "sich wehren gegen + Akk.",
            meaning: "chống lại, tự vệ trước",
            definition: "Sich gegen einen Angriff oder Vorwurf verteidigen.",
            examples: [
              { de: "Sie wehrt sich gegen die ungerechte Kritik.", vi: "Cô ấy phản bác lại lời phê bình bất công." },
              { de: "Man muss sich gegen Diskriminierung wehren.", vi: "Phải chống lại sự phân biệt đối xử." },
            ],
          },
          {
            id: "gegen-kaempfen",
            label: "kämpfen gegen + Akk.",
            meaning: "đấu tranh chống lại",
            definition: "Aktiv etwas Negatives bekämpfen.",
            examples: [
              { de: "Die Stadt kämpft gegen die Luftverschmutzung.", vi: "Thành phố đấu tranh chống ô nhiễm không khí." },
              { de: "Er kämpft seit Jahren gegen seine Sucht.", vi: "Anh ấy đấu tranh với cơn nghiện nhiều năm nay." },
            ],
          },
          {
            id: "gegen-verstossen",
            label: "verstoßen gegen + Akk.",
            meaning: "vi phạm (quy định)",
            definition: "Eine Regel oder ein Gesetz brechen.",
            examples: [
              { de: "Das verstößt gegen die Hausordnung.", vi: "Điều đó vi phạm nội quy nhà chung cư." },
              { de: "Wer gegen die Vorschriften verstößt, muss eine Strafe zahlen.", vi: "Ai vi phạm quy định phải nộp phạt." },
            ],
            note: "unregelmäßig: verstößt, verstieß, hat verstoßen.",
          },
          {
            id: "gegen-sich-entscheiden",
            label: "sich entscheiden gegen + Akk.",
            meaning: "quyết định không chọn",
            definition: "Nach dem Abwägen etwas nicht wählen.",
            examples: [
              { de: "Wir haben uns gegen einen Umzug entschieden.", vi: "Chúng tôi quyết định không chuyển nhà." },
              { de: "Sie entschied sich gegen die teurere Variante.", vi: "Cô ấy quyết định không chọn phương án đắt hơn." },
            ],
          },
          {
            id: "gegen-etwas-haben",
            label: "etwas haben gegen + Akk.",
            meaning: "phản đối, không ưa",
            definition: "Mit jemandem oder etwas nicht einverstanden sein.",
            examples: [
              { de: "Hast du etwas gegen meinen Vorschlag?", vi: "Bạn có phản đối đề xuất của tôi không?" },
              { de: "Ich habe nichts gegen Überstunden, wenn sie bezahlt werden.", vi: "Tôi không phản đối làm thêm giờ nếu được trả lương." },
            ],
          },
        ],
      },
      {
        id: "in-akk",
        label: "in + Akkusativ",
        meaning: "in + Akk.",
        note: "Câu hỏi: Worein...? Thực tế thường dùng: In wen...? / Wo hinein...?",
        children: [
          {
            id: "in-sich-verlieben",
            label: "sich verlieben in + Akk.",
            meaning: "phải lòng, yêu",
            definition: "Anfangen, jemanden zu lieben.",
            examples: [
              { de: "Er hat sich in seine Nachbarin verliebt.", vi: "Anh ấy đã phải lòng cô hàng xóm." },
              { de: "Ich habe mich sofort in diese Stadt verliebt.", vi: "Tôi đã yêu thành phố này ngay lập tức." },
            ],
          },
          {
            id: "in-investieren",
            label: "investieren in + Akk.",
            meaning: "đầu tư vào",
            definition: "Geld oder Zeit für etwas einsetzen, um später zu profitieren.",
            examples: [
              { de: "Der Staat investiert in erneuerbare Energien.", vi: "Nhà nước đầu tư vào năng lượng tái tạo." },
              { de: "Man sollte in seine Bildung investieren.", vi: "Nên đầu tư vào việc học của mình." },
            ],
          },
          {
            id: "in-sich-einmischen",
            label: "sich einmischen in + Akk.",
            meaning: "can thiệp, xen vào",
            definition: "Sich in eine Sache mischen, die einen nichts angeht.",
            examples: [
              { de: "Misch dich nicht in fremde Angelegenheiten ein!", vi: "Đừng xen vào chuyện của người khác!" },
              { de: "Die Eltern mischen sich zu stark in ihr Leben ein.", vi: "Bố mẹ can thiệp quá nhiều vào cuộc sống của cô ấy." },
            ],
          },
          {
            id: "in-geraten",
            label: "geraten in + Akk.",
            meaning: "rơi vào (tình huống xấu)",
            definition: "Ungewollt in eine schwierige Lage kommen.",
            examples: [
              { de: "Die Familie ist in finanzielle Schwierigkeiten geraten.", vi: "Gia đình đó đã rơi vào khó khăn tài chính." },
              { de: "Wir sind in einen heftigen Streit geraten.", vi: "Chúng tôi đã rơi vào một cuộc cãi vã gay gắt." },
            ],
            note: "unregelmäßig mit sein: gerät, geriet, ist geraten.",
          },
          {
            id: "in-eingreifen",
            label: "eingreifen in + Akk.",
            meaning: "can thiệp vào",
            definition: "Aktiv in eine laufende Situation eingreifen, um sie zu ändern.",
            examples: [
              { de: "Die Polizei musste in den Streit eingreifen.", vi: "Cảnh sát đã phải can thiệp vào vụ cãi nhau." },
              { de: "Der Staat greift stark in den Wohnungsmarkt ein.", vi: "Nhà nước can thiệp mạnh vào thị trường nhà ở." },
            ],
          },
          {
            id: "in-einwilligen",
            label: "einwilligen in + Akk.",
            meaning: "đồng ý với",
            definition: "Offiziell Ja zu etwas sagen.",
            examples: [
              { de: "Der Patient willigte in die Operation ein.", vi: "Bệnh nhân đã đồng ý phẫu thuật." },
              { de: "Sie hat in die Scheidung eingewilligt.", vi: "Cô ấy đã đồng ý ly hôn." },
            ],
          },
        ],
      },
      {
        id: "uebung-akk",
        label: "Beispielsätze",
        meaning: "câu ví dụ mẫu",
        note: "Câu ví dụ hoàn chỉnh — đọc to để nhớ giới từ đi kèm.",
        children: [
          { id: "ue-akk-1", label: "sich bewerben um eine Stelle", meaning: "nộp đơn xin một vị trí" },
          { id: "ue-akk-2", label: "sich freuen auf die Reise nächste Woche", meaning: "mong chờ chuyến đi tuần tới" },
          { id: "ue-akk-3", label: "sich ärgern über den Lärm", meaning: "bực mình vì tiếng ồn" },
          { id: "ue-akk-4", label: "sich interessieren für Kunst", meaning: "quan tâm đến nghệ thuật" },
          { id: "ue-akk-5", label: "sich gewöhnen an das neue Leben", meaning: "làm quen với cuộc sống mới" },
          { id: "ue-akk-6", label: "protestieren gegen die Reform", meaning: "phản đối cuộc cải cách" },
          { id: "ue-akk-7", label: "sich verlieben in jemanden", meaning: "phải lòng ai đó" },
          { id: "ue-akk-8", label: "verzichten auf das Auto", meaning: "từ bỏ xe hơi" },
          { id: "ue-akk-9", label: "sich kümmern um die Kinder", meaning: "chăm lo cho bọn trẻ" },
          { id: "ue-akk-10", label: "nachdenken über einen Jobwechsel", meaning: "suy nghĩ về việc đổi việc" },
        ],
      },
    ],
  },
};

export default topic;
