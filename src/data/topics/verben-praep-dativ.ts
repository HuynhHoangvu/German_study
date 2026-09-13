import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "verben-praep-dativ",
  title: "Verben + Präposition (Dativ)",
  titleVi: "Động từ + giới từ (Dativ)",
  description: "mit, von, zu, nach, bei, vor, an, unter, aus + Dativ — kèm định nghĩa và ví dụ",
  color: "#164e63",
  level: "B2",
  category: "grammatik",
  root: {
    id: "root",
    label: "Verben + Präposition (Dat.)",
    meaning: "động từ đi với giới từ + Dativ",
    note: "Mẹo hỏi: với vật dùng Wo(r)- + giới từ (Womit? Wovon? Wozu?), với người dùng giới từ + wem (Mit wem? Von wem?).",
    children: [
      {
        id: "mit-dat",
        label: "mit + Dativ",
        meaning: "mit + Dat.",
        note: "Câu hỏi: Womit...? / Mit wem...?",
        children: [
          {
            id: "mit-sich-beschaeftigen",
            label: "sich beschäftigen mit + Dat.",
            meaning: "bận tâm, nghiên cứu về",
            definition: "Sich längere Zeit mit einem Thema oder einer Aufgabe befassen.",
            examples: [
              { de: "Ich beschäftige mich seit Jahren mit deutscher Grammatik.", vi: "Tôi nghiên cứu ngữ pháp Đức nhiều năm nay." },
              { de: "Die Studie beschäftigt sich mit dem Verhalten von Jugendlichen.", vi: "Nghiên cứu này bàn về hành vi của thanh thiếu niên." },
            ],
          },
          {
            id: "mit-anfangen",
            label: "anfangen mit + Dat.",
            meaning: "bắt đầu bằng/với",
            definition: "Mit einer Tätigkeit beginnen.",
            examples: [
              { de: "Ich fange morgen mit dem neuen Kurs an.", vi: "Ngày mai tôi bắt đầu khóa học mới." },
              { de: "Fangen wir mit dem wichtigsten Punkt an!", vi: "Chúng ta hãy bắt đầu với điểm quan trọng nhất!" },
            ],
            note: "trennbar, unregelmäßig: fängt an, fing an, hat angefangen.",
          },
          {
            id: "mit-aufhoeren",
            label: "aufhören mit + Dat.",
            meaning: "ngừng, bỏ (thói quen)",
            definition: "Eine Tätigkeit beenden.",
            examples: [
              { de: "Er hat mit dem Rauchen aufgehört.", vi: "Anh ấy đã bỏ thuốc lá." },
              { de: "Hör bitte mit dem Lärm auf!", vi: "Làm ơn ngừng gây ồn đi!" },
            ],
          },
          {
            id: "mit-rechnen",
            label: "rechnen mit + Dat.",
            meaning: "tính đến, lường trước",
            definition: "Etwas erwarten oder für wahrscheinlich halten.",
            examples: [
              { de: "Mit so einer Reaktion hatte ich nicht gerechnet.", vi: "Tôi đã không lường trước một phản ứng như vậy." },
              { de: "Wir rechnen mit steigenden Preisen.", vi: "Chúng tôi dự tính giá sẽ tăng." },
            ],
          },
          {
            id: "mit-sich-abfinden",
            label: "sich abfinden mit + Dat.",
            meaning: "cam chịu, chấp nhận",
            definition: "Etwas Unangenehmes akzeptieren, weil man es nicht ändern kann.",
            examples: [
              { de: "Ich muss mich mit der Absage abfinden.", vi: "Tôi phải chấp nhận lời từ chối." },
              { de: "Er kann sich nicht mit der Situation abfinden.", vi: "Anh ấy không thể chấp nhận hoàn cảnh này." },
            ],
          },
          {
            id: "mit-zusammenhaengen",
            label: "zusammenhängen mit + Dat.",
            meaning: "liên quan đến",
            definition: "In einem Zusammenhang mit etwas stehen.",
            examples: [
              { de: "Das Problem hängt mit dem Klimawandel zusammen.", vi: "Vấn đề này liên quan đến biến đổi khí hậu." },
              { de: "Womit hängt sein plötzlicher Rücktritt zusammen?", vi: "Việc ông ấy đột ngột từ chức liên quan đến điều gì?" },
            ],
          },
          {
            id: "mit-sich-auseinandersetzen",
            label: "sich auseinandersetzen mit + Dat.",
            meaning: "phân tích, đối diện với",
            definition: "Sich kritisch und gründlich mit einem Thema befassen.",
            examples: [
              { de: "Man muss sich kritisch mit diesem Thema auseinandersetzen.", vi: "Cần phân tích chủ đề này một cách phê phán." },
              { de: "Sie setzt sich mit ihrer Vergangenheit auseinander.", vi: "Cô ấy đối diện với quá khứ của mình." },
            ],
            note: "Động từ ghi điểm cao trong phần Viết B2.",
          },
          {
            id: "mit-vergleichen",
            label: "vergleichen mit + Dat.",
            meaning: "so sánh với",
            definition: "Untersuchen, was bei zwei Dingen gleich oder anders ist.",
            examples: [
              { de: "Verglichen mit früher ist die Lage heute besser.", vi: "So với trước kia, tình hình nay tốt hơn." },
              { de: "Man kann Deutschland nicht mit Vietnam vergleichen.", vi: "Không thể so sánh nước Đức với Việt Nam." },
            ],
          },
        ],
      },
      {
        id: "von-dat",
        label: "von + Dativ",
        meaning: "von + Dat.",
        note: "Câu hỏi: Wovon...? / Von wem...?",
        children: [
          {
            id: "von-abhaengen",
            label: "abhängen von + Dat.",
            meaning: "phụ thuộc vào",
            definition: "Von jemandem oder etwas bestimmt werden.",
            examples: [
              { de: "Meine Entscheidung hängt vom Gehalt ab.", vi: "Quyết định của tôi phụ thuộc vào mức lương." },
              { de: "Das hängt ganz von den Umständen ab.", vi: "Điều đó hoàn toàn tùy hoàn cảnh." },
            ],
            note: "trennbar, unregelmäßig: hängt ab, hing ab, hat abgehangen.",
          },
          {
            id: "von-traeumen",
            label: "träumen von + Dat.",
            meaning: "mơ về, ước mơ",
            definition: "Sich etwas sehr wünschen oder im Schlaf davon träumen.",
            examples: [
              { de: "Sie träumt von einem eigenen Haus.", vi: "Cô ấy mơ về một căn nhà riêng." },
              { de: "Ich habe letzte Nacht von meiner Kindheit geträumt.", vi: "Đêm qua tôi mơ về tuổi thơ." },
            ],
          },
          {
            id: "von-profitieren",
            label: "profitieren von + Dat.",
            meaning: "hưởng lợi từ",
            definition: "Einen Vorteil aus etwas ziehen.",
            examples: [
              { de: "Von der Digitalisierung profitieren vor allem junge Leute.", vi: "Người trẻ đặc biệt hưởng lợi từ số hóa." },
              { de: "Beide Seiten profitieren von dieser Zusammenarbeit.", vi: "Cả hai bên đều hưởng lợi từ hợp tác này." },
            ],
          },
          {
            id: "von-ueberzeugen",
            label: "überzeugen von + Dat.",
            meaning: "thuyết phục về",
            definition: "Jemanden dazu bringen, dass er etwas glaubt.",
            examples: [
              { de: "Er hat mich von seinem Plan überzeugt.", vi: "Anh ấy đã thuyết phục tôi về kế hoạch của mình." },
              { de: "Ich bin davon überzeugt, dass sich das lohnt.", vi: "Tôi tin chắc rằng việc đó đáng giá." },
            ],
            note: "Cụm nêu quan điểm: Ich bin davon überzeugt, dass ...",
          },
          {
            id: "von-halten",
            label: "halten von + Dat.",
            meaning: "nghĩ thế nào về",
            definition: "Eine bestimmte Meinung über etwas oder jemanden haben.",
            examples: [
              { de: "Was hältst du von diesem Vorschlag?", vi: "Bạn nghĩ sao về đề xuất này?" },
              { de: "Ich halte nicht viel von solchen Diäten.", vi: "Tôi không đánh giá cao những chế độ ăn kiêng kiểu đó." },
            ],
            note: "Câu hỏi kinh điển trong phần Nói: Was halten Sie von ...?",
          },
          {
            id: "von-sich-erholen",
            label: "sich erholen von + Dat.",
            meaning: "hồi phục sau",
            definition: "Nach einer Anstrengung oder Krankheit wieder gesund und fit werden.",
            examples: [
              { de: "Ich muss mich erst von der Grippe erholen.", vi: "Tôi cần hồi phục sau đợt cúm đã." },
              { de: "Im Urlaub erhole ich mich vom Stress im Büro.", vi: "Trong kỳ nghỉ tôi hồi phục sau căng thẳng nơi công sở." },
            ],
          },
          {
            id: "von-sich-verabschieden",
            label: "sich verabschieden von + Dat.",
            meaning: "chào tạm biệt",
            definition: "Beim Weggehen Auf Wiedersehen sagen.",
            examples: [
              { de: "Ich habe mich von meinen Kollegen verabschiedet.", vi: "Tôi đã chào tạm biệt các đồng nghiệp." },
              { de: "Sie verabschiedete sich herzlich von der Gastfamilie.", vi: "Cô ấy chia tay thân mật với gia đình bản xứ." },
            ],
          },
          {
            id: "von-ausgehen",
            label: "ausgehen von + Dat.",
            meaning: "giả định rằng, xuất phát từ",
            definition: "Etwas als Grundlage annehmen.",
            examples: [
              { de: "Ich gehe davon aus, dass alle pünktlich kommen.", vi: "Tôi cho rằng mọi người sẽ đến đúng giờ." },
              { de: "Die Experten gehen von steigenden Kosten aus.", vi: "Các chuyên gia giả định chi phí sẽ tăng." },
            ],
            note: "Cụm trang trọng để nêu giả định trong bài Viết.",
          },
        ],
      },
      {
        id: "zu-dat",
        label: "zu + Dativ",
        meaning: "zu + Dat.",
        note: "Câu hỏi: Wozu...? / Zu wem...?",
        children: [
          {
            id: "zu-fuehren",
            label: "führen zu + Dat.",
            meaning: "dẫn đến (hệ quả)",
            definition: "Eine bestimmte Folge haben.",
            examples: [
              { de: "Stress führt oft zu gesundheitlichen Problemen.", vi: "Căng thẳng thường dẫn đến vấn đề sức khỏe." },
              { de: "Das Gespräch führte zu keinem Ergebnis.", vi: "Cuộc trò chuyện không dẫn đến kết quả nào." },
            ],
            note: "Động từ chủ lực khi nêu nguyên nhân - hệ quả trong bài Viết B2.",
          },
          {
            id: "zu-beitragen",
            label: "beitragen zu + Dat.",
            meaning: "góp phần vào",
            definition: "Einen Teil dazu tun, dass etwas gelingt oder passiert.",
            examples: [
              { de: "Jeder kann zum Umweltschutz beitragen.", vi: "Mỗi người đều có thể góp phần bảo vệ môi trường." },
              { de: "Das trägt wesentlich zur Verbesserung der Lage bei.", vi: "Điều đó góp phần đáng kể cải thiện tình hình." },
            ],
            note: "trennbar, unregelmäßig: trägt bei, trug bei, hat beigetragen.",
          },
          {
            id: "zu-gehoeren",
            label: "gehören zu + Dat.",
            meaning: "thuộc về, nằm trong số",
            definition: "Ein Teil von etwas sein.",
            examples: [
              { de: "Pünktlichkeit gehört zu den wichtigsten Tugenden in Deutschland.", vi: "Đúng giờ là một trong những đức tính quan trọng nhất ở Đức." },
              { de: "Er gehört zu den besten Studenten des Jahrgangs.", vi: "Anh ấy nằm trong số sinh viên giỏi nhất khóa." },
            ],
          },
          {
            id: "zu-gratulieren",
            label: "gratulieren zu + Dat.",
            meaning: "chúc mừng về",
            definition: "Jemandem Glückwünsche aussprechen.",
            examples: [
              { de: "Ich gratuliere dir zum bestandenen Examen!", vi: "Chúc mừng bạn đã đỗ kỳ thi!" },
              { de: "Wir gratulieren Ihnen herzlich zur Beförderung.", vi: "Chúng tôi chân thành chúc mừng anh/chị được thăng chức." },
            ],
            note: "jemandem (Dat.) zu etwas (Dat.) gratulieren.",
          },
          {
            id: "zu-einladen",
            label: "einladen zu + Dat.",
            meaning: "mời đến (dịp gì)",
            definition: "Jemanden bitten, zu einem Anlass zu kommen.",
            examples: [
              { de: "Sie hat mich zu ihrer Hochzeit eingeladen.", vi: "Cô ấy đã mời tôi đến đám cưới." },
              { de: "Wir laden Sie herzlich zu unserem Sommerfest ein.", vi: "Chúng tôi trân trọng mời quý vị đến lễ hội mùa hè." },
            ],
          },
          {
            id: "zu-neigen",
            label: "neigen zu + Dat.",
            meaning: "có xu hướng",
            definition: "Eine Tendenz zu einem bestimmten Verhalten haben.",
            examples: [
              { de: "Er neigt dazu, alles zu dramatisieren.", vi: "Anh ta có xu hướng làm mọi chuyện thành bi kịch." },
              { de: "Junge Menschen neigen zu spontanen Käufen.", vi: "Người trẻ có xu hướng mua sắm bốc đồng." },
            ],
          },
          {
            id: "zu-auffordern",
            label: "auffordern zu + Dat.",
            meaning: "kêu gọi, yêu cầu làm gì",
            definition: "Jemanden deutlich bitten, etwas zu tun.",
            examples: [
              { de: "Die Stadt fordert die Bürger zum Wassersparen auf.", vi: "Thành phố kêu gọi người dân tiết kiệm nước." },
              { de: "Der Lehrer forderte uns zur Mitarbeit auf.", vi: "Thầy giáo yêu cầu chúng tôi tham gia xây dựng bài." },
            ],
          },
        ],
      },
      {
        id: "nach-dat",
        label: "nach + Dativ",
        meaning: "nach + Dat.",
        note: "Câu hỏi: Wonach...? / Nach wem...?",
        children: [
          {
            id: "nach-fragen",
            label: "fragen nach + Dat.",
            meaning: "hỏi thăm về",
            definition: "Eine Information über jemanden oder etwas erbitten.",
            examples: [
              { de: "Ein Tourist hat nach dem Weg gefragt.", vi: "Một du khách đã hỏi đường." },
              { de: "Sie fragte nach deiner Gesundheit.", vi: "Cô ấy hỏi thăm sức khỏe của bạn." },
            ],
          },
          {
            id: "nach-suchen",
            label: "suchen nach + Dat.",
            meaning: "tìm kiếm",
            definition: "Sich bemühen, etwas oder jemanden zu finden.",
            examples: [
              { de: "Ich suche seit Wochen nach einer bezahlbaren Wohnung.", vi: "Tôi tìm căn hộ giá phải chăng đã nhiều tuần." },
              { de: "Die Polizei sucht nach Zeugen des Unfalls.", vi: "Cảnh sát đang tìm nhân chứng vụ tai nạn." },
            ],
          },
          {
            id: "nach-sich-erkundigen",
            label: "sich erkundigen nach + Dat.",
            meaning: "hỏi thăm (lịch sự)",
            definition: "Höflich um Auskunft bitten.",
            examples: [
              { de: "Ich möchte mich nach den Öffnungszeiten erkundigen.", vi: "Tôi muốn hỏi về giờ mở cửa." },
              { de: "Er erkundigte sich nach dem Stand der Bewerbung.", vi: "Anh ấy hỏi thăm về tình trạng hồ sơ xin việc." },
            ],
            note: "Trang trọng hơn 'fragen nach' — dùng trong email B2.",
          },
          {
            id: "nach-sich-sehnen",
            label: "sich sehnen nach + Dat.",
            meaning: "khao khát, nhớ da diết",
            definition: "Etwas oder jemanden sehr stark vermissen und sich danach wünschen.",
            examples: [
              { de: "Ich sehne mich nach meiner Heimat.", vi: "Tôi nhớ quê hương da diết." },
              { de: "Nach der stressigen Woche sehnt sie sich nach Ruhe.", vi: "Sau tuần căng thẳng, cô ấy khao khát sự yên tĩnh." },
            ],
          },
          {
            id: "nach-streben",
            label: "streben nach + Dat.",
            meaning: "phấn đấu vì",
            definition: "Sich zielstrebig um etwas bemühen.",
            examples: [
              { de: "Viele streben nach beruflichem Erfolg.", vi: "Nhiều người phấn đấu vì thành công nghề nghiệp." },
              { de: "Das Unternehmen strebt nach mehr Nachhaltigkeit.", vi: "Doanh nghiệp hướng tới sự bền vững hơn." },
            ],
          },
          {
            id: "nach-riechen",
            label: "riechen / schmecken nach + Dat.",
            meaning: "có mùi/vị như",
            definition: "Einen bestimmten Geruch oder Geschmack haben.",
            examples: [
              { de: "Hier riecht es nach frischem Kaffee.", vi: "Ở đây có mùi cà phê mới pha." },
              { de: "Die Suppe schmeckt stark nach Ingwer.", vi: "Món súp có vị gừng đậm." },
            ],
          },
        ],
      },
      {
        id: "vor-dat",
        label: "vor + Dativ",
        meaning: "vor + Dat.",
        note: "Nhóm ý nghĩa: sợ hãi, cảnh báo, bảo vệ. Câu hỏi: Wovor...?",
        children: [
          {
            id: "vor-angst-haben",
            label: "Angst haben vor + Dat.",
            meaning: "sợ điều gì",
            definition: "Furcht vor etwas oder jemandem empfinden.",
            examples: [
              { de: "Viele Menschen haben Angst vor dem Fliegen.", vi: "Nhiều người sợ đi máy bay." },
              { de: "Ich habe keine Angst vor der Prüfung.", vi: "Tôi không sợ kỳ thi." },
            ],
          },
          {
            id: "vor-sich-fuerchten",
            label: "sich fürchten vor + Dat.",
            meaning: "e sợ",
            definition: "Angst vor etwas haben (gehoben).",
            examples: [
              { de: "Das Kind fürchtet sich vor der Dunkelheit.", vi: "Đứa bé sợ bóng tối." },
              { de: "Er fürchtet sich vor dem Gespräch mit dem Chef.", vi: "Anh ấy e ngại cuộc nói chuyện với sếp." },
            ],
          },
          {
            id: "vor-warnen",
            label: "warnen vor + Dat.",
            meaning: "cảnh báo về",
            definition: "Jemanden auf eine Gefahr aufmerksam machen.",
            examples: [
              { de: "Der Wetterdienst warnt vor starkem Sturm.", vi: "Cơ quan khí tượng cảnh báo về bão mạnh." },
              { de: "Ärzte warnen vor den Folgen von Schlafmangel.", vi: "Bác sĩ cảnh báo về hậu quả của thiếu ngủ." },
            ],
          },
          {
            id: "vor-schuetzen",
            label: "schützen vor + Dat.",
            meaning: "bảo vệ khỏi",
            definition: "Dafür sorgen, dass jemandem nichts passiert.",
            examples: [
              { de: "Die Creme schützt die Haut vor der Sonne.", vi: "Kem bảo vệ da khỏi nắng." },
              { de: "Impfungen schützen vor schweren Krankheiten.", vi: "Tiêm chủng bảo vệ khỏi các bệnh nặng." },
            ],
          },
          {
            id: "vor-fliehen",
            label: "fliehen vor + Dat.",
            meaning: "chạy trốn khỏi",
            definition: "Vor einer Gefahr weglaufen.",
            examples: [
              { de: "Millionen Menschen fliehen vor Krieg und Gewalt.", vi: "Hàng triệu người chạy trốn chiến tranh và bạo lực." },
              { de: "Er floh vor der Verantwortung.", vi: "Anh ta trốn tránh trách nhiệm." },
            ],
          },
        ],
      },
      {
        id: "an-dat",
        label: "an + Dativ",
        meaning: "an + Dat.",
        note: "Chú ý: 'an' có thể đi Akkusativ (denken an) hoặc Dativ (teilnehmen an) — phải học thuộc theo động từ.",
        children: [
          {
            id: "an-dat-teilnehmen",
            label: "teilnehmen an + Dat.",
            meaning: "tham gia vào",
            definition: "Bei einer Veranstaltung oder Aktion dabei sein.",
            examples: [
              { de: "Ich nehme an einem Deutschkurs teil.", vi: "Tôi tham gia một khóa tiếng Đức." },
              { de: "Über 200 Personen nahmen an der Demonstration teil.", vi: "Hơn 200 người đã tham gia cuộc biểu tình." },
            ],
          },
          {
            id: "an-dat-leiden",
            label: "leiden an / unter + Dat.",
            meaning: "mắc bệnh / chịu đựng",
            definition: "An einer Krankheit leiden (an) oder unter einer Belastung leiden (unter).",
            examples: [
              { de: "Sie leidet an Diabetes.", vi: "Cô ấy mắc bệnh tiểu đường." },
              { de: "Viele leiden unter dem hohen Leistungsdruck.", vi: "Nhiều người chịu đựng áp lực thành tích cao." },
            ],
            note: "leiden AN = bệnh cụ thể; leiden UNTER = hoàn cảnh, áp lực.",
          },
          {
            id: "an-dat-arbeiten",
            label: "arbeiten an + Dat.",
            meaning: "đang làm, hoàn thiện",
            definition: "Sich intensiv mit einem Projekt beschäftigen.",
            examples: [
              { de: "Ich arbeite gerade an meiner Bachelorarbeit.", vi: "Tôi đang làm luận văn cử nhân." },
              { de: "Du musst noch an deiner Aussprache arbeiten.", vi: "Bạn còn phải luyện thêm phát âm." },
            ],
          },
          {
            id: "an-dat-zweifeln",
            label: "zweifeln an + Dat.",
            meaning: "nghi ngờ",
            definition: "Nicht sicher sein, ob etwas stimmt oder klappt.",
            examples: [
              { de: "Ich zweifle an der Richtigkeit dieser Zahlen.", vi: "Tôi nghi ngờ tính chính xác của các con số này." },
              { de: "Er zweifelte nie an ihrem Können.", vi: "Anh ấy chưa bao giờ nghi ngờ năng lực của cô." },
            ],
          },
          {
            id: "an-dat-liegen",
            label: "es liegt an + Dat.",
            meaning: "là do, nguyên nhân là",
            definition: "Die Ursache für etwas sein.",
            examples: [
              { de: "Es liegt am Wetter, dass so wenige gekommen sind.", vi: "Do thời tiết nên ít người đến như vậy." },
              { de: "Woran liegt das?", vi: "Điều đó là do đâu?" },
            ],
            note: "Cụm nêu nguyên nhân rất hay dùng khi nói.",
          },
          {
            id: "an-dat-sich-beteiligen",
            label: "sich beteiligen an + Dat.",
            meaning: "tham gia góp phần vào",
            definition: "Bei etwas aktiv mitmachen.",
            examples: [
              { de: "Alle Schüler beteiligen sich an dem Projekt.", vi: "Tất cả học sinh tham gia dự án." },
              { de: "Er beteiligte sich rege an der Diskussion.", vi: "Anh ấy tham gia sôi nổi vào cuộc thảo luận." },
            ],
          },
          {
            id: "an-dat-mangeln",
            label: "es mangelt an + Dat.",
            meaning: "thiếu hụt",
            definition: "Zu wenig von etwas vorhanden sein.",
            examples: [
              { de: "In vielen Kliniken mangelt es an Pflegepersonal.", vi: "Nhiều bệnh viện thiếu nhân lực điều dưỡng." },
              { de: "Es mangelt ihm nicht an Selbstbewusstsein.", vi: "Anh ta không thiếu sự tự tin." },
            ],
            note: "Từ trang trọng, thay cho 'zu wenig ... geben'.",
          },
        ],
      },
      {
        id: "bei-aus-in-dat",
        label: "bei / aus / in + Dativ",
        meaning: "bei, aus, in + Dat.",
        note: "Ba giới từ nhỏ nhưng hay xuất hiện trong thư từ và văn bản trang trọng.",
        children: [
          {
            id: "bei-helfen",
            label: "helfen bei + Dat.",
            meaning: "giúp đỡ trong việc",
            definition: "Jemanden bei einer Tätigkeit unterstützen.",
            examples: [
              { de: "Kannst du mir bei den Hausaufgaben helfen?", vi: "Bạn giúp mình làm bài tập được không?" },
              { de: "Die Beratungsstelle hilft bei der Wohnungssuche.", vi: "Trung tâm tư vấn giúp trong việc tìm nhà." },
            ],
            note: "jemandem (Dat.) BEI etwas (Dat.) helfen.",
          },
          {
            id: "bei-sich-bedanken",
            label: "sich bedanken bei + Dat.",
            meaning: "cảm ơn ai",
            definition: "Jemandem Danke sagen.",
            examples: [
              { de: "Ich bedanke mich bei Ihnen für die schnelle Antwort.", vi: "Tôi cảm ơn quý vị vì phản hồi nhanh chóng." },
              { de: "Er bedankte sich bei allen Helfern.", vi: "Anh ấy cảm ơn tất cả những người giúp sức." },
            ],
          },
          {
            id: "bei-sich-beschweren",
            label: "sich beschweren bei + Dat.",
            meaning: "khiếu nại với (ai)",
            definition: "Bei einer zuständigen Person seine Unzufriedenheit äußern.",
            examples: [
              { de: "Ich habe mich beim Vermieter über die Heizung beschwert.", vi: "Tôi đã khiếu nại với chủ nhà về hệ thống sưởi." },
              { de: "Beschweren Sie sich bitte bei der Geschäftsleitung.", vi: "Xin hãy khiếu nại với ban giám đốc." },
            ],
          },
          {
            id: "aus-bestehen",
            label: "bestehen aus + Dat.",
            meaning: "bao gồm, cấu tạo từ",
            definition: "Aus bestimmten Teilen zusammengesetzt sein.",
            examples: [
              { de: "Die Prüfung besteht aus vier Teilen.", vi: "Kỳ thi gồm bốn phần." },
              { de: "Das Team besteht aus acht Personen.", vi: "Đội gồm tám người." },
            ],
            note: "Phân biệt: bestehen AUS = gồm; bestehen AUF + Dat. = khăng khăng đòi; eine Prüfung bestehen = thi đỗ.",
          },
          {
            id: "aus-sich-ergeben",
            label: "sich ergeben aus + Dat.",
            meaning: "phát sinh từ, suy ra từ",
            definition: "Die logische Folge von etwas sein.",
            examples: [
              { de: "Daraus ergibt sich ein neues Problem.", vi: "Từ đó phát sinh một vấn đề mới." },
              { de: "Die Konsequenzen ergeben sich aus der Studie.", vi: "Các hệ quả được suy ra từ nghiên cứu." },
            ],
          },
          {
            id: "in-dat-sich-unterscheiden",
            label: "sich unterscheiden in / von + Dat.",
            meaning: "khác nhau ở / khác với",
            definition: "Anders sein als etwas anderes.",
            examples: [
              { de: "Die beiden Modelle unterscheiden sich im Preis.", vi: "Hai mẫu khác nhau ở giá." },
              { de: "Das deutsche Schulsystem unterscheidet sich stark vom vietnamesischen.", vi: "Hệ thống trường học Đức khác nhiều so với Việt Nam." },
            ],
            note: "sich unterscheiden IN + Dat. = khác ở điểm nào; VON + Dat. = khác với cái gì.",
          },
        ],
      },
      {
        id: "uebung-dat",
        label: "Übung: Welche Präposition?",
        meaning: "Luyện tập: điền giới từ đúng",
        note: "Điền giới từ còn thiếu — tất cả đều đi với Dativ.",
        children: [
          { id: "ue-dat-1", label: "sich beschäftigen ___ einem Thema", meaning: "nghiên cứu một chủ đề", answer: "mit" },
          { id: "ue-dat-2", label: "abhängen ___ dem Wetter", meaning: "phụ thuộc vào thời tiết", answer: "von" },
          { id: "ue-dat-3", label: "führen ___ einem Problem", meaning: "dẫn đến một vấn đề", answer: "zu" },
          { id: "ue-dat-4", label: "suchen ___ einer Wohnung", meaning: "tìm một căn hộ", answer: "nach" },
          { id: "ue-dat-5", label: "Angst haben ___ der Prüfung", meaning: "sợ kỳ thi", answer: "vor" },
          { id: "ue-dat-6", label: "teilnehmen ___ einem Kurs", meaning: "tham gia một khóa học", answer: "an" },
          { id: "ue-dat-7", label: "leiden ___ dem Lärm", meaning: "chịu đựng tiếng ồn", answer: "unter" },
          { id: "ue-dat-8", label: "bestehen ___ vier Teilen", meaning: "gồm bốn phần", answer: "aus" },
          { id: "ue-dat-9", label: "sich bedanken ___ den Kollegen", meaning: "cảm ơn các đồng nghiệp", answer: "bei" },
          { id: "ue-dat-10", label: "beitragen ___ dem Umweltschutz", meaning: "góp phần bảo vệ môi trường", answer: "zu" },
        ],
      },
    ],
  },
};

export default topic;
