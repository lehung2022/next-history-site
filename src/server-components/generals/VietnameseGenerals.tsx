import Link from "next/link";
import Image from "next/image";
import { getGenerals } from "@/types/vietGenerals";
import { toSlug } from "@/types/vietDynasties";

const VietnameseGenerals = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const limit = 10; // 10 tướng mỗi trang
  const { generals: paginatedGenerals, totalPages } = await getGenerals(
    1,
    limit
  ); // Lấy totalPages trước
  const page = Math.max(
    1,
    Math.min(totalPages, parseInt(resolvedSearchParams.page || "1", 10))
  ); // Giới hạn 1 <= page <= totalPages
  const { generals } = await getGenerals(page, limit); // Lấy dữ liệu trang hiện tại

  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals/"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to generals
      </Link>
      <div className="px-4">
        <div className="text-2xl md:text-3xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 max-w-2xl text-center">
          <h2>TƯỚNG QUÂN VIỆT NAM</h2>
          <p className="text-lg text-center max-w-5xl mb-6 px-4 py-2">
            Danh sách các danh tướng Việt Nam qua các triều đại phong kiến
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {generals.map((general) => (
          <Link
            key={general.id}
            href={`/generals/tuong-quan-viet-nam/bio/${toSlug(general.name)}`}
            className="group rounded-lg"
          >
            <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg overflow-hidden p-2 bg-amber-300 group-hover:bg-amber-500 group-active:bg-amber-500">
              <Image
                src={general.image}
                alt={general.name}
                fill
                className="object-contain rounded-lg group-hover:scale-102 group-hover:opacity-75 group-active:scale-102 group-active:opacity-75 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={60}
              />
            </div>
            <p className="mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1 group-hover:bg-amber-500 group-active:bg-amber-500 group-hover:text-black group-active:text-black transition-all duration-300">
              {general.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 mt-6">
        {page <= 1 ? (
          <span className="px-4 py-2 rounded-lg border-2 border-white bg-black/50 opacity-50 cursor-not-allowed">
            Prev
          </span>
        ) : (
          <Link
            href={`/generals/tuong-quan-viet-nam?page=${page - 1}`}
            className="px-4 py-2 rounded-lg border-2 border-white bg-black/50 hover:bg-amber-500 hover:text-black"
          >
            Prev
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Link
            key={p}
            href={`/generals/tuong-quan-viet-nam?page=${p}`}
            className={`px-4 py-2 rounded-lg border-2 border-white bg-black/50 ${
              p === page
                ? "bg-amber-500 text-black"
                : "hover:bg-amber-500 hover:text-black"
            }`}
          >
            {p}
          </Link>
        ))}
        {page >= totalPages ? (
          <span className="px-4 py-2 rounded-lg border-2 border-white bg-black/50 opacity-50 cursor-not-allowed">
            Next
          </span>
        ) : (
          <Link
            href={`/generals/tuong-quan-viet-nam?page=${page + 1}`}
            className="px-4 py-2 rounded-lg border-2 border-white bg-black/50 hover:bg-amber-500 hover:text-black"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default VietnameseGenerals;
