import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { FAQAccordion, FAQItem } from "./FAQAccordion";
import { faqSchema, jsonLdScript } from "@/lib/schema";

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  description,
}: {
  items: FAQItem[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema(items))} />
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              title={title}
              highlight="Asked Questions"
              description={description ?? "Answers to common questions about this service."}
            />
          </div>
          <Reveal delay={0.05}>
            <FAQAccordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
