import React, { type ComponentType, type SVGProps } from "react";
import { AppIcon } from "./AppIcon";
import "./AppIconWrapper.scss";

type AppIconWrapperProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  alt?: string;
  variant?: "circle" | "square" | "none";
  bgColorClass?: string;
  iconColorClass?: string;
  size?: number;
  iconSize?: number;
  className?: string;
  onClick?: () => void;
};

export const AppIconWrapper: React.FC<AppIconWrapperProps> = ({
  Icon,
  alt = "",
  variant = "none",
  bgColorClass = "",
  iconColorClass = "",
  size = 40,
  iconSize = 20,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`app-icon-box app-icon-box--${variant} ${bgColorClass} ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <AppIcon
        Icon={Icon}
        alt={alt}
        size={iconSize}
        iconColorClass={iconColorClass}
      />
    </div>
  );
};
