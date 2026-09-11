import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  MapPin,
  Cpu,
  Newspaper,
  GitBranch,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { ChecklistBlock } from "@/components/blocks/ChecklistBlock";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { jsonLdScript, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Technical SEO Services | Crawling, Indexing & Site Speed";
const description =
  "Get reliable technical SEO services and a practical technical SEO strategy to fix crawl, indexing, speed, mobile, and website architecture issues.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/technical-seo" },
  openGraph: { title, description, url: `${siteConfig.url}/services/technical-seo` },
};

const auditCoverage = [
  "Crawlability and crawl-budget issues",
  "Indexation and noindex directives",
  "XML sitemap accuracy",
  "Robots.txt configuration",
  "Canonical tags and duplicate URLs",
  "Redirect chains and broken redirects",
  "404 errors and soft 404s",
  "HTTPS and security-related issues",
  "Core Web Vitals and page speed",
  "Mobile usability",
  "Internal linking and site architecture",
  "Structured data and schema implementation",
  "JavaScript rendering and blocked resources",
  "Pagination and faceted navigation",
  "International SEO signals such as hreflang",
  "Orphan pages and URL inconsistencies",
];

const packageInclusions = [
  "Technical audit and prioritized issue report",
  "Crawl and indexation analysis",
  "Site architecture review",
  "Core Web Vitals and performance recommendations",
  "Schema and structured-data review",
  "Mobile SEO checks",
  "JavaScript and rendering analysis",
  "Sitemap and robots.txt review",
  "Redirect and canonical analysis",
  "Developer-ready implementation guidance",
  "Ongoing technical monitoring",
];

const processSteps = [
  { title: "Website Discovery", description: "We review your business goals, CMS, technology stack, search visibility, and known concerns." },
  { title: "Technical Crawling", description: "We crawl key areas to identify issues with URLs, links, redirects, directives, and indexability." },
  { title: "Search-Engine Signal Review", description: "We assess whether important pages can be reached and whether the site sends consistent preferred-URL signals." },
  { title: "Performance Analysis", description: "We examine loading performance, mobile experience, and Core Web Vitals by template and page type." },
  { title: "Prioritization", description: "Issues are grouped by severity, impact, effort, and urgency so your team knows what to fix first." },
  { title: "Implementation Support", description: "We provide developer-ready recommendations and can support implementation and validation directly." },
  { title: "Monitoring & Validation", description: "After fixes ship, we confirm issues are resolved and watch for new technical problems." },
];

const websiteTypes = [
  { icon: ShoppingCart, title: "Ecommerce Websites", description: "Cleaner crawl paths and stronger signals for category and product pages amid large catalogs and filter combinations." },
  { icon: MapPin, title: "Local Business Websites", description: "Clean architecture, mobile performance, crawlable location pages, and consistent structured data." },
  { icon: Cpu, title: "SaaS & Technology Websites", description: "Reviewing how JavaScript frameworks, dynamic content, and app routes are rendered and discovered." },
  { icon: Newspaper, title: "Publishers & Content Websites", description: "Helping search engines focus on valuable pages across large archives, tags, and pagination." },
  { icon: GitBranch, title: "Website Migrations", description: "Identifying redirects, canonicals, internal links, and indexing issues before and after a migration." },
];

const whiteLabelInclusions = [
  "Specialist technical analysis",
  "White-label audit reports",
  "Agency-friendly communication",
  "Developer-focused recommendations",
  "Flexible project support",
  "Scalable delivery for multiple clients",
];

const faqs = [
  { question: "What do technical SEO services include?", answer: "They cover crawling, indexation, site architecture, performance, mobile usability, redirects, canonicals, sitemaps, structured data, and rendering issues." },
  { question: "What is included in a technical SEO audit service?", answer: "It reviews technical issues affecting crawling, indexing, performance, URLs, redirects, internal links, structured data, and search visibility." },
  { question: "How long does technical SEO take to show results?", answer: "The timeline varies based on website size, issue severity, competition, and how quickly recommended changes are implemented." },
  { question: "How do I choose a technical SEO company?", answer: "Choose a provider with practical experience, clear reporting, strong communication, and the ability to work effectively with developers." },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({ name: "Technical SEO Services", description, href: "/services/technical-seo" })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Technical SEO", href: "/services/technical-seo" },
          ])
        )}
      />

      <PageHero
        eyebrow="Technical SEO Services"
        title="Better Rankings, Crawling & User Experience"
        description="If search engines struggle to crawl, understand, or index your website, even strong pages can fail to perform. We fix the technical foundations that help search engines access your site efficiently — and give visitors a faster, smoother experience."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Technical SEO", href: "/services/technical-seo" },
        ]}
      />

      <Section>
        <Prose>
          <p>
            Whether you manage an e-commerce store, local business website, SaaS platform,
            publisher site, or large enterprise website, technical improvements can remove
            barriers that limit organic growth. We identify technical issues, prioritize them by
            impact, and provide practical recommendations or implementation support.
          </p>
          <p>
            Instead of chasing every warning from an automated tool, we focus on problems that can
            genuinely influence organic visibility, user experience, crawl efficiency, and the
            ability of important pages to be indexed.
          </p>
        </Prose>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Technical Audit"
          title="What We Cover With Our Technical SEO Audit Service"
          description="Instead of producing a long list of automated errors, we focus on issues that affect crawling, indexing, rankings, performance, and usability."
        />
        <ChecklistBlock items={auditCoverage} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our Process"
          title="Our Technical SEO Process"
          description="Effective optimization starts with understanding the website before making changes — turning technical findings into measurable actions."
          align="left"
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="By Website Type"
          title="Technical SEO for Different Website Types"
          description="Every website has different technical challenges — our approach adapts to the platform and business model."
        />
        <IconFeatureGrid items={websiteTypes} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Agency Packages"
          title="Technical SEO Agency Packages Built Around Your Website"
          description="Packages are designed around the size, platform, and complexity of each website — from a focused review to ongoing monitoring for large ecommerce projects."
        />
        <ChecklistBlock items={packageInclusions} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="For Agencies"
          title="White-Label Technical SEO Consultant Services"
          description="We work behind the scenes under your brand — clear reports, developer-ready recommendations, and flexible support that fits your existing workflow."
        />
        <ChecklistBlock items={whiteLabelInclusions} />
        <Prose>
          <p>
            Already offer content, link building, design, or marketing services but need
            additional technical capacity? See our{" "}
            <Link href="/services/white-label-seo" className="font-semibold text-primary-600 hover:underline">
              white label SEO services
            </Link>{" "}
            for agencies, or pair technical work with our{" "}
            <Link href="/services/on-page-seo" className="font-semibold text-primary-600 hover:underline">
              on-page SEO services
            </Link>{" "}
            for full-page optimization.
          </p>
        </Prose>
      </Section>

      <FAQSection items={faqs} description="Common questions about our technical SEO services." />

      <RelatedServices exclude="technical-seo" />
      <CTASection
        title="Give Search Engines an Easier Route to Your Content"
        description="From a one-off technical audit to ongoing monitoring, let's turn complex technical problems into clear, achievable improvements."
      />
    </>
  );
}
