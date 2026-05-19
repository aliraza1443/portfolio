import { ContactSection } from "@/components/sections/contact-section";
import { CurrentBuildSection } from "@/components/sections/current-build-section";
import { EducationSection } from "@/components/sections/education-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { GithubActivitySection } from "@/components/sections/github-activity-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { WhatIBuildSection } from "@/components/sections/what-i-build-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.18),_transparent_62%)] blur-3xl" />
        <div className="absolute right-0 top-80 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.14),_transparent_60%)] blur-3xl" />
      </div>

      <HeroSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <WhatIBuildSection />
      <CurrentBuildSection />
      <EducationSection />
      <GithubActivitySection />
      <ContactSection />
    </main>
  );
}
