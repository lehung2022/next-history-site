import React from "react";
import Image from "next/image";
import Link from "next/link";

const DynastyPage = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold my-8">
        Choose your dynasty
      </h1>
      {/* Spare property if you like: className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4" */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 w-full`}
      >
        <Link href="/generals/tuong-quan-viet-nam" className="group">
          <div className="relative w-full h-48">
            <Image
              src="/other_images/Later-Le-Dynasty.png"
              alt="Vietnamese Generals"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <p className="mt-2 text-xl text-center">Vietnam</p>
        </Link>
        <Link href="/generals/yat-bun-shogun" className="group">
          <div className="relative w-full h-48">
            <Image
              src="/other_images/Bandera_shogunato_tokugawa.png"
              alt="Japanese Generals"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center">Japan</p>
        </Link>
        <Link href="/generals/zung-gwok-zeong-gwan" className="group">
          <div className="relative w-full h-48">
            <Image
              src="/other_images/Ming_Empire_Flag.png"
              alt="Chinese Generals"
              fill
              className="object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-xl text-center">China</p>
        </Link>
      </div>
      {/* Back Button */}
      <Link href="/" className="animate-fadeIn">
        <button className="text-white mt-4 bg-slate-950/50 hover:bg-slate-950 px-4 py-2 rounded-lg mb-4">
          ← Back
        </button>
      </Link>
    </div>
  );
};

export default DynastyPage;
