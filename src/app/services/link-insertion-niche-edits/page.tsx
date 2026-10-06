import type { Metadata } from "next";
import {
  Target,
  AlignLeft,
  Award,
  Type,
  Crosshair,
  Briefcase,
  Cpu,
  ShoppingCart,
  MapPin,
  Rocket,
  Link2,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { ChecklistBlock } from "@/components/blocks/ChecklistBlock";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { jsonLdScript, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const title = "Link Insertion Service | Niche Edits & High-Authority Backlinks";
const description =
  "Get premium link insertion service and niche edits to build high-authority backlinks, boost rankings, and drive more organic traffic.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/link-insertion-niche-edits" },
  openGraph: { title, description, url: `${siteConfig.url}/services/link-insertion-niche-edits` },
};

const serviceBenefits = [
  "Relevant contextual backlink placements",
  "Established websites across multiple niches",
  "Manually reviewed placement opportunities",
  "Natural anchor text integration",
  "Existing content placements",
  "Targeted pages relevant to your industry",
  "Transparent placement reporting",
  "Scalable campaigns for businesses and agencies",
];

const nicheEditTargets = [
  { icon: Target, title: "Relevance", description: "Your linking site and article must be within your niche or a closely related topic." },
  { icon: AlignLeft, title: "Related Context", description: "The backlink needs to flow naturally within the context of that paragraph." },
  { icon: Award, title: "Quality", description: "We only work with well-maintained websites that offer high value to readers." },
  { icon: Type, title: "Natural Anchors", description: "Anchor text should sound natural within the sentence, never forced." },
  { icon: Crosshair, title: "Strategic Targeting", description: "Links are directed to the right page for your goals, not just the homepage." },
];

const efficiencyBenefits = [
  "Save content production time",
  "Build contextual backlinks",
  "Reach established audiences",
  "Promote important website pages",
  "Scale your backlink campaign",
  "Support your broader SEO strategy",
];

const agencyFocus = [
  "SEO strategy",
  "Technical optimization",
  "Client communication",
  "Content planning",
  "Performance analysis",
  "Business development",
];

const buyNicheEditCriteria = [
  "Match your niche or closely related topics",
  "Appear within relevant existing content",
  "Use natural contextual references",
  "Point to useful pages on your website",
  "Offer potential referral traffic",
  "Support a diversified backlink profile",
];

const resourceExamples = [
  "A detailed industry guide",
  "Original research",
  "A useful software tool",
  "An informative service page",
  "A comprehensive resource",
  "A valuable product category",
];

const processSteps = [
  { title: "Share Your Requirements", description: "Send us your website, target URLs, niche, preferred anchor text, and campaign requirements." },
  { title: "Find Relevant Opportunities", description: "We research potential websites and existing articles that are relevant to your industry." },
  { title: "Review and Qualify", description: "Potential placements are evaluated for relevance, content quality, website strength, and overall suitability." },
  { title: "Secure the Placement", description: "We communicate with publishers and work toward a contextual placement that fits naturally within the content." },
  { title: "Receive Your Report", description: "Once the placement is live, you receive the published URL and relevant campaign details for your records." },
];

const audiences = [
  { icon: Briefcase, title: "SEO Agencies", description: "Outsource backlink acquisition while focusing on strategy and client results." },
  { icon: Cpu, title: "SaaS Companies", description: "Build relevant links to product pages, guides, and educational resources." },
  { icon: ShoppingCart, title: "E-commerce Businesses", description: "Promote important product categories and supporting content." },
  { icon: MapPin, title: "Local Businesses", description: "Strengthen service pages and improve visibility within competitive markets." },
  { icon: Rocket, title: "Startups", description: "Build website authority while developing a long-term organic growth strategy." },
  { icon: Link2, title: "Affiliate Websites", description: "Acquire relevant backlinks to valuable commercial and informational pages." },
];

const faqs = [
  { question: "What is a link insertion service?", answer: "A link insertion service helps businesses get backlinks by inserting their website links into relevant content already available on an external site." },
  { question: "Are niche edits useful for SEO?", answer: "Contextual placements that are genuinely relevant can benefit your overall SEO strategy and connect sites and resources together. It comes down to the importance and relevance of the placement." },
  { question: "How do I buy niche edits?", answer: "Choose a provider that evaluates websites for relevance, content quality, organic visibility, and placement suitability rather than selling links based only on domain metrics." },
  { question: "Do you provide link insertion service for agencies?", answer: "Yes. Our link insertion service for agencies is designed to help agencies scale backlink campaigns for their clients while reducing the time required for prospecting and outreach." },
  { question: "How many backlinks do I need?", answer: "There is no single number that works for every website the right strategy depends on your niche, competition, current backlink profile, content quality, and SEO goals." },
  { question: "Can link insertion increase organic traffic?", answer: "Links placed on pages with an active, relevant audience can help you gain both SEO visibility and referral traffic." },
];

export default function LinkInsertionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({ name: "Link Insertion & Niche Edits", description, href: "/services/link-insertion-niche-edits" })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Link Insertion & Niche Edits", href: "/services/link-insertion-niche-edits" },
          ])
        )}
      />

      <PageHero
        eyebrow="Link Insertion & Niche Edits"
        title="Premium Link Insertion Service for High-Authority Backlinks"
        description="Get relevant, contextual backlinks from credible sites without waiting weeks for a new guest post to go live. We find appropriate existing content on established websites and place your link where it naturally belongs."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Link Insertion & Niche Edits", href: "/services/link-insertion-niche-edits" },
        ]}
        image={images.deskOverhead}
        imageAlt="Team reviewing content across several laptops"
      />

      <Section>
        <Prose>
          <p>
            The more high-quality backlinks your website earns, the more influential you appear
            to search engines and the more relevant referral traffic you can attract. But not
            all backlinks are equal: a link from an irrelevant or low-quality website does little
            for your SEO strategy.
          </p>
          <p>
            We work only with relevant sites, quality content, contextual links, and natural
            anchor text. Whether you&apos;re an SEO agency, SaaS company, e-commerce brand, local
            business, or online publisher, our niche edits service can be adapted to your needs
            a trustworthy, high-quality way to buy contextual backlinks and grow organic traffic
            over the long run.
          </p>
        </Prose>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A More Efficient Way to Acquire Backlinks"
          description="Building quality backlinks manually requires extensive research, outreach, negotiation, and placement verification. We handle the full process from prospecting to placement focused on relevance, not random volume."
        />
        <ChecklistBlock items={serviceBenefits} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Niche Edits"
          title="Powerful Contextual Backlinks in Existing Content"
          description="Rather than creating a brand-new article, we identify a relevant existing page and naturally mention your website within it chosen for topic, context, and relevance to your target page."
        />
        <IconFeatureGrid items={nicheEditTargets} />
      </Section>

      <Section tone="muted">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Efficiency"
              title="High-Authority Backlinks Without New Content"
              description="Traditional guest posting means researching, writing, editing, and waiting for publication. With an existing-content placement, the article is already live we simply identify the right section to add your link."
            />
          </div>
          <div className="flex items-center">
            <ChecklistBlock items={efficiencyBenefits} columns={1} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="For Agencies"
              title="Link Insertion Service for Agencies"
              description="Provide your client's target URLs, preferred topics, anchor text requirements, and campaign goals we handle prospecting, outreach, placement, and reporting, so your team can focus on:"
            />
          </div>
          <div className="flex items-center">
            <ChecklistBlock items={agencyFocus} columns={1} />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Quality-Focused"
          title="Buy Niche Edits From a Quality-Focused Provider"
          description="A high domain score alone doesn't guarantee a valuable backlink. We also weigh topical relevance, content quality, organic visibility, website history, and individual page quality. Our placements are chosen to:"
        />
        <ChecklistBlock items={buyNicheEditCriteria} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Off-Page Strategy"
          title="Link Insertion as a Smarter Off-Page SEO Strategy"
          description="Link insertion is especially useful when you have valuable pages that deserve more exposure. You may have already created:"
        />
        <ChecklistBlock items={resourceExamples} />
      </Section>

      <Section tone="muted" id="process">
        <SectionHeading
          eyebrow="Our Process"
          title="A Simple 5-Step Link Placement Process"
          description="A streamlined process that saves time while keeping your backlink campaign organized."
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who It's For"
          title="Who Can Benefit From Our Service?"
          description="Regardless of your industry, the basic principle stays the same: backlinks should be relevant, contextual, and valuable."
        />
        <AudienceGrid items={audiences} />
      </Section>

      <FAQSection items={faqs} description="Common questions about link insertion and niche edits." />

      <RelatedServices exclude="link-insertion-niche-edits" />
      <CTASection
        title="Start Building Better Backlinks Today"
        description="Share your web pages, target pages, niche, and link-building objectives let's build a smarter backlinking strategy for long-term organic progress."
      />
    </>
  );
}
