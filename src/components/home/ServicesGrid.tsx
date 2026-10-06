import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ServiceCard } from "../blocks/ServiceCard";
import { services } from "@/lib/site";

export function ServicesGrid() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Our Services"
        title="Full-Funnel SEO, Built Around Your Website"
        highlight="Full-Funnel SEO,"
        description="From editorial backlinks to technical fixes and agency fulfillment every service is built on manual research, real relevance, and transparent reporting."
      />
      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <RevealItem key={service.href}>
            <ServiceCard service={service} index={index} dark={index === 0 || index === 4} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}