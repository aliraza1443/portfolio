import { FadeInSection } from "@/components/animations/fade-in-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { currentBuilds } from "@/data/skills";

export function CurrentBuildSection() {
  return (
    <section className="section-shell" id="currently-building">
      <FadeInSection className="section-block">
        <SectionHeading
          eyebrow="Currently Building"
          title="A live snapshot of the systems I am pushing forward."
          description="This section keeps the portfolio feeling active and signals the kind of product and architecture work I am focused on right now."
        />

        <Card className="p-5 sm:p-7">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {currentBuilds.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/6 p-5"
              >
                <p className="section-title text-lg font-medium text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </FadeInSection>
    </section>
  );
}
