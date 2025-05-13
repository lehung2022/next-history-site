import Link from "next/link";
import Image from "next/image";
import { QueryClient } from "@tanstack/react-query";
import { getGenerals } from "@/lib/generalsOne";
import { General, toSlug } from "@/types/vietGenerals";

export default async function Search({
  searchParams,
}: {
  searchParams?: { query?: string } | null;
}) {
  const query = searchParams?.query?.trim() ?? "";

  console.log("Search.tsx - query:", query);

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
        staleTime: 3600_000, // 1 giờ
      },
    },
  });

  // Prefetch danh sách tướng
  await queryClient.prefetchQuery({
    queryKey: ["generals", "all"],
    queryFn: () => getGenerals(1, 0, true),
  });

  // Lấy danh sách tướng
  const { generals } = queryClient.getQueryData<{
    generals: General[];
    totalPages: number;
  }>(["generals", "all"]) ?? { generals: [], totalPages: 0 };

  console.log(
    "All generals:",
    generals.map((g) => g.name)
  );

  const normalizeText = (text: string) =>
    text
      .replace(/[ĐĐ]/g, "D")
      .replace(/[đđ]/g, "d")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredGenerals = generals
    .filter((g) => {
      const normalizedName = normalizeText(g.name);
      const normalizedQuery = normalizeText(query);
      const familyName = normalizedName.split(" ")[0];
      return familyName.startsWith(normalizedQuery);
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

  console.log("Filtered generals:", filteredGenerals.length); // Log số tướng khớp

  const searchText = `Kết quả cho "${query}"`;
  const noResultText = `Không tìm thấy kết quả cho "${query}"`;

  if (filteredGenerals.length === 0) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mx-2 xs:mx-4">
          {filteredGenerals.map((general: General) => (
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
      </div>
    </div>
  );
}
