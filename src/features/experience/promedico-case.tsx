import { Reveal } from "@/components/motion/reveal";
import { Chip, ChipList } from "@/components/ui/chip";
import { DetailBlock } from "@/components/ui/detail-block";
import { DiagramConnector, DiagramNode } from "@/components/ui/diagram-node";
import { FeatureGroup } from "@/components/ui/feature-group";
import { Lines } from "@/components/ui/lines";
import { Panel } from "@/components/ui/panel";
import { Tag } from "@/components/ui/tag";
import type { PromedicoContent } from "@/types/content";
import { NumberedList } from "./numbered-list";
import { RoleSummary } from "./role-summary";

interface PromedicoCaseProps {
  readonly content: PromedicoContent;
}

/**
 * Second role on the sage panel: summary, facts and highlights; on the right, the
 * web/mobile → API → SAP stack, where each app was deployed and the fund's services.
 */
export function PromedicoCase({ content }: PromedicoCaseProps) {
  const { facts, stack, deployment, services } = content;
  const titleId = `${content.anchor}-title`;

  return (
    <Reveal className="mt-stack">
      <Panel
        as="article"
        tone="sage"
        id={content.anchor}
        aria-labelledby={titleId}
        className="auto-grid-280 scroll-mt-112 items-start gap-split"
      >
        <RoleSummary
          variant="secondary"
          titleId={titleId}
          label={content.label}
          title={<Lines lines={content.titleLines} />}
          summary={content.summary}
          facts={[
            {
              label: facts.periodLabel,
              value: (
                <Tag variant="period" tone="paper">
                  {facts.period}
                </Tag>
              ),
            },
            { label: facts.roleLabel, value: <span className="text-14.5 text-sage-ink-5">{facts.role}</span> },
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
        >
          <NumberedList items={content.highlights} tone="sage" className="mt-14" />
        </RoleSummary>

        <div className="flex min-w-0 flex-col gap-[clamp(14px,1.8vw,20px)]">
          <div className="flex flex-col gap-9">
            <div className="flex gap-9">
              {stack.clients.map((client) => (
                <DiagramNode key={client.title} size="stack" metaPlacement="below" className="flex-1" {...client} />
              ))}
            </div>
            <DiagramConnector tone="sage" />
            <DiagramNode size="stack" {...stack.api} />
            <DiagramConnector tone="sage" />
            <DiagramNode size="stack" {...stack.backend} />
            <DiagramConnector tone="sage" />
            <div className="flex gap-9">
              {stack.integrations.map((integration) => (
                <DiagramNode
                  key={integration.title}
                  size="stack"
                  tone="ink"
                  metaPlacement="below"
                  interactive={false}
                  className="flex-1"
                  {...integration}
                />
              ))}
            </div>
          </div>

          <DetailBlock title={deployment.title} tone="paper">
            <ul className="auto-grid-160 gap-9">
              {deployment.targets.map((target) => (
                <DiagramNode key={target.title} as="li" size="sm" {...target} />
              ))}
            </ul>
          </DetailBlock>

          <FeatureGroup {...services} />
        </div>
      </Panel>
    </Reveal>
  );
}
