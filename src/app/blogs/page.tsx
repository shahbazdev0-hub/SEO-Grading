import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/blocks/BlogCard";
import { BlogGrid } from "@/components/blocks/BlogGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { blogPosts, formatPostDate } from "@/lib/blog";
import { images } from "@/lib/images";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "SEO & Link Building Blog";
const description =
  "Practical guides on link building, outreach, on-page, and technical SEO straight from the team doing the work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blogs" },
  openGraph: { title: `${title} | ${siteConfig.name}`, description, url: `${siteConfig.url}/blogs` },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
];

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts;
  const categories = Array.from(new Set(rest.map((p) => p.category)));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(breadcrumbs))} />

      <PageHero
        eyebrow="Blogs"
        title="Insights From Our Link Building Team"
        description={description}
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: "Get Free Consultation", href: "/contact" }}
        image={images.laptopTyping}
        imageAlt="Writer drafting an article on a laptop"
      />

      <Section>
        <Reveal>
          <Link
            href={`/blogs/${featured.slug}`}
            className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-ink-200 bg-white transition-shadow duration-300 hover:shadow-[0_30px_60px_-34px_rgba(10,22,49,0.45)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[340px]">
              <Image
                src={featured.image}
                alt=""
                fill
                preload
                sizes="(min-width: 1024px) 680px, 100vw"
                className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-primary-600 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Featured
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary-700">{featured.category}</span>
              </div>
              <h2 className="mt-4 text-2xl leading-tight font-extrabold text-ink-950 transition-colors group-hover:text-primary-700 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600 sm:text-base">{featured.excerpt}</p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-500">
                <time dateTime={featured.date}>{formatPostDate(featured.date)}</time> · {featured.readTime}
              </p>
              <span className="mt-6 inline-flex w-fit items-center gap-1.5 border-b-2 border-primary-600 pb-0.5 text-sm font-semibold text-ink-950">
                Read article
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>

        <BlogGrid
          categories={categories}
          cards={rest.map((post) => ({ key: post.slug, category: post.category, node: <BlogCard post={post} /> }))}
        />
      </Section>

      <CTASection
        className="!pt-0"
        title="Ready to Put These Ideas to Work?"
        description="Tell us about your website and goals we'll turn strategy into placements, rankings, and reporting you can trust."
      />
    </>
  );
}
