import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const App: React.FC = () => {
  return (
    <div className="bg-[var(--color-page-bg)] text-[var(--color-page-text)] font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
