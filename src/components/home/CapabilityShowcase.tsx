import Link from "next/link";
import { ArrowUpRight, Newspaper, Globe2, Layers, Wrench } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { MiniBarChart, MiniLineChart, MiniRadialProgress, MiniHealthBars } from "./MiniWidgets";

const capabilities = [
  {
    icon: Newspaper,
    eyebrow: "Guest Posting",
    title: "Reach real publishers, not link farms",
    description: "Manual outreach across 50+ niches secures placements on sites your audience already reads.",
    href: "/services/guest-posting",
    widget: <MiniBarChart label="Publisher Coverage by Niche" />,
  },
  {
    icon: Globe2,
    eyebrow: "Off-Page SEO",
    title: "Build a referring-domain profile that lasts",
    description: "Relevant, editorial link acquisition designed to compound authority over months, not days.",
    href: "/services/off-page-seo",
    widget: <MiniLineChart label="Referring Domains Trend" />,
  },
  {
    icon: Layers,
    eyebrow: "On-Page SEO",
    title: "Every page mapped to real search intent",
    description: "Titles, headings, internal links, and content structure optimized around what searchers actually want.",
    href: "/services/on-page-seo",
    widget: <MiniRadialProgress label="Page Optimization Score" icon={<Layers className="size-5" aria-hidden="true" />} />,
  },
  {
    icon: Wrench,
    eyebrow: "Technical SEO",
    title: "Remove the barriers search engines hit",
    description: "Crawl, indexation, and speed issues fixed so search engines can find and rank your best content.",
    href: "/services/technical-seo",
    widget: <MiniHealthBars label="Technical Health Checks" />,
  },
];

export function CapabilityShowcase() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Inside a Campaign"
        title="Real Work, Not Just Promises"
        highlight="Not Just Promises"
        description="Every service is backed by a visible process here's a glimpse of what we track and optimize behind the scenes."
      />
      <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {capabilities.map((cap) => (
          <RevealItem key={cap.href}>
            <Link
              href={cap.href}
              className="group grid h-full grid-cols-1 gap-6 rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_50px_-28px_rgba(31,79,224,0.45)] sm:grid-cols-[1fr_200px] sm:p-7"
            >
              <div className="flex flex-col">
                <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-600">
                  <cap.icon className="size-3.5" aria-hidden="true" />
                  {cap.eyebrow}
                </span>
                <h3 className="mt-3 text-xl leading-snug font-bold text-ink-950">{cap.title}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-600">{cap.description}</p>
                <span className="mt-5 flex size-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all duration-300 group-hover:border-primary-600 group-hover:bg-primary-600 group-hover:text-white">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
              <div className="self-center">{cap.widget}</div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
