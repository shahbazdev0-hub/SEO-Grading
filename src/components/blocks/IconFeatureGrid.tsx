import { LucideIcon } from "lucide-react";
import { RevealGroup, RevealItem } from "../ui/Reveal";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Bordered feature grid — cells share hairline borders, numbered in the corner. */
export function IconFeatureGrid({
  items,
  columns = 3,
  dark = false,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
}) {
  const colClasses =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const border = dark ? "border-white/12" : "border-ink-200";

  return (
    <RevealGroup
      className={`grid grid-cols-1 overflow-hidden rounded-xl border-t border-l ${border} ${colClasses} ${dark ? "" : "bg-white"}`}
    >
      {items.map((item, index) => (
        <RevealItem
          key={item.title}
          className={`group relative border-r border-b p-6 transition-colors duration-300 sm:p-7 ${border} ${
            dark ? "hover:bg-white/[0.04]" : "hover:bg-mist"
          }`}
        >
          <div className="flex items-start justify-between">
            <span
              className={`flex size-11 items-center justify-center rounded-lg transition-all duration-300 ease-out-soft group-hover:-translate-y-0.5 ${
                dark
                  ? "bg-white/[0.06] text-primary-300 group-hover:bg-primary-600 group-hover:text-white"
                  : "bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white"
              }`}
            >
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <span className={`font-mono text-xs ${dark ? "text-primary-300" : "text-primary-600"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className={`mt-5 text-lg font-bold ${dark ? "text-white" : "text-ink-950"}`}>{item.title}</h3>
          <p className={`mt-2 text-[15px] leading-relaxed ${dark ? "text-ink-300" : "text-ink-600"}`}>
            {item.description}
          </p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
