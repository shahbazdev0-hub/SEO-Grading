import { LucideIcon } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ChecklistBlock } from "./ChecklistBlock";

export interface FeatureRow {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

export function FeatureRows({ rows }: { rows: FeatureRow[] }) {
  return (
    <div className="flex flex-col gap-5">
      {rows.map((row, index) => (
        <Reveal key={row.title} delay={index * 0.04}>
          <SpotlightCard
            spotlightColor="rgba(37,99,235,0.08)"
            className="group grid grid-cols-1 gap-6 rounded-2xl border border-ink-200 bg-white p-7 transition-all duration-300 hover:border-primary-200/70 hover:shadow-xl hover:shadow-primary-600/[0.06] sm:grid-cols-[auto_1fr] sm:p-8"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm shadow-primary-600/25 transition-transform duration-300 group-hover:scale-110">
              <row.icon className="size-5.5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink-900">{row.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{row.description}</p>
              {row.bullets && row.bullets.length > 0 && (
                <div className="mt-4">
                  <ChecklistBlock items={row.bullets} columns={row.bullets.length > 3 ? 2 : 1} />
                </div>
              )}
            </div>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}
