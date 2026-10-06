import type { Metadata } from "next";
import {
  Search,
  Type,
  FileText,
  Layers,
  PenTool,
  Link2,
  Network,
  ImageIcon,
  Code2,
  Compass,
  ClipboardList,
  Award,
  BadgeCheck,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { ChecklistBlock } from "@/components/blocks/ChecklistBlock";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { jsonLdScript, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const title = "On-Page SEO Services | Rankings, Traffic & Site Performance";
const description =
  "Get expert on page SEO services to improve rankings, boost organic traffic, and optimize your website for search engines.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/on-page-seo" },
  openGraph: { title, description, url: `${siteConfig.url}/services/on-page-seo` },
};

const whyItMatters = [
  "Refine the relevance of existing pages",
  "Create a clearer website structure",
  "Help search engines understand each page",
  "Improve navigation between related pages",
  "Support a better user experience",
  "Strengthen organic search visibility",
  "Connect quality content with the right audience",
];

const includedItems = [
  { icon: Search, title: "Keyword Research & Mapping", description: "Relevant terms are mapped to the right pages based on search intent, so pages stop competing with each other." },
  { icon: Type, title: "Title Tag Optimization", description: "Clear, natural titles that communicate the page topic to both users and search engines." },
  { icon: FileText, title: "Meta Description Optimization", description: "Clear, relevant descriptions that help users understand what a page offers before they click." },
  { icon: Layers, title: "Heading Structure", description: "A logical hierarchy that organizes content and establishes main topics and subtopics." },
  { icon: PenTool, title: "Content Optimization", description: "Improving clarity, expanding key sections, and matching content to genuine search intent." },
  { icon: Link2, title: "URL Optimization", description: "Short, descriptive URLs that communicate the page topic without unnecessary parameters." },
  { icon: Network, title: "Internal Linking", description: "Connecting related pages so visitors and search engines can discover more of your site." },
  { icon: ImageIcon, title: "Image Optimization", description: "Suitable formats, descriptive alt text, and sensible dimensions for performance and accessibility." },
  { icon: Code2, title: "Technical Page Elements", description: "Reviewing canonical tags, indexability, structured data, duplicate content, and mobile usability." },
];

const checklist = [
  "Is the main topic of the page clear?",
  "Does the content match the searcher's intent?",
  "Is the title descriptive and relevant?",
  "Is the meta description useful and natural?",
  "Are headings organized logically?",
  "Does the page provide original, helpful information?",
  "Are keywords used naturally rather than repeatedly?",
  "Are related topics covered where they add value?",
  "Are URLs simple and descriptive?",
  "Are important pages connected through internal links?",
  "Are images properly optimized?",
  "Does the page work well on mobile devices?",
  "Are unnecessary duplicate pages being indexed?",
  "Can search engines access the important content?",
  "Does the page load efficiently?",
  "Are relevant structured data opportunities considered?",
  "Does the content provide a clear next step for visitors?",
];

const chooseProvider = [
  { icon: Compass, title: "Their Approach", description: "A good provider starts by understanding your website, audience, competitors, and objectives not generic changes." },
  { icon: ClipboardList, title: "Audits & Reporting", description: "You should clearly understand what was reviewed, what was recommended, and what was completed." },
  { icon: Award, title: "Quality Over Repetition", description: "Modern SEO needs useful content and clear relevance, not excessive keyword stuffing." },
  { icon: BadgeCheck, title: "Relevant Experience", description: "Ask whether the provider has worked with websites similar to yours." },
  { icon: MessageCircle, title: "Clear Communication", description: "You should always know what's being changed on your site, and why." },
  { icon: ShieldAlert, title: "No Ranking Guarantees", description: "Avoid providers who promise a specific Google ranking within a fixed period." },
];

const faqs = [
  { question: "What are on-page SEO services?", answer: "They optimize website content, structure, metadata, links, and other page elements to improve search visibility." },
  { question: "Why is on-page SEO important?", answer: "It helps search engines understand your pages while improving relevance, usability, and organic visibility." },
  { question: "How long does on-page SEO take to show results?", answer: "Results vary by website, competition, content quality, and the extent of optimization required." },
  { question: "Should I hire an on-page SEO expert?", answer: "An expert can identify optimization issues and create a structured strategy to improve your website's organic performance." },
];

export default function OnPageSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({ name: "On-Page SEO Services", description, href: "/services/on-page-seo" })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "On-Page SEO", href: "/services/on-page-seo" },
          ])
        )}
      />

      <PageHero
        eyebrow="On-Page SEO Services"
        title="Improve Rankings, Traffic & Website Performance"
        description="A website can have amazing products, helpful content, and great design but without strong on-page optimization, none of it reaches the right people. We optimize content, headings, internal links, URLs, images, and metadata so search engines and visitors both understand your pages."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "On-Page SEO", href: "/services/on-page-seo" },
        ]}
        image={images.wireframes}
        imageAlt="Page layout wireframes being planned on paper"
      />

      <Section>
        <Prose>
          <p>
            On-page SEO services encompass tweaking the visible and technical factors on a web
            page to make it more relevant to search engines and more valuable to visitors. Unlike
            off-page SEO, which focuses on external signals like backlinks, on-page work happens
            entirely within your own site.
          </p>
          <p>
            The process typically starts with a review of existing pages titles, meta
            descriptions, headings, content structure, URLs, internal links, and images checked
            against optimal keyword targeting. Search intent matters just as much: a page should
            answer the question behind a search, not simply target a phrase.
          </p>
        </Prose>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Why On-Page SEO Matters for Your Website"
          description="A page has to be understood by search engines before it can compete for a keyword. Strong on-page work makes a page more relevant, easier to scan, and easier to navigate for real visitors while helping your business:"
        />
        <ChecklistBlock items={whyItMatters} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What's Included"
          title="What's Included in an On-Page SEO Service"
          description="A detailed audit comes first, followed by the optimization activities that matter most for your website's condition and goals."
        />
        <IconFeatureGrid items={includedItems} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Checklist"
          title="On-Page SEO Checklist for Better Search Visibility"
          description="Every website is different, but these are the areas worth reviewing regularly to avoid missing optimization opportunities."
        />
        <ChecklistBlock items={checklist} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Choosing a Partner"
          title="How to Choose the Right On-Page SEO Provider"
          description="Poor optimization can create unnecessary problems. Before hiring a company or freelancer, weigh these factors:"
        />
        <IconFeatureGrid items={chooseProvider} />
      </Section>

      <FAQSection items={faqs} description="Common questions about our on-page SEO services." />

      <RelatedServices exclude="on-page-seo" />
      <CTASection
        title="Give Your Pages a Stronger Foundation"
        description="Whether you need a few key landing pages optimized or a full site-wide overhaul, let's build a plan around real search intent not just keywords."
      />
    </>
  );
}
