import React from "react";
import { AppIconWrapper } from "../../shared/components/AppIcon/AppIconWrapper";
import { socialLinksData } from "./socialLinksData";
import "./SocialLinks.scss";

export const SocialLinks: React.FC = () => {
  return (
    <ul className="social-links">
      {socialLinksData.map((item, index) => (
        <li key={index} className="social-links__item">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-links__link"
          >
            <AppIconWrapper
              Icon={item.img}
              alt={item.alt}
              size={30}
              iconSize={24}
              className="social-links__icon"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
