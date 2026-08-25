import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "aussehen",
  title: "Aussehen & Mode",
  titleVi: "Ngoại hình & Thời trang",
  description: "Kleidungsstil, Körperbild und aktuelle Modetrends",
  color: "#be185d",
  level: "B2",
  root: {
    id: "root",
    label: "Aussehen & Mode",
    meaning: "ngoại hình & thời trang",
    children: [
      {
        id: "kleidungsstil",
        label: "Kleidungsstil",
        meaning: "phong cách ăn mặc",
        children: [
          { id: "leger", label: "leger gekleidet sein", meaning: "ăn mặc thoải mái, không trang trọng", synonyms: ["lässig gekleidet sein"], note: "trái nghĩa với 'schick' hoặc 'seriös' gekleidet sein." },
          { id: "seriös", label: "einen ___ Eindruck hinterlassen", meaning: "để lại ấn tượng nghiêm túc/chỉn chu", answer: "seriösen", note: "thường dùng khi nói về trang phục công sở, phỏng vấn." },
          { id: "modebewusst", label: "modebewusst", meaning: "am hiểu thời trang, chú ý mốt", synonyms: ["stilbewusst"] },
          { id: "outfit", label: "das Outfit auf einen Anlass abstimmen", meaning: "chọn trang phục phù hợp với dịp/hoàn cảnh", note: "'abstimmen auf + Akk.' = điều chỉnh cho phù hợp với." },
        ],
      },
      {
        id: "koerperbild",
        label: "Körperbild & Selbstbild",
        meaning: "hình ảnh cơ thể & nhận thức bản thân",
        children: [
          { id: "schoenheitsideal", label: "das gesellschaftliche ___", meaning: "chuẩn mực đẹp của xã hội", answer: "Schönheitsideal", note: "hình mẫu về cái đẹp mà xã hội đề cao, thường bị chỉ trích là phi thực tế." },
          { id: "selbstbewusstsein", label: "das Selbstbewusstsein stärken", meaning: "củng cố sự tự tin" },
          { id: "unsicherheit", label: "unter Körperunsicherheiten leiden", meaning: "chịu đựng sự thiếu tự tin về ngoại hình", synonyms: ["mit dem eigenen Körper hadern"] },
          { id: "druck", label: "der gesellschaftliche Schönheitsdruck", meaning: "áp lực về ngoại hình từ xã hội", note: "áp lực phải phù hợp với chuẩn mực đẹp, thường lan truyền qua mạng xã hội." },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-tattoos",
            label: "Tattoos und Piercings im Beruf",
            meaning: "hình xăm/khuyên tai nơi công sở",
            children: [
              {
                id: "trend-tattoos-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "tt-v1", label: "individueller Ausdruck der eigenen Persönlichkeit", meaning: "thể hiện cá tính riêng" },
                  { id: "tt-v2", label: "wachsende gesellschaftliche Akzeptanz", meaning: "sự chấp nhận ngày càng tăng trong xã hội" },
                  { id: "tt-v3", label: "in vielen Branchen längst kein Tabu mehr", meaning: "không còn là điều cấm kỵ ở nhiều ngành nghề" },
                ],
              },
              {
                id: "trend-tattoos-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "tt-n1", label: "Vorurteile bei konservativen Arbeitgebern", meaning: "định kiến từ các nhà tuyển dụng bảo thủ" },
                  { id: "tt-n2", label: "in bestimmten Berufen (z. B. Bankwesen) noch unerwünscht", meaning: "vẫn không được hoan nghênh ở một số ngành (ví dụ ngân hàng)" },
                  { id: "tt-n3", label: "die Gefahr, auf das Äußere reduziert zu werden", meaning: "nguy cơ bị đánh giá chỉ qua vẻ ngoài" },
                ],
              },
              {
                id: "trend-tattoos-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "tt-a1", label: "sichtbare Tattoos bei Kundenkontakt abdecken", meaning: "che hình xăm khi tiếp xúc khách hàng" },
                  { id: "tt-a2", label: "klare Kleiderordnung im Unternehmen festlegen", meaning: "đặt ra quy định trang phục rõ ràng trong công ty" },
                ],
              },
              {
                id: "trend-tattoos-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "tt-vn1", label: "Tattoos werden bei der jüngeren Generation immer beliebter", meaning: "hình xăm ngày càng phổ biến ở giới trẻ" },
                  { id: "tt-vn2", label: "in traditionellen Familien und im öffentlichen Dienst oft noch missbilligt", meaning: "vẫn thường bị phản đối trong các gia đình truyền thống và khối nhà nước" },
                ],
              },
            ],
          },
          {
            id: "trend-schoenheitsop",
            label: "Schönheitsoperationen",
            meaning: "phẫu thuật thẩm mỹ",
            children: [
              {
                id: "trend-schoenheitsop-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "so-v1", label: "kann das Selbstwertgefühl steigern", meaning: "có thể nâng cao lòng tự trọng" },
                  { id: "so-v2", label: "Korrektur angeborener oder unfallbedingter Fehlbildungen", meaning: "chỉnh sửa dị tật bẩm sinh hoặc do tai nạn" },
                ],
              },
              {
                id: "trend-schoenheitsop-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "so-n1", label: "gesundheitliche Risiken und mögliche Komplikationen", meaning: "rủi ro sức khỏe và biến chứng có thể xảy ra" },
                  { id: "so-n2", label: "hohe finanzielle Kosten", meaning: "chi phí tài chính cao" },
                  { id: "so-n3", label: "die Suchtgefahr nach immer neuen Eingriffen", meaning: "nguy cơ nghiện các ca phẫu thuật tiếp theo" },
                ],
              },
              {
                id: "trend-schoenheitsop-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "so-a1", label: "psychologische Beratung vor einem Eingriff in Anspruch nehmen", meaning: "tìm tư vấn tâm lý trước khi phẫu thuật" },
                  { id: "so-a2", label: "das Selbstbild durch Selbstakzeptanz stärken", meaning: "củng cố hình ảnh bản thân qua sự chấp nhận chính mình" },
                ],
              },
              {
                id: "trend-schoenheitsop-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "so-vn1", label: "Schönheitsoperationen erfreuen sich vor allem bei jungen Frauen wachsender Beliebtheit", meaning: "phẫu thuật thẩm mỹ ngày càng phổ biến, nhất là ở phụ nữ trẻ" },
                  { id: "so-vn2", label: "der soziale Druck durch Social Media treibt den Trend an", meaning: "áp lực xã hội từ mạng xã hội thúc đẩy xu hướng này" },
                ],
              },
            ],
          },
          {
            id: "trend-fastfashion",
            label: "Fast Fashion vs. Markenkleidung",
            meaning: "thời trang nhanh vs. quần áo hàng hiệu",
            children: [
              {
                id: "trend-fastfashion-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "ff-v1", label: "günstige Preise ermöglichen aktuelle Trends für alle", meaning: "giá rẻ giúp ai cũng theo kịp xu hướng" },
                  { id: "ff-v2", label: "große Auswahl und schnelle Verfügbarkeit neuer Kollektionen", meaning: "nhiều lựa chọn và bộ sưu tập mới ra nhanh" },
                ],
              },
              {
                id: "trend-fastfashion-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "ff-n1", label: "die Umweltbelastung durch Massenproduktion", meaning: "gánh nặng môi trường do sản xuất hàng loạt" },
                  { id: "ff-n2", label: "oft mangelhafte Arbeitsbedingungen in den Herstellerländern", meaning: "điều kiện làm việc kém ở các nước sản xuất" },
                  { id: "ff-n3", label: "geringere Qualität und kurze Lebensdauer der Kleidung", meaning: "chất lượng thấp và tuổi thọ quần áo ngắn" },
                ],
              },
              {
                id: "trend-fastfashion-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "ff-a1", label: "nachhaltige Mode / Second-Hand-Kleidung bevorzugen", meaning: "ưu tiên thời trang bền vững / quần áo cũ" },
                  { id: "ff-a2", label: "auf Qualität statt Quantität setzen", meaning: "chú trọng chất lượng thay vì số lượng" },
                ],
              },
              {
                id: "trend-fastfashion-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "ff-vn1", label: "Fast-Fashion-Ketten sind bei jungen Leuten in den Großstädten sehr gefragt", meaning: "các chuỗi thời trang nhanh rất được giới trẻ thành phố ưa chuộng" },
                  { id: "ff-vn2", label: "Second-Hand-Mode (\"đồ si\") gewinnt zunehmend an Beliebtheit", meaning: "thời trang si-đa ngày càng được ưa chuộng" },
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
              { id: "wa-erscheinungsbild", label: "das Erscheinungsbild", meaning: "diện mạo, vẻ bề ngoài", synonyms: ["das äußere Erscheinungsbild"] },
              { id: "wa-vorurteil", label: "das Vorurteil", meaning: "định kiến" },
              { id: "wa-kleidungsstueck", label: "das Kleidungsstück", meaning: "món quần áo" },
              { id: "wa-trend", label: "der Modetrend", meaning: "xu hướng thời trang" },
              { id: "wa-individualitaet", label: "die Individualität", meaning: "cá tính, tính cá nhân" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-ersteneindruck", label: "einen guten ersten Eindruck machen", meaning: "tạo ấn tượng đầu tốt" },
              { id: "wa-aeusserlichkeiten", label: "Wert auf Äußerlichkeiten legen", meaning: "coi trọng vẻ bề ngoài" },
              { id: "wa-nachaltigkeit", label: "nachhaltiger Konsum von Kleidung", meaning: "tiêu dùng quần áo bền vững" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-stylen", label: "sich stylen", meaning: "làm đẹp/tạo kiểu cho bản thân", note: "reflexiv: sich stylt, stylte sich, hat sich gestylt" },
              { id: "wa-beurteilen", label: "jemanden nach dem Äußeren beurteilen", meaning: "đánh giá ai đó qua vẻ bề ngoài" },
              { id: "wa-anpassen", label: "sich einem Trend anpassen", meaning: "chạy theo/thích nghi với một xu hướng", note: "trennbar: passt an, passte an, hat angepasst" },
              { id: "wa-auffallen", label: "durch sein Aussehen auffallen", meaning: "nổi bật nhờ ngoại hình", note: "trennbar: fällt auf, fiel auf, ist aufgefallen" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-gepflegt", label: "gepflegt aussehen", meaning: "trông chỉn chu, gọn gàng" },
              { id: "wa-stolz", label: "stolz auf + Akk.", meaning: "tự hào về", note: "stolz auf seinen Körper sein" },
              { id: "wa-abhaengig", label: "abhängig von + Dat.", meaning: "phụ thuộc vào", note: "vom Urteil anderer abhängig sein" },
              { id: "wa-typisch", label: "typisch für + Akk.", meaning: "điển hình cho" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
