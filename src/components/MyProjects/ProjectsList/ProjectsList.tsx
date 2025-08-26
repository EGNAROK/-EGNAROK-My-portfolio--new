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
        <motion.li
          key={project.id}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className={`projects-list__item ${
            index % 2 !== 0 ? "projects-list__item--reverse" : ""
          }`}
        >
          <div className="projects-list__text-block">
            <div className="tag">&lt;h3&gt;</div>
            <AppTextBlock
              preTitle={t(project.title)}
              preTitleTextSize="lg"
              preTitleTextColor="primary"
              className="projects-list__title"
            />
            <div className="tag">&lt;/h3&gt;</div>
            <div className="tag">&lt;p&gt;</div>
            <AppTextBlock
              description={t(project.description)}
              descriptionTextSize="sm"
              descriptionTextColor="secondary"
              className="projects-list__description"
            />
            <div className="tag">&lt;/p&gt;</div>
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
                <div className="tag projects-list__tag">&lt;a&gt;</div>
                <span className="projects-list__link-text">View</span>
                <div className="tag projects-list__tag">&lt;/a&gt;</div>
              </a>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};
