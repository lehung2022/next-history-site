import Link from "next/link";
import Image from "next/image";
import { unstable_cache } from "next/cache";
import { QueryClient } from "@tanstack/react-query";
// For searching vietnamese generals
import { getGenerals } from "@/lib/generalsOne";
import { General, toSlug } from "@/types/vietGenerals";
// For searching japanese generals
import { getJapanGenerals } from "@/lib/generalsTwo";
import { JapanGeneral, toJapanSlug } from "@/types/japanGenerals";
// For searching chinese generals
import { getChinaGenerals } from "@/lib/generalsThree";
import { ChinaGeneral, toChinaSlug } from "@/types/chinaGenerals";

export default async function Search({
  searchParams,
}: {
  searchParams?: { query?: string } | null;
}) {
  const query = searchParams?.query?.trim() ?? "";

  console.log("Search.tsx - Query:", query);

  if (!query) {
    return (
      <div className="flex flex-col items-center text-gray-200">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 w-fit mx-auto text-center whitespace-nowrap">
            Vui lòng nhập từ khóa tìm kiếm...
          </h2>
          <Link
            href="/"
            className="text-white bg-transparent border border-gray-300 hover:bg-blue-700 active:bg-blue-700 mt-4 px-4 py-2 rounded-lg mb-4 hover:scale-105 active:scale-105 transition-all duration-300"
          >
            ← Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  // Khởi tạo QueryClient
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
      },
    },
  });

  // Cache server-side cho tướng Việt Nam
  const cachedGetVietnamGenerals = unstable_cache(
    async () => {
      return getGenerals(1, 0, true);
    },
    ["vietnam-generals", "all"],
    { revalidate: 60 }
  );

  // Cache server-side cho tướng Nhật Bản
  const cachedGetJapanGenerals = unstable_cache(
    async () => {
      return getJapanGenerals(1, 0, true);
    },
    ["nihon-generals", "all"],
    { revalidate: 60 }
  );

  // Cache server-side cho tướng Trung Quốc
  const cachedGetChinaGenerals = unstable_cache(
    async () => {
      return getChinaGenerals(1, 0, true);
    },
    ["zung-gwok-generals", "all"],
    { revalidate: 60 }
  );

  // Prefetch danh sách tướng Việt Nam
  await queryClient.prefetchQuery({
    queryKey: ["vietnam-generals", "all"],
    queryFn: cachedGetVietnamGenerals,
  });

  // Prefetch danh sách tướng Nhật Bản
  await queryClient.prefetchQuery({
    queryKey: ["nihon-generals", "all"],
    queryFn: cachedGetJapanGenerals,
  });

  // Prefetch danh sách tướng Trung Quốc
  await queryClient.prefetchQuery({
    queryKey: ["zung-gwok-generals", "all"],
    queryFn: cachedGetChinaGenerals,
  });

  // Lấy danh sách tướng Việt Nam
  const { generals: vietnamGenerals } = queryClient.getQueryData<{
    generals: General[];
    totalPages: number;
  }>(["vietnam-generals", "all"]) ?? { generals: [], totalPages: 0 };

  // Lấy danh sách tướng Nhật Bản
  const { generals: japanGenerals } = queryClient.getQueryData<{
    generals: JapanGeneral[];
    totalPages: number;
  }>(["nihon-generals", "all"]) ?? { generals: [], totalPages: 0 };

  // Lấy danh sách tướng Trung Quốc
  const { generals: chinaGenerals } = queryClient.getQueryData<{
    generals: ChinaGeneral[];
    totalPages: number;
  }>(["zung-gwok-generals", "all"]) ?? { generals: [], totalPages: 0 };

  console.log(
    "Search.tsx - Vietnam generals:",
    vietnamGenerals.map((g) => g.name)
  );
  console.log(
    "Search.tsx - Japan generals:",
    japanGenerals.map((g) => g.name)
  );
  console.log(
    "Search.tsx - China generals:",
    chinaGenerals.map((g) => g.name)
  );

  const normalizeText = (text: string) =>
    text
      .replace(/[ĐĐ]/g, "D")
      .replace(/[đđ]/g, "d")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  // Lọc tướng Việt Nam
  const filteredVietnamGenerals = vietnamGenerals
    .filter((g) => {
      const normalizedName = normalizeText(g.name);
      const normalizedQuery = normalizeText(query);
      return normalizedName.includes(normalizedQuery);
    })
    .sort((a, b) => {
      const aFamilyName = normalizeText(a.name).split(" ")[0];
      const bFamilyName = normalizeText(b.name).split(" ")[0];
      const queryNormalized = normalizeText(query);
      if (
        aFamilyName.startsWith(queryNormalized) &&
        !bFamilyName.startsWith(queryNormalized)
      )
        return -1;
      if (
        !aFamilyName.startsWith(queryNormalized) &&
        bFamilyName.startsWith(queryNormalized)
      )
        return 1;
      return a.name.localeCompare(b.name);
    });

  // Lọc tướng Nhật Bản
  const filteredJapanGenerals = japanGenerals
    .filter((g) => {
      const normalizedName = normalizeText(g.name);
      const normalizedQuery = normalizeText(query);
      return normalizedName.includes(normalizedQuery);
    })
    .sort((a, b) => {
      const aFamilyName = normalizeText(a.name).split(" ")[0];
      const bFamilyName = normalizeText(b.name).split(" ")[0];
      const queryNormalized = normalizeText(query);
      if (
        aFamilyName.startsWith(queryNormalized) &&
        !bFamilyName.startsWith(queryNormalized)
      )
        return -1;
      if (
        !aFamilyName.startsWith(queryNormalized) &&
        bFamilyName.startsWith(queryNormalized)
      )
        return 1;
      return a.name.localeCompare(b.name);
    });

  // Lọc tướng Trung Quốc
  const filteredChinaGenerals = chinaGenerals
    .filter((g) => {
      const normalizedName = normalizeText(g.name);
      const normalizedQuery = normalizeText(query);
      return normalizedName.includes(normalizedQuery);
    })
    .sort((a, b) => {
      const aFamilyName = normalizeText(a.name).split(" ")[0];
      const bFamilyName = normalizeText(b.name).split(" ")[0];
      const queryNormalized = normalizeText(query);
      if (
        aFamilyName.startsWith(queryNormalized) &&
        !bFamilyName.startsWith(queryNormalized)
      )
        return -1;
      if (
        !aFamilyName.startsWith(queryNormalized) &&
        bFamilyName.startsWith(queryNormalized)
      )
        return 1;
      return a.name.localeCompare(b.name);
    });

  console.log(
    "Search.tsx - Filtered Vietnam generals:",
    filteredVietnamGenerals.map((g) => g.name)
  );
  console.log(
    "Search.tsx - Filtered Japan generals:",
    filteredJapanGenerals.map((g) => g.name)
  );
  console.log(
    "Search.tsx - Filtered China generals:",
    filteredChinaGenerals.map((g) => g.name)
  );

  const searchText = `Kết quả cho "${query}"`;
  const noResultText = `Không tìm thấy kết quả cho "${query}"`;

  const hasVietnamResults = filteredVietnamGenerals.length > 0;
  const hasJapanResults = filteredJapanGenerals.length > 0;
  const hasChinaResults = filteredChinaGenerals.length > 0;

  if (!hasVietnamResults && !hasJapanResults && !hasChinaResults) {
    return (
      <div className="flex flex-col items-center text-gray-200">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 mt-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 w-fit mx-auto text-center whitespace-nowrap">
            {noResultText}
          </h2>
          <Link
            href="/"
            className="text-white bg-transparent border border-gray-300 hover:bg-blue-700 active:bg-blue-700 mt-4 px-4 py-2 rounded-lg mb-4 hover:scale-105 active:scale-105 transition-all duration-300"
          >
            ← Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-gray-200">
      <div className="px-2 xs:px-4 w-full max-w-4xl">
        <h2 className="text-2xl font-bold my-4 mt-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 w-fit mx-auto text-center whitespace-nowrap">
          {searchText}
        </h2>

        {/* Tướng Việt Nam */}
        {hasVietnamResults && (
          <>
            <h3 className="text-xl font-semibold my-2 border-2 border-white bg-black/50 rounded-lg px-4 py-2 w-fit mx-auto text-center">
              Tướng Việt Nam
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mx-2 xs:mx-4">
              {filteredVietnamGenerals.map((general: General) => (
                <Link
                  key={general.id}
                  href={`/bio/${toSlug(general.name)}`}
                  className="group flex flex-col"
                >
                  <div className="border-2 border-white rounded-lg p-3 xs:p-4 bg-black/50 group-hover:bg-yellow-500 group-hover:border-yellow-300 active:bg-yellow-500 active:border-yellow-300 transition-all duration-300">
                    <div className="relative w-full aspect-[1/1]">
                      <Image
                        src={general.image}
                        alt={general.name}
                        fill
                        loading="lazy"
                        className="object-contain rounded-lg transition-all duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={60}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg xs:text-xl font-semibold text-center border-2 border-white bg-black/50 rounded-lg px-2 py-1 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-300 active:bg-yellow-500 active:text-black active:border-yellow-300 transition-all duration-300 truncate">
                    {general.name}
                  </h3>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Tướng Nhật Bản */}
        {hasJapanResults && (
          <>
            <h3 className="text-xl font-semibold my-2 border-2 border-white bg-black/50 rounded-lg px-4 py-2 w-fit mx-auto text-center">
              Tướng Nhật Bản
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mx-2 xs:mx-4">
              {filteredJapanGenerals.map((general: JapanGeneral) => (
                <Link
                  key={general.id}
                  href={`/bio/${toJapanSlug(general.name)}`}
                  className="group flex flex-col"
                >
                  <div className="border-2 border-white rounded-lg p-3 xs:p-4 bg-black/50 group-hover:bg-orange-400 group-hover:border-orange-400 active:bg-orange-400 active:border-orange-400 transition-all duration-300">
                    <div className="relative w-full aspect-[1/1]">
                      <Image
                        src={general.image}
                        alt={general.name}
                        fill
                        loading="lazy"
                        className="object-contain rounded-lg transition-all duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={60}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg xs:text-xl font-semibold text-center border-2 border-white bg-black/50 rounded-lg px-2 py-1 group-hover:bg-orange-400 group-hover:text-black group-hover:border-orange-400 active:bg-orange-400 active:text-black active:border-orange-400 transition-all duration-300 truncate">
                    {general.name}
                  </h3>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Tướng Trung Quốc */}
        {hasChinaResults && (
          <>
            <h3 className="text-xl font-semibold my-2 border-2 border-white bg-black/50 rounded-lg px-4 py-2 w-fit mx-auto text-center">
              Tướng Trung Quốc
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mx-2 xs:mx-4">
              {filteredChinaGenerals.map((general: ChinaGeneral) => (
                <Link
                  key={general.id}
                  href={`/bio/${toChinaSlug(general.name)}`}
                  className="group flex flex-col"
                >
                  <div className="border-2 border-white rounded-lg p-3 xs:p-4 bg-black/50 group-hover:bg-red-900 group-hover:border-red-900 active:bg-red-900 active:border-red-900 transition-all duration-300">
                    <div className="relative w-full aspect-[1/1]">
                      <Image
                        src={general.image}
                        alt={general.name}
                        fill
                        loading="lazy"
                        className="object-contain rounded-lg transition-all duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={60}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg xs:text-xl font-semibold text-center border-2 border-white bg-black/50 rounded-lg px-2 py-1 group-hover:bg-red-900 group-hover:text-black group-hover:border-red-900 active:bg-red-900 active:text-black active:border-red-900 transition-all duration-300 truncate">
                    {general.name}
                  </h3>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
