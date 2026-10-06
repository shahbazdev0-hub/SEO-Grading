import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ComparisonTable } from "@/components/blocks/ComparisonTable";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { plans, authorityTiers, packageComparison, packageFaqs } from "@/lib/packages";
import { images } from "@/lib/images";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "SEO & Link Building Packages";
const description =
  "Flexible guest posting, link building, and SEO packages built around your niche, target pages, and growth goals.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/packages" },
  openGraph: { title: `${title} | ${siteConfig.name}`, description, url: `${siteConfig.url}/packages` },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
];

export default function PackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(breadcrumbs))} />

      <PageHero
        eyebrow="Packages"
        title="Transparent Link Building & SEO Packages"
        description="Every package is built on manual outreach, niche-relevant publishers, and reporting you can verify. Pick a starting point we'll tailor the mix to your site."
        breadcrumbs={breadcrumbs}
        secondaryCta={{ label: "Compare Plans", href: "#plans" }}
        image={images.strategy}
        imageAlt="Strategist presenting a campaign plan"
      />

      <Section id="plans">
        <SectionHeading
          eyebrow="Pricing Plans"
          title="Choose the Right Package for Your Growth"
          highlight="Package for Your Growth"
          description="Each link is priced on the publisher's authority and verified traffic. Tell us about your site and we'll send a clear, itemised quote."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)]">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-7">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-600">Per Link</p>
              <h3 className="mt-2 text-2xl font-extrabold text-ink-950">By Authority Tier</h3>
              <ul className="mt-6 flex flex-1 flex-col divide-y divide-ink-200 border-t border-ink-200">
                {authorityTiers.map((t) => (
                  <li key={t.tier} className="flex items-center justify-between gap-4 py-5">
                    <div>
                      <p className="font-display text-lg font-bold text-ink-950">{t.tier} sites</p>
                      <p className="mt-0.5 text-sm text-ink-500">{t.description}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs font-semibold text-primary-600">Quote</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="group mt-4 inline-flex w-fit items-center gap-1.5 border-b-2 border-primary-600 pb-0.5 text-sm font-semibold text-ink-950"
              >
                Request per-link pricing
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <RevealItem key={plan.name} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ease-out-soft hover:-translate-y-1 ${
                    plan.featured
                      ? "border-ink-950 bg-ink-950 text-white shadow-[0_30px_60px_-30px_rgba(10,22,49,0.6)]"
                      : "border-ink-200 bg-white hover:shadow-[0_24px_50px_-28px_rgba(10,22,49,0.35)]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute top-0 right-5 -translate-y-1/2 rounded-full bg-primary-600 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Most Chosen
                    </span>
                  )}
                  <h3 className={`text-xl font-extrabold ${plan.featured ? "text-white" : "text-ink-950"}`}>{plan.name}</h3>
                  <p className="mt-3 flex items-baseline gap-1.5">
                    <span className={`font-display text-4xl font-extrabold ${plan.featured ? "text-white" : "text-ink-950"}`}>
                      {plan.price}
                    </span>
                    {plan.cadence && (
                      <span className={`text-sm ${plan.featured ? "text-ink-300" : "text-ink-500"}`}>{plan.cadence}</span>
                    )}
                  </p>
                  <p className={`mt-3 text-sm leading-relaxed ${plan.featured ? "text-ink-300" : "text-ink-600"}`}>
                    {plan.description}
                  </p>
                  <ul className={`mt-6 flex flex-1 flex-col gap-3 border-t pt-6 ${plan.featured ? "border-white/10" : "border-ink-200"}`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-primary-400" : "text-primary-600"}`}
                          strokeWidth={2.75}
                          aria-hidden="true"
                        />
                        <span className={plan.featured ? "text-ink-200" : "text-ink-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={plan.featured ? "primary" : "outline"} className="mt-7 w-full">
                    {plan.cta}
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-primary-200 bg-primary-50 px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-[15px] text-ink-800">
              Volume campaigns, restricted niches, and multi-brand accounts are quoted individually.
            </p>
            <Link href="/contact" className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-700">
              Get a custom quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Comparison"
          title="SEO Grading vs. Link Marketplaces"
          highlight="Link Marketplaces"
          description="Cheap link packages look similar on paper. Here's where the difference actually shows up."
        />
        <ComparisonTable columns={["Factor", "SEO Grading", "Typical Link Marketplace"]} rows={packageComparison} />
      </Section>

      <FAQSection items={packageFaqs} description="Common questions about our packages and pricing." />

      <CTASection
        className="!pt-0"
        title="Not Sure Which Package Fits?"
        description="Share your website and goals we'll recommend the right starting point and send a clear quote."
      />
    </>
  );
}
