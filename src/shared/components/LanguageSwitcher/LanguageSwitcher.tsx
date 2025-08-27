import React, { useState } from "react";
import { TRANSLATION } from "../../constants";
import { useLanguage } from "../../hooks";
import { AppButton } from "../AppButton/AppButton";
import "./LanguageSwitcher.scss";

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const currentLangLabel =
    Object.values(TRANSLATION.LANGUAGES).find((lang) => lang.KEY === language)
      ?.LABEL ?? language;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`language-switcher${
        isOpen ? " language-switcher--active" : ""
      }`}
      onClick={toggleDropdown}
    >
      <p className="language-switcher__current">{currentLangLabel}</p>

      {isOpen && (
        <div className="language-switcher__dropdown">
          {Object.values(TRANSLATION.LANGUAGES).map((lang) => (
            <AppButton
              variant="text"
              size="sm"
              fontSize="sm"
              key={lang.KEY}
              className={`language-switcher__option${
                language === lang.KEY
                  ? " language-switcher__option--active"
                  : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (language !== lang.KEY) {
                  changeLanguage(lang.KEY as "en" | "uk");
                  setIsOpen(false);
                }
              }}
            >
              {lang.LANGUAGE_SWITCH_MENU_ITEM_TEXT}
            </AppButton>
          ))}
        </div>
      )}
    </div>
  );
};
