import { create } from "zustand";

interface MainContextProps {
  isOpenSearch: boolean;
  categorySelected: string | null;
  isCategoryClicked: boolean;

  toggleOpenSearch: () => void;
  setCategorySelected: (categorySelected: string | null) => void;
  setCategoryClicked: (isCategoryClicked: boolean) => void;
}

export const useMainContext = create<MainContextProps>((set) => ({
  isOpenSearch: false,
  categorySelected: null,
  isCategoryClicked: false,

  toggleOpenSearch: () =>
    set(({ isOpenSearch, ...rest }) => ({
      ...rest,
      isOpenSearch: !isOpenSearch,
    })),
  setCategorySelected: (categorySelected) => set({ categorySelected }),
  setCategoryClicked: (isCategoryClicked) => set({ isCategoryClicked }),
}));
