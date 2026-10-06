import { ReactNode } from "react";
import { Container } from "./Container";

export type SectionTone = "white" | "muted" | "navy";

const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",
  muted: "bg-mist border-y border-primary-100/60",
  navy: "bg-ink-950 text-white",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-16 sm:py-20 lg:py-24 ${toneClasses[tone]} ${className}`}
    >
      {tone === "navy" && (
        <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      )}
      <Container className={`relative flex flex-col gap-10 lg:gap-12 ${containerClassName}`}>
        {children}
      </Container>
    </section>
  );
}
