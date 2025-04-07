import React from "react";
import Image from "next/image";
import Link from "next/link";

const DynastyPage = () => {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/"
        className="text-white bg-transparent border border-gray-300 hover:bg-blue-700 active:bg-blue-700 mt-4 px-4 py-2 rounded-lg mb-4 hover:scale-105 active:scale-105 transition-all duration-300"
      >
        ← Back
      </Link>
      <div className="text-3xl md:text-4xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
        Choose your dynasty
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        <Link href="/dynasties/trieu-dai-viet-nam" className="group rounded-lg">
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg overflow-hidden p-2 bg-amber-300 group-hover:bg-yellow-400 group-active:bg-yellow-400">
            <Image
              src="/other_images/Later-Le-Dynasty.png"
              alt="Vietnam Dynasties"
              fill
              className="object-contain rounded-lg group-hover:scale-102 group-hover:opacity-75 group-active:scale-102 overflow-hidden p-2 group-active:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1 overflow-hidden p-2 group-hover:bg-yellow-400 group-active:bg-yellow-400 group-hover:text-black group-active:text-black transition-all duration-300">
            Vietnam
          </p>
        </Link>
        <Link href="/dynasties/japan-period" className="group rounded-lg">
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg overflow-hidden p-2 bg-amber-200 group-hover:bg-orange-400 group-active:bg-orange-400">
            <Image
              src="/other_images/Bandera_shogunato_tokugawa.png"
              alt="Japan Period"
              fill
              className="object-contain rounded-lg group-hover:scale-102 group-hover:opacity-75 group-active:scale-102 overflow-hidden p-2 group-active:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1 group-hover:bg-orange-400 group-active:bg-orange-400 group-hover:text-black group-active:text-black transition-all duration-300">
            Japan
          </p>
        </Link>
        <Link href="/dynasties/zung-gwok-ciu-doi" className="group rounded-lg">
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg overflow-hidden p-2 bg-red-600 group-hover:bg-red-900 group-active:bg-red-900">
            <Image
              src="/other_images/Ming_Empire_Flag.png"
              alt="China Dynasties"
              fill
              className="object-contain rounded-lg group-hover:scale-102 group-hover:opacity-75 group-active:scale-102 overflow-hidden p-2 group-active:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white overflow-hidden p-2 bg-black/50 rounded-md px-2 py-1 group-hover:bg-red-900 group-active:bg-red-900 group-hover:text-black group-active:text-black transition-all duration-300">
            China
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DynastyPage;
