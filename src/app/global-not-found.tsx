import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { PillLink } from "@/components/ui/pill-link";
import { getContent } from "@/data/content";
import { fontVariables } from "@/lib/fonts";
import { defaultLocale, localePath } from "@/lib/i18n";
import "@/styles/globals.css";

// Not part of the design: unmatched URLs bypass the `[lang]` layout, so this page renders the
// whole document with the same tokens. It has no route params, so it uses the default locale.
const { notFound } = getContent(defaultLocale);

export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale} className={fontVariables}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <div className="min-h-screen bg-ambient">
          <main className="mx-auto max-w-1280 px-gutter pt-[clamp(80px,12vw,160px)] pb-[clamp(80px,9vw,140px)]">
            <PageIntro eyebrow={notFound.eyebrow} dot="accent" title={notFound.title} size="display-lg" />
            <p className="mt-16 max-w-[40ch] text-16 leading-relaxed text-muted">{notFound.body}</p>
            <div className="mt-24">
              <PillLink href={localePath(defaultLocale, "home")} variant="cta">
                {notFound.cta}
              </PillLink>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
