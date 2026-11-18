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
import type { FeatureProjectContent } from "@/types/content";

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">): Promise<Metadata> {
  return buildPageMetadata(await resolveLocale(params), "projects");
}

/** Sage case whose last feature group spans the full width, so both columns end at a similar height. */
function FeatureProjectCase({ project }: { readonly project: FeatureProjectContent }) {
  const asideGroups = project.featureGroups.slice(0, -1);
  const footerGroup = project.featureGroups.at(-1);

  return (
    <ProjectCase
      project={project}
      tone="sage"
      aside={
        <div className="flex flex-col gap-12">
          {asideGroups.map((group) => (
            <FeatureGroup key={group.title} {...group} />
          ))}
        </div>
      }
      footer={footerGroup && <FeatureGroup {...footerGroup} />}
    />
  );
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projects">) {
  const locale = await resolveLocale(params);
  const { projects } = getContent(locale);
  const { citavek, demachos, stockvek, kyzz } = projects;

  // Cases alternate paper (build list) and sage (feature groups) panels.
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
        <FeatureProjectCase project={demachos} />
      </Reveal>
      <Reveal className="mt-stack">
        <ProjectCase project={stockvek} tone="paper" aside={<BuildList built={stockvek.built} />} />
      </Reveal>
      <Reveal className="mt-stack">
        <FeatureProjectCase project={kyzz} />
      </Reveal>
      <NextStepLink href={localePath(locale, "contact")} label={projects.nextStep} />
    </div>
  );
}
