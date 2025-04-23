// src/store/about.ts
import { create } from "zustand";
import { domainLinks } from "@/client-components/sub/source-links";

type Source = {
  label: string;
  url: string;
};

type AboutState = {
  imageSources: Source[];
  articleSources: Source[];
  language: string;
  setLanguage: (language: string) => void;
};

export const useAboutStore = create<AboutState>((set) => ({
  imageSources: domainLinks.imageSources,
  articleSources: domainLinks.articleSources,
  language: "Vietnamese",
  setLanguage: (language) => set({ language }),
}));
