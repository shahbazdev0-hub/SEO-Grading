import { LucideIcon } from "lucide-react";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function IconFeatureGrid({
  items,
  columns = 3,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}) {
  const colClasses =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <RevealGroup className={`grid grid-cols-1 gap-5 ${colClasses}`}>
      {items.map((item) => (
        <RevealItem key={item.title}>
          <SpotlightCard
            spotlightColor="rgba(37,99,235,0.1)"
            className="group h-full rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200/80 hover:shadow-xl hover:shadow-primary-600/[0.08]"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary-600/30">
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
