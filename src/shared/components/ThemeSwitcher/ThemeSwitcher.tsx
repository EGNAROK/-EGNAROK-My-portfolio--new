import React from "react";
import { useTheme } from "../../hooks";
import { AppIconWrapper } from "../AppIcon/AppIconWrapper";
import SvgSun from "../AppIcon/icons/Sun";
import SvgMoon from "../AppIcon/icons/Moon";
import "./ThemeSwitcher.scss";

export const ThemeSwitcher: React.FC = () => {
  const { mode, toggle } = useTheme();
  const isLight = mode === "light";

  return (
    <label className="theme-switcher">
      <input
        type="checkbox"
        checked={isLight}
        onChange={toggle}
        className="theme-switcher__input"
      />
      <div className="theme-switcher__slider">
        <div
          className={`theme-switcher__circle ${
            mode === "light" ? `theme-switcher__circle--animated` : ""
          }`}
        >
          <AppIconWrapper
            Icon={mode === "dark" ? SvgMoon : SvgSun}
            className="theme-switcher__icon"
          />
        </div>
      </div>
    </label>
  );
};
