import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { TechChipTone } from "@/types/content";

type ChipVariant =
  | { readonly variant: "tech"; readonly tone: TechChipTone }
  | { readonly variant: "feature"; readonly tone: "subtle" | "on-ink" }
  | { readonly variant: "credential" | "stack" | "principle" }
  | { readonly variant: "practice"; readonly dot: "accent" | "sage" };

type ChipProps = ChipVariant & {
  readonly as?: "span" | "li";
  readonly children: ReactNode;
};

const techTones: Record<TechChipTone, string> = {
  ink: "bg-ink text-paper",
  neutral: "bg-ink/6",
  accent: "bg-accent/12 text-accent-ink",
  paper: "bg-paper/90",
  "paper-outline": "bg-paper/90 inset-ring inset-ring-ink/7",
};

const featureTones = {
  subtle: "bg-ink/5",
  "on-ink": "bg-paper/10 text-on-ink-soft-2",
} as const;

function variantClasses(props: ChipVariant): string {
  switch (props.variant) {
    case "tech":
      return cn("px-13 py-7 font-display text-13 font-semibold", techTones[props.tone]);
    case "feature":
      return cn("px-12 py-7 text-13", featureTones[props.tone]);
    case "credential":
      return "bg-ink/5 px-12 py-6 text-13";
    case "stack":
      return "bg-ink/5 px-11 py-5 text-13";
    case "principle":
      return "bg-paper/10 px-14 py-8 font-display text-14 font-semibold text-on-ink-soft";
    case "practice":
      return "inline-flex items-center gap-8 bg-paper px-15 py-9 font-display text-14 font-semibold inset-ring inset-ring-ink/8";
  }
}

/** Keyword pill in a sans face: technologies, features, credentials. */
export function Chip({ as: Tag = "span", children, ...variant }: ChipProps) {
  return (
    <Tag className={cn("rounded-pill", variantClasses(variant))}>
      {variant.variant === "practice" && (
        <span
          aria-hidden
          className={cn("size-7 rounded-pill", variant.dot === "accent" ? "bg-accent" : "bg-sage")}
        />
      )}
      {children}
    </Tag>
  );
}

interface ChipListProps {
  readonly className?: string;
  readonly children: ReactNode;
}

/** Wrapping list of chips; render its items with `<Chip as="li">`. */
export function ChipList({ className, children }: ChipListProps) {
  return <ul className={cn("flex flex-wrap", className)}>{children}</ul>;
}
