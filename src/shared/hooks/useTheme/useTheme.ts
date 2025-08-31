import { useEffect } from "react";
import { toggleTheme } from "../../../store/slices/themeSlice/themeSlice";
import { useAppDispatch } from "../store/useAppDispatch";
import { useAppSelector } from "../store/useAppSelector";
import {
  darkModeThemePalette,
  lightModeThemePalette,
} from "../../../core/configs";
import { applyTheme } from "../../../core/providers/applyTheme";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    const palette =
      mode === "light" ? lightModeThemePalette : darkModeThemePalette;
    applyTheme(palette);
  }, [mode]);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return {
    mode,
    toggle,
  };
};
