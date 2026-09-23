import { Fragment } from "react";

interface LinesProps {
  readonly lines: readonly string[];
}

/** Renders the design's manual line breaks in titles («SaaS de gestión / de citas»). */
export function Lines({ lines }: LinesProps) {
  return lines.map((line, index) => (
    <Fragment key={line}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
