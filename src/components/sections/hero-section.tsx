import Image from "next/image";
import {
  ArrowRight,
  Download,
  FolderGit2,
  Mail,
  Network,
} from "lucide-react";

import { FadeInSection } from "@/components/animations/fade-in-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/socials";

export function HeroSection() {
  return (
    <section className="section-shell pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.74fr)] lg:items-start">
        <FadeInSection className="space-y-7 lg:pt-4">
          <Badge>Available for Freelance & Product Roles</Badge>
          <div className="max-w-3xl space-y-5">
            <div className="space-y-3">
              <p className="text-sm tracking-[0.3em] text-white/52 uppercase">
                {profile.name}
              </p>
              <h1 className="section-title max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[5.1rem] lg:leading-[0.98]">
                {profile.title}
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              {profile.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              aria-label="CV will be added soon"
              title="CV download will be added soon"
            >
              Download CV
              <Download className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
              <Mail className="h-4 w-4" />
            </Button>
            <Button href={profile.github} variant="ghost" target="_blank">
              <FolderGit2 className="h-4 w-4" />
              GitHub
            </Button>
            <Button href={profile.linkedin} variant="ghost" target="_blank">
              <Network className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.15} className="lg:justify-self-end">
          <Card className="grid-pattern relative max-w-[25rem] overflow-hidden p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(137,240,175,0.16),transparent_32%)]" />
            <div className="relative flex flex-col gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-2.5">
                <Image
                  src="/profile-avatar.svg"
                  alt="Profile avatar for Ali Raza"
                  width={640}
                  height={640}
                  className="w-full rounded-[1.35rem]"
                  priority
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["AI Systems", "Workflows, streaming, automation"],
                  ["Backend", "RBAC, APIs, scoring, audits"],
                  ["Frontend", "Modern product UX at scale"],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/6 p-3.5"
                  >
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-white/55">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
}
