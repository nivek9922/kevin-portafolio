import { cn } from "@/lib/cn";

interface NumberedListProps {
  readonly items: readonly string[];
  readonly tone: "paper" | "sage";
  /** `columns` flows the items into auto-fit columns for full-width blocks. */
  readonly layout?: "stack" | "columns";
  readonly className?: string;
}

const tones = {
  paper: { list: "gap-9 text-ink-strong", number: "text-accent" },
  // Design numbers use #5F7A4F (4.22:1 on sage); `sage-ink` keeps AA.
  sage: { list: "gap-8 text-sage-ink-5", number: "text-sage-ink" },
} as const;

/** Ordered list with the design's zero-padded numbers («01», «02»). */
export function NumberedList({ items, tone, layout = "stack", className }: NumberedListProps) {
  const styles = tones[tone];

  return (
    <ol
      className={cn(
        "text-14.5 leading-snug",
        layout === "stack" ? "flex flex-col" : "auto-grid-320 gap-x-split",
        styles.list,
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={item} className="flex gap-10">
          <span aria-hidden className={styles.number}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
