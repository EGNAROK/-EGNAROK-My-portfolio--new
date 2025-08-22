import React, { useEffect, useState } from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { AppIconWrapper } from "../../shared/components/AppIcon/AppIconWrapper";
import { Navigation } from "../Navigation/Navigation";
import SvgHome from "../../shared/components/AppIcon/icons/Home";
import SvgChevron from "../../shared/components/AppIcon/icons/Chevron";
import "./Sidebar.scss";

export const Sidebar: React.FC = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  const toggleSidebar = () => {
    setCollapseSidebar((prev) => !prev);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && collapseSidebar) {
        setCollapseSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [collapseSidebar]);

  return (
    <div className={`sidebar ${collapseSidebar ? "sidebar--collapsed" : ""}`}>
      <div className="sidebar__content">
        <div className="sidebar__home-wrapper">
          <AppIconWrapper
            Icon={SvgHome}
            size={42}
            iconSize={30}
            className="sidebar__home"
            onClick={() => handleScroll("home")}
          />
        </div>
        <Navigation
          collapseSidebar={collapseSidebar}
          className="sidebar__navigation"
          variant="sidebar"
        />
        <div className="sidebar__links">
          <SocialLinks />
          <div className="sidebar__collapse-wrapper">
            <AppIconWrapper
              Icon={SvgChevron}
              size={38}
              iconSize={36}
              className={`sidebar__collapse ${
                collapseSidebar ? "sidebar__collapse--active" : ""
              }`}
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
