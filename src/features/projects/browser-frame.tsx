import Image from "next/image";
import { cn } from "@/lib/cn";
import type { BrowserPreview } from "@/types/content";

interface BrowserFrameProps extends BrowserPreview {
  /** `canvas` frame on a paper panel, `paper` frame on a sage panel. */
  readonly tone: "canvas" | "paper";
  readonly eager?: boolean;
}

const windowDots = ["bg-[#e8c0ac]", "bg-[#eadfc9]", "bg-[#cfdcc7]"] as const;

/** Browser-window mock that shows the top of a full-width screenshot. */
export function BrowserFrame({ image, alt, url, tone, eager = false }: BrowserFrameProps) {
  return (
    <div className={cn("lift rounded-frame p-12", tone === "canvas" ? "bg-canvas" : "bg-paper")}>
      <div aria-hidden className="flex items-center gap-7 px-6 pt-2 pb-10">
        {windowDots.map((dot) => (
          <span key={dot} className={cn("size-9 rounded-pill", dot)} />
        ))}
        <span className="ml-8 font-mono text-10.5 text-faint">{url}</span>
      </div>
      <div
        className={cn(
          "h-[clamp(220px,30vw,400px)] overflow-hidden rounded-node",
          tone === "canvas" ? "bg-paper" : "bg-canvas",
        )}
      >
        <Image
          src={image}
          alt={alt}
          sizes="(min-width: 1280px) 1088px, 90vw"
          loading={eager ? "eager" : "lazy"}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
