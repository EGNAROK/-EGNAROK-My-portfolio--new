import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AppContainer, AppTextBlock } from "../../shared/components";
import { backgrounds, photos } from "../../assets/images";
import "./AboutMe.scss";

export const AboutMe: React.FC = () => {
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <div className="about-me">
      <div className="about-me__background">
        <img
          src={backgrounds.background_about_component}
          alt="background"
          className="about-me__background-image"
        />
      </div>
      <AppContainer className="about-me__container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="about-me__image-wrapper"
        >
          <img
            src={photos.my_photo}
            alt="Serhii – front-end developer"
            className="about-me__image"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="about-me__text-wrapper"
        >
          <div className="about-me__title-wrapper">
            <AppTextBlock
              title={t("about.title")}
              titleTextColor="accent"
              className="about-me__title"
            />
          </div>
          <div className="about-me__description-wrapper">
            <div className="tag">&lt;p&gt;</div>
            <AppTextBlock
              description={t("about.description")}
              descriptionTextColor="secondary"
              descriptionTextSize="sm"
              className="about-me__description"
            />
            <div className="tag">&lt;/p&gt;</div>
          </div>
        </motion.div>
      </AppContainer>
    </div>
  );
};
