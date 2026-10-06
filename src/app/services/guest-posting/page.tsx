import type { Metadata } from "next";
import {
  Search,
  Handshake,
  PenTool,
  Link2,
  ClipboardCheck,
  BarChart3,
  Users,
  Target,
  PenLine,
  Newspaper,
  ShieldCheck,
  Settings2,
  TrendingUp,
  Award,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { FeatureRows } from "@/components/blocks/FeatureRows";
import { ChecklistBlock } from "@/components/blocks/ChecklistBlock";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { jsonLdScript, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const title = "Guest Posting Services | Quality Backlinks";
const description =
  "Build authority, earn quality backlinks, and improve organic rankings with trusted guest posting services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/guest-posting" },
  openGraph: { title, description, url: `${siteConfig.url}/services/guest-posting` },
};

const differentiators = [
  { icon: Users, title: "Mass Manual Outreach", description: "Real, human outreach to genuine websites and webmasters never automated blasts." },
  { icon: Target, title: "Niche-Specific Selection", description: "Every website is chosen for relevance to your industry, not just its metrics." },
  { icon: PenLine, title: "Original, Quality Writing", description: "Professional writers craft every article for originality and editorial value." },
  { icon: Newspaper, title: "Native Article Placement", description: "Your brand is placed naturally within valuable, newsworthy articles." },
  { icon: ShieldCheck, title: "White-Hat SEO Techniques", description: "Every campaign follows practices that align with Google's quality guidelines." },
  { icon: BarChart3, title: "Transparent Reporting", description: "Clear, honest communication and reporting throughout every campaign." },
  { icon: Settings2, title: "Customized Campaigns", description: "Every campaign is built around your goals never a standard, one-size package." },
];

const includedRows = [
  {
    icon: Search,
    title: "Comprehensive Website Research",
    description:
      "It begins with picking the right websites for successful guest posting. Instead of looking only at metrics, we evaluate:",
    bullets: [
      "Industry relevance",
      "Organic traffic",
      "Editorial quality",
      "Website authority",
      "Audience engagement",
      "Publishing consistency",
    ],
  },
  {
    icon: Handshake,
    title: "Personalized Outreach Campaigns",
    description:
      "Quality publishers are found through excellent communication and authentic relationships. Our outreach specialists contact website owners, negotiate publishing opportunities, and handle every conversation on your behalf. Manual outreach instead of automated software means higher acceptance rates and placements on real websites.",
  },
  {
    icon: PenTool,
    title: "Professional Content Creation",
    description:
      "Good content is the key to a decent guest post. Our writing team produces informative, engaging, SEO-friendly articles that deliver real value to readers while organically integrating your brand. Every article is:",
    bullets: [
      "100% original",
      "Well-researched",
      "Optimized for readability",
      "Written according to publisher guidelines",
      "Edited before submission",
    ],
  },
  {
    icon: Link2,
    title: "Natural Backlink Placement",
    description:
      "Backlinks are woven naturally into the content rather than reading like an advertisement. Our writers place in-depth, relevant, contextual backlinks using sensible, context-appropriate anchor text improving on-page SEO while enhancing the reader's experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Editorial Coordination",
    description:
      "Editorial policies differ from publisher to publisher. We handle revisions, formatting, communication, and final approval so your article is published seamlessly, with no unnecessary delays.",
  },
  {
    icon: BarChart3,
    title: "Campaign Reporting",
    description:
      "Transparency is a core value. Once your articles are published, you receive a full report with every live URL, publication date, and campaign update so you always know exactly what has been delivered.",
  },
];

const growthBenefits = [
  { icon: TrendingUp, title: "Improve Organic Search Rankings", description: "Links from proper, relevant websites build credibility for search engines and help your most important keywords climb naturally over time." },
  { icon: Award, title: "Increase Brand Authority", description: "Publishing on respected websites positions your business as an industry authority readers already trust." },
  { icon: Users, title: "Generate Qualified Referral Traffic", description: "Content placed on niche-relevant sites attracts visitors who are genuinely likely to engage with your business." },
  { icon: Link2, title: "Build a Stronger Backlink Profile", description: "Placement on high-authority, diverse websites protects your profile and keeps your SEO efforts sustainable." },
];

const qualityEvaluation = [
  "Domain Authority (DA)",
  "Domain Rating (DR)",
  "Organic traffic",
  "Niche relevance",
  "Editorial quality",
  "Website trustworthiness",
  "Publishing consistency",
  "Audience engagement",
  "Backlink profile",
];

const whiteHatProcess = [
  "Manual outreach",
  "Human-written content",
  "Editorial review",
  "Natural anchor text",
  "Contextual backlink placement",
  "Quality assurance before publication",
];

const niches = [
  "Technology", "SaaS", "Artificial Intelligence", "Digital Marketing", "SEO", "Business",
  "Finance", "Cryptocurrency", "Real Estate", "Legal", "Healthcare", "Medical", "Dental",
  "Fitness", "Education", "Travel", "Lifestyle", "Fashion", "Beauty", "Home Improvement",
  "Construction", "Automotive", "Gaming", "Food", "E-commerce", "Retail", "Manufacturing",
  "Logistics", "Cybersecurity", "Web Development", "Mobile Apps", "Cloud Computing",
  "Insurance", "HR", "Recruiting", "Startups", "B2B", "B2C",
];

const processSteps = [
  { title: "Understanding Your Goals", description: "Every campaign begins with an extensive consultation covering your business model, audience, industry, competitors, and SEO objectives." },
  { title: "Finding High-Quality Websites", description: "Our outreach specialists research niche-relevant websites against a strict quality criteria well beyond DR or DA alone." },
  { title: "Manual Outreach", description: "We contact publishers directly, building authentic relationships with editors and site owners for compelling opportunities." },
  { title: "Creating High-Quality Content", description: "Our editors craft informative, engaging, SEO-friendly articles that respect each publisher's editorial guidelines." },
  { title: "Editorial Review & Publication", description: "We coordinate with editors on revisions and formatting, then move to publication once final approval is given." },
  { title: "Quality Assurance & Reporting", description: "We confirm backlinks, anchor text, and formatting, then send a detailed report with live URLs and campaign details." },
];

const whatSetsUsApart = [
  "Manual outreach to real publishers",
  "High-quality, niche-relevant websites",
  "Experienced SEO specialists",
  "Professional content writers",
  "Customized outreach campaigns",
  "Transparent communication",
  "Reliable turnaround times",
  "Strict quality control",
  "White-hat SEO practices",
];

const faqs = [
  { question: "What are guest posting services?", answer: "Guest posting services help you earn high-quality backlinks by publishing content on trusted websites." },
  { question: "Why should I choose your guest posting service?", answer: "We provide manual outreach, premium content, and quality backlinks that support long-term SEO growth." },
  { question: "Do you provide high DR/DA guest posts?", answer: "Yes, we offer high DR/DA guest posts on carefully selected, niche-relevant websites." },
  { question: "Can you work with any industry?", answer: "Yes, we provide guest posting solutions across 50+ industries and niches." },
  { question: "How long does the guest posting process take?", answer: "Most guest posting campaigns are completed within 2–4 weeks, depending on publisher availability." },
  { question: "Are the backlinks safe for SEO?", answer: "Yes, we use white-hat guest posting practices to build safe and natural backlinks." },
];

export default function GuestPostingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({ name: "Guest Posting Services", description, href: "/services/guest-posting" })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Guest Posting", href: "/services/guest-posting" },
          ])
        )}
      />

      <PageHero
        eyebrow="Guest Posting Services"
        title="Build Authority, Earn Quality Backlinks & Drive Real SEO Results"
        description="Through manual outreach and high-end content creation, we help businesses, agencies, startups, bloggers, and SEO professionals earn premium editorial backlinks customized for your niche so every link actually makes sense for SEO."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Guest Posting", href: "/services/guest-posting" },
        ]}
        image={images.laptopTyping}
        imageAlt="Writer drafting a guest post on a laptop"
      />

      <Section>
        <Prose>
          <p>
            In this highly competitive digital landscape, growing a website takes more than
            publishing great content. To rank higher, build visibility, and earn long-term
            authority, your site needs high-quality links from relevant, respected websites
            which is exactly what our guest posting services are built to deliver.
          </p>
          <p>
            Unlike automated link-building methods that chase quantity, our approach is built
            around quality, relevance, and long-term results. Our outreach specialists secure the
            right placements for your brand, while our professional writers craft newsworthy
            articles that comply with editorial guidelines and promote your brand seamlessly.
          </p>
          <p>
            From improving keyword rankings to building domain authority, driving relevant
            traffic, and establishing a strong online reputation our guest post service handles
            everything from audience research to content creation, outreach, and publication, so
            you can grow your business with confidence.
          </p>
        </Prose>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Right Choice for Your Business"
          description="We never rely on shortcuts or cheap backlinks. Every guest post campaign is a well-thought-out strategy that adheres to industry standards and Google's quality guidelines analyzed against your industry, target market, and SEO goals for a stronger, more sustainable backlink profile."
        />
        <IconFeatureGrid items={differentiators} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What's Included"
          title="Everything in Our Professional Guest Posting Service"
          description="We manage every aspect of the campaign from identifying relevant websites to publishing the highest-quality content with care and precision."
        />
        <FeatureRows rows={includedRows} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Long-Term Growth"
          title="Unlock Long-Term SEO Growth With High-Quality Guest Posting"
          description="We connect your content with high-quality, relevant websites rather than chasing hundreds of low-quality links every placement is chosen to deliver the best SEO value while putting your name in front of a wider audience."
        />
        <IconFeatureGrid items={growthBenefits} columns={4} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Quality Standards"
          title="Get High DR/DA Guest Posts That Deliver Real Results"
          description="Successful SEO requires much more than impressive metrics. Every publishing opportunity goes through a detailed evaluation before we recommend it."
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-ink-950">Our Quality Evaluation Includes</h3>
            <div className="mt-5">
              <ChecklistBlock items={qualityEvaluation} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-ink-950">White-Hat Link Building Process</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
              Every campaign follows ethical SEO practices aligned with Google&apos;s recommendations.
            </p>
            <div className="mt-5">
              <ChecklistBlock items={whiteHatProcess} columns={1} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="50+ Niches"
          title="Expand Your Reach Across 50+ Niches"
          description="Whatever market you target, our outreach team has relevant publishers ready. If your niche isn't listed, we'll conduct custom research to find the right opportunities."
        />
        <div className="flex flex-wrap gap-2.5">
          {niches.map((niche) => (
            <span
              key={niche}
              className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2.5 font-display text-sm font-bold text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-700"
            >
              <span className="size-1.5 rounded-full bg-primary-600" aria-hidden="true" />
              {niche}
            </span>
          ))}
          <span className="inline-flex items-center rounded-lg border border-primary-600 bg-primary-600 px-4 py-2.5 font-display text-sm font-bold text-white">
            + many more
          </span>
        </div>
      </Section>

      <Section id="process">
        <SectionHeading
          eyebrow="Our Process"
          title="From Outreach to Publication"
          description="A simple, proven process that takes every campaign from strategy to a live, reported placement streamlined from start to finish."
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Businesses Trust Us"
          title="Your Preferred Guest Post Agency"
          description="We don't believe guest posting is only about backlinks it's about making connections, earning respect for your brand, and creating lasting authority."
        />
        <ChecklistBlock items={whatSetsUsApart} />
      </Section>

      <FAQSection items={faqs} description="Common questions about our guest posting services." />

      <RelatedServices exclude="guest-posting" />
      <CTASection
        title="Ready to Earn Backlinks That Actually Move the Needle?"
        description="Tell us about your niche, target pages, and goals we'll build a guest posting campaign designed around real SEO value."
      />
    </>
  );
}
