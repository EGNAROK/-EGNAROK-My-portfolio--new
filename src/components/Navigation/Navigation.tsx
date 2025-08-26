import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { AppButton } from "../../shared/components";
import { navigationData } from "./navigationData";
import { AppIconWrapper } from "../../shared/components/AppIcon/AppIconWrapper";
import {
  resetPulse,
  triggerPulse,
} from "../../store/slices/socialLinksSlice/socialLinksSlice";
import "./Navigation.scss";

interface NavigationProps {
  collapseSidebar?: boolean;
  className?: string;
  variant?: "sidebar" | "header";
}

export const Navigation: React.FC<NavigationProps> = ({
  className,
  collapseSidebar,
  variant,
}) => {
  const { t } = useTranslation("pages/landing-page");
  const dispatch = useDispatch();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (id === "contact") {
      dispatch(triggerPulse());
      setTimeout(() => dispatch(resetPulse()), 1800);
    }
  };

  return (
    <ul className={`navigation ${className}`}>
      {navigationData.map(({ label, targetId, icon }, index) => (
        <li className="navigation__item" key={index}>
          <AppButton
            variant="text"
            size="sm"
            fontSize="sm"
            className="navigation__button"
            onClick={() => handleScroll(targetId)}
          >
            <div className="navigation__button-content">
              <AppIconWrapper
                Icon={icon}
                size={24}
                iconSize={24}
                className="navigation__icon"
              />
              <span
                className={`navigation__button-text ${
                  variant === "sidebar" && !collapseSidebar
                    ? "navigation__button-text--collapsed"
                    : ""
                }`}
              >
                {t(label)}
              </span>
            </div>
          </AppButton>
        </li>
      ))}
    </ul>
  );
};
