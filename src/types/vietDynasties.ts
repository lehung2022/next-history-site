export const dynasties = [
  {
    id: "ngo",
    name: "Nhà Ngô",
    generals: [
      {
        id: "duong-tam-kha",
        name: "Dương Tam Kha",
        image: "/vietnamese_generals/duong-tam-kha-02.png",
      },
    ],
  },
  {
    id: "dinh",
    name: "Nhà Đinh",
    generals: [
      {
        id: "dinh-bo-linh-001",
        name: "Đinh Bộ Lĩnh",
        image: "/vietnamese_generals/dinh-bo-linh-02.png",
      },
      {
        id: "dinh-lien-001",
        name: "Đinh Liễn",
        image: "/vietnamese_generals/dinh_lien.jpg",
      },
    ],
  },
  {
    id: "ly",
    name: "Nhà Lý",
    generals: [
      {
        id: "ly-thuong-kiet-001",
        name: "Lý Thường Kiệt",
        image: "/vietnamese_generals/ly_thuong_kiet_02.jpg",
      },
    ],
  },
  {
    id: "hau-le",
    name: "Nhà Hậu Lê (Lê Sơ)",
    generals: [
      {
        id: "dinh-le-001",
        name: "Đinh Lễ",
        image: "/vietnamese_generals/dinh_le.jpg",
      }, // Giả định tên file, cần xác nhận
    ],
  },
  {
    id: "nguyen",
    name: "Nhà Nguyễn",
    generals: [
      {
        id: "nguyen-anh-001",
        name: "Nguyễn Ánh",
        image: "/vietnamese_generals/nguyen_anh_02.png",
      },
    ],
  },
];

export const toSlug = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
