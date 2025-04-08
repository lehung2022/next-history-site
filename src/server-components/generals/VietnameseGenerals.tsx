import Link from "next/link";
import Image from "next/image";
import DynastyTabs from "@/client-components/sub/DynastyTabs";
import { dynasties, toSlug } from "@/types/vietDynasties";
import { generals } from "@/types/vietGenerals";

const VietnameseGenerals = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const activeTab = resolvedSearchParams.dynasty || dynasties[0].id;

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
            Danh sách các triều đại Việt Nam sẽ được tính chính thức từ nhà Ngô
            đổ đi
          </p>
        </div>
      </div>
      <DynastyTabs dynasties={dynasties} initialActiveTab={activeTab} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {generals
          .filter((g) => g.dynastyId === activeTab)
          .map((general) => (
            <Link
              key={general.id}
              href={`/generals/tuong-quan-viet-nam/bio?general=${toSlug(
                general.name
              )}`}
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
    </div>
  );
};

export default VietnameseGenerals;
