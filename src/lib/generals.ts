import { General, toSlug } from "@/types/vietGenerals";
export const generals: General[] = [
  {
    id: "duong-tam-kha",
    dynastyId: "ngo",
    name: "Dương Tam Kha",
    image: "/vietnamese_generals/duong-tam-kha-02.png",
    bio: "Dương Tam Kha, tức Dương Bình Vương, là một vị vua Việt Nam, trị vì từ 944 đến 950, xen giữa triều đại nhà Ngô trong lịch sử Việt Nam. Với thân phận là anh/em vợ của Ngô Quyền và là con trai của Tiết độ sứ Dương Đình Nghệ, ông đã tạo nên một thế lực đủ mạnh để cướp ngôi nhà Ngô, tự lập triều đại riêng của mình trong vòng 6 năm, cho đến khi bị Hậu Ngô Vương phế truất.",
    country: "Vietnam",
  },
  {
    id: "dinh-bo-linh-001",
    dynastyId: "dinh",
    name: "Đinh Bộ Lĩnh",
    image: "/vietnamese_generals/dinh-bo-linh-02.png",
    bio: "Đinh Bộ Lĩnh (924–979), tự xưng Đinh Tiên Hoàng, là vị vua sáng lập nhà Đinh, thống nhất Việt Nam sau thời kỳ 12 Sứ Quân.",
    country: "Vietnam",
  },
  {
    id: "dinh-lien-001",
    dynastyId: "dinh",
    name: "Đinh Liễn",
    image: "/vietnamese_generals/dinh_lien.jpg",
    bio: "Đinh Liễn (?-979), con trai trưởng của Đinh Bộ Lĩnh, là tướng lĩnh quan trọng của nhà Đinh.",
    country: "Vietnam",
  },
  {
    id: "ly-thuong-kiet-001",
    dynastyId: "ly",
    name: "Lý Thường Kiệt",
    image: "/vietnamese_generals/ly_thuong_kiet_02.jpg",
    bio: "Lý Thường Kiệt (1019–1105), tên thật là Ngô Tuấn, là danh tướng nhà Lý, nổi tiếng với bài thơ Nam quốc sơn hà.",
    country: "Vietnam",
  },
  {
    id: "dinh-le-001",
    dynastyId: "hau-le",
    name: "Đinh Lễ",
    image: "/vietnamese_generals/dinh_le.jpg",
    bio: "Đinh Lễ, công thần khai quốc nhà Lê sơ trong lịch sử Việt Nam, góp phần đánh bại quân Minh.",
    country: "Vietnam",
  },
  {
    id: "nguyen-anh-001",
    dynastyId: "nguyen",
    name: "Nguyễn Ánh",
    image: "/vietnamese_generals/nguyen_anh_02.png",
    bio: "Nguyễn Ánh (1762–1820), tức vua Gia Long, sáng lập nhà Nguyễn, thống nhất Việt Nam năm 1802.",
    country: "Vietnam",
  },
  // Placeholder cho 110 tướng còn lại
  ...Array.from({ length: 110 }, (_, i) => ({
    id: `general-${i + 1}`,
    dynastyId: "unknown", // Cần cập nhật sau
    name: `Tướng ${i + 1}`,
    image: `/vietnamese_generals/general-${i + 1}.png`, // Cần cập nhật tên file thật
    bio: "Tiểu sử đang cập nhật",
    country: "Vietnam",
  })),
];

// Giả lập fetch từ Firebase, sau này dùng trong /server-components
export async function getGenerals(
  page: number,
  limit: number
): Promise<{ generals: General[]; totalPages: number }> {
  // Firebase structure:
  // Collection: generals
  // Document: { id, dynastyId, name, image, bio, country }
  // Query: firebase.firestore().collection('generals').where('country', '==', 'Vietnam').limit(limit).startAfter(...).get()
  const totalPages = Math.ceil(generals.length / limit);
  if (page < 1 || page > totalPages) {
    return Promise.resolve({ generals: [], totalPages });
  }
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedGenerals = generals.slice(startIndex, endIndex);
  return Promise.resolve({ generals: paginatedGenerals, totalPages });
}

// Giả lập fetch tướng cụ thể
export async function getGeneral(slug: string): Promise<General | null> {
  // Query: firebase.firestore().collection('generals').where('slug', '==', slug).get()
  const general = generals.find((g) => toSlug(g.name) === slug);
  return Promise.resolve(general || null);
}
