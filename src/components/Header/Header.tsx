import React from "react";
import { LanguageSwitcher, ThemeSwitcher } from "../../shared/components";
import { Navigation } from "../Navigation/Navigation";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Navigation className="header__navigation" />
      <div className="header__switchers">
        <ThemeSwitcher />
        <div className="header__dropdown">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
