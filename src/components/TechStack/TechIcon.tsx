import React from "react";

interface TechIconProps {
  /** Determines if this icon is currently active (full-color). */
  isActive: boolean;
  /** URL of the icon image (e.g., PNG, SVG). */
  imageUrl: string;
  /** Name of the technology, for alt text and accessibility. */
  techName: string;
}

const TechIcon: React.FC<TechIconProps> = ({
  isActive,
  imageUrl,
  techName,
}) => {
  return (
    <img
      src={imageUrl}
      alt={techName}
      title={techName}
      className={`
        w-8 h-8
        object-contain
        transition-all
        ${!isActive ? "filter brightness-0 invert" : ""}
      `}
    />
  );
};

export default TechIcon;
