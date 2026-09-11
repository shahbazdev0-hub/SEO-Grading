import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
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
    <section className="py-20 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema(items))} />
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            description={description ?? "Answers to common questions about this service."}
          />
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
