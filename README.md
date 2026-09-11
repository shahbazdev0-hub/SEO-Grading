# SEO Grading

A professional, SEO-optimized marketing website for **SEO Grading** — a guest posting, link
building, and full-funnel SEO agency. Built with Next.js 16 (App Router), TypeScript, Tailwind
CSS v4, and Framer Motion, with a premium dark/blue design system, animated data-widget UI, and
a fully working SEO foundation (metadata, JSON-LD, sitemap, robots.txt).

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first theme via `@theme`)
- **Animation:** Framer Motion (scroll reveals, parallax, magnetic buttons, chart draw-ins)
- **Icons:** lucide-react
- **Fonts:** Geist Sans / Geist Mono via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The dev server hot-reloads
as you edit files.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # eslint
```

## Project Structure

```
src/
  app/
    layout.tsx              Root layout: fonts, global metadata, JSON-LD, header/footer
    page.tsx                Homepage
    sitemap.ts               /sitemap.xml
    robots.ts                 /robots.txt
    opengraph-image.tsx      Dynamic OG image (used site-wide as the default share image)
    about/                   About Us page
    contact/                 Contact page + form
    privacy-policy/          Privacy Policy
    terms-and-conditions/    Terms & Conditions
    services/                One route per service (6 total):
      guest-posting/
      link-insertion-niche-edits/
      on-page-seo/
      off-page-seo/
      technical-seo/
      white-label-seo/
    api/contact/route.ts     Contact form submission endpoint (see "Contact form" below)

  components/
    ui/          Design-system primitives: Button, Container, Section, SectionHeading,
                  PageHero, Reveal/RevealGroup (scroll animations), SpotlightCard, TiltCard,
                  AuroraBackground, GradientText, AnimatedCounter, ScrollProgressBar, Carousel
    layout/      Header (mega-menu, active-link indicator), Footer, Logo
    blocks/      Reusable content sections used across service pages: IconFeatureGrid,
                  FeatureRows, ChecklistBlock, ProcessSteps (animated timeline), AudienceGrid,
                  PackageCards, ComparisonTable, FAQSection/FAQAccordion, CTASection,
                  RelatedServices, NicheMarquee
    home/        Homepage-only sections: Hero, HeroDashboardPanel (animated chart mockup),
                  StatsBand (animated counters), ServicesGrid, CapabilityShowcase (carousel
                  with mini data-widgets), MiniWidgets (bar/line/radial/health-bar charts)
    contact/     ContactForm
    legal/       LegalLayout/LegalSection (shared by Privacy Policy & Terms)

  lib/
    site.ts          Single source of truth: brand name, URL, email, nav, services list
    serviceIcons.ts  Icon lookup shared by the header mega-menu and service cards
    schema.ts        JSON-LD helpers (Organization, Service, FAQPage, BreadcrumbList)
```

Because service pages are composed almost entirely from the shared `components/blocks/*`
primitives, a change to one block (e.g. `ProcessSteps`) updates every page that uses it.

## Configuration

**Everything brand-related lives in one file: [`src/lib/site.ts`](src/lib/site.ts).** Update the
name, URL, email, and social links there and it propagates to metadata, JSON-LD, the footer,
the contact page, and the legal pages automatically.

Current placeholders that need real values before launch:

| Value | File | Current placeholder |
|---|---|---|
| Contact email | `src/lib/site.ts` | `hello@seograding.com` |
| Website URL | `src/lib/site.ts` | `https://seograding.com` |
| Social links | `src/lib/site.ts` | empty (hidden in footer until filled in) |

## Contact Form

The form at `/contact` posts to `src/app/api/contact/route.ts`, which validates the payload and
logs it server-side. It does **not** send email yet — wire it up to a provider (e.g. Resend,
SendGrid) using an API key stored in an environment variable. See `.env.example` for the
expected variable name.

## Design System

- **Colors:** defined as CSS custom properties in `src/app/globals.css` and exposed to Tailwind
  via `@theme inline` — full `primary` (blue) and `ink` (slate) scales, plus `accent`, `violet`,
  and `success`. Add new shades there, not as one-off arbitrary values.
- **Dark hero sections** (`Hero`, `PageHero`, `CTASection`) share the `AuroraBackground` +
  grain-texture + cursor-spotlight treatment for visual consistency.
- **Motion:** `Reveal` / `RevealGroup` / `RevealItem` (in `components/ui/Reveal.tsx`) provide the
  standard scroll-in animation used throughout; prefer them over ad-hoc Framer Motion in page
  files.
- Server vs. client components: most `components/blocks/*` are server components. If you add an
  icon prop to something rendered inside a `"use client"` component, pass a **rendered element**
  (`icon={<Layers />}`), not the bare component reference — React can't serialize a function
  reference across the server/client boundary.

## SEO

- Per-page `metadata` exports (title, description, canonical, Open Graph) in every `page.tsx`.
- JSON-LD via `src/lib/schema.ts`: `Organization` + `WebSite` site-wide, `Service` +
  `BreadcrumbList` on every service page, `FAQPage` wherever `FAQSection` is used.
- `sitemap.xml` and `robots.txt` are generated from `src/lib/site.ts` — no manual upkeep needed
  when adding a new service page (add it to the `services` array and it's included).
