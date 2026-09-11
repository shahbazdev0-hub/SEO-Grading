export const siteConfig = {
  name: "SEO Grading",
  shortName: "SEO Grading",
  url: "https://seograding.com",
  email: "hello@seograding.com",
  description:
    "SEO Grading provides guest posting, link insertion, on-page, off-page, technical, and white label SEO services built on manual outreach, quality placements, and transparent reporting.",
  social: {
    linkedin: "",
    twitter: "",
  },
} as const;

export type ServiceKey =
  | "guest-posting"
  | "link-insertion-niche-edits"
  | "on-page-seo"
  | "off-page-seo"
  | "technical-seo"
  | "white-label-seo";

export interface ServiceSummary {
  key: ServiceKey;
  href: string;
  navLabel: string;
  title: string;
  shortDescription: string;
}

export const services: ServiceSummary[] = [
  {
    key: "guest-posting",
    href: "/services/guest-posting",
    navLabel: "Guest Posting",
    title: "Guest Posting Services",
    shortDescription:
      "Manual outreach and premium editorial content to earn quality guest post backlinks on niche-relevant websites.",
  },
  {
    key: "link-insertion-niche-edits",
    href: "/services/link-insertion-niche-edits",
    navLabel: "Link Insertion & Niche Edits",
    title: "Link Insertion & Niche Edits",
    shortDescription:
      "Contextual backlinks placed naturally inside existing, relevant articles for faster, high-authority link placements.",
  },
  {
    key: "on-page-seo",
    href: "/services/on-page-seo",
    navLabel: "On-Page SEO",
    title: "On-Page SEO Services",
    shortDescription:
      "Content, metadata, headings, internal links, and technical page elements optimized for relevance and search intent.",
  },
  {
    key: "off-page-seo",
    href: "/services/off-page-seo",
    navLabel: "Off-Page SEO",
    title: "Off-Page SEO Services",
    shortDescription:
      "Relevant link acquisition, publisher outreach, and digital PR that build sustainable domain authority.",
  },
  {
    key: "technical-seo",
    href: "/services/technical-seo",
    navLabel: "Technical SEO",
    title: "Technical SEO Services",
    shortDescription:
      "Crawlability, indexation, Core Web Vitals, and site architecture fixes that remove barriers to organic growth.",
  },
  {
    key: "white-label-seo",
    href: "/services/white-label-seo",
    navLabel: "White Label SEO",
    title: "White Label SEO Services",
    shortDescription:
      "Scalable SEO fulfillment for agencies who want to resell SEO under their own brand without building an in-house team.",
  },
];

export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/#services",
    children: services.map((s) => ({ label: s.navLabel, href: s.href })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
] as const;
