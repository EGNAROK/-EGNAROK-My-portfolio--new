import { useEffect } from "react";
import { setLanguage } from "../../../store/slices/languageSlice/languageSlice";
import { useAppDispatch } from "../store/useAppDispatch";
import { useAppSelector } from "../store/useAppSelector";
import i18n from "../../../i18n";

export const useLanguage = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.language);

    useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lang: "en" | "uk") => {
    dispatch(setLanguage(lang));
  };

  return { language, changeLanguage };
};
