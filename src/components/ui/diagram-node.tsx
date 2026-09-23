import { cn } from "@/lib/cn";
import type { DiagramNodeContent } from "@/types/content";
import { Arrow } from "./arrow";

type NodeSize = "sm" | "list" | "md" | "stack";

interface DiagramNodeProps extends DiagramNodeContent {
  readonly tone?: "paper" | "ink";
  readonly size: NodeSize;
  readonly metaPlacement?: "end" | "below";
  /** Leading arrow used in sequences («→ APIs REST»). */
  readonly arrow?: boolean;
  /** Hover lift + accent ring. Static nodes (e.g. SAP, DataCrédito) opt out. */
  readonly interactive?: boolean;
  /** Keep the note always visible instead of revealing it on hover/focus. */
  readonly expanded?: boolean;
  readonly as?: "div" | "li";
  readonly className?: string;
}

const sizes: Record<NodeSize, { box: string; title: string; note: string }> = {
  sm: { box: "rounded-node-sm px-13 py-12", title: "text-14.5", note: "pt-7 text-12.5" },
  list: { box: "rounded-node-sm px-14 py-12", title: "text-14.5", note: "pt-7 text-13 leading-note" },
  md: { box: "rounded-node px-16 py-13", title: "text-16", note: "pt-8 text-13.5 leading-note" },
  stack: { box: "rounded-node px-15 py-13", title: "text-15", note: "" },
};

const tones = {
  paper: { box: "bg-paper inset-ring", note: "text-muted", meta: "text-faint" },
  ink: { box: "bg-ink text-paper", note: "text-on-ink-muted-2", meta: "text-on-ink-faint-2" },
} as const;

/**
 * A box in a diagram or step list. Its optional note stays in the accessibility tree; it is
 * collapsed only for fine pointers and opens on hover or keyboard focus, so touch and keyboard
 * users can always reach it.
 */
export function DiagramNode({
  title,
  meta,
  note,
  tone = "paper",
  size,
  metaPlacement = "end",
  arrow = false,
  interactive = true,
  expanded = false,
  as: Element = "div",
  className,
}: DiagramNodeProps) {
  const toneStyles = tones[tone];
  const sizeStyles = sizes[size];

  return (
    <Element
      tabIndex={note && !expanded ? 0 : undefined}
      className={cn(
        "group",
        sizeStyles.box,
        toneStyles.box,
        tone === "paper" && (size === "stack" ? "inset-ring-ink/7" : "inset-ring-ink/8"),
        interactive &&
          "[transition:box-shadow_.4s,transform_.4s_var(--ease-spring)] hover:inset-ring-[1.5px] hover:inset-ring-accent/55 hover:shadow-step focus-visible:inset-ring-[1.5px] focus-visible:inset-ring-accent/55 focus-visible:shadow-step motion-safe:hover:-translate-y-2 motion-safe:focus-visible:-translate-y-2",
        className,
      )}
    >
      {/* Flex blockifies the spans so each line takes its own font's height, as in the design. */}
      <div
        className={cn(
          "flex",
          metaPlacement === "below" ? "flex-col" : "items-center",
          meta && metaPlacement === "end" && "justify-between gap-10",
          arrow && "gap-8",
        )}
      >
        {arrow && <Arrow className="text-13 text-faint-arrow" />}
        <span className={cn("font-display font-bold", sizeStyles.title)}>{title}</span>
        {meta && (
          <span
            className={cn(
              "font-mono text-10 tracking-mono uppercase",
              toneStyles.meta,
              metaPlacement === "below" && "mt-4 block",
            )}
          >
            {meta}
          </span>
        )}
      </div>
      {note && (
        <div
          className={cn(
            "grid grid-rows-[1fr]",
            !expanded &&
              "[transition:grid-template-rows_.4s,opacity_.4s] pointer-fine:grid-rows-[0fr] pointer-fine:opacity-0 pointer-fine:group-hover:grid-rows-[1fr] pointer-fine:group-hover:opacity-100 pointer-fine:group-focus-visible:grid-rows-[1fr] pointer-fine:group-focus-visible:opacity-100",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <p className={cn(sizeStyles.note, toneStyles.note)}>{note}</p>
          </div>
        </div>
      )}
    </Element>
  );
}

interface DiagramConnectorProps {
  readonly tone: "accent" | "sage";
}

/** Short vertical line joining two diagram rows. */
export function DiagramConnector({ tone }: DiagramConnectorProps) {
  return (
    <div aria-hidden className={cn("flex justify-center", tone === "accent" ? "py-7" : "py-3")}>
      <span className={cn("w-2 rounded-pill", tone === "accent" ? "h-16 bg-accent/40" : "h-14 bg-sage/50")} />
    </div>
  );
}
