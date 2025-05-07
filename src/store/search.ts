import { create } from 'zustand';

type SearchState = {
  query: string;
  setQuery: (query: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}));

// This is for searcch purpose in Navbar. The files is "search.ts"