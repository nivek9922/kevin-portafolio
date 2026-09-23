import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

type TitleSize = "display-xl" | "display-lg" | "display-contact";

interface PageIntroProps {
  readonly eyebrow: string;
  readonly dot: "sage" | "accent";
  readonly title: string;
  /** Trailing fragment painted in the accent colour («.», «?»). */
  readonly accent?: string;
  readonly size: TitleSize;
}

const titleStyles: Record<TitleSize, string> = {
  "display-xl": "mt-[clamp(16px,2.4vw,28px)] max-w-[16ch] text-display-xl",
  "display-lg": "mt-title max-w-[24ch] text-display-lg",
  "display-contact": "mt-[clamp(16px,2.4vw,26px)] max-w-[18ch] text-display-contact",
};

/** Eyebrow + the page's single `h1`; the visual size is independent of the heading level. */
export function PageIntro({ eyebrow, dot, title, accent, size }: PageIntroProps) {
  return (
    <>
      <Eyebrow dot={dot}>{eyebrow}</Eyebrow>
      <h1 className={cn("font-display text-balance", titleStyles[size])}>
        {title}
        {accent && <span className="text-accent">{accent}</span>}
      </h1>
    </>
  );
}
