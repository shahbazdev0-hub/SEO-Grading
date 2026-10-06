import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import { services, ServiceKey } from "@/lib/site";

export function RelatedServices({ exclude }: { exclude: ServiceKey }) {
  const related = services.filter((s) => s.key !== exclude).slice(0, 3);

  return (
    <section className="border-t border-ink-200 bg-white pt-16 sm:pt-20 lg:pt-24">
      <Container>
        <SectionHeading eyebrow="Explore More" title="Related SEO Services" highlight="SEO Services" />
        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <RevealItem key={service.href}>
              <ServiceCard service={service} index={services.indexOf(service)} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
