import pinseiImg from "../assets/pinsei.png";
import theUnreliableNetworkImg from "../assets/blog/the-unreliable-network.png";
import typeSafeApisWithTrpcImg from "../assets/blog/type-safe-apis-with-trpc.png";
import webRenderingPatternImg from "../assets/blog/web-rendering-pattern.png";
import webFontOptimizationImg from "../assets/blog/web-font-optimization.png";

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
      "A modern bookmark manager built with React.js and Supabase featuring instant search, collections and real-time synchronization for managing thousands of saved links.",
    tags: ["React.js", "TypeScript", "Supabase", "Tailwind CSS"],
    imgSrc: pinseiImg,
    codeHref: "https://github.com/sourabh-31/pinsei-bookmark-manager",
    visitHref: "https://www.pinsei.com",
  },
];

export const BLOG_POSTS = [
  {
    slug: "the-unreliable-network",
    title: "The Network Is the Most Unreliable Part of Your Frontend",
    date: "02 Sep 2026",
    read: "9 min",
    tags: ["Web Development", "Frontend Architecture"],
    excerpt:
      "A practical guide to seven network problems frontend developers face, with working code, real-world solutions, and a look at what popular data-fetching libraries handle for you.",
    img: theUnreliableNetworkImg,
  },
  {
    slug: "type-safe-apis-with-trpc",
    title: "Stop Manually Typing Your API Responses in TypeScript",
    date: "25 Aug 2026",
    read: "12 min",
    tags: ["Typescript", "tRPC", "API Design"],
    excerpt:
      "Learn how tRPC provides end-to-end type safety between TypeScript frontends and backends without manually duplicating API response types.",
    img: typeSafeApisWithTrpcImg,
  },
  {
    slug: "web-rendering-pattern",
    title: "Understanding Web Rendering: CSR, SSR, SSG and More",
    date: "15 Aug 2026",
    read: "8 min",
    tags: ["Web Development", "Frontend Architecture"],
    excerpt:
      "A beginner friendly walkthrough of every major web rendering method, from client side and server side rendering to static generation, incremental regeneration, and hybrid rendering, with framework support compared side by side.",
    img: webRenderingPatternImg,
  },
  {
    slug: "web-font-optimization",
    title: "A Practical Guide to Web Font Optimization",
    date: "8 Aug 2026",
    read: "10 min",
    tags: ["Astro", "Fonts", "Optimization"],
    excerpt:
      "A practical, step-by-step guide to shipping smaller, faster web fonts, from choosing the right format and subsets to preloading, caching, and measuring performance.",
    img: webFontOptimizationImg,
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
