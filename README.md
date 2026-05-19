# Ali Raza Portfolio

A modern developer portfolio built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

This project is designed to position me as a Full-Stack Developer focused on AI-integrated SaaS systems, scalable backend architecture, and modern production web applications.

## Overview

The portfolio is built as a polished, responsive single-page experience with reusable architecture from day one.

It includes:

- Hero section with strong professional positioning
- Categorized tech stack
- Featured project showcase
- Capability-based "What I Build" section
- "Currently Building" section
- GitHub activity widgets
- Contact section with professional footer
- SEO metadata and Open Graph image support

## Tech Stack

- Next.js 15
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- Vercel

## Featured Projects

### Vision Surgery
AI-assisted medical workflow platform for structured reporting, planning support, and clinician-friendly review systems.

### ACES
Assessment and certification engine focused on scoring logic, auditability, and enterprise-style onboarding flows.

### UroFitness / OFB
Health and fitness product system with subscription-ready architecture, dashboards, and mobile-first user flows.

### LLM Comparison FYP
Research-focused platform for comparing LLM outputs, prompt behavior, and streaming model responses.

## Project Structure

```bash
src/
├── app/
├── components/
│   ├── animations/
│   ├── sections/
│   ├── shared/
│   └── ui/
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── socials.ts
├── lib/
└── styles/
```

## Architecture Notes

- Project content is stored in `src/data/projects.ts` and rendered dynamically
- Skills and build-focus content are separated into dedicated data files
- UI is split into reusable section and primitive components
- Motion is handled with lightweight Framer Motion patterns
- Static SVG assets are used for project banners and visual consistency

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production build locally:

```bash
npm run start
```

## Deployment

This portfolio is intended to be deployed on Vercel.

Recommended environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Repository Goals

This is not meant to feel like a beginner showcase or tutorial clone.

The goal of this repository is to present:

- production-minded frontend work
- scalable product architecture
- AI SaaS positioning
- clean code structure for future expansion

## Author

Ali Raza

- GitHub: `https://github.com/alibinjaved1443`
- LinkedIn: `https://www.linkedin.com/in/alibinjaved1443`
- Email: `alibinjaved1443@gmail.com`
