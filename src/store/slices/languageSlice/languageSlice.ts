import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import i18n from "../../../i18n";

type Language = "en" | "uk";

const getInitialLanguage = (): Language => {
  return (localStorage.getItem("language") as Language) || "en";
};

const initialState = {
  language: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
