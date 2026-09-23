import { DiagramNode } from "@/components/ui/diagram-node";
import type { CitavekContent } from "@/types/content";

interface BuildListProps {
  readonly built: CitavekContent["built"];
}

/** «Qué construí»: expandable steps; the emphasised one is rendered on ink. */
export function BuildList({ built }: BuildListProps) {
  return (
    <div className="rounded-card bg-sunk p-card">
      <h3 className="mb-12 font-display text-15 font-bold">{built.title}</h3>
      <ul className="flex flex-col gap-9">
        {built.items.map((item) => (
          <DiagramNode
            key={item.title}
            as="li"
            size="list"
            tone={item.emphasis ? "ink" : "paper"}
            title={item.title}
            note={item.note}
          />
        ))}
      </ul>
    </div>
  );
}
