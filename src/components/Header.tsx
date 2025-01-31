import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const bio = `I build scalable systems, AI-driven solutions, and solve complex problems with precision and creativity. Passionate about innovation and sustainable growth, I help businesses turn challenges into opportunities. Let’s collaborate—whether it’s Fullstack Development, LLM agents, Machine Learning, or Computer Vision. Got a problem? Let’s solve it with tech!`;

const Header: React.FC = () => {
  return (
    <header className="container section text-center flex flex-row">
      {/* Profile Picture */}
      <div className=" w-1/3">
        <div className="h-64 w-64 mx-auto mb-4 border-4 border-[var(--color-accent-red)] rounded-full">
          <img
            src="/src/assets/images/profile-pic.jpeg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="w-2/3 flex flex-col items-start">
        {/* Name & Title */}
        <h1 className="h1">Sebastian Walter</h1>
        <p className="text-body text-gray-400">
          Full-Stack Developer & Entrepreneur
        </p>
        <p>{bio}</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/yourusername"
            className="hoverable text-gray-400 hover:text-[var(--color-accent-red)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="hoverable text-gray-400 hover:text-[var(--color-accent-blue)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hoverable text-gray-400 hover:text-[var(--color-accent-red)]"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
