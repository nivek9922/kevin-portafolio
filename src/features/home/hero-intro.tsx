import { Reveal } from "@/components/motion/reveal";
import { Chip, ChipList } from "@/components/ui/chip";
import { Tag } from "@/components/ui/tag";
import { type Locale, localePath } from "@/lib/i18n";
import type { HomeContent } from "@/types/content";
import { Portrait } from "./portrait";
import { ProjectShortcut } from "./project-shortcut";

interface HeroIntroProps {
  readonly locale: Locale;
  readonly content: HomeContent;
}

/**
 * Portrait + core stack beside the summary and availability, then the project shortcuts in a
 * full-width row so neither column leaves an empty gap.
 */
export function HeroIntro({ locale, content }: HeroIntroProps) {
  return (
    <div className="mt-[clamp(26px,3.6vw,50px)]">
      <div className="auto-grid-300 items-center gap-[clamp(22px,3.4vw,52px)]">
        <Reveal className="flex min-w-0 flex-col gap-14">
          <Portrait alt={content.portraitAlt} />
          <ChipList className="gap-8">
            {content.coreStack.map((chip) => (
              <Chip key={chip.label} as="li" variant="tech" tone={chip.tone}>
                {chip.label}
              </Chip>
            ))}
          </ChipList>
        </Reveal>

        <Reveal className="min-w-0">
          <p className="max-w-[32ch] text-lead text-pretty text-ink-lead">{content.lead}</p>
          <p className="mt-16 max-w-[40ch] text-16 leading-relaxed text-muted">{content.summary}</p>
          <ul className="mt-18 flex flex-wrap gap-8">
            {content.availability.map((tag) => (
              <Tag key={tag.label} as="li" variant="meta" tone={tag.tone}>
                {tag.label}
              </Tag>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal as="ul" className="mt-[clamp(22px,2.6vw,32px)] auto-grid-220 gap-10">
        {content.shortcuts.map((shortcut) => (
          <li key={shortcut.title}>
            <ProjectShortcut
              title={shortcut.title}
              subtitle={shortcut.subtitle}
              tone={shortcut.tone}
              href={localePath(locale, shortcut.page, shortcut.anchor)}
            />
          </li>
        ))}
      </Reveal>
    </div>
  );
}
