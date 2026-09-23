import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  readonly dot: "sage" | "accent";
  readonly children: ReactNode;
}

/** Section kicker: coloured dot + uppercase mono label. */
export function Eyebrow({ dot, children }: EyebrowProps) {
  return (
    <p className="flex items-center gap-9 font-mono text-11.5 tracking-mono-md text-subtle uppercase">
      <span aria-hidden className={cn("inline-block size-7 rounded-pill", dot === "sage" ? "bg-sage" : "bg-accent")} />
      {children}
    </p>
  );
}
