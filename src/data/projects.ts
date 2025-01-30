export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  images: string[];
  github?: string;
  liveDemo?: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "project1",
    name: "Project One",
    description: "A brief overview of Project One...",
    techStack: ["React", "Tailwind", "Vite"],
    images: [
      "https://via.placeholder.com/600x400?text=Project+One+Image+1",
      "https://via.placeholder.com/600x400?text=Project+One+Image+2",
    ],
    github: "https://github.com/yourusername/project1",
    liveDemo: "https://project1-demo.com",
    thumbnail: "https://via.placeholder.com/300x200?text=Project+One",
  },
  {
    id: "project2",
    name: "Project Two",
    description: "A brief overview of Project Two...",
    techStack: ["Next.js", "Tailwind", "Playwright"],
    images: ["https://via.placeholder.com/600x400?text=Project+Two+Image+1"],
    github: "https://github.com/yourusername/project2",
    thumbnail: "https://via.placeholder.com/300x200?text=Project+Two",
  },
  // ... more projects
];
