import { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import { withHighlight } from "./withHighlight";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  dark = false,
  highlight,
  action,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  dark?: boolean;
  /** Phrase inside `title` to highlight. Defaults to the closing words; `false` disables. */
  highlight?: string | false;
  /** Optional element (e.g. a link) shown opposite a left-aligned heading on large screens. */
  action?: ReactNode;
  className?: string;
}) {
  const Heading = as;
  const centered = align === "center";

  const block = (
    <div
      className={`flex max-w-3xl flex-col gap-4 ${centered ? "mx-auto items-center text-center" : ""}`}
    >
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <Heading
        className={`text-balance text-[2rem] font-extrabold leading-[1.12] sm:text-[2.5rem] lg:text-[2.85rem] ${
          dark ? "text-white" : "text-ink-950"
        }`}
      >
        {withHighlight(title, highlight)}
      </Heading>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-[17px] ${dark ? "text-ink-300" : "text-ink-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );

  return (
    <Reveal className={className}>
      {action && !centered ? (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {block}
          <div className="shrink-0">{action}</div>
        </div>
      ) : (
        block
      )}
    </Reveal>
  );
}
