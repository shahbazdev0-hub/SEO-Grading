import { LucideIcon } from "lucide-react";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";

export interface AudienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AudienceGrid({ items }: { items: AudienceItem[] }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <RevealItem key={item.title}>
          <SpotlightCard
            spotlightColor="rgba(37,99,235,0.1)"
            className="group h-full rounded-2xl bg-ink-50 p-6 transition-colors duration-300 hover:bg-primary-50/70"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <item.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
          </SpotlightCard>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
