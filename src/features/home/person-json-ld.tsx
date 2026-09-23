import { person } from "@/data/content/shared";
import { type Locale, localePath } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

interface PersonJsonLdProps {
  readonly locale: Locale;
  readonly jobTitle: string;
  readonly description: string;
}

/** schema.org Person for search engines. */
export function PersonJsonLd({ locale, jobTitle, description }: PersonJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle,
    description,
    url: new URL(localePath(locale, "home"), siteUrl).toString(),
    email: `mailto:${person.email}`,
    address: { "@type": "PostalAddress", addressLocality: person.locality, addressCountry: person.country },
    sameAs: [person.linkedin, person.github.url],
  };

  return (
    <script
      type="application/ld+json"
      // Serialised from static data; `<` is escaped so the payload cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
