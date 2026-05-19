import Image from "next/image";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

import { FadeInSection } from "@/components/animations/fade-in-section";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animations/stagger-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function FeaturedProjectsSection() {
  return (
    <section className="section-shell" id="projects">
      <FadeInSection className="section-block">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected builds that reflect the direction of my work."
          description="Each project emphasizes practical architecture, product thinking, and systems that are ready to grow beyond a one-off demo."
        />

        <StaggerGrid className="grid gap-5 xl:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Card className="overflow-hidden">
                <div className="border-b border-white/10 p-3">
                  <Image
                    src={project.image}
                    alt={`${project.title} banner`}
                    width={1200}
                    height={720}
                    className="h-56 w-full rounded-[1.4rem] object-cover"
                  />
                </div>
                <div className="space-y-6 p-6">
                  <div className="space-y-3">
                    <h3 className="section-title text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/65">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs tracking-[0.16em] text-white/72 uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/48">
                      Architecture highlights
                    </p>
                    <div className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <p
                          key={highlight}
                          className="text-sm leading-7 text-white/66"
                        >
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      href={project.links[0].href}
                      variant="secondary"
                      target="_blank"
                    >
                      <FolderGit2 className="h-4 w-4" />
                      {project.links[0].label}
                    </Button>
                    <Button href={project.links[1].href}>
                      <ArrowUpRight className="h-4 w-4" />
                      {project.links[1].label}
                    </Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </FadeInSection>
    </section>
  );
}
