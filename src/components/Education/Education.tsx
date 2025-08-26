import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AppTextBlock } from "../../shared/components";
import { logos } from "../../assets/images";
import "./Education.scss";

export const Education: React.FC = () => {
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <motion.div
      className="education"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <AppTextBlock
        preTitle={t("skills.education")}
        preTitleTextColor="accent"
        preTitleTextSize="lg"
        className="education__title"
      />
      <div className="education__list">
        <div className="education__item">
          <div className="education__image-wrapper">
            <img
              className="education__image"
              src={logos.VDPU}
              alt={t("skills.vdpu.imgAlt")}
            />
          </div>
          <div className="education__info">
            <AppTextBlock
              description={t("skills.vdpu.title")}
              descriptionTextColor="accent"
              descriptionTextSize="sm"
              className="education__school-name"
            />
            <span className="education__years">2011 - 2016</span>
          </div>
        </div>
        <div className="education__item">
          <div className="education__image-wrapper">
            <img
              className="education__image"
              src={logos.itStep}
              alt={t("skills.itStep.imgAlt")}
            />
          </div>
          <div className="education__info">
            <AppTextBlock
              description={t("skills.itStep.title")}
              descriptionTextColor="accent"
              descriptionTextSize="sm"
              className="education__school-name"
            />
            <span className="education__years">2022 - 2023</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
