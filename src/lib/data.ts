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
  githubUrl: string;
  liveUrl: string;
}

export const socialData: Socials[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atharva-kale-1b0a2b1b6/",
    icon: "LinkedIn",
  },
  {
    name: "GitHub",
    url: "Github",
    icon: "Github",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/atharvakale_",
    icon: "X",
  },
  {
    name: "email",
    url: "mailto:atharva.vit@gmail.com",
    icon: "Email",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/atharva_kale_/",
    icon: "Instagram",
  },
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
