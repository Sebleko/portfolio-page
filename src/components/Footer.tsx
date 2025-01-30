import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-4 text-center text-sm bg-gray-800 text-gray-400">
      <div className="mb-2">
        <img
          src="https://via.placeholder.com/100x80?text=Meme"
          alt="Tech Meme"
          className="mx-auto"
        />
      </div>
      <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      <p className="text-xs mt-1">Made with React &amp; Vite</p>
    </footer>
  );
};

export default Footer;
