import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CaseStudyCarousel } from "@/components/blocks/CaseStudyCarousel";
import { CTASection } from "@/components/blocks/CTASection";
import { caseStudies } from "@/lib/caseStudies";
import { images } from "@/lib/images";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Case Studies";
const description =
  "See how relevance-first link building, on-page, and technical SEO campaigns translate into rankings, traffic, and revenue.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: { title: `${title} | ${siteConfig.name}`, description, url: `${siteConfig.url}/case-studies` },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(breadcrumbs))} />

      <PageHero
        eyebrow="Case Studies"
        title="Results Built on Relevance, Not Shortcuts"
        description="Every campaign below was built with manual outreach, real publishers, and transparent reporting. Here's what changed for each client and how we got there."
        breadcrumbs={breadcrumbs}
        image={images.highFive}
        imageAlt="Team celebrating campaign results"
      />

      <Section>
        <SectionHeading
          eyebrow="Featured Results"
          title="Our Results Speak for Our Work"
          highlight="Speak for Our Work"
          description="Browse featured campaigns, the numbers they produced, and the strategy behind them."
        />
        <CaseStudyCarousel studies={caseStudies} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="All Case Studies"
          title="Campaigns Across Every Kind of Business"
          highlight="Every Kind of Business"
        />
        <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <RevealItem key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group grid h-full grid-cols-1 overflow-hidden rounded-2xl border border-ink-200 bg-white transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(10,22,49,0.4)] sm:grid-cols-[200px_1fr]"
              >
                <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 200px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-600">
                    {study.industry} · {study.duration}
                  </span>
                  <h3 className="mt-2 text-lg leading-snug font-bold text-ink-950">{study.headline}</h3>
                  <div className="mt-4 grid grid-cols-3 gap-3 border-t border-ink-100 pt-4">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-xl font-extrabold text-ink-950">{m.value}</p>
                        <p className="mt-0.5 text-[11px] leading-tight text-ink-500">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                    View case study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection
        title="Want Results Like These?"
        description="Send us your website and target keywords we'll show you where the opportunities are and how we'd approach your campaign."
      />
    </>
  );
}
