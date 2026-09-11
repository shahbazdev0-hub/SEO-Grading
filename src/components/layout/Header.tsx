"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { mainNav, services } from "@/lib/site";
import { serviceIcons } from "@/lib/serviceIcons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-200/80 bg-white/75 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-white"
      }`}
    >
      <Container>
        <div className="flex h-18 items-center justify-between py-3.5">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNav.map((item) =>
              "children" in item && item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isServicesActive ? "text-primary-700" : "text-ink-700 hover:text-ink-900"
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {(isServicesActive || servicesOpen) && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-primary-50"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                    <ChevronDown
                      className={`relative size-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white/95 shadow-2xl shadow-ink-900/10 backdrop-blur-xl">
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {services.map((child) => {
                              const Icon = serviceIcons[child.key];
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group flex items-start gap-3 rounded-xl px-3.5 py-3 transition-colors hover:bg-primary-50"
                                >
                                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                                    <Icon className="size-4.5" aria-hidden="true" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-ink-900">
                                      {child.navLabel}
                                    </span>
                                    <span className="mt-0.5 block text-xs leading-snug text-ink-500">
                                      {child.shortDescription.slice(0, 58)}…
                                    </span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="border-t border-ink-100 bg-ink-50/60 px-5 py-3">
                            <Link
                              href="/contact"
                              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700"
                            >
                              Not sure what you need? Talk to us
                              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
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
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-primary-700" : "text-ink-700 hover:text-ink-900"
                  }`}
                >
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary-50"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="md" magnetic>
              Get Free Consultation
            </Button>
          </div>

          <button
            className="flex size-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-200 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              <Link
                href="/"
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-100"
              >
                Home
              </Link>
              <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Services
              </p>
              {mainNav[1].children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-100"
                >
                  {child.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-ink-200 pt-2">
                <Link
                  href="/about"
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-100"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-100"
                >
                  Contact
                </Link>
              </div>
              <Button href="/contact" className="mt-3 w-full justify-center">
                Get Free Consultation
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
