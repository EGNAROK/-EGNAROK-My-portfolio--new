import { setLanguage } from "../../../store/slices/languageSlice/languageSlice";
import { useAppDispatch } from "../store/useAppDispatch";
import { useAppSelector } from "../store/useAppSelector";

export const useLanguage = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.language);

  const changeLanguage = (lang: "en" | "uk") => {
    dispatch(setLanguage(lang));
  };

  return { language, changeLanguage };
};
