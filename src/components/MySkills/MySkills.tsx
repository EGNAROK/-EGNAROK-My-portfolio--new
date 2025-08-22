import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AppContainer, AppTextBlock } from "../../shared/components";
import { Languages, Education, WorkExperience } from "../index";
import { skillsData } from "./skillsData";
import "./MySkills.scss";

export const MySkills: React.FC = () => {
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <div id="skills" className="my-skills">
      <AppContainer className="my-skills__container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AppTextBlock
            title={t("skills.title")}
            titleTextColor="accent"
            className="my-skills__title"
          />
        </motion.div>
        <div className="my-skills__content">
          <motion.div
            className="my-skills__list-wrapper"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ul className="my-skills__list">
              {skillsData.map((skill, index) => (
                <li key={index} className="my-skills__list-item">
                  {skill.title}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="my-skills__other">
            <Languages />
            <div className="my-skills__details">
              <WorkExperience />
              <Education />
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
