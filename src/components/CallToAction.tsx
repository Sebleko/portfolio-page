import React from "react";
import { FaClipboard } from "react-icons/fa";

const CallToAction: React.FC = () => {
  const email = "youremail@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <section className="py-8 text-center">
      <h2 className="text-xl font-bold mb-2">
        Interested in Working Together?
      </h2>
      <p className="text-gray-400 mb-4">
        I’m always open to new opportunities and collaborations. Let’s connect!
      </p>
      {/* Email + Clipboard Icon */}
      <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded">
        <span className="text-gray-200">{email}</span>
        <FaClipboard
          onClick={handleCopyEmail}
          className="text-accentBlue cursor-pointer hover:text-accentRed transition-colors"
          title="Copy email to clipboard"
        />
      </div>
    </section>
  );
};

export default CallToAction;
