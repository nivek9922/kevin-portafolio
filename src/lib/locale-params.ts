import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./i18n";

/** Awaits the `[lang]` route param and 404s on an unsupported locale. */
export async function resolveLocale(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return lang;
}
