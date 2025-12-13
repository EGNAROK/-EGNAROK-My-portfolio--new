import React from "react";
import { icons } from "../../assets/images";
import { AppButton } from "../../shared/components";
import { useModal } from "../../shared/hooks/useModal/useModal";
import "./CV.scss";

export const CV: React.FC = () => {
  const { isOpen, toggleModal } = useModal();
  return (
    <div className="cv">
      <div className="cv__button-wrapper">
        <AppButton
          variant="outline"
          size="sm"
          className="cv__button"
          onClick={toggleModal}
        >
          CV
        </AppButton>
      </div>
      <a
        href="https://drive.google.com/file/d/1osi9EcIPA_fqG_YNOd1kis-deviNVh2H/view?usp=sharing"
        className={`cv__item ${isOpen ? "cv__item--open" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icons.Ukraine} alt="Ukraine" className="cv__icon" />
      </a>
      <a
        href="https://drive.google.com/file/d/10X5cQvApf9jN9hEV_3x-DX63efxJrV6V/view?usp=sharing"
        className={`cv__item ${isOpen ? "cv__item--open" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={icons.United_Kingdom}
          alt="United Kingdom"
          className="cv__icon"
        />
      </a>
    </div>
  );
};
