import pinseiImg from "../assets/pinsei.png";
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
    "I'm a frontend-focused software developer. I build for web and mobile, mostly the parts people actually interact with.",
    "I like interfaces that feel a little handmade, something that makes you pause for a second. I care about typography, accessibility, performance, and the details that make things feel right.",
    "When I'm not at a keyboard, I’m usually playing games or reading. I like building things that feel simple, clear, and fast.",
  ],
  principles: [
    {
      title: "Make it obvious",
      body: "People shouldn’t have to think about how to use it.",
    },
    {
      title: "Details matter",
      body: "Spacing, timing, states. That’s where the feel comes from.",
    },
    {
      title: "Keep it light",
      body: "Fast, responsive, and not doing more than it needs to.",
    },
    {
      title: "Ship the simple thing",
      body: "Start small, get it right, then build on top.",
    },
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
    "PostgreSQL",
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
      what: "Started with frontend, learning and building with HTML, CSS, and JavaScript.",
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
