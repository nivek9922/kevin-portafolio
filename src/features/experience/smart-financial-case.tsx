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

/** Main role: summary and facts beside architecture and security; diagnostics and decisions span the full width. */
export function SmartFinancialCase({ content }: SmartFinancialCaseProps) {
  const { facts, architecture, diagnostics, security, decisions } = content;
  const titleId = `${content.anchor}-title`;

  return (
    <Panel
      as="article"
      tone="paper"
      id={content.anchor}
      aria-labelledby={titleId}
      className="mt-intro scroll-mt-112"
    >
      {/* 340 (design: 280) stacks the columns on tablets, where the right column would run long. */}
      <div className="auto-grid-340 items-start gap-split">
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
            {
              label: facts.clientLabel,
              value: <span className="text-14.5 font-bold text-ink-strong">{facts.client}</span>,
            },
            { label: facts.roleLabel, value: <span className="text-14.5 text-ink-strong">{facts.role}</span> },
            { label: facts.productsLabel, value: <span className="text-14.5 text-ink-strong">{facts.products}</span> },
            {
              label: facts.scaleLabel,
              value: (
                <Tag variant="period" tone="neutral">
                  {facts.scale}
                </Tag>
              ),
            },
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

          {/* Notes stay open: this is key content for the case. */}
          <Reveal>
            <DetailBlock title={security.title} tag={security.tag}>
              <ul className="auto-grid-160 gap-9">
                {security.items.map((item) => (
                  <DiagramNode key={item.title} as="li" size="sm" expanded {...item} />
                ))}
              </ul>
            </DetailBlock>
          </Reveal>
        </div>
      </div>

      {/* Diagnostics and decisions span the full width so the two columns above stay balanced. */}
      <Reveal className="mt-[clamp(14px,1.8vw,20px)]">
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
