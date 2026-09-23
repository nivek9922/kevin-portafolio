import { Reveal } from "@/components/motion/reveal";
import { Chip, ChipList } from "@/components/ui/chip";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import type { ExperienceContent } from "@/types/content";

interface CredentialsGridProps {
  readonly education: ExperienceContent["education"];
  readonly certifications: ExperienceContent["certifications"];
}

const card = "lift rounded-card bg-paper p-[clamp(18px,2vw,26px)] shadow-card inset-ring inset-ring-ink/6";
const label = "font-mono text-10.5 tracking-mono-lg uppercase";

/** Education and certifications, side by side. */
export function CredentialsGrid({ education, certifications }: CredentialsGridProps) {
  return (
    <Reveal className="mt-stack auto-grid-260 gap-grid">
      <section className={card}>
        <h2 className={cn(label, "text-accent-ink")}>{education.label}</h2>
        <p className="mt-12 font-display text-17 font-bold">{education.degree}</p>
        <p className="mt-5 text-14.5 text-muted">{education.institution}</p>
        <Tag as="p" variant="period" tone="neutral" className="mt-10 inline-block">
          {education.status}
        </Tag>
      </section>
      <section className={card}>
        <h2 className={cn(label, "text-sage-ink")}>{certifications.label}</h2>
        <ChipList className="mt-12 gap-7">
          {certifications.items.map((item) => (
            <Chip key={item} as="li" variant="credential">
              {item}
            </Chip>
          ))}
        </ChipList>
        <p className="mt-12 text-14 text-muted">{certifications.languages}</p>
      </section>
    </Reveal>
  );
}
