import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";
import { cn } from "@/lib/cn";
import type { ProjectShortcut as ProjectShortcutContent } from "@/types/content";

interface ProjectShortcutProps extends Omit<ProjectShortcutContent, "page" | "anchor"> {
  readonly href: string;
}

const tones = {
  paper: {
    card: "bg-paper shadow-link inset-ring inset-ring-ink/7 hover:text-accent",
    subtitle: "text-subtle",
    arrow: "bg-ink/7",
  },
  ink: {
    card: "bg-ink text-paper shadow-link-ink",
    subtitle: "text-on-ink-faint",
    arrow: "bg-accent text-paper",
  },
  sage: {
    card: "bg-sage-surface shadow-link inset-ring inset-ring-sage/24 hover:text-accent",
    subtitle: "text-sage-ink-2",
    arrow: "bg-sage text-paper",
  },
} as const;

/** Wide card in the hero that jumps to a case on another page. */
export function ProjectShortcut({ title, subtitle, tone, href }: ProjectShortcutProps) {
  const styles = tones[tone];

  return (
    <Link
      href={href}
      className={cn("lift flex items-center justify-between gap-14 rounded-tile px-20 py-16", styles.card)}
    >
      <span>
        <span className="block font-display text-card-link font-bold">{title}</span>
        <span className={cn("mt-3 block text-13.5", styles.subtitle)}>{subtitle}</span>
      </span>
      <span
        aria-hidden
        className={cn("flex size-34 flex-none items-center justify-center rounded-pill text-14", styles.arrow)}
      >
        <Arrow />
      </span>
    </Link>
  );
}
