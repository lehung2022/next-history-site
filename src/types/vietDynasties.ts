export type Dynasty = {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  founder: string;
  generals: { id: string; name: string }[];
};

export const dynasties: Dynasty[] = [
  {
    id: "ngo",
    name: "Nhà Ngô",
    startYear: 939,
    endYear: 965,
    founder: "Ngô Quyền",
    generals: [
      {
        id: "duong-tam-kha",
        name: "Dương Tam Kha",
      },
    ],
  },
  {
    id: "dinh",
    name: "Nhà Đinh",
    startYear: 968,
    endYear: 980,
    founder: "Đinh Bộ Lĩnh",
    generals: [
      {
        id: "dinh-bo-linh-001",
        name: "Đinh Bộ Lĩnh",
      },
      {
        id: "dinh-lien-001",
        name: "Đinh Liễn",
      },
    ],
  },
  {
    id: "ly",
    name: "Nhà Lý",
    startYear: 1009,
    endYear: 1225,
    founder: "Lý Công Uẩn",
    generals: [
      {
        id: "ly-thuong-kiet-001",
        name: "Lý Thường Kiệt",
      },
    ],
  },
  {
    id: "hau-le",
    name: "Nhà Hậu Lê (Lê Sơ)",
    startYear: 1428,
    endYear: 1527,
    founder: "Lê Lợi",
    generals: [
      {
        id: "dinh-le-001",
        name: "Đinh Lễ",
      },
    ],
  },
  {
    id: "nguyen",
    name: "Nhà Nguyễn",
    startYear: 1802,
    endYear: 1945,
    founder: "Nguyễn Ánh",
    generals: [
      {
        id: "nguyen-anh-001",
        name: "Nguyễn Ánh",
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

// Giả lập fetch từ Firebase, sau này dùng trong /server-components
export async function getDynasties(): Promise<Dynasty[]> {
  // Firebase structure:
  // Collection: dynasties
  // Document: { id, name, startYear, endYear, founder, generals: [{ id, name }] }
  // Query: firebase.firestore().collection('dynasties').where('country', '==', 'Vietnam').get()
  return Promise.resolve(dynasties);
}
