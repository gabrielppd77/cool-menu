import { create } from "zustand";

interface MainContextProps {
  isOpenSearch: boolean;
  toggleOpenSearch: () => void;
  categorySelected: string | null;
  setCategorySelected: (newCategory: string | null) => void;
}

export const useMainContext = create<MainContextProps>((set) => ({
  isOpenSearch: false,
  toggleOpenSearch: () =>
    set(({ isOpenSearch, ...rest }) => ({
      ...rest,
      isOpenSearch: !isOpenSearch,
    })),
  categorySelected: null,
  setCategorySelected: (categorySelected: string | null) =>
    set({ categorySelected }),
}));
