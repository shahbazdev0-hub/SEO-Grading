import { images } from "./images";

// Starter articles for the blog. Replace or extend with real posts (or wire this up to a CMS).

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readTime: string;
  author: string;
  image: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-makes-a-high-quality-backlink",
    title: "What Makes a High-Quality Backlink in 2026?",
    excerpt:
      "Domain Rating is only the starting point. Here are the signals we check before recommending any placement.",
    category: "Link Building",
    date: "2026-09-29",
    readTime: "7 min read",
    author: "SEO Grading Team",
    image: images.analytics,
    sections: [
      {
        heading: "Metrics are a filter, not a verdict",
        paragraphs: [
          "Domain Rating and Domain Authority are useful for narrowing a list of prospects, but they are easy to inflate. A site can carry a high score while receiving almost no real traffic from search.",
          "That's why we treat third-party metrics as the first filter rather than the final decision. A placement has to earn its place on several other signals before we recommend it.",
        ],
      },
      {
        heading: "The signals that actually matter",
        paragraphs: ["When we review a publisher, we look for evidence that real readers and search engines trust it:"],
        bullets: [
          "Consistent organic traffic without sudden spikes or cliffs",
          "Topical relevance to your page not just your industry",
          "A healthy ratio of incoming to outgoing links",
          "Real editorial standards and no open \"write for us\" price list",
          "Placement inside the body content, not footers or author bios",
        ],
      },
      {
        heading: "Relevance at the page level",
        paragraphs: [
          "A link from an article about your exact subject usually passes more value than a homepage link from a large, loosely related site. We match at the page level so every link sits in content that genuinely relates to the page it points to.",
        ],
      },
    ],
  },
  {
    slug: "guest-posts-vs-niche-edits",
    title: "Guest Posts vs. Niche Edits: Which Should You Choose?",
    excerpt:
      "Both build authority, but they work differently. Here's how to decide which fits your campaign and budget.",
    category: "Link Building",
    date: "2026-09-18",
    readTime: "6 min read",
    author: "SEO Grading Team",
    image: images.laptopTyping,
    sections: [
      {
        heading: "How guest posts work",
        paragraphs: [
          "A guest post is a new article written for a publisher's audience that includes a contextual link to your site. You control the topic and angle, which makes guest posts ideal for supporting specific pages and building topical authority.",
        ],
      },
      {
        heading: "How niche edits work",
        paragraphs: [
          "A niche edit (or link insertion) adds your link to an article that is already published and indexed. Because the page already has age and authority, niche edits often start passing value sooner.",
        ],
      },
      {
        heading: "Choosing the right mix",
        paragraphs: ["Most healthy link profiles use both. As a rule of thumb:"],
        bullets: [
          "Use guest posts to build topical depth and support new content",
          "Use niche edits for faster impact on existing commercial pages",
          "Keep anchor text natural across both to avoid over-optimization",
        ],
      },
    ],
  },
  {
    slug: "technical-seo-audit-checklist",
    title: "The Technical SEO Audit Checklist We Use on Every Site",
    excerpt:
      "Crawlability, indexation, and speed issues quietly cap your rankings. This is the checklist we start every audit with.",
    category: "Technical SEO",
    date: "2026-09-04",
    readTime: "9 min read",
    author: "SEO Grading Team",
    image: images.serverRoom,
    sections: [
      {
        heading: "Start with crawlability",
        paragraphs: [
          "If search engines can't reach a page efficiently, nothing else matters. We begin by crawling the site the way a search engine would and comparing what we find against what's actually indexed.",
        ],
        bullets: [
          "Robots.txt rules and accidental blocks",
          "XML sitemap accuracy and freshness",
          "Orphaned pages with no internal links",
          "Redirect chains and broken internal links",
        ],
      },
      {
        heading: "Then check indexation",
        paragraphs: [
          "Indexation issues often come from duplicate content, faceted navigation, or conflicting canonical tags. We prioritise the pages that drive revenue and make sure they're indexed cleanly.",
        ],
      },
      {
        heading: "Finish with performance",
        paragraphs: [
          "Core Web Vitals won't rescue weak content, but slow, unstable pages do hurt both rankings and conversions. We focus on the fixes with the largest impact on real users first.",
        ],
      },
    ],
  },
  {
    slug: "on-page-seo-search-intent",
    title: "On-Page SEO Starts With Search Intent, Not Keywords",
    excerpt:
      "Stuffing keywords into a page doesn't make it relevant. Matching what searchers actually want does.",
    category: "On-Page SEO",
    date: "2026-08-21",
    readTime: "5 min read",
    author: "SEO Grading Team",
    image: images.wireframes,
    sections: [
      {
        heading: "Read the results page first",
        paragraphs: [
          "Before optimizing a page, look at what already ranks. If the top results are comparison guides and your page is a product page, the problem isn't your keyword density it's the format.",
        ],
      },
      {
        heading: "Structure the page around the questions",
        paragraphs: [
          "Headings, sections, and FAQs should answer the questions a searcher has, in the order they have them. This improves readability for people and clarity for search engines.",
        ],
        bullets: [
          "One primary topic per page",
          "Descriptive, intent-matched titles and headings",
          "Internal links from related, authoritative pages",
        ],
      },
    ],
  },
  {
    slug: "white-label-seo-for-agencies",
    title: "How Agencies Scale SEO With a White Label Partner",
    excerpt:
      "Reselling SEO lets agencies grow without building an in-house fulfillment team. Here's what a good partnership looks like.",
    category: "White Label SEO",
    date: "2026-08-07",
    readTime: "6 min read",
    author: "SEO Grading Team",
    image: images.agencyTeam,
    sections: [
      {
        heading: "Why agencies outsource fulfillment",
        paragraphs: [
          "Hiring and training outreach specialists, writers, and technical SEOs takes months and adds fixed cost. A white label partner lets an agency offer those services immediately while keeping its team focused on strategy and clients.",
        ],
      },
      {
        heading: "What to look for in a partner",
        paragraphs: ["The right partner should feel like an extension of your team:"],
        bullets: [
          "Unbranded reporting you can forward as-is",
          "Transparent processes and live placement URLs",
          "Quality standards that protect your clients' sites",
          "A single, responsive point of contact",
        ],
      },
    ],
  },
  {
    slug: "measuring-off-page-seo-success",
    title: "How to Measure the Success of an Off-Page SEO Campaign",
    excerpt:
      "Link counts alone don't tell you if a campaign is working. These are the indicators we report on instead.",
    category: "Off-Page SEO",
    date: "2026-07-24",
    readTime: "5 min read",
    author: "SEO Grading Team",
    image: images.strategy,
    sections: [
      {
        heading: "Look beyond the number of links",
        paragraphs: [
          "Fifty irrelevant links can do less for a site than five well-placed ones. Measuring success means tracking whether authority is actually reaching the pages that matter.",
        ],
        bullets: [
          "Growth in relevant referring domains",
          "Ranking movement for target-page keywords",
          "Organic and referral traffic to linked pages",
          "Leads and conversions from organic search",
        ],
      },
      {
        heading: "Give it the right timeframe",
        paragraphs: [
          "Off-page SEO compounds. Most campaigns show early movement within a few months, with the strongest gains building over six to twelve months of consistent work.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
