import React from "react";
import "./AppTextBlock.scss";

interface AppTextBlockProps {
  className?: string;
  textAlign?: "left" | "center" | "right";
  preTitle?: string;
  preTitleTextSize?: "xs" | "sm" | "md" | "lg";
  preTitleTextColor?: "primary" | "secondary" | "accent" | "white";
  title?: string;
  titleTextSize?: "xs" | "sm" | "md" | "lg";
  titleTextColor?: "primary" | "secondary" | "accent" | "white";
  description?: string;
  descriptionTextSize?: "xs" | "sm" | "md" | "lg";
  descriptionTextColor?: "primary" | "secondary" | "accent" | "white";
}

export const AppTextBlock: React.FC<AppTextBlockProps> = ({
  className,
  textAlign = "left",
  preTitle,
  preTitleTextSize = "md",
  preTitleTextColor = "primary",
  title,
  titleTextSize = "md",
  titleTextColor = "primary",
  description,
  descriptionTextSize = "md",
  descriptionTextColor = "primary",
}) => {
  return (
    <div
      className={`app-text-block app-text-block__text-align--${textAlign} ${className}`}
    >
      {preTitle && (
        <span
          className={`app-text-block__pre-title app-text-block__pre-title-size--${preTitleTextSize} app-text-block__pre-title-color--${preTitleTextColor}`}
        >
          {preTitle}
        </span>
      )}
      {title && (
        <h2
          className={`app-text-block__title-size--${titleTextSize} app-text-block__title-color--${titleTextColor}`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`app-text-block__description app-text-block__description-size--${descriptionTextSize} app-text-block__description-color--${descriptionTextColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
