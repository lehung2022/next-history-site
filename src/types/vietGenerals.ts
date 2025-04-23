// src/types/vietGenerals.ts
export type General = {
  id: string;
  dynastyId: string;
  name: string;
  image: string;
  bio: string;
  country: string;
};

export const toSlug = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
