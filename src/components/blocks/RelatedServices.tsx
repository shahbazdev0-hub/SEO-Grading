import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { services, ServiceKey } from "@/lib/site";
import { serviceIcons } from "@/lib/serviceIcons";

export function RelatedServices({ exclude }: { exclude: ServiceKey }) {
  const related = services.filter((s) => s.key !== exclude).slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Explore More" title="Related SEO Services" align="left" />
        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {related.map((service) => {
            const Icon = serviceIcons[service.key];
            return (
              <RevealItem key={service.href}>
                <SpotlightCard
                  spotlightColor="rgba(37,99,235,0.1)"
                  className="group h-full rounded-2xl border border-ink-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-200/80 hover:shadow-lg hover:shadow-primary-600/[0.08]"
                >
                  <Link href={service.href} className="flex h-full flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="size-4.5" aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-semibold text-ink-900">{service.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-600">
                        {service.shortDescription}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                      Learn more
                      <ArrowUpRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
