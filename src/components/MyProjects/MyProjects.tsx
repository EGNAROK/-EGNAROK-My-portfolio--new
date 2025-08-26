import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AppContainer, AppTextBlock } from "../../shared/components";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import { backgrounds } from "../../assets/images";
import "./MyProjects.scss";

export const MyProjects: React.FC = () => {
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <div className="my-projects">
      <div className="my-projects__background">
        <img
          src={backgrounds.background_about_component}
          alt="background"
          className="my-projects__background-image"
        />
      </div>
      <AppContainer className="my-projects__container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AppTextBlock
            title={t("projects.title")}
            titleTextColor="accent"
            className="my-projects__pre-title"
          />
        </motion.div>
        <ProjectsList />
      </AppContainer>
    </div>
  );
};
