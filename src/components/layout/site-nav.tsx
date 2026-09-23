"use client";

// Interaction: highlights the current page and links the language switch to the same page in
// the other locale. Both depend on the URL, and the layout rendering this nav persists across
// navigations, so it has to read the route on the client. Clicking the current page scrolls
// back to the top, as in the design.

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import type { MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { type Locale, locales, otherLocale, type PageKey, pageSegments } from "@/lib/i18n";
import { prefersReducedMotion } from "@/lib/motion";

export interface NavItem {
  readonly page: PageKey;
  readonly label: string;
  readonly href: string;
}

interface SiteNavProps {
  readonly locale: Locale;
  readonly label: string;
  readonly items: readonly NavItem[];
  readonly languageSwitch: { readonly label: string; readonly name: string };
}

const localePrefix = new RegExp(`^/(${locales.join("|")})(?=/|$)`);

function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function SiteNav({ locale, label, items, languageSwitch }: SiteNavProps) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const targetLocale = otherLocale(locale);
  const switchHref = pathname.replace(localePrefix, `/${targetLocale}`);

  return (
    <nav
      aria-label={label}
      className="pointer-events-auto max-w-full overflow-auto rounded-pill bg-paper/82 p-6 shadow-float inset-ring inset-ring-ink/7 backdrop-blur-[14px]"
    >
      <ul className="flex items-center gap-4">
        {items.map((item) => {
          const isCurrent = (segment ?? "") === pageSegments[item.page];
          return (
            <li key={item.page}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={isCurrent ? scrollToTop : undefined}
                className={cn(
                  "block rounded-pill px-[clamp(11px,1.2vw,17px)] py-9 font-display text-nav font-semibold whitespace-nowrap",
                  "[transition:background-color_.4s_var(--ease-spring),color_.3s]",
                  isCurrent ? "bg-ink text-paper" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li className="ml-2">
          <Link
            href={switchHref}
            hrefLang={targetLocale}
            lang={targetLocale}
            aria-label={languageSwitch.name}
            className="block rounded-pill bg-ink/6 px-13 py-9 font-mono text-11 tracking-mono-sm whitespace-nowrap text-subtle"
          >
            {languageSwitch.label}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
