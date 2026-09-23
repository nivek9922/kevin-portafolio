import { Reveal } from "@/components/motion/reveal";
import { Chip, ChipList } from "@/components/ui/chip";
import type { HomeContent } from "@/types/content";

interface PrinciplesBandProps {
  readonly principles: HomeContent["principles"];
}

/** Dark band «Cómo construyo»: statement on one side, principles on the other. */
export function PrinciplesBand({ principles }: PrinciplesBandProps) {
  return (
    <Reveal
      as="section"
      aria-labelledby="principles-title"
      className="mt-stack rounded-band bg-ink p-[clamp(20px,2.8vw,38px)] text-paper"
    >
      <div className="auto-grid-270 items-center gap-split">
        <div className="min-w-0">
          <p className="font-mono text-10.5 tracking-mono-lg text-accent-light uppercase">{principles.eyebrow}</p>
          <h2 id="principles-title" className="mt-12 max-w-[22ch] font-display text-title-band">
            {principles.title}
          </h2>
          <p className="mt-12 max-w-[40ch] text-15.5 leading-body text-on-ink-muted">{principles.body}</p>
        </div>
        <ChipList className="min-w-0 gap-8">
          {principles.items.map((item) => (
            <Chip key={item} as="li" variant="principle">
              {item}
            </Chip>
          ))}
        </ChipList>
      </div>
    </Reveal>
  );
}
