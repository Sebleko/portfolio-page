import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container section text-center text-sm bg-[var(--color-gray-1)] text-gray-400">
      <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      <p className="text-xs mt-1">Made with React & Vite + Tailwind</p>
    </footer>
  );
};

export default Footer;
