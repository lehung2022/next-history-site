import Link from "next/link";
import { lazy, Suspense } from "react";
import { domainLinks } from "@/client-components/sub/domain-links";
import type { Metadata } from "next";

const Information = lazy(() => import("@/client-components/sub/Info"));

export const metadata: Metadata = {
  title: "About | Chronicles of Valor",
  description:
    "Learn about the Chronicles of Valor project, its purpose, sources, and languages used.",
};

export default function About() {
  return (
    <div className="flex flex-col items-center px-6 py-10 text-white animate-fadeIn">
      <div>
        <h1 className="text-4xl bg-gray-950/50 rounded-lg font-extrabold text-yellow-50 mb-6">
          About This Project
        </h1>
      </div>
      <div>
        <p className="border border-gray-950/50 rounded-lg text-base bg-gray-950/50 text-gray-300 max-w-3xl text-center mb-6">
          This website is dedicated to exploring historical figures, countries,
          and dynasties in feudal times. It provides historical insights,
          images, and timelines for those interested in learning about the past.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Suspense
          fallback={<div className="h-20 bg-gray-800 animate-pulse"></div>}
        >
          <Information title="Image Sources" items={domainLinks.imageSources} />
        </Suspense>
        <Suspense
          fallback={<div className="h-20 bg-gray-800 animate-pulse"></div>}
        >
          <Information
            title="Article Sources"
            items={domainLinks.articleSources}
          />
        </Suspense>
      </div>
      <div className="border border-gray-950/50 p-6 sm:p-8 rounded-lg bg-gray-950/50 mt-6 max-w-2xl w-full transition-transform hover:scale-105">
        <h2 className="text-2xl font-bold text-blue-50 mb-2">Languages Used</h2>
        <ul className="list-disc list-inside text-blue-300 mt-2">
          <li>🇻🇳 Vietnamese</li>
          <li>🇯🇵 Japanese</li>
          <li>🇨🇳 Cantonese</li>
          <li>🇹🇼 Hakka</li>
        </ul>
      </div>
      <Link href="/">
        <button className="mt-8 px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
          ← Back
        </button>
      </Link>
    </div>
  );
}
