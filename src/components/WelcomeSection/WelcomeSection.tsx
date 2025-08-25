import React from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppContainer, AppModal } from "../../shared/components";
import { CVModal } from "./CVModal/CVModal";
import { useModal } from "../../shared/hooks/useModal/useModal";
import "./WelcomeSection.scss";

export const WelcomeSection: React.FC = () => {
  const { isOpen, toggleModal, closeModal } = useModal();
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <section id="home" className="welcome">
      <div className="welcome__background"></div>
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
      <div className="welcome__button-wrapper">
        <AppButton
          variant="outline"
          size="sm"
          className="welcome__button"
          onClick={toggleModal}
        >
          CV
        </AppButton>
      </div>
      <AppModal isOpen={isOpen} onClose={closeModal} className="welcome__modal">
        <CVModal />
      </AppModal>
    </section>
  );
};
