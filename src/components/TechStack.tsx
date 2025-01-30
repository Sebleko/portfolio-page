import React, { useState } from "react";
import { FaReact, FaNode, FaPython, FaJava, FaRust } from "react-icons/fa";

interface TechItem {
  id: string;
  name: string;
  icon: JSX.Element;
  usage: string;
}

const techItems: TechItem[] = [
  {
    id: "react",
    name: "React",
    icon: <FaReact size={36} />,
    usage: "Used extensively for building dynamic frontend UIs...",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <FaNode size={36} />,
    usage: "Utilized in backend servers, APIs, and real-time applications...",
  },
  {
    id: "python",
    name: "Python",
    icon: <FaPython size={36} />,
    usage: "Great for web scraping, scripting, and data analysis...",
  },
  {
    id: "java",
    name: "Java",
    icon: <FaJava size={36} />,
    usage: "Commonly used for enterprise solutions, Android apps...",
  },
  {
    id: "rust",
    name: "Rust",
    icon: <FaRust size={36} />,
    usage:
      "For systems programming, CLI tools, and performance-critical code...",
  },
  // Add more items as needed
];

const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const handleSelect = (item: TechItem) => {
    setSelectedTech(item);
  };

  return (
    <section className="py-8 max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Tech Stack & Skills
      </h2>
      <div className="flex flex-col md:flex-row">
        {/* Left column: tech icons */}
        <div className="md:w-1/2 flex flex-wrap gap-4 justify-center md:justify-start">
          {techItems.map((item) => {
            const isSelected = selectedTech?.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`
                  group flex flex-col items-center p-4 
                  rounded cursor-pointer transition-colors 
                  ${isSelected ? "bg-gray-800" : "bg-transparent"}
                `}
              >
                {/* Icon: grayscale unless hover or selected */}
                <div
                  className={`
                    ${
                      isSelected
                        ? "text-accentRed"
                        : "text-gray-500 group-hover:text-accentBlue"
                    }
                    transition-colors
                  `}
                >
                  {item.icon}
                </div>
                <span
                  className={`
                    mt-2 text-sm
                    ${
                      isSelected
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-200"
                    }
                  `}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right column: description of selected tech */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 bg-gray-800 p-4 rounded">
          {selectedTech ? (
            <>
              <h3 className="text-lg font-semibold mb-2">
                {selectedTech.name}
              </h3>
              <p className="text-gray-300">{selectedTech.usage}</p>
            </>
          ) : (
            <p className="text-gray-400">
              Select a technology on the left to see more details.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
