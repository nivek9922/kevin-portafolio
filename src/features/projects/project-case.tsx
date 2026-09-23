import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Chip, ChipList } from "@/components/ui/chip";
import { Lines } from "@/components/ui/lines";
import { Panel } from "@/components/ui/panel";
import { PillLink } from "@/components/ui/pill-link";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import type { CitavekContent, KyzzContent } from "@/types/content";
import { BrowserFrame } from "./browser-frame";
import { ScreenshotCard } from "./screenshot-card";

type ProjectCaseTone = "paper" | "sage";

interface ProjectCaseProps {
  readonly project: CitavekContent | KyzzContent;
  readonly tone: ProjectCaseTone;
  /** Right column: what was built (Citavek) or feature groups (KYZZ). */
  readonly aside: ReactNode;
  /** Optional full-width block after the columns, used to keep them balanced. */
  readonly footer?: ReactNode;
  readonly eagerPreview?: boolean;
  readonly className?: string;
}

const tones = {
  paper: { label: "ink", summary: "text-muted", media: "canvas" },
  sage: { label: "paper", summary: "text-sage-ink-3", media: "paper" },
} as const satisfies Record<ProjectCaseTone, object>;

/** One own product: labels, summary with stack and links, an aside slot, preview and gallery. */
export function ProjectCase({ project, tone, aside, footer, eagerPreview = false, className }: ProjectCaseProps) {
  const styles = tones[tone];
  const titleId = `${project.anchor}-title`;

  return (
    <Panel
      as="article"
      tone={tone}
      id={project.anchor}
      aria-labelledby={titleId}
      className={cn("scroll-mt-112", className)}
    >
      <div className="flex flex-wrap items-center gap-10">
        <Tag variant="label" tone={styles.label}>
          {project.label}
        </Tag>
        <Tag variant="label" tone={project.status.tone === "live" ? "sage" : "accent"}>
          {project.status.label}
        </Tag>
      </div>

      {/* 340 (design: 290) stacks the columns on tablets, where the aside would leave a gap. */}
      <div className="mt-[clamp(16px,2vw,24px)] auto-grid-340 items-start gap-split">
        <div className="min-w-0">
          <h2 id={titleId} className="font-display text-title-lg">
            <Lines lines={project.titleLines} />
          </h2>
          <p className={cn("mt-14 max-w-[36ch] text-16 leading-body", styles.summary)}>{project.summary}</p>
          <ChipList className="mt-16 gap-7">
            {project.stack.map((chip) => (
              <Chip key={chip.label} as="li" variant="tech" tone={chip.tone}>
                {chip.label}
              </Chip>
            ))}
          </ChipList>
          <div className="mt-16 flex flex-wrap gap-9">
            {project.links.map((link) => (
              <PillLink key={link.href} href={link.href} variant={link.variant} external>
                {link.label}
              </PillLink>
            ))}
          </div>
        </div>
        <div className="min-w-0">{aside}</div>
      </div>

      {footer && <div className="mt-12">{footer}</div>}

      {project.preview && (
        <Reveal className="mt-frame">
          <BrowserFrame {...project.preview} tone={styles.media} eager={eagerPreview} />
        </Reveal>
      )}

      {project.gallery.length > 0 && (
        <Reveal as="ul" className="mt-12 auto-grid-230 gap-12">
          {project.gallery.map((shot) => (
            <ScreenshotCard key={shot.caption} {...shot} tone={styles.media} />
          ))}
        </Reveal>
      )}
    </Panel>
  );
}
