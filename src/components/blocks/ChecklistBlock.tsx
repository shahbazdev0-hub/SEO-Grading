import { Check } from "lucide-react";
import { RevealGroup, RevealItem } from "../ui/Reveal";

export function ChecklistBlock({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <RevealGroup
      className={`grid grid-cols-1 gap-x-8 gap-y-3.5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}
    >
      {items.map((item) => (
        <RevealItem key={item} className="group flex items-start gap-3">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-700 group-hover:text-white">
            <Check className="size-3.5" aria-hidden="true" strokeWidth={3} />
          </span>
          <span className="text-sm leading-relaxed text-ink-700">{item}</span>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
