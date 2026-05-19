import { FadeInSection } from "@/components/animations/fade-in-section";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animations/stagger-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export function TechStackSection() {
  return (
    <section className="section-shell" id="stack">
      <FadeInSection className="section-block">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to ship polished product systems."
          description="A focused stack for production web applications, modern frontend experiences, strong backend systems, and AI-enabled workflows."
        />
        <StaggerGrid className="grid gap-5 md:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <Card className="h-full p-6">
                <h3 className="section-title text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </FadeInSection>
    </section>
  );
}
