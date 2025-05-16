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
  return unstable_cache(
    async () => {
      console.log(`cache.ts - Fetching data for ${prefix}:`, {
        page,
        limit,
        getAll,
      });
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
    [prefix, page.toString(), limit.toString(), getAll.toString()],
    { revalidate: 60 } // Đồng bộ với *.tsx
  );
}
