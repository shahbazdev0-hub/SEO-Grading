import { Layers, Globe2, CalendarClock, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const stats = [
  { icon: Layers, value: 6, suffix: "", label: "Core SEO Services" },
  { icon: Globe2, value: 50, suffix: "+", label: "Niches Covered" },
  { icon: CalendarClock, value: 2, suffix: "-4 wk", label: "Typical Campaign Turnaround" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "White-Hat, Manual Outreach" },
];

export function StatsBand() {
  return (
    <div className="relative border-y border-ink-200 bg-ink-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <Container>
        <RevealGroup className="relative grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="flex flex-col items-center gap-2.5 px-4 py-10 text-center sm:py-12">
                <stat.icon className="size-5 text-primary-400" aria-hidden="true" />
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                  {stat.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </div>
  );
}
