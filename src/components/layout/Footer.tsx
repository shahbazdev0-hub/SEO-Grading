import Link from "next/link";
import { Mail, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { services, footerLegalLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink-200 bg-ink-50">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/60 to-transparent"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-14 left-1/2 hidden -translate-x-1/2 select-none text-[9rem] font-bold tracking-tight text-ink-900/[0.03] sm:block lg:text-[12rem]"
        aria-hidden="true"
      >
        SEO GRADING
      </span>

      <Container className="relative py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ink-600">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email SEO Grading"
                className="flex size-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 hover:shadow-md hover:shadow-primary-600/10"
              >
                <Mail className="size-4" />
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SEO Grading on LinkedIn"
                  className="flex size-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 hover:shadow-md hover:shadow-primary-600/10"
                >
                  <Linkedin className="size-4" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SEO Grading on Twitter"
                  className="flex size-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 hover:shadow-md hover:shadow-primary-600/10"
                >
                  <Twitter className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-900">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1 text-sm text-ink-600 transition-colors hover:text-primary-600"
                  >
                    {service.navLabel}
                    <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-900">Company</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-sm text-ink-600 transition-colors hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-ink-600 transition-colors hover:text-primary-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-sm text-ink-600 transition-colors hover:text-primary-600">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-900">Get in Touch</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-600 transition-colors hover:text-primary-600"
                >
                  {siteConfig.email}
                </a>
              </li>
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-600 transition-colors hover:text-primary-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">White-hat SEO. Manual outreach. Transparent reporting.</p>
        </div>
      </Container>
    </footer>
  );
}
