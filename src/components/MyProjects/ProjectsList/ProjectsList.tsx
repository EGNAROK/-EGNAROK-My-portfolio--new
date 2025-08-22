import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AppTextBlock } from "../../../shared/components";
import { projectsData } from "./projectsData";
import "./ProjectsList.scss";

export const ProjectsList: React.FC = () => {
  const { t } = useTranslation(["pages/landing-page"]);

  return (
    <ul className="projects-list">
      {projectsData.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <li
            className={`projects-list__item ${
              index % 2 !== 0 ? "projects-list__item--reverse" : ""
            }`}
          >
            <div className="projects-list__text-block">
              <AppTextBlock
                preTitle={t(project.title)}
                preTitleTextSize="lg"
                preTitleTextColor="primary"
                className="projects-list__title"
              />
              <AppTextBlock
                description={t(project.description)}
                descriptionTextSize="sm"
                descriptionTextColor="secondary"
                className="projects-list__description"
              />
            </div>
            <div className="projects-list__image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="projects-list__image"
              />
              <div className="projects-list__link-wrapper">
                <a
                  href={project.link}
                  className="projects-list__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </div>
            </div>
          </li>
        </motion.div>
      ))}
    </ul>
  );
};
