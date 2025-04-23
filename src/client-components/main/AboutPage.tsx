// src/client-components/main/AboutPage.tsx
'use client';
import Link from 'next/link';
import { lazy, Suspense } from 'react';
import { useAboutStore } from '@/store/about';

const Info = lazy(() => import('@/client-components/sub/Info')); // Sửa từ Information

export default function AboutPage() {
  const { language, setLanguage } = useAboutStore();

  const languages = [
    { name: 'Vietnamese', flag: '🇻🇳' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Cantonese', flag: '🇨🇳' },
    { name: 'Hakka', flag: '🇹🇼' },
  ];

  return (
    <div className="flex flex-col items-center px-6 py-4 text-white">
      <div className="text-3xl bg-blue-700/50 sm:bg-gray-950/50 rounded-lg font-extrabold text-yellow-50 mb-6 p-2 hover:bg-gray-900/70 transition-all duration-300">
        About This Project
      </div>
      <p className="border border-yellow-500/50 rounded-lg text-lg bg-gray-950/50 text-white max-w-3xl text-center mb-6 p-4 sm:p-6 shadow-xl hover:bg-gray-900/70 hover:shadow-2xl transition-all duration-300">
        This website is dedicated to exploring historical figures, countries,
        and dynasties in feudal times. It provides historical insights, images,
        and timelines for those who are interested in learning about the past.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Suspense
          fallback={<div className="h-20 bg-gray-800 animate-pulse"></div>}
        >
          <Info title="Image Sources" />
        </Suspense>
        <Suspense
          fallback={<div className="h-20 bg-gray-800 animate-pulse"></div>}
        >
          <Info title="Article Sources" />
        </Suspense>
      </div>
      <div className="border border-blue-500/50 p-6 sm:p-8 rounded-lg bg-gray-950/50 mt-6 max-w-2xl w-full transition-transform hover:scale-102 hover:bg-gray-900/70 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-50 mb-2">Languages Used</h2>
        <ul className="list-disc list-inside text-blue-300 mt-2">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className={`cursor-pointer hover:text-amber-500 ${
                language === lang.name ? 'text-amber-500 font-bold' : ''
              }`}
              onClick={() => setLanguage(lang.name)}
            >
              {lang.flag} {lang.name}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/"
        className="mt-8 px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-600 active:bg-stone-700 text-yellow-100 transition-all duration-200 rounded-lg shadow-lg hover:scale-102 active:scale-102"
      >
        ← Back
      </Link>
    </div>
  );
}