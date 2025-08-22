import { toggleTheme } from "../../../store/slices/themeSlice/themeSlice";
import { useAppDispatch } from "../store/useAppDispatch";
import { useAppSelector } from "../store/useAppSelector";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return {
    mode,
    toggle,
  };
};
