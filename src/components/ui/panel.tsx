import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface PanelProps extends ComponentPropsWithoutRef<"section"> {
  readonly tone: "paper" | "sage";
  readonly as?: "section" | "article" | "div";
}

const tones = {
  paper: "bg-paper shadow-panel inset-ring inset-ring-ink/6",
  sage: "bg-sage-surface inset-ring inset-ring-sage/22",
} as const;

/** Large rounded surface that holds a whole case (role or project). */
export function Panel({ tone, as: Element = "section", className, children, ...rest }: PanelProps) {
  return (
    <Element className={cn("rounded-panel p-panel", tones[tone], className)} {...rest}>
      {children}
    </Element>
  );
}
