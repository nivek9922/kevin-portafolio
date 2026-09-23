import type { Locale } from "@/lib/i18n";
import { localePath, pageOrder } from "@/lib/i18n";
import type { SiteContent } from "@/types/content";
import { SiteNav } from "./site-nav";

interface SiteHeaderProps {
  readonly locale: Locale;
  readonly nav: SiteContent["nav"];
}

/** Sticky, centred glass pill with the main navigation. */
export function SiteHeader({ locale, nav }: SiteHeaderProps) {
  const items = pageOrder.map((page) => ({ page, label: nav.items[page], href: localePath(locale, page) }));

  return (
    <header className="pointer-events-none sticky top-0 z-40 flex justify-center px-14 py-[clamp(12px,1.8vw,22px)]">
      <SiteNav locale={locale} label={nav.label} items={items} languageSwitch={nav.languageSwitch} />
    </header>
  );
}
