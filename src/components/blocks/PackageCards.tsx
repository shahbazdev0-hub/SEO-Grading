import { Check } from "lucide-react";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { Button } from "../ui/Button";

export interface PackageItem {
  name: string;
  description: string;
  items: string[];
  featured?: boolean;
}

export function PackageCards({ packages }: { packages: PackageItem[] }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {packages.map((pkg) => (
        <RevealItem key={pkg.name} className="h-full">
          <div className={pkg.featured ? "relative h-full rounded-2xl bg-gradient-to-b from-primary-500 via-accent-500 to-violet-500 p-[1.5px] shadow-xl shadow-primary-600/25" : "h-full"}>
            {pkg.featured && (
              <div
                className="animate-spin-slow absolute -inset-2 -z-10 rounded-full bg-[conic-gradient(from_0deg,rgba(59,130,246,0.35),rgba(139,92,246,0.35),rgba(14,165,233,0.35),rgba(59,130,246,0.35))] opacity-50 blur-2xl sm:-inset-8"
                aria-hidden="true"
              />
            )}
            <div
              className={`flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                pkg.featured
                  ? "bg-ink-900"
                  : "border border-ink-200 bg-white hover:border-primary-200/80 hover:shadow-lg hover:shadow-primary-600/[0.08]"
              }`}
            >
              {pkg.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow-sm shadow-primary-600/40">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold ${pkg.featured ? "text-white" : "text-ink-900"}`}>
                {pkg.name}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${pkg.featured ? "text-ink-300" : "text-ink-600"}`}>
                {pkg.description}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${pkg.featured ? "text-primary-400" : "text-primary-600"}`}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className={`text-sm ${pkg.featured ? "text-ink-200" : "text-ink-700"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={pkg.featured ? "primary" : "secondary"}
                magnetic={pkg.featured}
                className="mt-7 w-full justify-center"
              >
                Get Started
              </Button>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
