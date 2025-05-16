import { unstable_cache } from "next/cache";

type GeneralFetchFn<T> = (
  page: number,
  limit: number,
  getAll?: boolean
) => Promise<{ generals: T[]; totalPages: number }>;

export function cacheGenerals<T>(
  fetchFn: GeneralFetchFn<T>,
  prefix: string,
  page: number = 1,
  limit: number = 0,
  getAll: boolean = false
) {
  const cacheKey = [prefix, page.toString(), limit.toString(), getAll.toString()];
  return unstable_cache(
    async () => {
      console.log(`cache.ts - Cache miss for ${prefix}, key:`, cacheKey);
      const result = await fetchFn(page, limit, getAll);
      console.log(`cache.ts - Cached result for ${prefix}:`, {
        page,
        limit,
        getAll,
        generalsCount: result.generals.length,
        totalPages: result.totalPages,
      });
      return result;
    },
    cacheKey,
    { revalidate: 60 }
  );
}