import { iconMap } from "@/components/icons/iconMap";

export interface Socials {
  name: string;
  url: string;
  icon: keyof typeof iconMap;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const socialData: Socials[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atharvams?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: "LinkedIn",
  },
  {
    name: "GitHub",
    url: "https://github.com/atharvams",
    icon: "Github",
  },
  {
    name: "Twitter",
    url: "https://x.com/Atharva_MS?t=vmF47zwVImbMqSr4GOiDzQ&s=09",
    icon: "X",
  },
  {
    name: "email",
    url: "mailto:atharva.vit@gmail.com",
    icon: "Email",
  },
  // {
  //   name: "Instagram",
  //   url: "https://www.instagram.com/atharva_kale_/",
  //   icon: "Instagram",
  // },
];

export const projects: Project[] = [
  {
    title: "OOPS",
    description: "A simple HTML/CSS project.",
    tags: ["HTML", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "hell no",
    description: "A simple HTML/CSS project.",
    tags: ["HTML", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Killer ai",
    description: "A simple HTML/CSS project.",
    tags: ["HTML", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const practiceProjects: Project[] = [
  {
    title: "Practice Project",
    description: "A practice project to enhance skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Another Practice Project",
    description: "Another practice project to enhance skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const researchPapers: Project[] = [
  {
    title: "Published Research Paper 1",
    description: "A research paper published in a journal.",
    tags: ["Research", "Publication"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Published Research Paper 2",
    description: "Another research paper published in a journal.",
    tags: ["Research", "Publication"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export interface Tool {
  logo: string;
  title: string;
}
export const tools: Tool[] = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "NextJS",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
  //   title: "React Router",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  //   title: "VueJS",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
  //   title: "NuxtJS",
  // },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "Typescript",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trpc/trpc-original.svg",
  //   title: "TRPC",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  //   title: "Google Cloud",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  //   title: "AWS",
  // },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "NodeJS",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
  //   title: "Bun",
  // },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  //   title: "Cloudflare",
  // },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    title: "Vercel",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    title: "Docker",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "TailwindCSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "GIT",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    title: "AWS",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
  //   title: "Sketch",
  // },
];
