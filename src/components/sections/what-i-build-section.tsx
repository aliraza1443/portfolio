import { FadeInSection } from "@/components/animations/fade-in-section";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animations/stagger-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { buildFocus } from "@/data/skills";

export function WhatIBuildSection() {
  return (
    <section className="section-shell" id="experience">
      <FadeInSection className="section-block">
        <SectionHeading
          eyebrow="What I Build"
          title="Positioned around capabilities, not filler experience."
          description="This portfolio emphasizes the systems I know how to design and ship rather than placeholder company timelines."
        />

        <StaggerGrid className="grid gap-5 md:grid-cols-3">
          {buildFocus.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full p-6">
                <h3 className="section-title text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/66">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </FadeInSection>
    </section>
  );
}
