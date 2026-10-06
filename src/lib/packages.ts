// Package tiers shown on /packages. Prices are intentionally "custom" placeholders —
// set real figures in `price` when pricing is finalised.

export interface PricingPlan {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Custom",
    cadence: "per month",
    description: "For smaller websites building their first quality backlink profile.",
    features: [
      "Backlink & competitor analysis",
      "Niche-relevant guest posts",
      "Manual publisher outreach",
      "Original, editor-approved content",
      "Monthly report with live URLs",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "Custom",
    cadence: "per month",
    description: "For businesses competing in more demanding search environments.",
    features: [
      "Everything in Starter",
      "Guest posts + niche edits mix",
      "Multiple target pages",
      "On-page optimization for linked pages",
      "Dedicated SEO strategist",
      "Quarterly strategy review",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Authority / White Label",
    price: "Custom",
    description: "For established brands and agencies that need volume, scale, or reseller delivery.",
    features: [
      "Higher-authority placements",
      "Digital PR opportunities",
      "Technical SEO support",
      "White-label reporting for agencies",
      "Priority turnaround",
    ],
    cta: "Talk to Us",
  },
];

export const authorityTiers = [
  { tier: "DR 30–50", description: "Niche blogs and growing industry publishers" },
  { tier: "DR 50–70", description: "Established niche authorities with steady traffic" },
  { tier: "DR 70+", description: "Major publications and high-authority media" },
];

export const packageComparison: [string, string, string][] = [
  ["Link quality", "Manually vetted, niche-relevant", "Volume-first, mixed quality"],
  ["Outreach", "Real publisher relationships", "Automated or resold inventory"],
  ["Content", "Original, editor-approved articles", "Templated or spun content"],
  ["Transparency", "Live URLs and full reporting", "Minimal reporting"],
  ["Strategy", "Built around your target pages", "One-size-fits-all lists"],
  ["Risk profile", "White-hat, guideline-aligned", "Often PBNs or link farms"],
];

export const packageFaqs = [
  {
    question: "Why are your packages priced on request?",
    answer:
      "Link costs depend on your niche, the authority of the publishers involved, and how competitive your keywords are. We quote after reviewing your site so you only pay for placements that make sense for your goals.",
  },
  {
    question: "Can I change packages later?",
    answer:
      "Yes. Most clients start with a smaller campaign, review the results, and then scale up or adjust the mix of guest posts, niche edits, and on-page work.",
  },
  {
    question: "Do you offer one-off campaigns?",
    answer:
      "Yes. Alongside monthly packages we run one-off campaigns for launches, specific landing pages, or recovery work after a backlink audit.",
  },
  {
    question: "Are white label packages available for agencies?",
    answer:
      "Yes. Agency packages include unbranded or co-branded reports, a single point of contact, and delivery you can forward directly to your clients.",
  },
  {
    question: "What happens if a placement is removed?",
    answer:
      "If a link we built is removed within the agreed guarantee period, we replace it with an equivalent placement at no extra cost.",
  },
];
