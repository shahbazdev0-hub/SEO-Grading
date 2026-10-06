import { Check } from "lucide-react";
import { RevealGroup, RevealItem } from "../ui/Reveal";

export function ChecklistBlock({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  if (columns === 1) {
    return (
      <RevealGroup className="flex w-full flex-col divide-y divide-ink-200 overflow-hidden rounded-xl border border-ink-200 bg-white">
        {items.map((item) => (
          <RevealItem key={item} className="group flex items-start gap-3.5 px-5 py-4 transition-colors hover:bg-mist">
            <CheckMark />
            <span className="text-[15px] leading-relaxed text-ink-800">{item}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    );
  }

  return (
    <RevealGroup className="grid grid-cols-1 overflow-hidden rounded-xl border-t border-l border-ink-200 bg-white sm:grid-cols-2">
      {items.map((item) => (
        <RevealItem
          key={item}
          className="group flex items-start gap-3.5 border-r border-b border-ink-200 px-5 py-4.5 transition-colors hover:bg-mist sm:px-6"
        >
          <CheckMark />
          <span className="text-[15px] leading-relaxed text-ink-800">{item}</span>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function CheckMark() {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors duration-200 group-hover:bg-primary-600 group-hover:text-white">
      <Check className="size-3" aria-hidden="true" strokeWidth={3} />
    </span>
  );
}
