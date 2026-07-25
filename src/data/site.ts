import pinseiImg from "../assets/pinsei.png";
import forgeImg from "../assets/forge.png";
import pharmeaseImg from "../assets/pharmease.png";

export const SITE = {
  email: "sourabhhaldarh@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/sourabh-31" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sourabh-haldar" },
    { label: "Read.cv", href: "/sourabh_haldar_resume.pdf" },
  ],
};

export const ABOUT = {
  intro: "Hi, I'm Sourabh.",
  paragraphs: [
    "I'm a frontend-focused software engineer with 2 years of professional experience building modern web and mobile applications. I enjoy creating the experiences people interact with every day, where design meets engineering.",
    "I like interfaces that feel a little handmade, something that makes you pause for a second. I care about typography, accessibility, performance, and the small details that make software feel intuitive.",
    "When I'm not at a keyboard, I'm usually playing games or reading. I enjoy building products that are simple, clear, and fast.",
  ],
  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "Astro",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "TanStack Query",
    "Redux",
    "Zustand",
    "Express.js",
    "MySQL",
  ],
  timeline: [
    {
      year: "Feb 2026",
      what: "Frontend developer at The Factual, building trading dashboards and real-time systems.",
    },
    {
      year: "Sep 2024",
      what: "Associate frontend developer at The Alter Office, working on an AdTech platform.",
    },
    {
      year: "Jan 2024",
      what: "Frontend intern at Remostart, building features across AI and supply chain products.",
    },
    {
      year: "2022",
      what: "Started with frontend, learning and building with HTML, CSS, JavaScript and ReactJS.",
    },
  ],
};

export const PROJECTS = [
  {
    id: "pinsei",
    title: "Pinsei",
    tag: "web app",
    year: "2026",
    description:
      "A bookmark manager for saving and finding links quickly. Built with a focus on speed, clarity, and a calm interface.",
    cta: { label: "Visit", href: "https://www.pinsei.com" },
    image: pinseiImg,
  },
  {
    id: "forge",
    title: "Forge",
    tag: "web app",
    year: "2026",
    description:
      "A visual prompt chain builder to design and test AI workflows. Fast, minimal, and built for real-world use.",
    cta: { label: "Visit", href: "https://prompt-chain-builder.vercel.app" },
    image: forgeImg,
  },
  {
    id: "pharmease",
    title: "PharmEase",
    tag: "web app",
    year: "2024",
    description:
      "A pharmacy inventory system with stock tracking, expiry alerts, and simple workflows for managing data.",
    cta: { label: "Visit", href: "https://pharmease-bysourabh.netlify.app" },
    image: pharmeaseImg,
  },
];
