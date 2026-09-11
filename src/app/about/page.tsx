import type { Metadata } from "next";
import {
  Award,
  Target,
  ShieldCheck,
  Eye,
  Search,
  Handshake,
  PenTool,
  BarChart3,
  Briefcase,
  Cpu,
  ShoppingCart,
  MapPin,
  Rocket,
  Newspaper,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { FeatureRows } from "@/components/blocks/FeatureRows";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "About Us";
const description =
  "SEO Grading is a specialist guest posting and SEO team focused on relevance, white-hat practices, and transparent reporting — not shortcuts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: `${title} | ${siteConfig.name}`, description, url: `${siteConfig.url}/about` },
};

const values = [
  { icon: Award, title: "Quality Over Quantity", description: "We would rather secure ten placements that matter than a hundred that don't." },
  { icon: Target, title: "Relevance First", description: "Every website, article, and anchor is evaluated for genuine fit with your niche." },
  { icon: ShieldCheck, title: "White-Hat, Always", description: "We build links and campaigns that align with search engine guidelines, not around them." },
  { icon: Eye, title: "Full Transparency", description: "You see what's been done, where, and why — reported clearly, every time." },
];

const howWeWork = [
  { icon: Search, title: "Research First", description: "We start with your business, competitors, and goals — not a generic template — to understand what actually moves your SEO forward." },
  { icon: Handshake, title: "Manual Outreach", description: "Every placement is the result of real conversations with real publishers, not automated tools or bulk submissions." },
  { icon: PenTool, title: "Professional Content", description: "Our writers produce original, well-researched content that earns its place on a publisher's site — and adds value for their readers." },
  { icon: BarChart3, title: "Transparent Reporting", description: "You receive live URLs, campaign details, and clear updates, so you always know exactly what's been delivered." },
];

const audiences = [
  { icon: Briefcase, title: "SEO & Marketing Agencies", description: "White label fulfillment and link campaigns that scale with your client roster." },
  { icon: Cpu, title: "SaaS & Technology", description: "Authority building for competitive, high-value software markets." },
  { icon: ShoppingCart, title: "E-commerce Brands", description: "Category and product page support through relevant, contextual links." },
  { icon: MapPin, title: "Local Businesses", description: "Stronger service pages and regional visibility in competitive markets." },
  { icon: Rocket, title: "Startups", description: "Foundational authority building for long-term organic growth." },
  { icon: Newspaper, title: "Publishers & Content Sites", description: "Promotion for original research, guides, and resources worth referencing." },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ])
        )}
      />

      <PageHero
        eyebrow="About Us"
        title="SEO Built on Relevance, Not Shortcuts"
        description="SEO Grading is a specialist guest posting, link building, and SEO team. We exist to help businesses and agencies earn real authority — through manual outreach, quality content, and campaigns built around what actually supports long-term search performance."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <Section>
        <Prose>
          <p>
            Search engines reward websites that earn genuine trust — real relevance, real
            authority, and a consistent track record of value. Too much of the link-building
            industry chases the opposite: bulk placements, irrelevant sites, and metrics that look
            impressive but carry little real SEO weight.
          </p>
          <p>
            We built SEO Grading around a different standard. Every guest post, niche edit,
            on-page recommendation, and outreach campaign is evaluated against one question: does
            this genuinely support the website it&apos;s meant to help? If the answer is no, we
            don&apos;t pursue it — regardless of how good the metrics might look on paper.
          </p>
          <p>
            That approach means slower, more deliberate campaigns than mass-market link sellers
            offer. It also means the results are built to last — link profiles that reflect real
            relevance, content that reads naturally, and reporting you can actually trust.
          </p>
        </Prose>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What We Stand For"
          title="The Principles Behind Every Campaign"
          align="center"
        />
        <IconFeatureGrid items={values} columns={4} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How We Work"
          title="Manual Research, Real Relationships, Clear Reporting"
          description="The same foundations run through guest posting, link insertion, on-page, off-page, technical, and white label SEO work."
        />
        <FeatureRows rows={howWeWork} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for Agencies, Brands & Growing Businesses"
          description="Our team adapts each engagement to the client — from agencies reselling SEO under their own brand to startups building their first backlink profile."
          align="center"
        />
        <AudienceGrid items={audiences} />
      </Section>

      <CTASection
        title="Let's Talk About Your SEO Goals"
        description="Tell us about your website and where you want it to go — we'll put together a strategy built around your niche, not a generic package."
      />
    </>
  );
}
