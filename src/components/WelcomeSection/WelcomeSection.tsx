import React from "react";
import { useTranslation } from "react-i18next";
import {
  AppButton,
  AppContainer,
  AppModal,
  AppTextBlock,
} from "../../shared/components";
import { CVModal } from "./CVModal/CVModal";
import { useModal } from "../../shared/hooks/useModal/useModal";
import "./WelcomeSection.scss";

export const WelcomeSection: React.FC = () => {
  const { isOpen, toggleModal, closeModal } = useModal();
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <section id="home" className="welcome">
      <AppContainer className="welcome__container">
        <AppTextBlock
          preTitle={t("welcomeSection.preTitle")}
          preTitleTextSize="lg"
          preTitleTextColor="primary"
          title={t("welcomeSection.title")}
          titleTextSize="lg"
          titleTextColor="accent"
          description={t("welcomeSection.description")}
          descriptionTextSize="lg"
          descriptionTextColor="primary"
          className="welcome__text-block"
        />
        <div className="welcome__button-wrapper">
          <AppButton
            variant="outline"
            size="lg"
            className="welcome__button"
            onClick={toggleModal}
          >
            {t("welcomeSection.download_cv")}
          </AppButton>
        </div>
      </AppContainer>
      <AppModal isOpen={isOpen} onClose={closeModal} className="welcome__modal">
        <CVModal />
      </AppModal>
    </section>
  );
};
