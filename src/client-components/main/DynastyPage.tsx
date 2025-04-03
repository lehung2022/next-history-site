import React from "react";
import Image from "next/image";
import Link from "next/link";

const DynastyPage = () => {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/"
        className="text-gray-200 mt-4 bg-slate-950/50 hover:bg-slate-950 px-4 py-2 rounded-lg mb-4"
      >
        ← Back
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold my-8 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
        Choose your dynasty
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        <Link href="/dynasties/trieu-dai-viet-nam" className="group">
          <div className="relative w-full h-48 border-2 border-white group-hover:border-4 group-hover:border-amber-400 rounded-lg bg-amber-300">
            <Image
              src="/other_images/Later-Le-Dynasty.png"
              alt="Vietnam Dynasties"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white group-hover:border-amber-400 bg-black/50 rounded-md px-2 py-1">
            Vietnam
          </p>
        </Link>
        <Link href="/dynasties/japan-period" className="group">
          <div className="relative w-full h-48 border-2 border-white group-hover:border-4 group-hover:border-amber-400 rounded-lg bg-amber-200">
            <Image
              src="/other_images/Bandera_shogunato_tokugawa.png"
              alt="Japan Period"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white group-hover:border-amber-400 bg-black/50 rounded-md px-2 py-1">
            Japan
          </p>
        </Link>
        <Link href="/dynasties/zung-gwok-ciu-doi" className="group">
          <div className="relative w-full h-48 border-2 border-white group-hover:border-4 group-hover:border-amber-400 rounded-lg bg-red-600">
            <Image
              src="/other_images/Ming_Empire_Flag.png"
              alt="China Dynasties"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center border-2 border-white group-hover:border-amber-400 bg-black/50 rounded-md px-2 py-1">
            China
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DynastyPage;
