import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TrendChart } from "@/components/blocks/TrendChart";
import { CTASection } from "@/components/blocks/CTASection";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { services, siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = `${study.client} Case Study`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: { title: `${title} | ${siteConfig.name}`, description: study.summary, url: `${siteConfig.url}/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: study.client, href: `/case-studies/${study.slug}` },
  ];
  const usedServices = services.filter((s) => study.services.includes(s.key));
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(breadcrumbs))} />

      <PageHero
        eyebrow={`${study.industry} · ${study.duration}`}
        title={study.headline}
        description={study.summary}
        breadcrumbs={breadcrumbs}
        image={study.image}
      />

      {/* Metrics strip */}
      <section className="bg-white pt-12 sm:pt-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 overflow-hidden rounded-2xl border border-ink-200 sm:grid-cols-3">
            {study.metrics.map((m, i) => (
              <RevealItem
                key={m.label}
                className={`p-7 sm:p-8 ${i > 0 ? "border-t border-ink-200 sm:border-t-0 sm:border-l" : ""}`}
              >
                <p className={`font-display text-4xl font-extrabold sm:text-5xl ${i === 0 ? "text-primary-600" : "text-ink-950"}`}>
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">{m.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="flex flex-col gap-10">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-ink-950 sm:text-3xl">The Challenge</h2>
              <p className="mt-4 text-base leading-[1.8] text-ink-600 sm:text-[17px]">{study.challenge}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-extrabold text-ink-950 sm:text-3xl">Our Approach</h2>
              <ul className="mt-5 flex flex-col divide-y divide-ink-200 overflow-hidden rounded-xl border border-ink-200">
                {study.approach.map((step) => (
                  <li key={step} className="flex items-start gap-3.5 px-5 py-4">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-800">{step}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-ink-200 bg-mist p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold text-ink-950">Organic traffic trend</p>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    {study.metrics[0].value}
                  </span>
                </div>
                <div className="rounded-xl border border-ink-200 bg-white p-3">
                  <TrendChart values={study.trend} startIndex={study.startIndex} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-7 text-white">
                <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="relative">
                  <h2 className="text-xl font-bold">The Results</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-300">{study.results}</p>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-300">Services used</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {usedServices.map((s) => (
                      <Link
                        key={s.key}
                        href={s.href}
                        className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-white transition-colors hover:border-primary-400 hover:bg-primary-600"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="More Results" title="Explore Other Case Studies" highlight="Case Studies" />
        <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {others.map((o) => (
            <RevealItem key={o.slug}>
              <Link
                href={`/case-studies/${o.slug}`}
                className="group flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-600">{o.industry}</span>
                <h3 className="mt-2 text-lg font-bold text-ink-950">{o.client}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{o.headline}</p>
                <p className="mt-5 font-display text-3xl font-extrabold text-primary-600">{o.metrics[0].value}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">{o.metrics[0].label}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection />
    </>
  );
}
