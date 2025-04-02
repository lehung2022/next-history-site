import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold my-8 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
        Choose your destiny
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        <Link href="/dynasties" className="group">
          <div className="relative w-full h-48 border-2 border-white group-hover:border-4 group-hover:border-blue-700 rounded-lg bg-blue-700">
            <Image
              src="/other_images/lich_su_viet_nam.jpg"
              alt="Dynasties"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white group-hover:border-blue-700 bg-black/50 rounded-md px-2 py-1">
            Dynasties
          </p>
        </Link>
        <Link href="/generals" className="group">
          <div className="relative w-full h-48 border-2 border-white group-hover:border-4 group-hover:border-blue-700 rounded-lg bg-gray-900">
            <Image
              src="/other_images/lam_son_vs_minh_02.jpg"
              alt="Generals"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white group-hover:border-blue-700 bg-black/50 rounded-md px-2 py-1">
            Generals
          </p>
        </Link>
        <Link href="/timelines" className="group">
          <div className="relative w-full h-48 border-2 border-white group-hover:border-4 group-hover:border-blue-700 rounded-lg bg-emerald-700">
            <Image
              src="/other_images/Timeline-of-the-Far-Future-Snippet.jpg"
              alt="Timelines"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white group-hover:border-blue-700 bg-black/50 rounded-md px-2 py-1">
            Timelines
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
