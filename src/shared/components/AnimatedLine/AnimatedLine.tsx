import React from "react";
import "./AnimatedLine.scss";

interface AnimatedLineProps {
  duration?: string;
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  duration = "5s",
}) => {
  return (
    <div
      className="animated-line"
      style={{ ["--slide-duration" as any]: duration }}
    ></div>
  );
};
