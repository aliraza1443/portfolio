export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  stack: string[];
  highlights: string[];
  image: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "AI SaaS Dashboard",
    slug: "ai-saas-dashboard",
    summary:
      "A production-style SaaS platform with authentication, AI generation workflows, subscription billing, usage metering, and a polished analytics dashboard.",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "Stripe",
      "TailwindCSS",
    ],
    highlights: [
      "Secure auth and workspace flows designed for multi-tenant SaaS growth",
      "AI generation pipelines with usage tracking and subscription gating",
      "Analytics-first dashboard UI with responsive cards, charts, and billing states",
    ],
    image: "/projects/ai-saas-dashboard.svg",
    links: [
      { label: "GitHub", href: "https://github.com/alibinjaved1443" },
      { label: "Live Demo", href: "#contact" },
    ],
  },
  {
    title: "Real-Time Chat Application",
    slug: "real-time-chat-application",
    summary:
      "A modern messaging product focused on low-latency communication, presence awareness, file sharing, and scalable room-based conversations.",
    stack: ["Next.js", "Socket.io", "Redis", "PostgreSQL", "TailwindCSS"],
    highlights: [
      "WebSocket-driven architecture with typing indicators and online presence",
      "Redis-backed realtime coordination for sessions, rooms, and scaling patterns",
      "Clean chat UI with group conversations, uploads, and stateful message flows",
    ],
    image: "/projects/realtime-chat.svg",
    links: [
      { label: "GitHub", href: "https://github.com/alibinjaved1443" },
      { label: "Live Demo", href: "#contact" },
    ],
  },
  {
    title: "Developer Collaboration Platform",
    slug: "developer-collaboration-platform",
    summary:
      "A mini Linear or Jira-style platform for teams, task planning, comments, activity logs, and product delivery workflows across shared boards.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Framer Motion"],
    highlights: [
      "Enterprise-style backend modeling for teams, issues, comments, and notifications",
      "Kanban board interactions with smooth motion and fast task-state updates",
      "Audit-friendly activity feeds and collaboration flows across shared workspaces",
    ],
    image: "/projects/collaboration-platform.svg",
    links: [
      { label: "GitHub", href: "https://github.com/alibinjaved1443" },
      { label: "Product View", href: "#projects" },
    ],
  },
  {
    title: "AI Resume & CV Builder",
    slug: "ai-resume-cv-builder",
    summary:
      "An AI-assisted resume platform with guided content generation, ATS-friendly optimization, live previews, template switching, and PDF export.",
    stack: ["Next.js", "OpenAI", "TypeScript", "PDF Generation", "TailwindCSS"],
    highlights: [
      "Prompt-driven resume generation with section-aware content suggestions",
      "Template rendering pipeline with live preview and exportable PDF output",
      "Practical recruiter-facing utility that blends design polish with AI assistance",
    ],
    image: "/projects/ai-resume-builder.svg",
    links: [
      { label: "GitHub", href: "https://github.com/alibinjaved1443" },
      { label: "Live Demo", href: "#contact" },
    ],
  },
  {
    title: "Advanced E-Commerce Platform",
    slug: "advanced-ecommerce-platform",
    summary:
      "A full-stack commerce system with storefront UX, cart and checkout flows, inventory controls, order tracking, and admin-side operational visibility.",
    stack: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "TailwindCSS"],
    highlights: [
      "End-to-end commerce architecture from browsing to payments and fulfillment",
      "Admin workflows for inventory, orders, product management, and analytics",
      "Production-focused product design that avoids tutorial-storefront aesthetics",
    ],
    image: "/projects/ecommerce-platform.svg",
    links: [
      { label: "GitHub", href: "https://github.com/alibinjaved1443" },
      { label: "Storefront Demo", href: "#contact" },
    ],
  },
  {
    title: "System Monitoring Dashboard",
    slug: "system-monitoring-dashboard",
    summary:
      "A live operational dashboard for server metrics, logs, alerts, and uptime monitoring built to look and feel like a real internal product tool.",
    stack: ["Next.js", "Node.js", "WebSockets", "Charts", "TypeScript"],
    highlights: [
      "Realtime metric streaming with alert states and operational summaries",
      "Log and analytics views designed for technical decision-making at a glance",
      "Dashboard architecture that showcases systems thinking and observability UX",
    ],
    image: "/projects/system-monitoring.svg",
    links: [
      { label: "GitHub", href: "https://github.com/alibinjaved1443" },
      { label: "Dashboard Demo", href: "#contact" },
    ],
  },
];
