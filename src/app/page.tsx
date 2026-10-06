import type { Metadata } from "next";
import {
  Users,
  Target,
  ShieldCheck,
  BarChart3,
  Settings2,
  Award,
  Briefcase,
  Cpu,
  ShoppingCart,
  MapPin,
  Rocket,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CapabilityShowcase } from "@/components/home/CapabilityShowcase";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconFeatureGrid } from "@/components/blocks/IconFeatureGrid";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { NicheMarquee } from "@/components/blocks/NicheMarquee";
import { CTASection } from "@/components/blocks/CTASection";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { caseStudies } from "@/lib/caseStudies";
import { blogPosts } from "@/lib/blog";
import { CaseStudyCarousel } from "@/components/blocks/CaseStudyCarousel";
import { BlogCard } from "@/components/blocks/BlogCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

const title = `${siteConfig.name} | Guest Posting, Link Building & SEO Services`;
const description = siteConfig.description;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: siteConfig.url },
};

const differentiators = [
  { icon: Users, title: "100% Manual Outreach", description: "Real relationships with real publishers never spun-up automation or spam." },
  { icon: Target, title: "Niche-Relevant Placements", description: "Every opportunity is evaluated for relevance to your industry, not just its metrics." },
  { icon: ShieldCheck, title: "White-Hat Only", description: "Every campaign follows practices aligned with Google's quality guidelines." },
  { icon: BarChart3, title: "Transparent Reporting", description: "Live URLs, publication dates, and campaign details never a black box." },
  { icon: Settings2, title: "Customized Strategy", description: "Campaigns are built around your goals, not a fixed, one-size package." },
  { icon: Award, title: "Quality Over Quantity", description: "We focus on placements that carry real SEO and referral value." },
];

const processSteps = [
  { title: "Understand Your Goals", description: "We dive into your business, audience, competitors, and SEO objectives to shape a strategy that fits." },
  { title: "Research & Strategy", description: "We identify the right websites, pages, and opportunities based on relevance not just domain metrics." },
  { title: "Outreach & Execution", description: "Our specialists handle manual outreach, content creation, and placement or implementation." },
  { title: "Reporting & Optimization", description: "You receive transparent reporting, and we refine the strategy as results and search conditions evolve." },
];

const audiences = [
  { icon: Briefcase, title: "Agencies", description: "White label fulfillment and link campaigns that scale with your client roster." },
  { icon: Cpu, title: "SaaS Companies", description: "Authority building for competitive, high-value software markets." },
  { icon: ShoppingCart, title: "E-commerce Brands", description: "Category and product page support through relevant, contextual links." },
  { icon: MapPin, title: "Local Businesses", description: "Stronger service pages and regional visibility in competitive markets." },
  { icon: Rocket, title: "Startups", description: "Foundational authority building for long-term organic growth." },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema([{ name: "Home", href: "/" }]))}
      />

      <Hero />
      <ServicesGrid />
      <CapabilityShowcase />

      <Section tone="navy">
        <SectionHeading
          eyebrow="Why SEO Grading"
          title="Real Authority, Not Shortcuts"
          highlight="Not Shortcuts"
          description="We never rely on cheap, high-volume link building. Every campaign is a deliberate, relevance-first strategy built to protect your site and compound in value over time."
          dark
        />
        <IconFeatureGrid items={differentiators} dark />
      </Section>

      <Section id="process">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="Our Process"
            title="A Simple, Transparent Way of Working"
            highlight="Transparent Way of Working"
            description="Whichever service you need, the foundations stay the same understand, research, execute, and report."
          />
          <Reveal delay={0.1} className="relative hidden aspect-[16/9] overflow-hidden rounded-2xl lg:block">
            <Image
              src={images.strategy}
              alt="SEO strategists planning a campaign at a whiteboard"
              fill
              sizes="(min-width: 1024px) 600px, 0px"
              className="object-cover"
            />
          </Reveal>
        </div>
        <ProcessSteps steps={processSteps} />
        <Reveal>
          <Button href="/contact" size="lg">
            Get Free Consultation
          </Button>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Case Studies"
          title="Our Results Speak for Our Work"
          highlight="Speak for Our Work"
          description="Every campaign is built on human outreach to real publishers. Here are the numbers behind a few of them."
          action={
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-1.5 border-b-2 border-primary-600 pb-0.5 text-sm font-semibold text-ink-950"
            >
              View all case studies
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          }
        />
        <CaseStudyCarousel studies={caseStudies} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for Every Kind of Business"
          highlight="Every Kind of Business"
          description="Agencies, SaaS companies, e-commerce brands, local businesses, and startups all rely on relevant, quality-first SEO."
          align="center"
        />
        <AudienceGrid items={audiences} image={images.collaboration} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="50+ Niches"
          title="Guest Posting & Link Building Across Every Industry"
          highlight="Every Industry"
          description="From SaaS and fintech to healthcare, legal, and e-commerce our outreach network spans more than 50 niches."
        />
        <NicheMarquee />
      </Section>

      <Section className="!pb-0">
        <SectionHeading
          eyebrow="Blogs"
          title="Insights From Our Link Building Team"
          highlight="Link Building Team"
          description="Practical guides on links, outreach, and rankings straight from the people doing the work."
          action={
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-1.5 border-b-2 border-primary-600 pb-0.5 text-sm font-semibold text-ink-950"
            >
              All articles
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          }
        />
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <RevealItem key={post.slug}>
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <CTASection />
    </>
  );
}
