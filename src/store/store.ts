// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import menuMobileReducer from "./slices/menuSliceMobile";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    menuMobile: menuMobileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
