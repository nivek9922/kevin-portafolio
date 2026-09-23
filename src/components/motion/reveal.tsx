import type { HTMLAttributes } from "react";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  readonly as?: "div" | "section" | "ul";
}

/**
 * Marks a block for the scroll reveal driven by `ScrollReveal`. Keep hover transitions on a
 * child element: the reveal owns this element's `transition`.
 */
export function Reveal({ as: Element = "div", children, ...rest }: RevealProps) {
  return (
    <Element data-reveal="" {...rest}>
      {children}
    </Element>
  );
}
