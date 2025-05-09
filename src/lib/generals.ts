// src/lib/generals.ts
import { General, toSlug } from "@/types/vietGenerals";
import { storage } from "@/lib/firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

// Lấy danh sách ảnh từ Firebase Storage
async function getGeneralImages(): Promise<{ name: string; url: string }[]> {
  try {
    const storageRef = ref(storage, "vietnam-generals");
    const result = await listAll(storageRef);
    const images = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { name: item.name, url };
      })
    );
    return images;
  } catch (error) {
    console.error("Error listing images from Firebase Storage:", error);
    return [];
  }
}

// Lấy danh sách tướng
export async function getGenerals(
  page: number,
  limit: number
): Promise<{ generals: General[]; totalPages: number }> {
  try {
    const images = await getGeneralImages();
    const generals: General[] = images.map((image) => {
      const name = image.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return {
        id: toSlug(name),
        dynastyId: "unknown",
        name,
        image: image.url,
        bio: "Tiểu sử đang cập nhật",
        country: "Vietnam",
      };
    });

    const totalPages = Math.ceil(generals.length / limit);
    if (page < 1 || page > totalPages) {
      return { generals: [], totalPages };
    }
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedGenerals = generals.slice(startIndex, endIndex);

    return { generals: paginatedGenerals, totalPages };
  } catch (error) {
    console.error("Error fetching generals:", error);
    return { generals: [], totalPages: 0 };
  }
}

// Lấy thông tin một tướng cụ thể
export async function getGeneral(slug: string): Promise<General | null> {
  try {
    const images = await getGeneralImages();
    const image = images.find((img) => {
      const name = img.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return toSlug(name) === slug;
    });

    if (image) {
      const name = image.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return {
        id: slug,
        dynastyId: "unknown",
        name,
        image: image.url,
        bio: "Tiểu sử đang cập nhật",
        country: "Vietnam",
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching general:", error);
    return null;
  }
}
