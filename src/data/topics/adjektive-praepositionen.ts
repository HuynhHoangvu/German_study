import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "adjektive-praepositionen",
  title: "Adjektive + Präposition",
  titleVi: "Tính từ + giới từ",
  description: "stolz auf, zufrieden mit, abhängig von, interessiert an … kèm ví dụ",
  color: "#7c2d12",
  level: "B2",
  category: "grammatik",
  root: {
    id: "root",
    label: "Adjektive + Präposition",
    meaning: "tính từ đi với giới từ cố định",
    note: "Cấu trúc: sein + Adjektiv + Präposition + Kasus. Dạng hay ra thi: Ich bin stolz auf meine Familie.",
    children: [
      {
        id: "adj-akk",
        label: "Adjektive + Akkusativ",
        meaning: "tính từ + giới từ (Akkusativ)",
        note: "auf, über, für + Akkusativ.",
        children: [
          {
            id: "adj-stolz-auf",
            label: "stolz auf + Akk.",
            meaning: "tự hào về",
            definition: "Sich über eine eigene Leistung oder über jemanden sehr freuen.",
            examples: [
              { de: "Ich bin stolz auf meine Tochter.", vi: "Tôi tự hào về con gái mình." },
              { de: "Er ist stolz auf das, was er erreicht hat.", vi: "Anh ấy tự hào về những gì mình đạt được." },
            ],
          },
          {
            id: "adj-gespannt-auf",
            label: "gespannt auf + Akk.",
            meaning: "háo hức chờ xem",
            definition: "Neugierig sein, wie etwas wird.",
            examples: [
              { de: "Ich bin gespannt auf das Ergebnis.", vi: "Tôi rất háo hức chờ kết quả." },
              { de: "Wir sind gespannt auf Ihren Vortrag.", vi: "Chúng tôi rất mong bài trình bày của quý vị." },
            ],
          },
          {
            id: "adj-angewiesen-auf",
            label: "angewiesen sein auf + Akk.",
            meaning: "phụ thuộc, cần đến",
            definition: "Etwas unbedingt brauchen, ohne es nicht auskommen.",
            examples: [
              { de: "Alte Menschen sind oft auf Hilfe angewiesen.", vi: "Người già thường cần đến sự giúp đỡ." },
              { de: "Auf dem Land ist man auf ein Auto angewiesen.", vi: "Ở nông thôn người ta phải phụ thuộc vào ô tô." },
            ],
            note: "Cụm ghi điểm khi bàn về xã hội trong phần Nói B2.",
          },
          {
            id: "adj-neugierig-auf",
            label: "neugierig auf + Akk.",
            meaning: "tò mò về",
            definition: "Etwas unbedingt wissen oder sehen wollen.",
            examples: [
              { de: "Ich bin neugierig auf die neue Kollegin.", vi: "Tôi tò mò về cô đồng nghiệp mới." },
              { de: "Die Kinder waren neugierig auf das Geschenk.", vi: "Bọn trẻ tò mò về món quà." },
            ],
          },
          {
            id: "adj-gluecklich-ueber",
            label: "glücklich / froh über + Akk.",
            meaning: "hạnh phúc, vui vì",
            definition: "Sich über etwas sehr freuen, das passiert ist.",
            examples: [
              { de: "Ich bin sehr glücklich über die Zusage.", vi: "Tôi rất hạnh phúc vì lời chấp thuận." },
              { de: "Wir sind froh über die schnelle Lösung.", vi: "Chúng tôi mừng vì giải pháp nhanh chóng." },
            ],
          },
          {
            id: "adj-traurig-ueber",
            label: "traurig / enttäuscht über + Akk.",
            meaning: "buồn, thất vọng về",
            definition: "Negative Gefühle wegen eines Ereignisses haben.",
            examples: [
              { de: "Sie ist traurig über den Verlust ihres Hundes.", vi: "Cô ấy buồn vì mất con chó." },
              { de: "Ich bin enttäuscht über die Absage.", vi: "Tôi thất vọng về lời từ chối." },
            ],
            note: "enttäuscht ÜBER + sự việc, nhưng enttäuscht VON + người.",
          },
          {
            id: "adj-erstaunt-ueber",
            label: "erstaunt / überrascht über + Akk.",
            meaning: "ngạc nhiên về",
            definition: "Etwas nicht erwartet haben.",
            examples: [
              { de: "Ich war erstaunt über seine Reaktion.", vi: "Tôi ngạc nhiên về phản ứng của anh ta." },
              { de: "Alle waren überrascht über das gute Ergebnis.", vi: "Mọi người đều bất ngờ về kết quả tốt." },
            ],
          },
          {
            id: "adj-verantwortlich-fuer",
            label: "verantwortlich für + Akk.",
            meaning: "chịu trách nhiệm về",
            definition: "Dafür sorgen müssen, dass etwas gut läuft.",
            examples: [
              { de: "Wer ist für dieses Projekt verantwortlich?", vi: "Ai chịu trách nhiệm về dự án này?" },
              { de: "Eltern sind für ihre Kinder verantwortlich.", vi: "Cha mẹ chịu trách nhiệm về con cái." },
            ],
          },
          {
            id: "adj-dankbar-fuer",
            label: "dankbar für + Akk.",
            meaning: "biết ơn vì",
            definition: "Sich bei jemandem für etwas bedanken wollen.",
            examples: [
              { de: "Ich wäre Ihnen für eine kurze Rückmeldung sehr dankbar.", vi: "Tôi rất biết ơn nếu quý vị phản hồi ngắn gọn." },
              { de: "Sie ist dankbar für jede Unterstützung.", vi: "Cô ấy biết ơn mọi sự hỗ trợ." },
            ],
            note: "Câu lịch sự chuẩn trong email trang trọng B2.",
          },
          {
            id: "adj-typisch-fuer",
            label: "typisch / charakteristisch für + Akk.",
            meaning: "đặc trưng cho",
            definition: "Für jemanden oder etwas besonders kennzeichnend sein.",
            examples: [
              { de: "Diese Höflichkeit ist typisch für die japanische Kultur.", vi: "Sự lịch thiệp này đặc trưng cho văn hóa Nhật." },
              { de: "Das ist typisch für ihn!", vi: "Đúng là kiểu của anh ta!" },
            ],
          },
          {
            id: "adj-bekannt-fuer",
            label: "bekannt für + Akk.",
            meaning: "nổi tiếng vì",
            definition: "Wegen einer Sache berühmt sein.",
            examples: [
              { de: "Vietnam ist bekannt für seine Küche.", vi: "Việt Nam nổi tiếng vì ẩm thực." },
              { de: "Die Stadt ist für ihre Altstadt bekannt.", vi: "Thành phố nổi tiếng nhờ khu phố cổ." },
            ],
            note: "Phân biệt: bekannt FÜR = nổi tiếng vì; bekannt BEI = được biết đến trong nhóm nào.",
          },
          {
            id: "adj-geeignet-fuer",
            label: "geeignet für + Akk.",
            meaning: "phù hợp cho",
            definition: "Für einen bestimmten Zweck passend sein.",
            examples: [
              { de: "Der Film ist nicht für Kinder geeignet.", vi: "Bộ phim không phù hợp cho trẻ em." },
              { de: "Sie ist ideal für diese Position geeignet.", vi: "Cô ấy rất phù hợp cho vị trí này." },
            ],
          },
        ],
      },
      {
        id: "adj-dat-mit-von-zu",
        label: "Adjektive + mit / von / zu",
        meaning: "tính từ + mit, von, zu (Dativ)",
        children: [
          {
            id: "adj-zufrieden-mit",
            label: "zufrieden mit + Dat.",
            meaning: "hài lòng với",
            definition: "Etwas gut finden, keine Kritik haben.",
            examples: [
              { de: "Ich bin mit meiner neuen Wohnung sehr zufrieden.", vi: "Tôi rất hài lòng với căn hộ mới." },
              { de: "Der Chef war mit meiner Arbeit zufrieden.", vi: "Sếp hài lòng với công việc của tôi." },
            ],
          },
          {
            id: "adj-einverstanden-mit",
            label: "einverstanden mit + Dat.",
            meaning: "đồng ý với",
            definition: "Einer Sache zustimmen.",
            examples: [
              { de: "Sind Sie mit diesem Vorschlag einverstanden?", vi: "Quý vị có đồng ý với đề xuất này không?" },
              { de: "Ich bin damit nicht einverstanden.", vi: "Tôi không đồng ý với điều đó." },
            ],
            note: "Cụm chuẩn khi phản biện trong phần Nói Teil 2.",
          },
          {
            id: "adj-verheiratet-mit",
            label: "verheiratet mit + Dat.",
            meaning: "kết hôn với",
            definition: "Mit jemandem in einer Ehe leben.",
            examples: [
              { de: "Sie ist seit zehn Jahren mit ihm verheiratet.", vi: "Cô ấy kết hôn với anh ta đã mười năm." },
              { de: "Er ist mit einer Ärztin verheiratet.", vi: "Anh ấy cưới một bác sĩ." },
            ],
          },
          {
            id: "adj-abhaengig-von",
            label: "abhängig von + Dat.",
            meaning: "phụ thuộc vào",
            definition: "Ohne jemanden oder etwas nicht auskommen können.",
            examples: [
              { de: "Viele Jugendliche sind vom Smartphone abhängig.", vi: "Nhiều bạn trẻ lệ thuộc vào điện thoại thông minh." },
              { de: "Das Ergebnis ist stark von der Vorbereitung abhängig.", vi: "Kết quả phụ thuộc nhiều vào sự chuẩn bị." },
            ],
            note: "Danh từ: die Abhängigkeit von + Dat.",
          },
          {
            id: "adj-ueberzeugt-von",
            label: "überzeugt von + Dat.",
            meaning: "tin chắc vào",
            definition: "Ganz sicher sein, dass etwas richtig oder gut ist.",
            examples: [
              { de: "Ich bin von diesem Konzept überzeugt.", vi: "Tôi tin tưởng vào ý tưởng này." },
              { de: "Sie war von seiner Unschuld überzeugt.", vi: "Cô ấy tin chắc anh ta vô tội." },
            ],
          },
          {
            id: "adj-begeistert-von",
            label: "begeistert von + Dat.",
            meaning: "say mê, rất thích",
            definition: "Etwas ganz toll finden.",
            examples: [
              { de: "Alle waren von der Aufführung begeistert.", vi: "Mọi người đều mê buổi biểu diễn." },
              { de: "Ich bin nicht besonders begeistert von der Idee.", vi: "Tôi không hào hứng lắm với ý tưởng đó." },
            ],
          },
          {
            id: "adj-enttaeuscht-von",
            label: "enttäuscht von + Dat.",
            meaning: "thất vọng về (ai)",
            definition: "Von einer Person etwas Besseres erwartet haben.",
            examples: [
              { de: "Ich bin von meinem besten Freund enttäuscht.", vi: "Tôi thất vọng về người bạn thân nhất." },
              { de: "Die Fans waren von der Mannschaft enttäuscht.", vi: "Người hâm mộ thất vọng về đội bóng." },
            ],
          },
          {
            id: "adj-bereit-zu",
            label: "bereit zu + Dat.",
            meaning: "sẵn sàng cho",
            definition: "Willens sein, etwas zu tun.",
            examples: [
              { de: "Ich bin zu einem Kompromiss bereit.", vi: "Tôi sẵn sàng thỏa hiệp." },
              { de: "Sind Sie bereit zur Zusammenarbeit?", vi: "Quý vị có sẵn sàng hợp tác không?" },
            ],
          },
          {
            id: "adj-faehig-zu",
            label: "fähig zu + Dat. / imstande sein zu",
            meaning: "có khả năng làm",
            definition: "Etwas können oder tun können.",
            examples: [
              { de: "Er ist zu großen Leistungen fähig.", vi: "Anh ấy có khả năng đạt thành tích lớn." },
              { de: "Zu so etwas wäre sie nie fähig.", vi: "Cô ấy sẽ không bao giờ làm được chuyện như vậy." },
            ],
          },
          {
            id: "adj-freundlich-zu",
            label: "freundlich / nett zu + Dat.",
            meaning: "thân thiện, tử tế với",
            definition: "Sich gegenüber jemandem angenehm verhalten.",
            examples: [
              { de: "Die Kollegen sind sehr nett zu mir.", vi: "Các đồng nghiệp rất tử tế với tôi." },
              { de: "Sei bitte freundlich zu den Gästen!", vi: "Hãy thân thiện với khách nhé!" },
            ],
          },
        ],
      },
      {
        id: "adj-dat-an-in-vor-bei",
        label: "Adjektive + an / in / vor / bei",
        meaning: "tính từ + an, in, vor, bei (Dativ)",
        children: [
          {
            id: "adj-interessiert-an",
            label: "interessiert an + Dat.",
            meaning: "quan tâm đến",
            definition: "Interesse an etwas haben (formeller als sich interessieren für).",
            examples: [
              { de: "Ich bin an einer langfristigen Zusammenarbeit interessiert.", vi: "Tôi quan tâm đến hợp tác lâu dài." },
              { de: "Sind Sie an dem Angebot interessiert?", vi: "Quý vị có quan tâm đến ưu đãi này không?" },
            ],
            note: "So sánh: sich interessieren FÜR + Akk. (thông dụng) và interessiert sein AN + Dat. (trang trọng).",
          },
          {
            id: "adj-beteiligt-an",
            label: "beteiligt an + Dat.",
            meaning: "có tham gia vào",
            definition: "Bei etwas mitgemacht haben.",
            examples: [
              { de: "Mehrere Firmen sind an dem Projekt beteiligt.", vi: "Nhiều công ty tham gia vào dự án." },
              { de: "Er war an dem Unfall beteiligt.", vi: "Anh ta có liên quan đến vụ tai nạn." },
            ],
          },
          {
            id: "adj-schuld-an",
            label: "schuld an + Dat.",
            meaning: "có lỗi trong việc",
            definition: "Verantwortlich für etwas Negatives sein.",
            examples: [
              { de: "Wer ist schuld an dem Missverständnis?", vi: "Ai là người gây ra sự hiểu lầm?" },
              { de: "Das schlechte Wetter ist schuld an der Verspätung.", vi: "Thời tiết xấu là nguyên nhân của sự chậm trễ." },
            ],
          },
          {
            id: "adj-reich-an",
            label: "reich / arm an + Dat.",
            meaning: "giàu / nghèo về",
            definition: "Viel oder wenig von etwas haben.",
            examples: [
              { de: "Obst ist reich an Vitaminen.", vi: "Trái cây giàu vitamin." },
              { de: "Die Region ist arm an Rohstoffen.", vi: "Vùng này nghèo tài nguyên." },
            ],
          },
          {
            id: "adj-gut-in",
            label: "gut / schlecht in + Dat.",
            meaning: "giỏi / kém ở môn nào",
            definition: "Eine Fähigkeit in einem Bereich haben oder nicht haben.",
            examples: [
              { de: "Sie ist sehr gut in Mathematik.", vi: "Cô ấy rất giỏi toán." },
              { de: "Ich bin ziemlich schlecht in Grammatik.", vi: "Tôi khá kém ngữ pháp." },
            ],
          },
          {
            id: "adj-erfahren-in",
            label: "erfahren in + Dat.",
            meaning: "có kinh nghiệm trong",
            definition: "Viel Praxis in einem Bereich haben.",
            examples: [
              { de: "Er ist erfahren in der Betreuung älterer Menschen.", vi: "Anh ấy có kinh nghiệm chăm sóc người cao tuổi." },
              { de: "Wir suchen eine in der Pflege erfahrene Fachkraft.", vi: "Chúng tôi tìm nhân lực có kinh nghiệm trong ngành điều dưỡng." },
            ],
          },
          {
            id: "adj-sicher-vor",
            label: "sicher / geschützt vor + Dat.",
            meaning: "an toàn, được bảo vệ khỏi",
            definition: "Vor einer Gefahr geschützt sein.",
            examples: [
              { de: "Hier sind die Daten sicher vor fremdem Zugriff.", vi: "Ở đây dữ liệu an toàn trước truy cập lạ." },
              { de: "Niemand ist vor Fehlern sicher.", vi: "Không ai tránh khỏi sai lầm." },
            ],
          },
          {
            id: "adj-beliebt-bei",
            label: "beliebt bei + Dat.",
            meaning: "được yêu thích bởi",
            definition: "Von einer Gruppe gern gemocht werden.",
            examples: [
              { de: "Der Lehrer ist bei den Schülern sehr beliebt.", vi: "Thầy giáo rất được học sinh yêu mến." },
              { de: "Radfahren ist bei jungen Leuten beliebt.", vi: "Đạp xe được giới trẻ ưa chuộng." },
            ],
          },
        ],
      },
      {
        id: "uebung-adj",
        label: "Übung: Welche Präposition?",
        meaning: "Luyện tập: điền giới từ đúng",
        children: [
          { id: "ue-adj-1", label: "stolz ___ seine Leistung", meaning: "tự hào về thành tích", answer: "auf" },
          { id: "ue-adj-2", label: "zufrieden ___ dem Ergebnis", meaning: "hài lòng với kết quả", answer: "mit" },
          { id: "ue-adj-3", label: "abhängig ___ der Meinung anderer", meaning: "phụ thuộc vào ý kiến người khác", answer: "von" },
          { id: "ue-adj-4", label: "interessiert ___ einer Stelle", meaning: "quan tâm đến một vị trí", answer: "an" },
          { id: "ue-adj-5", label: "verantwortlich ___ das Team", meaning: "chịu trách nhiệm về nhóm", answer: "für" },
          { id: "ue-adj-6", label: "bereit ___ einem Kompromiss", meaning: "sẵn sàng thỏa hiệp", answer: "zu" },
          { id: "ue-adj-7", label: "beliebt ___ jungen Leuten", meaning: "được giới trẻ yêu thích", answer: "bei" },
          { id: "ue-adj-8", label: "geschützt ___ der Sonne", meaning: "được bảo vệ khỏi ánh nắng", answer: "vor" },
          { id: "ue-adj-9", label: "gut ___ Mathematik", meaning: "giỏi toán", answer: "in" },
          { id: "ue-adj-10", label: "glücklich ___ die gute Nachricht", meaning: "hạnh phúc vì tin tốt", answer: "über" },
        ],
      },
    ],
  },
};

export default topic;
