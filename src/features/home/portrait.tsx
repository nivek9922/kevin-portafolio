import Image from "next/image";
import { TiltFrame } from "@/components/motion/tilt-frame";
import { images } from "@/data/content/shared";

interface PortraitProps {
  readonly alt: string;
}

/** Arch-shaped portrait; the photo's white background melts into `sand` via multiply. */
export function Portrait({ alt }: PortraitProps) {
  return (
    <TiltFrame className="group relative aspect-3/4 w-full max-w-330 overflow-hidden rounded-[180px_180px_28px_28px] bg-sand shadow-portrait">
      <Image
        src={images.portrait}
        alt={alt}
        fill
        sizes="(max-width: 360px) 100vw, 330px"
        loading="eager"
        fetchPriority="high"
        className="object-cover object-[50%_30%] mix-blend-multiply contrast-[1.03] saturate-[.88] [transition:transform_1s_var(--ease-out-soft),filter_.6s_ease] group-hover:contrast-[1.04] group-hover:saturate-100 motion-safe:group-hover:scale-[1.03]"
      />
    </TiltFrame>
  );
}
