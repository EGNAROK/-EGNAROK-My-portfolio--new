import React from "react";
import "./AppContainer.scss";

interface AppContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const AppContainer: React.FC<AppContainerProps> = ({
  children,
  className,
}) => {
  return <div className={`app-container ${className}`}>{children}</div>;
};
