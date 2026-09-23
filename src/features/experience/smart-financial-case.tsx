import { Reveal } from "@/components/motion/reveal";
import { Chip, ChipList } from "@/components/ui/chip";
import { DetailBlock } from "@/components/ui/detail-block";
import { DiagramConnector, DiagramNode } from "@/components/ui/diagram-node";
import { Panel } from "@/components/ui/panel";
import { Tag } from "@/components/ui/tag";
import type { SmartFinancialContent } from "@/types/content";
import { NumberedList } from "./numbered-list";
import { RoleSummary } from "./role-summary";

interface SmartFinancialCaseProps {
  readonly content: SmartFinancialContent;
}

/** Main role: summary and facts beside architecture and diagnostics; decisions span the full width. */
export function SmartFinancialCase({ content }: SmartFinancialCaseProps) {
  const { facts, architecture, diagnostics, decisions } = content;
  const titleId = `${content.anchor}-title`;

  return (
    <Panel
      as="article"
      tone="paper"
      id={content.anchor}
      aria-labelledby={titleId}
      className="mt-intro scroll-mt-112"
    >
      <div className="auto-grid-280 items-start gap-split">
        <RoleSummary
          variant="primary"
          titleId={titleId}
          label={content.label}
          title={
            <>
              {content.title.lead}
              <br />
              <span className="text-accent">{content.title.accent}</span>
            </>
          }
          summary={content.summary}
          facts={[
            {
              label: facts.periodLabel,
              value: (
                <Tag variant="period" tone="neutral">
                  {facts.period}
                </Tag>
              ),
            },
            { label: facts.roleLabel, value: <span className="text-14.5 text-ink-strong">{facts.role}</span> },
            {
              label: facts.stackLabel,
              alignStart: true,
              value: (
                <ChipList className="gap-6">
                  {facts.stack.map((item) => (
                    <Chip key={item} as="li" variant="stack">
                      {item}
                    </Chip>
                  ))}
                </ChipList>
              ),
            },
          ]}
        />

        <div className="flex min-w-0 flex-col gap-[clamp(14px,1.8vw,20px)]">
          <Reveal>
            <DetailBlock title={architecture.title} tag={architecture.tag}>
              <DiagramNode size="md" {...architecture.host} />
              <DiagramConnector tone="accent" />
              <div className="auto-grid-120 gap-9">
                {architecture.remotes.map((remote, index) => (
                  <DiagramNode key={`${remote.title}-${index}`} size="sm" {...remote} />
                ))}
              </div>
              <DiagramConnector tone="accent" />
              <DiagramNode size="md" tone="ink" {...architecture.system} />
            </DetailBlock>
          </Reveal>

          <Reveal>
            <DetailBlock title={diagnostics.title} tag={diagnostics.tag} tagTone="sage">
              <ol className="flex flex-wrap items-center gap-8">
                {diagnostics.steps.map((step, index) => (
                  <DiagramNode
                    key={step.title}
                    as="li"
                    size="sm"
                    arrow={index > 0}
                    className={index === 0 ? "flex-[1_1_128px]" : "flex-[1_1_150px]"}
                    {...step}
                  />
                ))}
              </ol>
            </DetailBlock>
          </Reveal>
        </div>
      </div>

      {/* Full width so the two columns above stay balanced. */}
      <Reveal className="mt-[clamp(14px,1.8vw,20px)]">
        <DetailBlock title={decisions.title}>
          <NumberedList items={decisions.items} tone="paper" layout="columns" />
          <ChipList className="mt-14 gap-9">
            {decisions.practices.map((practice) => (
              <Chip key={practice.label} as="li" variant="practice" dot={practice.dot}>
                {practice.label}
              </Chip>
            ))}
          </ChipList>
        </DetailBlock>
      </Reveal>
    </Panel>
  );
}
