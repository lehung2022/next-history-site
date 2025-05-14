// src/lib/generalsTwo.ts
import { unstable_cache } from "next/cache";
import { getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { listAll, ref } from "firebase/storage";
import { toJapanSlug } from "@/types/japanGenerals";
import { JapanGeneral } from "@/types/japanGenerals";

async function getJapanGeneralImages() {
  const storageRef = ref(storage, "nihon-generals");
  const imageRefs = await listAll(storageRef);
  const images = await Promise.all(
    imageRefs.items.map(async (item) => {
      const url = await getDownloadURL(item);
      return { name: item.name, url };
    })
  );
  return images;
}

export async function getJapanGenerals(
  page: number,
  limit: number,
  getAll: boolean = false
): Promise<{ generals: JapanGeneral[]; totalPages: number }> {
  const cachedGetJapanGenerals = unstable_cache(
    async (page: number, limit: number, getAll: boolean) => {
      try {
        const images = await getJapanGeneralImages();
        const generals: JapanGeneral[] = images.map((image) => {
          const name = image.name
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          return {
            id: toJapanSlug(name),
            name,
            image: image.url,
          };
        });

        console.log("getJapanGenerals - Total generals:", generals.length);

        const totalPages = Math.ceil(generals.length / limit);

        if (getAll) {
          return { generals, totalPages };
        }

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
    },
    ["nihon-generals", page.toString(), limit.toString(), getAll.toString()],
    { revalidate: 60 } // Cache 60 giây để phản ánh ảnh mới nhanh hơn
  );
  return cachedGetJapanGenerals(page, limit, getAll);
}
