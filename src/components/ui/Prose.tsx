import { Children, ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Intro copy block that spans the full container width.
 * 2+ paragraphs: the first becomes a large lead statement on the left, the rest sit in a card on the right.
 * 1 paragraph: rendered as a full-width accent card.
 */
export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  const paragraphs = Children.toArray(children);
  const bodyText = "flex flex-col gap-5 text-base leading-[1.8] text-ink-600 sm:text-[17px] [&_strong]:text-ink-900";

  if (paragraphs.length < 2) {
    return (
      <Reveal className={className}>
        <div
          className={`relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 sm:p-10 ${bodyText} sm:text-lg`}
        >
          <span className="absolute inset-y-0 left-0 w-1 bg-primary-600" aria-hidden="true" />
          {children}
        </div>
      </Reveal>
    );
  }

  const [lead, ...rest] = paragraphs;

  return (
    <div
      className={`grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-14 ${className}`}
    >
      <Reveal>
        <div>
          <span className="block h-1 w-14 bg-primary-600" aria-hidden="true" />
          <div className="mt-6 font-display text-[1.35rem] leading-[1.5] font-semibold text-ink-950 sm:text-[1.55rem] lg:text-[1.65rem] [&_strong]:text-primary-700">
            {lead}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className={`rounded-2xl border border-primary-100 border-t-4 border-t-primary-600 bg-mist p-7 sm:p-9 ${bodyText}`}>
          {rest}
        </div>
      </Reveal>
    </div>
  );
}
