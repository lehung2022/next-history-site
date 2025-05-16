import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SearchState = {
  query: string;
  history: string[];
  setQuery: (query: string) => void;
  addQuery: (query: string) => void;
  clearHistory: () => void;
};

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      query: "",
      history: [],
      setQuery: (query) => set({ query }),
      addQuery: (query) =>
        set((state) => {
          if (!query.trim() || state.history.includes(query)) return state;
          return { history: [query, ...state.history.slice(0, 4)] }; // Giới hạn 5 query
        }),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "search-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
// This is for searcch purpose in Navbar. The files is "search.ts"
