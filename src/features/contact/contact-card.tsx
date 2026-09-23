import { Arrow } from "@/components/ui/arrow";
import { ExternalLink } from "@/components/ui/external-link";
import { cn } from "@/lib/cn";
import type { ContactChannel } from "@/types/content";

const tones = {
  ink: { card: "bg-ink text-paper shadow-contact-ink", label: "text-accent-glow" },
  paper: { card: "bg-paper shadow-contact inset-ring inset-ring-ink/7 hover:text-accent", label: "text-accent-ink" },
  sage: {
    card: "bg-sage-surface shadow-contact inset-ring inset-ring-sage/24 hover:text-accent",
    label: "text-sage-ink",
  },
} as const;

/** One way to reach out: mono label + value; the whole card is the link. */
export function ContactCard({ label, value, href, tone, external }: ContactChannel) {
  const styles = tones[tone];
  const className = cn("lift block h-full rounded-frame p-[clamp(20px,2.4vw,30px)]", styles.card);
  const content = (
    <>
      <span className={cn("block font-mono text-10.5 tracking-mono-lg uppercase", styles.label)}>
        {label} <Arrow direction="up-right" mono />
      </span>
      <span className="mt-14 block font-display text-contact-value font-bold wrap-break-word">{value}</span>
    </>
  );

  return external ? (
    <ExternalLink href={href} className={className}>
      {content}
    </ExternalLink>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
