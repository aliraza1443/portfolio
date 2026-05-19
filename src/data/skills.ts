export type SkillCategory = {
  title: string;
  items: string[];
};

export type BuildFocus = {
  title: string;
  description: string;
};

export type EducationItem = {
  title: string;
  period: string;
  institution: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "PostgreSQL", "Supabase"],
  },
  {
    title: "AI & Infra",
    items: ["OpenAI", "Claude", "SSE Streaming", "Vercel", "Stripe"],
  },
];

export const buildFocus: BuildFocus[] = [
  {
    title: "AI SaaS Systems",
    description:
      "Production-grade AI workflows, streaming pipelines, and automated report generation systems built for real user operations.",
  },
  {
    title: "Backend Architecture",
    description:
      "Scalable APIs, RBAC systems, audit flows, scoring engines, and backend structures designed for growth and reliability.",
  },
  {
    title: "Modern Frontend Systems",
    description:
      "Responsive Next.js applications with advanced onboarding flows, motion systems, dashboards, and mobile-first product UX.",
  },
];

export const currentBuilds = [
  "AI SaaS dashboards",
  "Resume generation tools",
  "Realtime communication systems",
  "Team collaboration platforms",
  "Commerce architecture",
  "Monitoring and observability dashboards",
];

export const education: EducationItem[] = [
  {
    title: "Matric",
    period: "2017 - 2019",
    institution: "Daanish Boys School, Rahim Yar Khan",
  },
  {
    title: "FSC - ICS",
    period: "2019 - 2021",
    institution: "Daanish Boys School, Rahim Yar Khan",
  },
  {
    title: "BS Computer Science",
    period: "2022 - 2026",
    institution:
      "Khwaja Fareed University of Engineering and Information Technology, Rahim Yar Khan",
  },
];
