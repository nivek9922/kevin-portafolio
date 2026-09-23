import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { getContent } from "@/data/content";
import { CapabilityGrid } from "@/features/home/capability-grid";
import { HeroIntro } from "@/features/home/hero-intro";
import { PersonJsonLd } from "@/features/home/person-json-ld";
import { PrinciplesBand } from "@/features/home/principles-band";
import { resolveLocale } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  return buildPageMetadata(await resolveLocale(params), "home");
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const locale = await resolveLocale(params);
  const { home, meta, resume } = getContent(locale);

  return (
    <div className="animate-view-up">
      <PageIntro
        eyebrow={home.eyebrow}
        dot="sage"
        title={home.greeting.text}
        accent={home.greeting.accent}
        size="display-xl"
      />
      <HeroIntro locale={locale} content={home} resume={resume} />
      <CapabilityGrid capabilities={home.capabilities} />
      <PrinciplesBand principles={home.principles} />
      <PersonJsonLd locale={locale} jobTitle={meta.jobTitle} description={meta.pages.home.description} />
    </div>
  );
}
