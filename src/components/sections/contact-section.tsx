import {
  FolderGit2,
  Mail,
  MessageCircleMore,
  Network,
} from "lucide-react";

import { FadeInSection } from "@/components/animations/fade-in-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/socials";

const contacts = [
  {
    label: "Gmail",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    icon: Network,
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp.replace("https://wa.me/", "+"),
    href: profile.whatsapp,
    icon: MessageCircleMore,
  },
];

export function ContactSection() {
  return (
    <section className="section-shell pb-12" id="contact">
      <FadeInSection className="section-block">
        <Card className="overflow-hidden p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Contact"
              title="Let's start a meaningful conversation."
              description="If you are building an AI product, SaaS platform, dashboard, or any modern full-stack system, feel free to reach out. I am open to collaboration, freelance work, and strong product-focused opportunities."
            />

            <div className="space-y-4">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-5 py-4 hover:-translate-y-0.5 hover:border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/8 p-2 text-white/78">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/46">
                          {item.label}
                        </p>
                        <p className="text-sm text-white/78">{item.value}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-6">
            <Button href={profile.github} variant="secondary" target="_blank">
              GitHub
            </Button>
            <Button href={profile.linkedin} variant="secondary" target="_blank">
              LinkedIn
            </Button>
            <Button href={`mailto:${profile.email}`}>Start a Conversation</Button>
          </div>
        </Card>

        <footer className="flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ali Raza. Built with Next.js, TypeScript, TailwindCSS, and Framer Motion.</p>
          <p>Designed for a clean v1 launch on Vercel.</p>
        </footer>
      </FadeInSection>
    </section>
  );
}
