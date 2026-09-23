import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Screenshot } from "@/types/content";

interface ScreenshotCardProps extends Screenshot {
  readonly tone: "canvas" | "paper";
}

/** Gallery thumbnail cropped to the top of the capture, with a caption. */
export function ScreenshotCard({ image, alt, caption, tone }: ScreenshotCardProps) {
  return (
    <li className={cn("lift rounded-tile p-10", tone === "canvas" ? "bg-canvas" : "bg-paper")}>
      <figure>
        <div
          className={cn(
            "h-[clamp(180px,20vw,240px)] overflow-hidden rounded-node-sm",
            tone === "canvas" ? "bg-paper" : "bg-canvas",
          )}
        >
          <Image
            src={image}
            alt={alt}
            sizes="(min-width: 1280px) 360px, (min-width: 560px) 45vw, 90vw"
            className="block size-full object-cover object-top"
          />
        </div>
        <figcaption className="px-8 pt-10 pb-4 font-display text-14 font-semibold">{caption}</figcaption>
      </figure>
    </li>
  );
}
