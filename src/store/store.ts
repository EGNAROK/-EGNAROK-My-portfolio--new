import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice/themeSlice";
import languageReducer from "./slices/languageSlice/languageSlice";
import socialLinksReducer from "./slices/socialLinksSlice/socialLinksSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    socialLinks: socialLinksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
