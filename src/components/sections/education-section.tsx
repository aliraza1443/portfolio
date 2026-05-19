import { FadeInSection } from "@/components/animations/fade-in-section";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animations/stagger-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { education } from "@/data/skills";

export function EducationSection() {
  return (
    <section className="section-shell" id="education">
      <FadeInSection className="section-block">
        <SectionHeading
          eyebrow="Education"
          title="Academic milestones behind my development journey."
          description="A simple timeline of my school and university background, now included as part of the portfolio so the personal story feels complete."
        />

        <StaggerGrid className="grid gap-5 lg:grid-cols-3">
          {education.map((item) => (
            <StaggerItem key={`${item.title}-${item.period}`}>
              <Card className="h-full p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/46">
                  {item.period}
                </p>
                <h3 className="section-title mt-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.institution}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </FadeInSection>
    </section>
  );
}
