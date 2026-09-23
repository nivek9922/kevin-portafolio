import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { getContent } from "@/data/content";
import { fontVariables } from "@/lib/fonts";
import { locales } from "@/lib/i18n";
import { resolveLocale } from "@/lib/locale-params";
import { siteName, siteUrl } from "@/lib/site";
import "@/styles/globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: { template: `%s · ${siteName}`, default: meta.pages.home.title },
    description: meta.pages.home.description,
    applicationName: siteName,
    authors: [{ name: siteName }],
    creator: siteName,
  };
}

export const viewport: Viewport = {
  themeColor: "#f7f2e9",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);

  return (
    <html lang={locale} className={fontVariables}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-12 focus:z-50 focus:rounded-pill focus:bg-ink focus:px-16 focus:py-10 focus:font-display focus:font-semibold focus:text-paper"
        >
          {content.a11y.skipToContent}
        </a>
        <div className="min-h-screen bg-ambient">
          <SiteHeader locale={locale} nav={content.nav} />
          <main
            id="main"
            tabIndex={-1}
            className="mx-auto max-w-1280 px-gutter pt-[clamp(18px,3vw,44px)] pb-[clamp(80px,9vw,140px)] focus:outline-none"
          >
            {children}
          </main>
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
