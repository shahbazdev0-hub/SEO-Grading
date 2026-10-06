import type { Metadata } from "next";
import {
  DollarSign,
  Layers,
  GraduationCap,
  Zap,
  SlidersHorizontal,
  Clock,
  BarChart3,
  LayoutGrid,
  Code2,
  Search,
  PenTool,
  Link2,
  BadgeCheck,
  ClipboardCheck,
  MessageCircle,
  FileText,
  TrendingUp,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { FeatureRows } from "@/components/blocks/FeatureRows";
import { ChecklistBlock } from "@/components/blocks/ChecklistBlock";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { ComparisonTable } from "@/components/blocks/ComparisonTable";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { jsonLdScript, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const title = "White Label SEO Services | Scalable Fulfillment for Agencies";
const description =
  "White label SEO services for agencies that need scalable fulfillment, expert SEO support, flexible packages, transparent reporting, and reliable campaign delivery.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/white-label-seo" },
  openGraph: { title, description, url: `${siteConfig.url}/services/white-label-seo` },
};

const outsourceBenefits = [
  { icon: DollarSign, title: "Lower Overhead Costs", description: "No need to retain multiple in-house SEO experts." },
  { icon: Layers, title: "More Capacity", description: "Take on more campaigns without adding the same internal headcount." },
  { icon: GraduationCap, title: "Specialized Knowledge", description: "Access professionals who specialize in specific areas of SEO." },
  { icon: Zap, title: "Quicker Delivery", description: "Defined workflows ensure smoother, faster campaign execution." },
  { icon: SlidersHorizontal, title: "Flexible Scaling", description: "Scale fulfillment up or down based on your existing client load." },
  { icon: Clock, title: "More Time to Sell", description: "Your team can concentrate on landing and servicing clients." },
  { icon: BarChart3, title: "Consistent Reporting", description: "Standardized reports make client communication easier." },
  { icon: LayoutGrid, title: "Broader Service Offering", description: "Add SEO to your existing services without building a department." },
];

const workflowSteps = [
  { title: "Client Onboarding", description: "We collect business information, website access, goals, and campaign requirements." },
  { title: "SEO Analysis", description: "We review the website, competitors, keywords, technical condition, and existing visibility." },
  { title: "Strategy Development", description: "We establish priorities and determine which activities should be completed first." },
  { title: "Campaign Execution", description: "Approved technical, on-page, content, and authority-building activities are completed." },
  { title: "Quality Assurance", description: "Deliverables are reviewed before they're sent to your agency." },
  { title: "Reporting", description: "You receive campaign updates and performance information, ready to share with clients." },
  { title: "Ongoing Optimization", description: "We adjust the strategy as performance data and search conditions change." },
];

const resellerAudience = [
  "Digital marketing agencies",
  "Web design companies",
  "Development agencies",
  "PPC agencies",
  "Social media marketing firms",
  "Branding agencies",
  "Lead generation businesses",
  "Freelance marketing consultants",
  "Local marketing companies",
];

const deliverables = [
  { icon: Code2, title: "Technical SEO", description: "Addressing issues affecting crawling, indexing, site structure, performance, and search accessibility." },
  { icon: Search, title: "Keyword Research", description: "Identifying relevant searches aligned with the client's products, audience, and objectives." },
  { icon: Layers, title: "On-Page Optimization", description: "Optimizing titles, headings, meta descriptions, content structure, internal links, and images." },
  { icon: PenTool, title: "SEO Content", description: "Service pages, landing pages, blog articles, and resources built around genuine user needs." },
  { icon: Link2, title: "Link Building", description: "A quality-focused approach emphasizing relevance, authority, and sustainable acquisition." },
  { icon: BarChart3, title: "SEO Reporting", description: "Rankings, visibility, traffic trends, completed activities, and recommendations your agency can present." },
];

const chooseFulfillmentPartner = [
  { icon: BadgeCheck, title: "Experience", description: "A provider knowledgeable about varying business sectors, website types, and campaign needs." },
  { icon: ClipboardCheck, title: "Quality Check", description: "Ask how work is reviewed before it's delivered to you." },
  { icon: MessageCircle, title: "Communication", description: "Good communication avoids misunderstandings, missed deadlines, and rework." },
  { icon: FileText, title: "Reporting", description: "Reports should be easy to read and simple to present to your account managers." },
  { icon: TrendingUp, title: "Scalability", description: "The partner should add campaigns as your agency continues to grow." },
  { icon: SlidersHorizontal, title: "Flexibility", description: "Packages should adapt not every client fits the same fixed offer." },
  { icon: Eye, title: "Transparency", description: "You should know exactly what tasks are being done and how success is measured." },
  { icon: ShieldCheck, title: "Brand Protection", description: "The fulfillment model should let your agency own the front-end client experience." },
];

const comparisonRows: [string, string, string][] = [
  ["Hiring", "External fulfillment", "Internal recruitment"],
  ["Initial investment", "Generally lower", "Generally higher"],
  ["Scalability", "Flexible", "Depends on team size"],
  ["Specialist access", "Multiple skill sets available", "Depends on employees"],
  ["Management", "Shared workflow", "Fully internal"],
  ["Capacity", "Can increase as needed", "Requires additional hiring"],
  ["Client relationship", "Managed by agency", "Managed by agency"],
];

const faqs = [
  { question: "What are white label SEO services?", answer: "White label SEO services allow agencies to offer SEO under their own brand while an external fulfillment team completes the campaign work." },
  { question: "What are the main benefits of outsourced SEO services?", answer: "The main benefits include lower overhead, specialist access, flexible capacity, faster scaling, and more time for client management." },
  { question: "Is white label SEO suitable for small agencies?", answer: "Yes. It can help smaller agencies offer professional SEO without immediately building a full internal department." },
  { question: "How can an agency resell SEO services?", answer: "An agency can partner with a fulfillment provider, choose suitable services, apply its own branding and pricing, and manage the client relationship." },
  { question: "Can campaigns be customized?", answer: "Yes. Campaigns can be adjusted according to the client's industry, website condition, competition, goals, and budget." },
];

export default function WhiteLabelSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({ name: "White Label SEO Services", description, href: "/services/white-label-seo" })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "White Label SEO", href: "/services/white-label-seo" },
          ])
        )}
      />

      <PageHero
        eyebrow="White Label SEO Services"
        title="Scalable SEO Fulfillment for Growing Agencies"
        description="Offer professional SEO to your clients without building and managing a complete SEO team internally. We handle the behind-the-scenes work while you keep your branding, client relationships, and pricing."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "White Label SEO", href: "/services/white-label-seo" },
        ]}
        image={images.agencyTeam}
        imageAlt="Agency team collaborating around a table"
      />

      <Section>
        <Prose>
          <p>
            In this model, we do the SEO work and your agency delivers it under your own brand.
            Take a web design agency whose clients ask for SEO after launch rather than hiring a
            technical SEO specialist, content strategist, link-building expert, and campaign
            manager, the agency can outsource to a fulfillment team instead.
          </p>
          <p>
            The client relationship stays entirely with your agency. We handle the back-end work
            keyword research, technical SEO, content, link building, reporting, and ongoing
            campaign refinements giving you access to specialized expertise while you control
            how services are marketed and delivered.
          </p>
        </Prose>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Outsource"
          title="Why Agencies Outsource SEO Services"
          description="As an agency grows, fulfilling every service in-house becomes harder. Outsourcing gives you access to specialized fulfillment without immediately building a large internal department."
        />
        <IconFeatureGrid items={outsourceBenefits} columns={4} />
      </Section>

      <Section id="process">
        <SectionHeading
          eyebrow="How It Works"
          title="How White Label SEO Services Work"
          description="A clear workflow lets your agency remain the primary point of contact while our team handles production."
        />
        <ProcessSteps steps={workflowSteps} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Who It's For"
          title="Who Needs SEO Reseller Services?"
          description="Designed for businesses that want to sell SEO without maintaining every production capability internally."
        />
        <ChecklistBlock items={resellerAudience} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What You Get"
          title="What You Get From a White Label SEO Agency"
          description="Access to an established fulfillment structure instead of relying on one freelancer or constantly recruiting new employees."
        />
        <FeatureRows rows={deliverables} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Comparison"
          title="White Label SEO vs. In-House SEO"
          description="Both models can work but they suit different business situations. The white-label approach is particularly attractive for agencies expanding gradually or testing demand before major staff investment."
        />
        <ComparisonTable columns={["Factor", "White Label Model", "In-House Team"]} rows={comparisonRows} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Choosing a Partner"
          title="How to Choose the Right SEO Fulfillment Partner"
          description="Choosing a fulfillment partner is about more than monthly cost quality reflects directly on your agency and your ability to retain clients."
        />
        <IconFeatureGrid items={chooseFulfillmentPartner} columns={4} />
      </Section>

      <FAQSection items={faqs} description="Common questions about our white label SEO services." />

      <RelatedServices exclude="white-label-seo" />
      <CTASection
        title="Scale Your Agency With SEO Grading"
        description="Leverage external expertise, proven processes, and aligned capacity so your internal team can stay focused on client relationships and business development."
      />
    </>
  );
}
