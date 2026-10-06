import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/blocks/BlogCard";
import { blogPosts, getBlogPost, formatPostDate } from "@/lib/blog";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function BlogPostPage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: post.title, href: `/blogs/${post.slug}` },
  ];
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blogs/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleSchema)} />

      <section className="relative overflow-hidden bg-ink-950 pb-40 sm:pb-48">
        <div className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative pt-10 sm:pt-12">
          <Breadcrumbs items={breadcrumbs} dark />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Eyebrow dark className="mx-auto">
              {post.category}
            </Eyebrow>
            <h1 className="mt-5 text-balance text-[2.1rem] leading-[1.12] font-extrabold text-white sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{post.excerpt}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-primary-300">
              {post.author} · <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readTime}
            </p>
          </div>
        </Container>
      </section>

      <Container className="relative -mt-32 sm:-mt-40">
        <Reveal className="relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl shadow-ink-950/20">
          <Image src={post.image} alt="" fill preload sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
        </Reveal>
      </Container>

      <Container className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="min-w-0">
            {post.sections.map((section) => (
              <Reveal key={section.heading} className="mb-10 last:mb-0">
                <h2 id={slugify(section.heading)} className="scroll-mt-24 text-2xl font-extrabold text-ink-950 sm:text-[1.75rem]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-base leading-[1.85] text-ink-700 sm:text-[17px]">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 flex flex-col gap-3 rounded-xl border border-ink-200 bg-mist p-5 sm:p-6">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-800">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                          <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            <Link
              href="/blogs"
              className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary-700"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Back to all articles
            </Link>
          </article>

          <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="On this page" className="rounded-xl border border-ink-200 p-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-600">On this page</p>
              <ul className="mt-3 flex flex-col gap-2.5 border-l border-ink-200">
                {post.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="-ml-px block border-l-2 border-transparent pl-3 text-sm text-ink-600 transition-colors hover:border-primary-600 hover:text-ink-950"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="relative overflow-hidden rounded-xl bg-ink-950 p-6 text-white">
              <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <p className="font-display text-lg font-bold">Need help applying this?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  Get a free consultation and a strategy built around your niche.
                </p>
                <Button href="/contact" className="mt-5 w-full">
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t border-primary-100/60 bg-mist py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink-950 sm:text-3xl">Keep Reading</h2>
          </Reveal>
          <RevealGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <RevealItem key={p.slug}>
                <BlogCard post={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
