import type { FeatureGroupContent } from "@/types/content";
import { Chip, ChipList } from "./chip";
import { DetailBlock } from "./detail-block";

/** Titled group of feature chips (KYZZ storefront and panel, Promédico services). */
export function FeatureGroup({ title, tone, items, footnote }: FeatureGroupContent) {
  return (
    <DetailBlock title={title} tone={tone}>
      <ChipList className="gap-7">
        {items.map((item) => (
          <Chip key={item} as="li" variant="feature" tone={tone === "ink" ? "on-ink" : "subtle"}>
            {item}
          </Chip>
        ))}
      </ChipList>
      {footnote && <p className="mt-12 text-14 leading-snug text-muted">{footnote}</p>}
    </DetailBlock>
  );
}
