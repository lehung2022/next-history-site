import { create } from "zustand";

type SearchState = {
  query: string;
  history: string[];
  setQuery: (query: string) => void;
  addQuery: (query: string) => void;
  clearHistory: () => void;
  removeQuery: (query: string) => void;
};

export const useSearchStore = create<SearchState>((set) => {
  console.log("Search store initialized");
  return {
    query: "",
    history: [],
    setQuery: (query) => set({ query }),
    addQuery: (query) =>
      set((state) => {
        const newHistory = [...new Set([query, ...state.history])].slice(0, 10);
        console.log("addQuery - New history:", newHistory);
        return { history: newHistory };
      }),
    clearHistory: () => set({ history: [] }),
    removeQuery: (query) =>
      set((state) => ({
        history: state.history.filter((q) => q !== query),
      })),
  };
});
