import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const project: Project | undefined = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="p-8">Project not found.</div>;
  }

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-400 mb-4">{project.description}</p>

      {/* Tech stack used */}
      <div className="flex space-x-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs bg-gray-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      {/* Carousel / images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {project.images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Preview ${idx + 1}`}
            className="object-cover w-full h-64 rounded"
          />
        ))}
      </div>

      {/* Challenges & Solutions (Placeholder) */}
      <section className="max-w-2xl mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Challenges &amp; Solutions
        </h2>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam...
        </p>
      </section>

      {/* View Code / Live Demo */}
      <div className="flex space-x-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accentRed hover:bg-accentBlue text-white py-2 px-4 rounded"
          >
            View Code
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accentBlue hover:bg-accentRed text-white py-2 px-4 rounded"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
