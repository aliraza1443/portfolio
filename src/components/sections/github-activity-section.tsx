import { FadeInSection } from "@/components/animations/fade-in-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/socials";

const stats = [
  {
    alt: "GitHub stats",
    src: `https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&hide_border=true&bg_color=0d181b&title_color=f6faf8&text_color=b8cdc4&icon_color=89f0af`,
  },
  {
    alt: "Top languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&hide_border=true&bg_color=0d181b&title_color=f6faf8&text_color=b8cdc4`,
  },
  {
    alt: "Contribution graph",
    src: `https://github-readme-activity-graph.vercel.app/graph?username=${profile.githubUsername}&bg_color=0d181b&color=b8cdc4&line=89f0af&point=f6faf8&area=true&hide_border=true`,
  },
];

export function GithubActivitySection() {
  return (
    <section className="section-shell" id="github">
      <FadeInSection className="section-block">
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Public code signals that reinforce the portfolio."
          description="Stats, language distribution, and contribution history give quick evidence of consistency and technical range."
        />

        <div className="grid gap-5 xl:grid-cols-[0.95fr_0.95fr]">
          <Card className="overflow-hidden p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stats[0].src}
              alt={stats[0].alt}
              className="h-auto w-full rounded-[1.2rem]"
              loading="lazy"
            />
          </Card>
          <Card className="overflow-hidden p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stats[1].src}
              alt={stats[1].alt}
              className="h-auto w-full rounded-[1.2rem]"
              loading="lazy"
            />
          </Card>
        </div>

        <Card className="overflow-hidden p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={stats[2].src}
            alt={stats[2].alt}
            className="h-auto w-full rounded-[1.2rem]"
            loading="lazy"
          />
        </Card>
      </FadeInSection>
    </section>
  );
}
