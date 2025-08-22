import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AppTextBlock } from "../../shared/components";
import "./Languages.scss";

export const Languages: React.FC = () => {
  const { t } = useTranslation(["pages/landing-page"]);
  const languages = t("skills.languagesList", { returnObjects: true }) as {
    title: string;
    level: string;
  }[];

  return (
    <motion.div
      className="languages__list-wrapper"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <ul className="languages__list">
        <AppTextBlock
          preTitle={t("skills.languages")}
          preTitleTextSize="lg"
          preTitleTextColor="accent"
        />
        {languages.map((lang, index) => (
          <li key={index} className="languages__item">
            <div className="languages__info">
              <AppTextBlock
                preTitle={lang.title}
                preTitleTextSize="sm"
                preTitleTextColor="primary"
                className="languages__title"
              />
              <AppTextBlock
                description={lang.level}
                descriptionTextSize="sm"
                descriptionTextColor="accent"
                className="languages__level"
              />
            </div>
            <div className="languages__bar"></div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
