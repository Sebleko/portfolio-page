import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const PortfolioShowcase: React.FC = () => {
  return (
    <section className="py-8 max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-4 text-center">Portfolio Showcase</h2>
      {/* Vertically scrollable container */}
      <div className="max-h-[60vh] overflow-y-auto space-y-6 pr-4">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="block bg-gray-800 hover:bg-gray-700 transition-colors rounded shadow-lg p-4"
          >
            <div className="flex items-center">
              {/* Thumbnail */}
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-32 h-24 object-cover rounded mr-4"
              />
              {/* Project info */}
              <div>
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
