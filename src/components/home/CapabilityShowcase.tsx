import Link from "next/link";
import { Plus, Newspaper, Globe2, Layers, Wrench } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Carousel, CarouselItem } from "../ui/Carousel";
import { MiniBarChart, MiniLineChart, MiniRadialProgress, MiniHealthBars } from "./MiniWidgets";

const capabilities = [
  {
    eyebrow: "Guest Posting",
    title: "Reach real publishers, not link farms",
    description: "Manual outreach across 50+ niches secures placements on sites your audience already reads.",
    href: "/services/guest-posting",
    widget: <MiniBarChart label="Publisher Coverage by Niche" />,
  },
  {
    eyebrow: "Off-Page SEO",
    title: "Build a referring-domain profile that lasts",
    description: "Relevant, editorial link acquisition designed to compound authority over months, not days.",
    href: "/services/off-page-seo",
    widget: <MiniLineChart label="Referring Domains Trend" />,
  },
  {
    eyebrow: "On-Page SEO",
    title: "Every page mapped to real search intent",
    description: "Titles, headings, internal links, and content structure optimized around what searchers actually want.",
    href: "/services/on-page-seo",
    widget: <MiniRadialProgress label="Page Optimization Score" icon={<Layers className="size-5" aria-hidden="true" />} />,
  },
  {
    eyebrow: "Technical SEO",
    title: "Remove the barriers search engines hit",
    description: "Crawl, indexation, and speed issues fixed so search engines can find and rank your best content.",
    href: "/services/technical-seo",
    widget: <MiniHealthBars label="Technical Health Checks" />,
  },
];

const icons = [Newspaper, Globe2, Layers, Wrench];

export function CapabilityShowcase() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Inside a Campaign"
          title="Real Work, Not Just Promises"
          description="Every service is backed by a visible process — here's a glimpse of what we track and optimize behind the scenes."
        />

        <div className="mt-10">
          <Carousel>
            {capabilities.map((cap, i) => {
              const Icon = icons[i];
              return (
                <CarouselItem key={cap.href}>
                  <Link
                    href={cap.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200/80 hover:shadow-xl hover:shadow-primary-600/[0.08]"
                  >
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 size-32 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, currentColor 0, currentColor 2px, transparent 2px, transparent 10px)",
                        color: "var(--color-primary-600)",
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600">
                        <Icon className="size-3.5" aria-hidden="true" />
                        {cap.eyebrow}
                      </div>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-primary-300 group-hover:text-primary-600">
                        <Plus className="size-4" aria-hidden="true" />
                      </span>
                    </div>

                    <h3 className="relative mt-4 text-xl font-bold tracking-tight text-ink-900">
                      {cap.title}
                    </h3>
                    <p className="relative mt-2.5 text-sm leading-relaxed text-ink-600">
                      {cap.description}
                    </p>

                    <div className="relative mt-5">{cap.widget}</div>
                  </Link>
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
