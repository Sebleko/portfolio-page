import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center py-8">
      {/* Profile Picture */}
      <div className="w-32 h-32 mb-4">
        <img
          src="/src/assets/profile-pic.jpg"
          alt="Profile"
          className="rounded-full border-4 border-gray-800 object-cover w-full h-full"
        />
      </div>
      {/* Name and Title */}
      <h1 className="text-2xl font-bold">John Doe</h1>
      <p className="text-gray-400">
        Full-Stack Developer & Industrial Enthusiast
      </p>
      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accentRed transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accentBlue transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-gray-200 transition-colors"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
