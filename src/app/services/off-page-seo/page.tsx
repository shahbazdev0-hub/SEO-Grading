import type { Metadata } from "next";
import Link from "next/link";
import {
  LineChart,
  Swords,
  Link2,
  Handshake,
  Megaphone,
  Award,
  Target,
  Type,
  TrendingUp,
  BarChart3,
  MapPin,
  ShoppingCart,
  Cpu,
  Briefcase,
  Newspaper,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { FeatureRows } from "@/components/blocks/FeatureRows";
import { ChecklistBlock } from "@/components/blocks/ChecklistBlock";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { PackageCards } from "@/components/blocks/PackageCards";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { jsonLdScript, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Off-Page SEO Services | Authority, Backlinks & Organic Growth";
const description =
  "Get trusted off page SEO service solutions to build authority, earn quality backlinks, and grow organic rankings.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/off-page-seo" },
  openGraph: { title, description, url: `${siteConfig.url}/services/off-page-seo` },
};

const methods = [
  { icon: LineChart, title: "Backlink Profile Analysis", description: "We review referring domains, link relevance, anchor text patterns, and target pages to establish a baseline for growth." },
  { icon: Swords, title: "Competitor Research", description: "Competitor backlink profiles reveal relevant publications and opportunities — without simply copying their campaigns." },
  { icon: Link2, title: "Relevant Link Acquisition", description: "We look for opportunities where a reference naturally supports readers and fits within the publisher's content." },
  { icon: Handshake, title: "Publisher Outreach", description: "Personalized communication with suitable publishers creates stronger opportunities than generic outreach." },
  { icon: Megaphone, title: "Content Promotion", description: "Original research, guides, and practical resources create natural reasons for other sites to reference your brand." },
];

const processSteps = [
  { title: "Website Assessment", description: "We review your authority, key pages, backlink profile, competitors, and existing organic visibility." },
  { title: "Campaign Planning", description: "We define objectives — strengthening authority, supporting commercial pages, or improving niche visibility." },
  { title: "Prospect Research", description: "Potential websites are evaluated for topical relevance, content quality, audience fit, and credibility." },
  { title: "Outreach & Content", description: "Outreach and content development begin, built to be original, useful, and appropriate for the publisher's audience." },
  { title: "Placement Review", description: "Published opportunities are reviewed for content quality, context, destination page, and relevance." },
  { title: "Monitoring & Reporting", description: "We track referring domains, placements, target pages, visibility, and referral traffic on an ongoing basis." },
];

const qualityPrinciples = [
  { icon: Award, title: "Quality Over Quantity", description: "A smaller number of well-matched editorial opportunities outweighs hundreds of irrelevant references." },
  { icon: Target, title: "Topical Relevance", description: "The referring website's subject and surrounding context shape how much a link connects source, destination, and user intent." },
  { icon: Type, title: "Natural Anchor Text", description: "Anchor text makes sense within the sentence, avoiding unnatural repetition or manufactured patterns." },
  { icon: TrendingUp, title: "Consistent Growth", description: "Authority develops over time through consistent activity, relationships, and relevant references." },
  { icon: BarChart3, title: "Transparent Reporting", description: "You always see what work has been completed and how it supports your wider objectives." },
];

const packages = [
  {
    name: "Starter Package",
    description: "For smaller websites that need to establish a stronger external presence.",
    items: [
      "Initial backlink analysis",
      "Competitor research",
      "Prospect identification",
      "Targeted outreach",
      "Relevant content placements",
      "Campaign reporting",
    ],
  },
  {
    name: "Growth Package",
    description: "For businesses competing in more demanding search environments.",
    featured: true,
    items: [
      "Expanded competitor analysis",
      "Broader prospect research",
      "Ongoing publisher outreach",
      "Content development",
      "Multiple target pages",
      "Regular performance reporting",
    ],
  },
  {
    name: "Authority Package",
    description: "For established websites that need a broader external campaign.",
    items: [
      "Advanced prospect research",
      "Content promotion",
      "Digital PR opportunities",
      "Competitor gap analysis",
      "Larger outreach campaigns",
      "Ongoing campaign management",
    ],
  },
];

const audiences = [
  { icon: MapPin, title: "Local Businesses", description: "Relevant industry publications, regional resources, and community references that build presence." },
  { icon: ShoppingCart, title: "E-commerce Websites", description: "External promotion supporting category pages, buying guides, and informational content." },
  { icon: Cpu, title: "SaaS Companies", description: "Industry references, useful resources, and expert contributions that establish credibility." },
  { icon: Briefcase, title: "Service Businesses", description: "External promotion supporting service pages and educational resources within your industry." },
  { icon: Newspaper, title: "Publishers & Content Sites", description: "Promotion of original research, statistics, and guides to attract relevant references." },
  { icon: Megaphone, title: "Digital Marketing Agencies", description: "Specialist support when agencies need extra outreach capacity for their clients." },
];

const performanceMetrics = [
  "Growth in referring domains",
  "Quality and relevance of acquired links",
  "Organic ranking trends",
  "Organic traffic",
  "Target-page visibility",
  "Referral traffic",
  "Brand mentions",
  "Leads and conversions",
];

const faqs = [
  { question: "How long does it take to see results from off-page SEO service?", answer: "Results vary by competition, website authority, industry, backlink profile, content quality, and campaign consistency, with meaningful growth often requiring several months." },
  { question: "What are off-page SEO techniques used for improving website authority?", answer: "Common activities include relevant outreach, editorial link acquisition, digital PR, brand mentions, competitor research, content promotion, and relationship building." },
  { question: "Are off-page SEO services suitable for small businesses?", answer: "Yes, when campaigns are focused on relevant publications, industry relationships, regional opportunities, and quality references that match the business's goals." },
  { question: "What is the difference between off-page and on-page SEO?", answer: "Off-page SEO focuses on external signals and activities, while on-page SEO focuses on website elements such as content, headings, internal links, metadata, and page structure." },
  { question: "How do you choose websites for link placement?", answer: "Suitable websites are evaluated for topical relevance, content quality, audience fit, editorial standards, credibility, and the value they can provide to users." },
];

export default function OffPageSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({ name: "Off-Page SEO Services", description, href: "/services/off-page-seo" })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Off-Page SEO", href: "/services/off-page-seo" },
          ])
        )}
      />

      <PageHero
        eyebrow="Off-Page SEO Services"
        title="Build Authority and Sustainable Organic Growth"
        description="Search visibility depends on more than your own content and structure. We strengthen the external signals — relevant link acquisition, publisher outreach, digital PR, and content promotion — that build authority, relevance, and reputation."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Off-Page SEO", href: "/services/off-page-seo" },
        ]}
      />

      <Section>
        <Prose>
          <p>
            Off-page SEO services involve activities performed outside your website to improve
            its authority, reputation, relevance, and organic visibility — including link
            acquisition, publisher outreach, digital PR, brand mentions, competitor research, and
            content promotion.
          </p>
          <p>
            The value of external optimization comes from quality and context. A reference from a
            relevant, credible website can be more useful than numerous links from unrelated
            sources. A successful campaign considers where a reference comes from, why the page is
            linking, how relevant the surrounding content is, and whether it provides genuine
            value to users.
          </p>
        </Prose>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Methods"
          title="What We Do: Off-Page SEO Methods"
          description="Our approach begins with research rather than immediate outreach — reviewing your website, competitors, existing backlink profile, and search objectives before building a campaign."
        />
        <FeatureRows rows={methods} />
      </Section>

      <Section id="process">
        <SectionHeading
          eyebrow="Our Process"
          title="How Our Process Builds Sustainable Authority"
          description="A structured process keeps campaigns focused and makes performance easier to evaluate."
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Principles"
          title="Why Our Off-Page SEO Strategies Focus on Quality"
          description="Effective strategies focus on relevance, credibility, and sustainable growth rather than backlink volume alone."
        />
        <IconFeatureGrid items={qualityPrinciples} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Packages"
          title="Packages From an Off-Page SEO Company"
          description="The right package should reflect your website's actual needs rather than a fixed backlink target — structured around authority, competition, target pages, and growth objectives."
        />
        <PackageCards packages={packages} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Who It's For"
          title="Who Can Benefit From External SEO?"
          description="External authority building supports different types of websites when campaigns are adapted to their specific goals."
        />
        <AudienceGrid items={audiences} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Measuring Success"
          title="How Do You Measure Campaign Performance?"
          description="Backlink quantity alone can't determine success. Performance should be evaluated across several indicators:"
        />
        <ChecklistBlock items={performanceMetrics} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="For Agencies"
          title="White Label SEO for Digital Agencies"
          description="A reliable off-page SEO partner can help digital marketing companies expand their offering without building a large internal outreach department."
        />
        <Prose>
          <p>
            Working with an experienced partner lets agencies outsource prospect research,
            publisher communication, content coordination, link acquisition, and reporting while
            maintaining control over client relationships. Learn more about our{" "}
            <Link href="/services/white-label-seo" className="font-semibold text-primary-600 hover:underline">
              white label SEO services
            </Link>{" "}
            for agencies.
          </p>
        </Prose>
      </Section>

      <FAQSection items={faqs} description="Common questions about our off-page SEO services." />

      <RelatedServices exclude="off-page-seo" />
      <CTASection
        title="Build Stronger Search Authority"
        description="Whether the goal is supporting key landing pages, expanding referring domains, or strengthening overall authority, let's build a strategy around your website's individual needs."
      />
    </>
  );
}
