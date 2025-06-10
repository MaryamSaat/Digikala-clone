import { createContext } from "react";

export interface CategoryContextType {
  isCategoryOpen: boolean;
  setIsCategoryOpen: (isOpen: boolean) => void;
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);
