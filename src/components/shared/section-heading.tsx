import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <Badge>{eyebrow}</Badge>
      <div className="space-y-4">
        <h2 className="section-title text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-8 text-white/68 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
