import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TagVariant =
  | { readonly variant: "meta"; readonly tone: "paper" | "sage" }
  | { readonly variant: "label"; readonly tone: "ink" | "paper" | "sage" | "accent" }
  | { readonly variant: "mini"; readonly tone: "accent" | "sage" }
  | { readonly variant: "period"; readonly tone: "neutral" | "paper" };

type TagProps = TagVariant & {
  readonly as?: "span" | "li" | "p";
  readonly className?: string;
  readonly children: ReactNode;
};

const metaTones = {
  paper: "bg-paper/80 text-muted inset-ring inset-ring-ink/8",
  sage: "bg-sage/16 text-sage-ink",
} as const;

const labelTones = {
  ink: "gap-8 bg-ink text-paper",
  paper: "gap-8 bg-paper text-sage-ink",
  sage: "gap-7 bg-sage/16 text-sage-ink",
  accent: "gap-7 bg-accent/14 text-accent-ink",
} as const;

const miniTones = {
  accent: "bg-accent-soft text-accent-ink",
  sage: "bg-sage-soft text-sage-ink",
} as const;

const periodTones = {
  neutral: "bg-ink/5 text-ink-strong",
  paper: "bg-paper/90 text-sage-ink-5",
} as const;

function variantClasses(props: TagVariant): string {
  switch (props.variant) {
    case "meta":
      return cn("px-12 py-6 text-11", metaTones[props.tone]);
    case "label":
      return cn("inline-flex items-center px-12 py-6 text-10.5 tracking-mono-md", labelTones[props.tone]);
    case "mini":
      return cn("px-10 py-4 text-10 tracking-mono", miniTones[props.tone]);
    case "period":
      return cn("px-11 py-5 text-11", periodTones[props.tone]);
  }
}

/** Status labels («En producción», «Sale pronto») carry a leading dot. */
function statusDot(props: TagVariant): string | null {
  if (props.variant !== "label") return null;
  if (props.tone === "sage") return "bg-sage-strong";
  if (props.tone === "accent") return "bg-accent";
  return null;
}

/** Metadata pill in uppercase mono: locations, periods, case labels, statuses. */
export function Tag({ as: Element = "span", className, children, ...variant }: TagProps) {
  const dot = statusDot(variant);

  return (
    <Element className={cn("rounded-pill font-mono uppercase", variantClasses(variant), className)}>
      {dot && <span aria-hidden className={cn("size-6 rounded-pill", dot)} />}
      {children}
    </Element>
  );
}
