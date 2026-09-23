import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";
import type { Capability } from "@/types/content";

interface CapabilityGridProps {
  readonly capabilities: readonly Capability[];
}

const badgeTones = ["bg-accent-soft text-accent-ink", "bg-sage-soft text-sage-ink"] as const;

/** Four numbered cards; the badge alternates accent and sage. */
export function CapabilityGrid({ capabilities }: CapabilityGridProps) {
  return (
    <Reveal as="ul" className="mt-[clamp(28px,4vw,56px)] auto-grid-210 gap-grid">
      {capabilities.map((capability, index) => (
        <li
          key={capability.title}
          className="lift rounded-card bg-paper p-[clamp(18px,2vw,24px)] shadow-card inset-ring inset-ring-ink/6"
        >
          <span
            aria-hidden
            className={cn(
              "flex size-30 items-center justify-center rounded-badge font-mono text-12",
              badgeTones[index % badgeTones.length],
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="mt-14 font-display text-18 font-bold">{capability.title}</h2>
          <p className="mt-6 text-14.5 leading-snug text-muted">{capability.description}</p>
        </li>
      ))}
    </Reveal>
  );
}
