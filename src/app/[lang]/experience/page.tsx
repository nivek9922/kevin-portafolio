import type { Metadata } from "next";
import { NextStepLink } from "@/components/layout/next-step-link";
import { PageIntro } from "@/components/layout/page-intro";
import { getContent } from "@/data/content";
import { CredentialsGrid } from "@/features/experience/credentials-grid";
import { PromedicoCase } from "@/features/experience/promedico-case";
import { SmartFinancialCase } from "@/features/experience/smart-financial-case";
import { localePath } from "@/lib/i18n";
import { resolveLocale } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/experience">): Promise<Metadata> {
  return buildPageMetadata(await resolveLocale(params), "experience");
}

export default async function ExperiencePage({ params }: PageProps<"/[lang]/experience">) {
  const locale = await resolveLocale(params);
  const { experience } = getContent(locale);

  return (
    <div className="animate-view-up">
      <PageIntro eyebrow={experience.intro.eyebrow} dot="accent" title={experience.intro.title} size="display-lg" />
      <SmartFinancialCase content={experience.smartFinancial} />
      <PromedicoCase content={experience.promedico} />
      <CredentialsGrid education={experience.education} certifications={experience.certifications} />
      <NextStepLink href={localePath(locale, "projects")} label={experience.nextStep} />
    </div>
  );
}
