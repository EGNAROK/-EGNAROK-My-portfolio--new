import React from "react";
import { icons } from "../../../assets/images";
import { AppTextBlock } from "../../../shared/components";
import "./CVModal.scss";

export const CVModal: React.FC = () => {
  return (
    <div className="cv-modal">
       <div className="tag">&lt;h3&gt;</div>
      <AppTextBlock
        description="My CV"
        descriptionTextSize="md"
        descriptionTextColor="primary"
        className="cv-modal__title"
      />
       <div className="tag">&lt;/h3&gt;</div>
      <ul className="cv-modal__list">
        <li className="cv-modal__list-item">
          <a
            href="https://drive.google.com/file/d/1cp3GuKqVJM6ZK-2fxXhxl0O_122hCCsy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-modal__link"
          >
            <img src={icons.Ukraine} alt="Ukraine" className="cv-modal__icon" />
          </a>
        </li>
        <li className="cv-modal__list-item">
          <a
            href="https://drive.google.com/file/d/10oF9SI-XFlHb1i_-3IytpS06K4AxY6ve/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-modal__link"
          >
            <img
              src={icons.United_Kingdom}
              alt="United Kingdom"
              className="cv-modal__icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
