import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Arrow } from "./arrow";
import { ExternalLink } from "./external-link";

type PillLinkVariant = "accent" | "subtle" | "sage-soft" | "sage" | "cta";

interface PillLinkProps {
  readonly href: string;
  readonly variant: PillLinkVariant;
  readonly external?: boolean;
  /** Downloads a file (e.g. the CV PDF) instead of navigating; shows ↓ on the `cta` variant. */
  readonly download?: boolean;
  readonly children: ReactNode;
}

const variants: Record<PillLinkVariant, string> = {
  accent: "bg-accent text-paper shadow-accent-glow",
  subtle: "bg-ink/5 hover:text-accent",
  "sage-soft": "bg-sage/18 text-sage-ink-6",
  // Design uses `sage` (#7E9070, 3.38:1); `sage-strong` reaches 4.71:1 for AA.
  sage: "inline-block bg-sage-strong text-paper shadow-sage-glow",
  cta: "inline-flex items-center gap-10 bg-ink px-20 py-12 text-15 text-paper",
};

/** Pill-shaped call to action; external links get the ↗ glyph and open in a new tab. */
export function PillLink({ href, variant, external = false, download = false, children }: PillLinkProps) {
  const className = cn(
    "lift rounded-pill font-display font-semibold",
    variant !== "cta" && "px-18 py-11 text-14.5",
    variants[variant],
  );

  if (external) {
    return (
      <ExternalLink href={href} className={className}>
        {children} <Arrow direction="up-right" tight={false} />
      </ExternalLink>
    );
  }

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
        {variant === "cta" && <Arrow direction="down" className="text-accent-glow" />}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {variant === "cta" && <Arrow className="text-accent-glow" />}
    </Link>
  );
}
