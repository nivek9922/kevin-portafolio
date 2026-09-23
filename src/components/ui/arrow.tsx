import { cn } from "@/lib/cn";

interface ArrowProps {
  readonly direction?: "right" | "up-right";
  /** Arrows inside mono labels fall back to the monospace system face, as in the design. */
  readonly mono?: boolean;
  /**
   * In the design the fallback glyph grows the line box when the arrow sits in running text
   * (pill labels such as «citavek.com ↗») but not when it is its own flex item. `tight`
   * (default) keeps the line box; pass `false` for arrows inside running text.
   */
  readonly tight?: boolean;
  readonly className?: string;
}

/**
 * Decorative arrow glyph. The web fonts do not ship →/↗, so the design renders them with the
 * system fallback; the dedicated font tokens reproduce that instead of next/font's fallback.
 */
export function Arrow({ direction = "right", mono = false, tight = true, className }: ArrowProps) {
  return (
    <span
      aria-hidden
      className={cn(tight && "leading-none", mono ? "font-symbol-mono" : "font-symbol", className)}
    >
      {direction === "right" ? "→" : "↗"}
    </span>
  );
}
