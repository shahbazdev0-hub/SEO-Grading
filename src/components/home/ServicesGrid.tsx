import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { TiltCard } from "../ui/TiltCard";
import { services } from "@/lib/site";
import { serviceIcons } from "@/lib/serviceIcons";

export function ServicesGrid() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(37,99,235,0.06),transparent)]"
        aria-hidden="true"
      />
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Services"
          title="Full-Funnel SEO, Built Around Your Website"
          description="From editorial backlinks to technical fixes and agency fulfillment — every service is built on manual research, real relevance, and transparent reporting."
          align="center"
        />
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.key];
            return (
              <RevealItem key={service.href} className="[perspective:1200px]">
                <TiltCard maxTilt={5} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(37,99,235,0.12)"
                    className="h-full rounded-2xl border border-ink-200 bg-white transition-colors duration-300 hover:border-primary-200/80"
                  >
                    <Link href={service.href} className="group relative flex h-full flex-col p-7">
                      <span className="absolute top-7 right-7 font-mono text-xs font-medium text-ink-300 transition-colors group-hover:text-primary-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-3.5 pr-8">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="size-5.5" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-semibold text-ink-900">{service.title}</h3>
                      </div>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                        {service.shortDescription}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                        Learn more
                        <ArrowUpRight
                          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </SpotlightCard>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
