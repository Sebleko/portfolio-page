import React from "react";
import { FaClipboard } from "react-icons/fa";

const CallToAction: React.FC = () => {
  const email = "youremail@example.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <section className="container section text-center">
      <h2 className="h2">Interested in Working Together?</h2>
      <p className="text-gray-400 mb-4">
        I’m always open to new opportunities. Let’s connect!
      </p>

      {/* Email & Clipboard */}
      <div className="inline-flex items-center bg-[var(--color-gray-2)] px-4 py-2 rounded">
        <span className="text-[var(--color-page-text)]">{email}</span>
        <FaClipboard
          onClick={copyToClipboard}
          className="ml-2 cursor-pointer hoverable text-[var(--color-accent-blue)]"
          title="Copy email to clipboard"
        />
      </div>
    </section>
  );
};

export default CallToAction;
