export interface Tech {
  name: string;
  icon: string;
  description: string;
}

export const techList: Tech[] = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    description: "JavaScript with syntax for types.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    description: "A JavaScript runtime built on Chrome's V8 engine.",
  },
];
