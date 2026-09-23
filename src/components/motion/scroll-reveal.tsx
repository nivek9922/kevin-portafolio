"use client";

// Interaction: fades in `[data-reveal]` blocks that start below the fold as they scroll into
// view (the design's reveal/checkReveal). Needs the viewport and IntersectionObserver, and must
// re-run after each client navigation because the layout that renders it persists.

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const HIDE_BELOW = 0.92;
const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6;

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let observer: IntersectionObserver | undefined;
    // Measure after Next.js has restored or reset the scroll position for the new page.
    const frame = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            (entry.target as HTMLElement).dataset.revealState = "shown";
            observer?.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -10% 0px" },
      );

      const blocks = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const foldLine = window.innerHeight * HIDE_BELOW;

      blocks.forEach((block, index) => {
        block.style.transitionDelay = `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`;
        if (block.getBoundingClientRect().top > foldLine) {
          block.dataset.revealState = "hidden";
          observer?.observe(block);
        }
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
