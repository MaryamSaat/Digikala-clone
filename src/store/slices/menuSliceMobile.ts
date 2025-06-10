import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mobileMenu } from "../../data/subcategoriesmobile";
import type { MobileMenuCategory } from "../../data/subcategoriesmobile";

interface MenuMobileState {
  activeCategoryId: number | null;
  activeSubCategoryId: number | null;
  categories: MobileMenuCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuMobileState = {
  activeCategoryId: mobileMenu.length > 0 ? mobileMenu[0].id : null,
  activeSubCategoryId: null,
  categories: mobileMenu,
  loading: false,
  error: null,
};

const menuSliceMobile = createSlice({
  name: "menuMobile",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number | null>) => {
      state.activeCategoryId = action.payload;
      state.activeSubCategoryId = null; // ریست کردن زیردسته‌بندی فعال
    },
    setActiveSubCategory: (state, action: PayloadAction<number | null>) => {
      state.activeSubCategoryId = action.payload;
    },
    setCategories: (state, action: PayloadAction<MobileMenuCategory[]>) => {
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

export const { setActiveCategory, setActiveSubCategory, setCategories, setLoading, setError } = menuSliceMobile.actions;

export default menuSliceMobile.reducer;
