import type { Metadata } from "next";
import { Mail, Globe, ListChecks } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/site";

const title = "Contact Us";
const description =
  "Get in touch about guest posting, link building, or SEO — send your requirements and our team will get back to you.";

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
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal>
              <div>
                <h2 className="text-xl font-semibold text-ink-900">Our Services</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  You can contact us regarding any of the following:
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {services.map((s) => (
                    <li key={s.key} className="flex items-center gap-2.5 text-sm text-ink-700">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary-500" />
                      {s.title}
                    </li>
                  ))}
                  <li className="flex items-center gap-2.5 text-sm text-ink-700">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary-500" />
                    Custom SEO Solutions
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <SpotlightCard spotlightColor="rgba(37,99,235,0.08)" className="rounded-2xl border border-ink-200 bg-ink-50 p-6">
                <div className="flex items-center gap-2.5 text-ink-900">
                  <ListChecks className="size-5 text-primary-600" aria-hidden="true" />
                  <h3 className="text-base font-semibold">Send Us Your Requirements</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  The more information you provide, the easier it is for our team to understand
                  your needs. Where possible, include:
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {requirementsChecklist.map((item) => (
                    <li key={item} className="text-sm text-ink-700">
                      • {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.1}>
              <SpotlightCard spotlightColor="rgba(37,99,235,0.08)" className="rounded-2xl border border-ink-200 bg-white p-6">
                <h3 className="text-base font-semibold text-ink-900">Business &amp; Partnership Inquiries</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  We also welcome inquiries from SEO agencies, marketing professionals,
                  publishers, and businesses interested in long-term partnerships or white label
                  SEO solutions.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 text-sm font-medium text-primary-600 hover:underline"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.url}
                    className="flex items-center gap-2.5 text-sm font-medium text-primary-600 hover:underline"
                  >
                    <Globe className="size-4" aria-hidden="true" />
                    {siteConfig.url.replace("https://", "")}
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <SpotlightCard
              spotlightColor="rgba(37,99,235,0.06)"
              className="rounded-3xl border border-ink-200 bg-white p-7 shadow-sm sm:p-9"
            >
              <ContactForm />
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
