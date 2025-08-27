import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { darkModeThemePalette, lightModeThemePalette } from "../../../core/configs";
import { applyTheme } from "../../../core/providers/applyTheme";

type Theme = "light" | "dark";

interface ThemeState {
  mode: Theme;
}

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
      document.documentElement.setAttribute("data-theme", action.payload);

      const palette = action.payload === "light" ? lightModeThemePalette : darkModeThemePalette;
      applyTheme(palette);
    },
    toggleTheme: (state) => {
      const newTheme = state.mode === "light" ? "dark" : "light";
      state.mode = newTheme;
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);

      const palette = newTheme === "light" ? lightModeThemePalette : darkModeThemePalette;
      applyTheme(palette);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
