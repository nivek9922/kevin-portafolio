import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/types/content";
import { en } from "./en";
import { es } from "./es";

const content: Readonly<Record<Locale, SiteContent>> = { es, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
