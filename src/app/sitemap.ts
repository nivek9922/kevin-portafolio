import type { MetadataRoute } from "next";
import { localePath, locales, pageOrder, type PageKey } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

function languageAlternates(page: PageKey): Record<string, string> {
  return Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(localePath(locale, page))]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pageOrder.flatMap((page) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, page)),
      alternates: { languages: languageAlternates(page) },
    })),
  );
}
