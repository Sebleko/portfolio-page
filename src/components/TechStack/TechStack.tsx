import React, { useEffect, useState } from "react";
import TechStackDesktop from "./TechStackDesktop";
import TechStackMobile from "./TechStackMobile";

const TechStackOverview: React.FC = () => {
  // Determine mobile vs. desktop by window width.
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // initial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-auto">
      {isMobile ? <TechStackMobile /> : <TechStackDesktop />}
    </div>
  );
};

export default TechStackOverview;
