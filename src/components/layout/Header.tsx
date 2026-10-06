"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { mainNav, services } from "@/lib/site";
import { serviceIcons } from "@/lib/serviceIcons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (state adjusted during render rather than in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isServicesActive = pathname.startsWith("/services");
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const linkBase = "relative rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors xl:px-3.5";

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-ink-950 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-white/10 transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />
      <Container>
        <div className="flex h-17 items-center justify-between gap-6">
          <Logo dark />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {mainNav.map((item) =>
              "children" in item && item.children ? (
                <div
                  key={item.label}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onBlur={(e) => {
                    if (!servicesRef.current?.contains(e.relatedTarget as Node)) setServicesOpen(false);
                  }}
                >
                  <button
                    type="button"
                    className={`${linkBase} flex items-center gap-1 ${
                      isServicesActive || servicesOpen ? "text-white" : "text-ink-300 hover:text-white"
                    }`}
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                    {isServicesActive && (
                      <span className="absolute inset-x-3 -bottom-4 h-0.5 bg-primary-500" aria-hidden="true" />
                    )}
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        id="services-menu"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease }}
                        className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-4"
                      >
                        <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-2xl shadow-ink-950/20">
                          <div className="grid grid-cols-2 gap-1 p-2.5">
                            {services.map((child) => {
                              const Icon = serviceIcons[child.key];
                              const active = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-mist ${active ? "bg-mist" : ""}`}
                                >
                                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors duration-200 group-hover:bg-primary-600 group-hover:text-white">
                                    <Icon className="size-4.5" aria-hidden="true" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-ink-950">
                                      {child.navLabel}
                                    </span>
                                    <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-ink-500">
                                      {child.shortDescription}
                                    </span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="border-t border-ink-100 bg-mist px-5 py-3">
                            <Link
                              href="/contact"
                              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700"
                            >
                              Not sure what you need? Talk to us
                              <ArrowRight
                                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`${linkBase} ${isActive(item.href) ? "text-white" : "text-ink-300 hover:text-white"}`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-3 -bottom-4 h-0.5 bg-primary-500" aria-hidden="true" />
                  )}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="md">
              Get Free Consultation
            </Button>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              <Link href="/" className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/5">
                Home
              </Link>
              <p className="px-3 pt-4 pb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-300">
                Services
              </p>
              {services.map((child) => {
                const Icon = serviceIcons[child.key];
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-200 hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="size-4 text-primary-400" aria-hidden="true" />
                    {child.navLabel}
                  </Link>
                );
              })}
              <div className="mt-3 border-t border-white/10 pt-3">
                {mainNav
                  .filter((item) => !("children" in item))
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-lg px-3 py-3 text-base font-medium hover:bg-white/5 ${
                        isActive(item.href) ? "text-primary-300" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
              <Button href="/contact" size="lg" className="mt-4 w-full">
                Get Free Consultation
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
