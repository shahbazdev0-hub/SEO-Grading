"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CheckCircle2, Link2, Search, TrendingUp, Radio, Layers, Globe2, CalendarClock, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { images } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

const rotatingPhrases = ["Move Rankings", "Build Authority", "Drive Traffic", "Earn Trust"];

const chartPath = "M2,96 L38,84 L74,90 L110,62 L146,68 L182,40 L218,46 L254,18 L298,10";
const chartAreaPath = `${chartPath} L298,120 L2,120 Z`;

const tickerItems = [
  "Guest post published on a relevant industry site",
  "Contextual backlink secured inside existing content",
  "Target keyword climbed into page-one results",
  "Technical audit completed issues resolved",
];

const metrics = [
  { icon: TrendingUp, label: "Organic Visibility", value: "Trending Up" },
  { icon: Link2, label: "Placements", value: "Actively Live" },
  { icon: Search, label: "Keyword Coverage", value: "Fully Mapped" },
];

const stats = [
  { icon: Layers, value: 6, suffix: "", label: "Core SEO Services" },
  { icon: Globe2, value: 50, suffix: "+", label: "Niches Covered" },
  { icon: CalendarClock, value: 2, suffix: "-4 wk", label: "Typical Campaign Turnaround" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "White-Hat, Manual Outreach" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } }),
};

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [tickerIndex, setTickerIndex] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [phraseWidths, setPhraseWidths] = useState<number[]>([]);

  // Measure every phrase so the highlight box can glide between widths instead of clipping.
  useLayoutEffect(() => {
    function measure() {
      const el = measureRef.current;
      if (!el) return;
      setPhraseWidths(Array.from(el.children).map((child) => (child as HTMLElement).offsetWidth));
    }
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const phraseTimer = setInterval(() => setPhraseIndex((i) => (i + 1) % rotatingPhrases.length), 2800);
    const tickerTimer = setInterval(() => setTickerIndex((i) => (i + 1) % tickerItems.length), 3200);
    return () => {
      clearInterval(phraseTimer);
      clearInterval(tickerTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-ink-950 sm:rounded-b-[2.5rem]">
      <div className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[32rem] w-[56rem] -translate-x-1/2 rounded-full bg-primary-600/25 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative pt-14 sm:pt-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Eyebrow dark>Guest Posting &amp; SEO Services</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.08}
            className="relative mt-6 text-balance text-[2.1rem] leading-[1.1] font-extrabold text-white sm:text-6xl lg:text-[4.25rem]"
          >
            Backlinks and SEO That Actually{" "}
            <motion.span
              className="relative inline-block overflow-hidden bg-primary-600 align-bottom whitespace-nowrap"
              animate={phraseWidths.length ? { width: phraseWidths[phraseIndex] } : undefined}
              transition={{ duration: 0.45, ease }}
            >
              {/* Sizes the box before measurement (and without JS). */}
              <span className="invisible block px-[0.22em]">{rotatingPhrases[phraseIndex]}</span>
              <AnimatePresence initial={false}>
                <motion.span
                  key={phraseIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute top-0 left-0 px-[0.22em]"
                >
                  {rotatingPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
            <span ref={measureRef} className="invisible absolute top-0 left-0 whitespace-nowrap" aria-hidden="true">
              {rotatingPhrases.map((phrase) => (
                <span key={phrase} className="absolute px-[0.22em]">
                  {phrase}
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.16}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            SEO Grading builds authority through manual outreach, niche-relevant guest posts,
            contextual link insertions, and full-funnel on-page, off-page, and technical SEO with transparent reporting at every step.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.24}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/contact" size="lg">
              Get Free Consultation
            </Button>
            <Button href="#services" variant="outline-light" size="lg" icon={false}>
              Explore Services
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.32}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {["100% manual outreach", "White-hat only", "Transparent reporting"].map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm text-ink-300">
                <CheckCircle2 className="size-4 text-primary-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Framed product visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="relative mx-auto mt-14 max-w-5xl"
        >
          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/40 sm:p-3">
            <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-navy-800 md:grid-cols-[1.05fr_1fr]">
              {/* Dashboard */}
              <div className="relative flex flex-col">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-white/20" />
                    <span className="size-2.5 rounded-full bg-white/20" />
                    <span className="size-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-ink-400">
                    seograding.com/overview
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                    <Radio className="size-3 animate-pulse-soft" aria-hidden="true" />
                    Live
                  </span>
                </div>

                <div className="flex-1 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 text-left">
                    <div>
                      <p className="text-xs font-medium text-ink-400">Organic Ranking Trend</p>
                      <p className="mt-1 font-display text-base font-bold text-white">Steady upward movement</p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                      <TrendingUp className="size-3" aria-hidden="true" />
                      Improving
                    </span>
                  </div>

                  <svg viewBox="0 0 300 120" className="mt-5 h-32 w-full" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3a68ec" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#3a68ec" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[30, 60, 90].map((y) => (
                      <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
                    ))}
                    <motion.path
                      d={chartAreaPath}
                      fill="url(#heroChartFill)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    />
                    <motion.path
                      d={chartPath}
                      stroke="#5f88f2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.6, delay: 0.7, ease }}
                    />
                    <motion.circle
                      cx="298"
                      cy="10"
                      r="4"
                      fill="#fff"
                      stroke="#1f4fe0"
                      strokeWidth="2.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 2.2 }}
                    />
                  </svg>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left">
                        <metric.icon className="size-3.5 text-primary-400" aria-hidden="true" />
                        <p className="mt-1.5 text-[11px] leading-tight text-ink-400">{metric.label}</p>
                        <p className="text-xs font-semibold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 border-t border-white/10 px-5 py-3">
                  <span className="relative flex size-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary-400" />
                  </span>
                  <div className="h-4 flex-1 overflow-hidden text-left" aria-live="polite">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={tickerIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="truncate text-xs text-ink-300"
                      >
                        {tickerItems[tickerIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="relative hidden min-h-[340px] md:block">
                <div className="absolute right-0 bottom-0 h-1/2 w-2/3 bg-primary-600" aria-hidden="true" />
                <div className="absolute inset-5 overflow-hidden rounded-xl">
                  <Image
                    src={images.heroDashboard}
                    alt="SEO analytics dashboard on a laptop"
                    fill
                    preload
                    sizes="(min-width: 1024px) 480px, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1.5 px-4 py-8 text-center sm:py-10 ${
                i % 2 === 1 ? "border-l border-white/10" : ""
              } ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <stat.icon className="mb-1 size-5 text-primary-400" aria-hidden="true" />
              <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
