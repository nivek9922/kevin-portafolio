import type { Metadata } from "next";
import { NextStepLink } from "@/components/layout/next-step-link";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { FeatureGroup } from "@/components/ui/feature-group";
import { getContent } from "@/data/content";
import { BuildList } from "@/features/projects/build-list";
import { ProjectCase } from "@/features/projects/project-case";
import { localePath } from "@/lib/i18n";
import { resolveLocale } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">): Promise<Metadata> {
  return buildPageMetadata(await resolveLocale(params), "projects");
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projects">) {
  const locale = await resolveLocale(params);
  const { projects } = getContent(locale);
  const { citavek, kyzz } = projects;

  return (
    <div className="animate-view-up">
      <PageIntro eyebrow={projects.intro.eyebrow} dot="accent" title={projects.intro.title} size="display-lg" />
      <ProjectCase
        project={citavek}
        tone="paper"
        className="mt-intro"
        eagerPreview
        aside={<BuildList built={citavek.built} />}
      />
      <Reveal className="mt-stack">
        <ProjectCase
          project={kyzz}
          tone="sage"
          aside={
            <div className="flex flex-col gap-12">
              {kyzz.featureGroups.map((group) => (
                <FeatureGroup key={group.title} {...group} />
              ))}
            </div>
          }
        />
      </Reveal>
      <NextStepLink href={localePath(locale, "contact")} label={projects.nextStep} />
    </div>
  );
}
