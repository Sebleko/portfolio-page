import React, { useState } from "react";
import { FaReact, FaNode, FaPython } from "react-icons/fa";

interface Tech {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
}

const techStack: Tech[] = [
  {
    id: "react",
    name: "React",
    icon: <FaReact size={36} />,
    description:
      "Used extensively for building interactive UIs with component-based design.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <FaNode size={36} />,
    description:
      "Back-end development using event-driven architecture for scalable applications.",
  },
  {
    id: "python",
    name: "Python",
    icon: <FaPython size={36} />,
    description:
      "For scripting, web scraping, and machine learning applications.",
  },
];

const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  return (
    <section className="container section flex flex-col md:flex-row">
      {/* Tech Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:w-1/2">
        {techStack.map((tech) => (
          <button
            key={tech.id}
            onClick={() => setSelectedTech(tech)}
            className={`p-4 flex flex-col items-center rounded transition-all 
              ${
                selectedTech?.id === tech.id
                  ? "bg-[var(--color-gray-2)] text-[var(--color-page-text)]"
                  : "text-gray-400"
              } hover:text-[var(--color-accent-blue)] hover:scale-105`}
          >
            {tech.icon}
            <span className="mt-2 text-sm">{tech.name}</span>
          </button>
        ))}
      </div>

      {/* Tech Description */}
      <div className="md:w-1/2 bg-[var(--color-gray-2)] p-4 rounded min-h-[200px]">
        {selectedTech ? (
          <>
            <h3 className="h3">{selectedTech.name}</h3>
            <p className="text-body">{selectedTech.description}</p>
          </>
        ) : (
          <p className="text-gray-400">Select a technology to see details.</p>
        )}
      </div>
    </section>
  );
};

export default TechStack;
