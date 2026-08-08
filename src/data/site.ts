import pinseiImg from "../assets/pinsei.png";
import forgeImg from "../assets/forge.png";

export const SITE = {
  email: "sourabhhaldarh@gmail.com",
  githubHref: "https://github.com/sourabh-31",
  linkedinHref: "https://www.linkedin.com/in/sourabh-haldar",
  resumeHref: "/sourabh_haldar_resume.pdf",
};

export const PROJECTS = [
  {
    title: "Pinsei",
    description:
      "A modern bookmark manager built with Next.js and Supabase featuring instant search, collections, optimistic UI updates, and real-time synchronization for managing thousands of saved links.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    imgSrc: pinseiImg,
    codeHref: "https://github.com/sourabh-31/bookmark-manager",
    visitHref: "https://www.pinsei.com",
  },
  {
    title: "Forge",
    description:
      "A visual prompt chain builder to design, test, and deploy AI workflows through a fast, minimal node-based interface built for real-world use.",
    tags: ["React", "TypeScript", "React Flow", "Tailwind CSS"],
    imgSrc: forgeImg,
    codeHref: "https://github.com/sourabh-31/prompt-chain-builder",
    visitHref: "https://prompt-chain-builder.vercel.app",
  },
];

export const BLOG_POSTS = [
  {
    slug: "web-font-optimization",
    title: "Web Font Optimization in 10 Steps",
    date: "8 Aug 2026",
    read: "10 min",
    tags: ["Astro", "Fonts", "Optimization"],
    excerpt:
      "A practical, step-by-step guide to shipping smaller, faster web fonts, from choosing the right format and subsets to preloading, caching, and measuring performance.",
  },
];

export const JOBS = [
  {
    dates: "2026 – Present",
    role: "Frontend Developer",
    company: "The Factual Holding Co.",
    summary:
      "Built a proprietary trading platform with real-time dashboards, developed an affiliate platform supporting 1,000+ onboardings, and integrated PostHog & Microsoft Clarity for product analytics.",
  },
  {
    dates: "2024 – 2026",
    role: "Associate Frontend Developer",
    company: "The Alter Office",
    summary:
      "Architected a scalable Next.js monorepo using Turborepo, Storybook, GitHub Actions, and AWS while developing SSP, DSP, and Admin Portal applications for a production AdTech platform.",
  },
  {
    dates: "2024 – 2024",
    role: "Frontend Developer Intern",
    company: "Remostart",
    summary:
      "Delivered customer-facing features across AI, HR, and supply chain products using React, Next.js, TypeScript, and Tailwind CSS while improving application performance by up to 40%.",
  },
];
