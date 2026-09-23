"use client";

// Interaction: tilts the frame in 3D following the mouse (the design's tiltMove/tiltOut).
// Needs pointer coordinates, so it cannot be done in CSS alone.

import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/lib/motion";

const MAX_TILT_DEG = 4;

interface TiltFrameProps {
  readonly className?: string;
  readonly children: ReactNode;
}

export function TiltFrame({ className, children }: TiltFrameProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || prefersReducedMotion()) return;

    const frame = event.currentTarget;
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    frame.style.transform = `perspective(1000px) rotateY(${(x * MAX_TILT_DEG).toFixed(2)}deg) rotateX(${(-y * MAX_TILT_DEG).toFixed(2)}deg) translateY(-4px)`;
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.transform = "";
  }

  return (
    <div
      className={cn("[transition:transform_.6s_var(--ease-spring-soft)]", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
