import React from "react";
import Image from "next/image";
import Link from "next/link";

const GeneralPage = () => {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/"
        className="text-white bg-transparent border border-gray-300 hover:bg-gray-950 active:bg-blue-700 md:hover:bg-gray-950 md:active:bg-gray-950 mt-2 px-4 py-2 rounded-lg mb-4 hover:scale-105 active:scale-105 transition-all duration-300"
      >
        ← Back
      </Link>
      <div className="text-3xl md:text-3xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4">
        Choose your general
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        <Link href="/generals/tuong-quan-viet-nam" className="group rounded-lg">
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg bg-amber-300 group-hover:bg-yellow-500 group-active:bg-yellow-500">
            <Image
              src="/vietnamese_generals/ly-trien.png"
              alt="Vietnam Dynasties"
              fill
              className="object-contain rounded-lg group-hover:scale-102 overflow-hidden p-2 group-hover:opacity-75 group-active:scale-102 group-active:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={70}
              priority
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1 group-hover:bg-yellow-500 group-active:bg-yellow-500 group-hover:text-black group-active:text-black transition-all duration-300">
            Vietnamese Generals
          </p>
        </Link>
        <Link href="/generals/japan-shogun" className="group rounded-lg">
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg bg-amber-200 group-hover:bg-orange-300 group-active:bg-orange-300">
            <Image
              src="/japanese_generals/Kosaka_Danjo_Masanobu.jpg"
              alt="Japan Period"
              fill
              className="object-contain rounded-lg group-hover:scale-102 overflow-hidden p-2 group-hover:opacity-75 group-active:scale-102 group-active:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={70}
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1 group-hover:bg-orange-300 group-active:bg-orange-300 group-hover:text-black group-active:text-black transition-all duration-300">
            Japanese Generals
          </p>
        </Link>
        <Link
          href="/generals/zung-gwok-zeong-gwan"
          className="group rounded-lg"
        >
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg bg-red-600 group-hover:bg-red-500 group-active:bg-red-500">
            <Image
              src="/zung_gwok_generals/leoi_mung_02.jpg"
              alt="China Dynasties"
              fill
              className="object-contain rounded-lg group-hover:scale-102 overflow-hidden p-2 group-hover:opacity-75 group-active:scale-102 group-active:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={70}
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1 group-hover:bg-red-500 group-active:bg-red-500 group-hover:text-black group-active:text-black transition-all duration-300">
            Chinese Generals
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GeneralPage;
