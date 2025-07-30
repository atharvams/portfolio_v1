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
    title: "DevScout",
    description: "A centralized platform for your recruitment need.",
    tags: ["React", "Clerk", "TailwindCSS", "JavaScript"],
    githubUrl: "https://github.com/atharvams/DevScout",
    liveUrl: "https://devscoutt.netlify.app/",
  },
  {
    title: "Swiggy Landing Page",
    description: "A clean tailwind only landing page for Swiggy.",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    githubUrl: "https://github.com/atharvams/swiggy-home-v2",
    liveUrl: "https://swiggy-home-v2.vercel.app/",
  },
  {
    title: "AiBuddy",
    description: "A platform work on your communication skills with AI.",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "GoogleGemini"],
    githubUrl: "https://github.com/atharvams/ai-interview",
    liveUrl: "#",
  },
];

export const practiceProjects: Project[] = [
  {
    title: "Crack the Dice",
    description: "A simplw dice game to understand the gambling tricks.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/atharvams/Dice-Game",
    liveUrl: "https://dice-game.amsbuilds.in/",
  },
  {
    title: "Snicker Landing Page",
    description: "Practice project to build a landing page for Snicker.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/atharvams/Nike-landing-page",
    liveUrl: "https://nike-landing-page-fawn.vercel.app/",
  },
];

export const researchPapers: Project[] = [
  {
    title: "Skin cancer detection using convolutional neural networks",
    description: "A research paper published in a journal.",
    tags: ["Deep Learning", "Neural Networks", "Research"],
    githubUrl: "#",
    liveUrl:
      "https://www.researchgate.net/profile/Deepak-Mane/publication/381412239_Nonlinear_Analysis_in_Skin_Cancer_Detection_Customized_Convolutional_Neural_Networks_Approach/links/66e2aa44fa5e11512cb5013c/Nonlinear-Analysis-in-Skin-Cancer-Detection-Customized-Convolutional-Neural-Networks-Approach.pdf",
  },
  {
    title: "House Price Prediction Using Machine Learning Algorithms",
    description:
      "A research paper on predicting house prices in metro cities in the near future.",
    tags: [
      "Machine Learning",
      "Web Of Science Certified",
      "Research",
      "Publication",
    ],
    githubUrl: "#",
    liveUrl:
      "https://drive.google.com/file/d/1I5tg_Tc_apfcVQycrBlyifhmG_yQQfJD/view?usp=sharing",
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
