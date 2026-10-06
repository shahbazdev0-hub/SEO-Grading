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
    <RevealGroup className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {packages.map((pkg) => (
        <RevealItem key={pkg.name} className="h-full">
          <div
            className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ease-out-soft hover:-translate-y-1 sm:p-8 ${
              pkg.featured
                ? "border-ink-950 bg-ink-950 shadow-[0_30px_60px_-30px_rgba(10,22,49,0.6)]"
                : "border-ink-200 bg-white hover:border-ink-300 hover:shadow-[0_24px_50px_-28px_rgba(10,22,49,0.35)]"
            }`}
          >
            {pkg.featured && (
              <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-primary-600 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Most Popular
              </span>
            )}
            <h3 className={`text-2xl font-extrabold ${pkg.featured ? "text-white" : "text-ink-950"}`}>{pkg.name}</h3>
            <p className={`mt-2 text-[15px] leading-relaxed ${pkg.featured ? "text-ink-300" : "text-ink-600"}`}>
              {pkg.description}
            </p>
            <ul
              className={`mt-6 flex flex-1 flex-col gap-3 border-t pt-6 ${pkg.featured ? "border-white/10" : "border-ink-200"}`}
            >
              {pkg.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                      pkg.featured ? "bg-primary-600 text-white" : "bg-primary-50 text-primary-600"
                    }`}
                  >
                    <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className={`text-[15px] ${pkg.featured ? "text-ink-200" : "text-ink-700"}`}>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/contact"
              variant={pkg.featured ? "primary" : "outline"}
              className="mt-8 w-full"
            >
              Get Started
            </Button>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
