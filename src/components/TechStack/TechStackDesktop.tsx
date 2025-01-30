import React, { useEffect } from "react";
import { techList, Tech } from "./Techs";
import TechIcon from "./TechIcon";

interface TechStackDesktopProps {}

const TechStackDesktop: React.FC<TechStackDesktopProps> = ({}) => {
  const [hoverIndex, setHoverIndex] = React.useState<number | undefined>(
    undefined
  );
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [shownTech, setShownTech] = React.useState<Tech>(techList[0]);

  useEffect(() => {
    setShownTech(techList[hoverIndex || selectedIndex]);
  }, [hoverIndex, selectedIndex]);

  const onHover = (i: number) => {
    setHoverIndex(i);
  };
  const onSelect = (i: number) => {
    setSelectedIndex(i);
  };

  return (
    <div
      className="
        flex flex-row container section justify-between relative w-full
      "
    >
      {/* Left side: Tech grid */}
      <div className="w-1/3 p-3">
        {/* 2-column grid on desktop */}
        <div className="grid grid-cols-2 gap-4">
          {techList.map((tech, i) => (
            <div
              key={tech.name}
              className={`
                aspect-w-1 aspect-h-1 flex items-center justify-center 
                p-4 rounded-md cursor-pointer transition-colors
          ${
            tech.name === shownTech.name
              ? "bg-blue-100 border-blue-300 "
              : " hover:border-gray-300 "
          }
          hover:text-[var(--color-accent-blue)] hover:scale-105
        `}
              onMouseEnter={() => onHover(i)}
              onMouseLeave={() => setHoverIndex(undefined)}
              onClick={() => onSelect(i)}
            >
              {/* Replace the <img> with your new TechIcon component */}
              <TechIcon
                isActive={tech.name === shownTech.name}
                imageUrl={tech.icon}
                techName={tech.name}
              />
              {/* <span className="font-medium">{tech.name}</span> */}
            </div>
          ))}
        </div>
      </div>
      {/* Right side: Description panel */}
      <div className="w-2/3 p-3">
        <h2 className="text-2xl font-bold mb-4">
          {techList[hoverIndex || selectedIndex]?.name}
        </h2>
        <p className="text-gray-700">
          {techList[hoverIndex || selectedIndex]?.description}
        </p>
      </div>
    </div>
  );
};

export default TechStackDesktop;
