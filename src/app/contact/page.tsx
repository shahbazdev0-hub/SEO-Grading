import type { Metadata } from "next";
import { Mail, Globe, ListChecks, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { images } from "@/lib/images";
import { siteConfig, services } from "@/lib/site";

const title = "Contact Us";
const description =
  "Get in touch about guest posting, link building, or SEO send your requirements and our team will get back to you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: `${title} | ${siteConfig.name}`, description, url: `${siteConfig.url}/contact` },
};

const requirementsChecklist = [
  "Your website URL",
  "Required SEO service",
  "Target keywords",
  "Target country or market",
  "Preferred landing pages",
  "Campaign requirements",
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ])
        )}
      />

      <PageHero
        eyebrow="Contact Us"
        title="Let's Build a Stronger Online Presence"
        description="Have questions about guest posting, link building, or SEO? Tell us about your requirements and our team can help you find the right solution for your goals."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
        image={images.collaboration}
        imageAlt="Team discussing a new client campaign"
      />

      <Section tone="muted">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-10">
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-7">
                <h2 className="text-xl font-bold text-ink-950">Our Services</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                  You can contact us regarding any of the following:
                </p>
                <ul className="mt-5 flex flex-col divide-y divide-ink-100 border-t border-ink-100">
                  {services.map((s) => (
                    <li key={s.key} className="flex items-center gap-3 py-2.5 text-[15px] font-medium text-ink-800">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />
                      {s.title}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 py-2.5 text-[15px] font-medium text-ink-800">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />
                    Custom SEO Solutions
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-6 text-white sm:p-7">
                <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary-600">
                      <ListChecks className="size-4.5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold">Send Us Your Requirements</h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
                    The more information you provide, the easier it is for our team to understand
                    your needs. Where possible, include:
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {requirementsChecklist.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink-200">
                        <Check className="size-4 shrink-0 text-primary-400" strokeWidth={2.75} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-7">
                <h3 className="text-lg font-bold text-ink-950">Business &amp; Partnership Inquiries</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                  We also welcome inquiries from SEO agencies, marketing professionals,
                  publishers, and businesses interested in long-term partnerships or white label
                  SEO solutions.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-3 rounded-lg border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-950 transition-colors hover:border-primary-600 hover:text-primary-700"
                  >
                    <Mail className="size-4 text-primary-600" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.url}
                    className="group flex items-center gap-3 rounded-lg border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-950 transition-colors hover:border-primary-600 hover:text-primary-700"
                  >
                    <Globe className="size-4 text-primary-600" aria-hidden="true" />
                    {siteConfig.url.replace("https://", "")}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(10,22,49,0.35)] sm:p-9 lg:sticky lg:top-24">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
