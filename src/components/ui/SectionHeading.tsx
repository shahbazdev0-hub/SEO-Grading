import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Heading = as;
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses} ${className}`}>
        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary-600" />
            </span>
            {eyebrow}
          </span>
        )}
        <Heading className="text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          {title}
        </Heading>
        {description && (
          <p className="text-balance text-lg leading-relaxed text-ink-600">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
