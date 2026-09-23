import type { ReactNode } from "react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import { type Fact, FactList } from "./fact-list";

type RoleVariant = "primary" | "secondary";

interface RoleSummaryProps {
  readonly variant: RoleVariant;
  readonly titleId: string;
  readonly label: string;
  readonly title: ReactNode;
  readonly summary: string;
  readonly facts: readonly Fact[];
  readonly children?: ReactNode;
}

const variants = {
  primary: {
    label: "ink",
    title: "text-title-lg",
    summary: "mt-14 text-16 text-muted",
    facts: "mt-18",
    tone: "paper",
  },
  secondary: {
    label: "paper",
    title: "text-title-md",
    summary: "mt-12 text-15.5 text-sage-ink-4",
    facts: "mt-14",
    tone: "sage",
  },
} as const satisfies Record<RoleVariant, object>;

/** Left column of a role: case label, title, summary and facts. */
export function RoleSummary({ variant, titleId, label, title, summary, facts, children }: RoleSummaryProps) {
  const styles = variants[variant];

  return (
    <div className="min-w-0">
      <Tag variant="label" tone={styles.label}>
        {label}
      </Tag>
      <h2 id={titleId} className={cn("mt-14 font-display", styles.title)}>
        {title}
      </h2>
      <p className={cn("max-w-[34ch] leading-body", styles.summary)}>{summary}</p>
      <FactList facts={facts} tone={styles.tone} className={styles.facts} />
      {children}
    </div>
  );
}
