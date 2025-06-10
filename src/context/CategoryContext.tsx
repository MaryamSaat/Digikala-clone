import React, { useState } from "react";
import { CategoryContext } from "./CategoryContextType";

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return <CategoryContext.Provider value={{ isCategoryOpen, setIsCategoryOpen }}>{children}</CategoryContext.Provider>;
};
