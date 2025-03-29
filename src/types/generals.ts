export type GeneralData = {
  name: string;
  slug: string; // Thêm slug cho link
  bio: string;
  history: string;
  events: { title: string; slug: string; summary: string; imageUrl?: string }[];
  politics: string;
  imageUrl?: string; // Ảnh chính của thành phố
};

export type EventData = {
  title: string;
  detail: string;
  imageUrl?: string; // Ảnh cho sự kiện
};
