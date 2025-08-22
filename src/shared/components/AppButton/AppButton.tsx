import React from "react";
import "./AppButton.scss";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "text";
  fullWidth?: boolean;
  className?: string;
  fontSize?: "sm" | "md" | "lg";
}

export const AppButton: React.FC<AppButtonProps> = ({
  size = "md",
  variant = "primary",
  fullWidth = false,
  className,
  fontSize = "md",
  ...props
}) => {
  return (
    <button
      className={`button button__size--${size} button__variant--${variant} ${
        fullWidth ? "button__fullWidth" : ""
      } ${className} button__fontSize--${fontSize}`}
      {...props}
    >
      <span>{props.children}</span>
    </button>
  );
};
