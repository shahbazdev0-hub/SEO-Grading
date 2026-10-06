import { images } from "./images";
import type { ServiceKey } from "./site";

// PLACEHOLDER CONTENT — these case studies are illustrative samples so the layout can be
// reviewed. Replace every client, metric, and quote with real, verifiable campaign data
// (and client permission) before the site goes live.

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  duration: string;
  services: ServiceKey[];
  image: string;
  headline: string;
  summary: string;
  metrics: CaseStudyMetric[];
  /** Relative organic-traffic index per month (0–100) used for the trend chart. */
  trend: number[];
  /** Index in `trend` where the campaign started. */
  startIndex: number;
  challenge: string;
  approach: string[];
  results: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "b2b-saas-platform",
    client: "B2B SaaS Platform",
    industry: "SaaS",
    duration: "9-month campaign",
    services: ["guest-posting", "on-page-seo", "technical-seo"],
    image: images.analytics,
    headline: "Turning a flat organic channel into a steady pipeline source",
    summary:
      "A project-management SaaS had strong product pages but almost no authority pointing at them. We paired relevance-first guest posts with on-page fixes on the pages that actually convert.",
    metrics: [
      { value: "+184%", label: "Organic traffic" },
      { value: "92", label: "Links built" },
      { value: "37", label: "Page-one keywords" },
    ],
    trend: [18, 17, 19, 18, 22, 27, 31, 36, 42, 47, 55, 61, 66],
    startIndex: 3,
    challenge:
      "The site ranked on page two or three for nearly every commercial keyword. Its backlink profile was thin, mostly directory links, and several high-intent pages were competing with each other for the same terms.",
    approach: [
      "Mapped every commercial keyword to a single target page and merged the cannibalising content.",
      "Ran manual outreach to project-management, productivity, and remote-work publishers for contextual guest posts.",
      "Fixed internal linking so authority flowed from the blog into feature and comparison pages.",
      "Resolved crawl waste from faceted URLs that was diluting indexation.",
    ],
    results:
      "Commercial pages moved from page two into the top five for their primary terms, and organic sign-ups became the platform's second-largest acquisition channel.",
  },
  {
    slug: "ecommerce-home-goods",
    client: "Home Goods E-commerce Store",
    industry: "E-commerce",
    duration: "6-month campaign",
    services: ["link-insertion-niche-edits", "on-page-seo"],
    image: images.deskOverhead,
    headline: "Category pages that finally out-rank the marketplaces",
    summary:
      "A home-goods retailer was losing category searches to large marketplaces. Contextual niche edits on established interior-design content gave their category pages the authority they lacked.",
    metrics: [
      { value: "+126%", label: "Category traffic" },
      { value: "64", label: "Niche edits" },
      { value: "+48%", label: "Organic revenue" },
    ],
    trend: [30, 29, 31, 30, 34, 39, 45, 50, 56, 60, 64],
    startIndex: 3,
    challenge:
      "Category pages had thin copy and almost no external links, so marketplaces and big-box retailers occupied the top results for every high-value collection.",
    approach: [
      "Rewrote category introductions and FAQs around real buyer questions.",
      "Placed contextual links inside aged, indexed home-improvement and interior-design articles.",
      "Balanced anchor text toward branded and partial-match variations.",
    ],
    results:
      "Six of the store's ten priority categories reached page one, and category-page revenue from organic search grew by nearly half within the campaign window.",
  },
  {
    slug: "regional-law-firm",
    client: "Regional Law Firm",
    industry: "Legal",
    duration: "12-month partnership",
    services: ["off-page-seo", "on-page-seo"],
    image: images.teamMeeting,
    headline: "Winning local practice-area searches in a crowded market",
    summary:
      "A multi-office law firm competed against directories and national brands. Locally relevant digital PR and practice-area page improvements built the trust signals they needed.",
    metrics: [
      { value: "+211%", label: "Practice-area traffic" },
      { value: "58", label: "Editorial links" },
      { value: "3.1x", label: "Contact enquiries" },
    ],
    trend: [12, 13, 12, 14, 17, 21, 26, 30, 35, 41, 46, 50, 54],
    startIndex: 2,
    challenge:
      "Legal directories dominated local results and the firm's practice-area pages read as generic, with no external signals tying them to the regions they served.",
    approach: [
      "Created region-specific legal guides that local news and community sites wanted to reference.",
      "Secured editorial mentions on legal, business, and regional publications.",
      "Restructured practice-area pages around client questions and location intent.",
    ],
    results:
      "The firm now appears in the top three for its core practice areas in every office location, and enquiries from organic search more than tripled.",
  },
  {
    slug: "seo-agency-white-label",
    client: "Digital Marketing Agency",
    industry: "Agency",
    duration: "Ongoing white-label partnership",
    services: ["white-label-seo", "guest-posting"],
    image: images.agencyTeam,
    headline: "Scaling link fulfillment without hiring an outreach team",
    summary:
      "A growing agency needed reliable link building across a mixed client roster. We became their behind-the-scenes fulfillment team with fully white-labelled reporting.",
    metrics: [
      { value: "24", label: "Client accounts" },
      { value: "1,100+", label: "Placements delivered" },
      { value: "0", label: "Outreach hires needed" },
    ],
    trend: [20, 24, 27, 31, 36, 40, 45, 49, 54, 58, 63, 67],
    startIndex: 0,
    challenge:
      "The agency was turning down link-building work because freelancers delivered inconsistent quality and every placement needed manual checking before it reached a client.",
    approach: [
      "Set up a white-label workflow with branded reports and a single point of contact.",
      "Matched each client to niche-relevant publishers instead of a generic site list.",
      "Delivered monthly placement batches with live URLs ready to forward.",
    ],
    results:
      "The agency added link building as a core retainer service across its roster while keeping its team focused on strategy and client relationships.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
