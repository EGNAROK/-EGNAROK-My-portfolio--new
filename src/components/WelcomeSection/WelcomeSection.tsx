import React from "react";
import { useTranslation } from "react-i18next";
import { AppContainer } from "../../shared/components";
import { CV } from "../index";
import "./WelcomeSection.scss";

export const WelcomeSection: React.FC = () => {
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <section id="home" className="welcome">
      <AppContainer className="welcome__container">
        <div className="welcome__text-wrapper">
          <div className="welcome__title-wrapper">
            <div className="tag">&lt;h1&gt;</div>
            <h1 className="welcome__title">
              {t("welcomeSection.preTitle")}
              <span className="welcome__highlight">
                {t("welcomeSection.title")}
                <span className="welcome__name">
                  {" "}
                  {t("welcomeSection.name")}
                </span>
                ,
              </span>
              {t("welcomeSection.description")}
            </h1>
            <div className="tag">&lt;/h1&gt;</div>
          </div>
          <div className="welcome__description-wrapper">
            <div className="tag">&lt;p&gt;</div>
            <p className="welcome__description">
              {t("welcomeSection.aboutMe")}
            </p>
            <div className="tag">&lt;/p&gt;</div>
          </div>
        </div>
      </AppContainer>
      <CV />
    </section>
  );
};
