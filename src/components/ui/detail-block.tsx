import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Tag } from "./tag";

type DetailBlockTone = "sunk" | "paper" | "ink";

interface DetailBlockProps {
  readonly title: string;
  readonly tag?: string;
  readonly tagTone?: "accent" | "sage";
  /** `sunk` inside paper panels, `paper`/`ink` inside sage panels. */
  readonly tone?: DetailBlockTone;
  readonly children: ReactNode;
}

const tones: Record<DetailBlockTone, string> = {
  sunk: "bg-sunk",
  paper: "bg-paper",
  ink: "bg-ink text-paper",
};

/** Rounded sub-block of a case with a small title and an optional mini tag. */
export function DetailBlock({ title, tag, tagTone = "accent", tone = "sunk", children }: DetailBlockProps) {
  return (
    <div className={cn("rounded-card p-card", tones[tone])}>
      <div className={tag ? "mb-14 flex items-center justify-between gap-10" : "mb-12"}>
        <h3 className="font-display text-15 font-bold">{title}</h3>
        {tag && (
          <Tag variant="mini" tone={tagTone}>
            {tag}
          </Tag>
        )}
      </div>
      {children}
    </div>
  );
}
