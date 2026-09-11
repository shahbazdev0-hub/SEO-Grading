import { ReactNode } from "react";
import { Container } from "./Container";

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
  tone?: "white" | "muted";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${tone === "muted" ? "bg-ink-50" : "bg-white"} ${className}`}
    >
      <Container className={`flex flex-col gap-10 ${containerClassName}`}>{children}</Container>
    </section>
  );
}
