import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { services, footerLegalLinks, companyLinks, siteConfig } from "@/lib/site";

const headingClass = "font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-400";
const linkClass = "text-sm text-ink-300 transition-colors duration-200 hover:text-white";
const socialClass =
  "flex size-9 items-center justify-center rounded-lg border border-white/15 text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500 hover:bg-primary-600 hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <Logo dark />
            <p className="max-w-sm text-sm leading-relaxed text-ink-400">{siteConfig.description}</p>
            <div className="flex items-center gap-2.5">
              <a href={`mailto:${siteConfig.email}`} aria-label="Email SEO Grading" className={socialClass}>
                <Mail className="size-4" />
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SEO Grading on LinkedIn"
                  className={socialClass}
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
                  className={socialClass}
                >
                  <Twitter className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className={linkClass}>
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Company</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Get in Touch</h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  {siteConfig.email}
                </a>
              </li>
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">White-hat SEO. Manual outreach. Transparent reporting.</p>
        </div>
      </Container>
    </footer>
  );
}
