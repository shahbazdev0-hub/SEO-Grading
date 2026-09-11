import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal>
      <div
        className={`flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-ink-600 [&_strong]:text-ink-900 ${className}`}
      >
        {children}
      </div>
    </Reveal>
  );
}
