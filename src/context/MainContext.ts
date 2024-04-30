import { create } from "zustand";

interface MainContextProps {
  categorySelected: string | null;
  setCategorySelected: (newCategory: string | null) => void;
}

export const useMainContext = create<MainContextProps>((set) => ({
  categorySelected: null,
  setCategorySelected: (categorySelected: string | null) =>
    set({ categorySelected }),
}));
