import { Reveal } from "@/components/motion/reveal";
import { PillLink } from "@/components/ui/pill-link";

interface NextStepLinkProps {
  readonly href: string;
  readonly label: string;
}

/** Dark call to action closing a page and pointing to the next one. */
export function NextStepLink({ href, label }: NextStepLinkProps) {
  return (
    <Reveal className="mt-[clamp(22px,3vw,36px)] flex justify-end">
      <PillLink href={href} variant="cta">
        {label}
      </PillLink>
    </Reveal>
  );
}
