import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface Fact {
  readonly label: string;
  readonly value: ReactNode;
  /** Top-align rows whose value wraps over several lines (the stack chips). */
  readonly alignStart?: boolean;
}

interface FactListProps {
  readonly facts: readonly Fact[];
  readonly tone: "paper" | "sage";
  readonly className?: string;
}

/** PERIODO / ROL / STACK rows as a definition list. */
export function FactList({ facts, tone, className }: FactListProps) {
  return (
    <dl className={cn("flex flex-col", tone === "paper" ? "gap-10" : "gap-9", className)}>
      {facts.map((fact) => (
        <div key={fact.label} className={cn("flex flex-wrap gap-10", fact.alignStart ? "items-start" : "items-center")}>
          <dt
            className={cn(
              "font-mono text-10.5 tracking-mono-md uppercase",
              tone === "paper" ? "min-w-74 text-faint" : "text-sage-ink-2",
              fact.alignStart && "pt-5",
            )}
          >
            {fact.label}
          </dt>
          {/* Flex so pill values count their padding in the row height, as in the design. */}
          <dd className="flex">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
