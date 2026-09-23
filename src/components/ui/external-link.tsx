import { lang } from "next/root-params";
import type { ReactNode } from "react";
import { getContent } from "@/data/content";
import { defaultLocale, hasLocale } from "@/lib/i18n";

interface ExternalLinkProps {
  readonly href: string;
  readonly className?: string;
  readonly children: ReactNode;
}

/** Opens in a new tab and says so to assistive tech in the page's language. */
export async function ExternalLink({ href, className, children }: ExternalLinkProps) {
  const locale = await lang();
  const { a11y } = getContent(hasLocale(locale) ? locale : defaultLocale);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> {a11y.newTab}</span>
    </a>
  );
}
