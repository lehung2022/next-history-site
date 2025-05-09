// src/server-components/generals/VietnameseGenerals.tsx
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { getGenerals } from "@/lib/generals";
import { General, toSlug } from "@/types/vietGenerals";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

// Hàm tính danh sách trang để hiển thị
const getPageRange = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const range: (number | string)[] = [];

  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  range.push(1);
  if (currentPage > 3) {
    range.push("...");
  }
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  if (currentPage < totalPages - 2) {
    range.push("...");
  }
  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
};

interface VietnameseGeneralsProps {
  searchParams: { [key: string]: string | undefined };
}

const VietnameseGenerals: FC<VietnameseGeneralsProps> = async ({
  searchParams,
}) => {
  // Lấy số trang từ query param, mặc định là 1
  const page = parseInt(searchParams.page ?? "1", 10) || 1;
  const limit = 8; // 8 tướng mỗi trang

  // Lấy dữ liệu tướng
  const { generals, totalPages } = await getGenerals(page, limit);

  // Tính danh sách trang để hiển thị
  const pageRange = getPageRange(page, totalPages);

  return (
    <div className="flex flex-col items-center text-gray-200 min-h-screen">
      <Link
        href="/generals/"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to generals
      </Link>
      <div className="px-4 xs:px-4 w-full max-w-4xl">
        {" "}
        {/* Giảm padding trên <400px */}
        <div className="text-xl xs:text-2xl md:text-3xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 text-center">
          <h2>Tướng quân Việt Nam</h2>
        </div>
        {generals.length === 0 ? (
          <p className="text-center text-base xs:text-lg">
            Không tìm thấy tướng nào.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
              {generals.map((general: General) => (
                <Link
                  key={general.id}
                  href={`/bio/${toSlug(general.name)}`}
                  className="group"
                >
                  <div className="border-2 border-white rounded-lg p-3 xs:p-4 bg-black/50 group-hover:bg-yellow-500 transition-all duration-300">
                    <div className="relative w-full aspect-[1/1] mb-3 xs:mb-4">
                      <Image
                        src={general.image}
                        alt={general.name}
                        fill
                        loading="lazy"
                        className="object-contain rounded-lg transition-all duration-300"
                        sizes="(max-width: 640px) 100vw, 25vw"
                        quality={70}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                    </div>
                    <h3 className="text-lg xs:text-xl font-semibold text-center">
                      {general.name}
                    </h3>
                    <p className="text-xs xs:text-sm text-center mt-2 line-clamp-3">
                      {general.bio}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-1 xs:gap-2 mt-6 xs:mt-8 overflow-x-auto whitespace-nowrap py-2">
              {/* Go to first */}
              {page <= 1 ? (
                <span className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 opacity-50 cursor-not-allowed flex items-center">
                  <FiChevronsLeft className="w-4 h-4 xs:w-5 xs:h-5" />
                </span>
              ) : (
                <Link
                  href={`/generals/tuong-quan-viet-nam?page=1`}
                  className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 hover:bg-red-700 flex items-center"
                >
                  <FiChevronsLeft className="w-4 h-4 xs:w-5 xs:h-5" />
                </Link>
              )}
              {/* Previous */}
              {page <= 1 ? (
                <span className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 opacity-50 cursor-not-allowed flex items-center">
                  <FiChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
                </span>
              ) : (
                <Link
                  href={`/generals/tuong-quan-viet-nam?page=${page - 1}`}
                  className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 hover:bg-red-700 flex items-center"
                >
                  <FiChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
                </Link>
              )}
              {/* Page Numbers */}
              {pageRange.map((p, index) =>
                p === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-1.5 xs:px-2 py-0.5 xs:py-1 flex items-center text-xs xs:text-sm"
                  >
                    ...
                  </span>
                ) : (
                  <Link
                    key={`page-${p}-${index}`}
                    href={`/generals/tuong-quan-viet-nam?page=${p}`}
                    className={`px-2 xs:px-3 py-0.5 xs:py-1 rounded-lg border-2 border-white text-xs xs:text-sm ${
                      p === page
                        ? "bg-red-900 text-white"
                        : "bg-black/50 hover:bg-red-700 text-gray-200"
                    }`}
                  >
                    {p}
                  </Link>
                )
              )}
              {/* Next */}
              {page >= totalPages ? (
                <span className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 opacity-50 cursor-not-allowed flex items-center">
                  <FiChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
                </span>
              ) : (
                <Link
                  href={`/generals/tuong-quan-viet-nam?page=${page + 1}`}
                  className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 hover:bg-red-700 flex items-center"
                >
                  <FiChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
                </Link>
              )}
              {/* Go to last */}
              {page >= totalPages ? (
                <span className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 opacity-50 cursor-not-allowed flex items-center">
                  <FiChevronsRight className="w-4 h-4 xs:w-5 xs:h-5" />
                </span>
              ) : (
                <Link
                  href={`/generals/tuong-quan-viet-nam?page=${totalPages}`}
                  className="p-1.5 xs:p-2 rounded-lg border-2 border-white bg-black/50 hover:bg-red-700 flex items-center"
                >
                  <FiChevronsRight className="w-4 h-4 xs:w-5 xs:h-5" />
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VietnameseGenerals;
