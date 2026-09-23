export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

/** Route segment of each page under `/[lang]`; `home` is the locale root. */
export const pageSegments = {
  home: "",
  experience: "experience",
  projects: "projects",
  contact: "contact",
} as const;

export type PageKey = keyof typeof pageSegments;

export const pageOrder: readonly PageKey[] = ["home", "experience", "projects", "contact"];

export function localePath(locale: Locale, page: PageKey, hash?: string): string {
  const segment = pageSegments[page];
  const path = segment ? `/${locale}/${segment}` : `/${locale}`;
  return hash ? `${path}#${hash}` : path;
}
