import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Categories as categories } from "../../data/categoriesedited";

export interface Category {
  id: number;
  "main-title": string;
  generalLink?: string;
  url: {
    base: null;
    uri: string;
  };
  image: string;
  children?: SubCategory[];
}

export interface SubCategory {
  id: number;
  title: string;
  items?: string[];
}

interface MenuState {
  activeCategoryId: number | null;
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  activeCategoryId: categories.length > 0 ? categories[0].id : null,
  categories: categories,
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number | null>) => {
      state.activeCategoryId = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setActiveCategory, setCategories, setLoading, setError } = menuSlice.actions;

export default menuSlice.reducer;
