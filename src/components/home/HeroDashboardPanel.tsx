"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
import { Link2, Search, TrendingUp, Radio } from "lucide-react";

const chartPath = "M2,96 L38,84 L74,90 L110,62 L146,68 L182,40 L218,46 L254,18 L298,10";
const chartAreaPath = `${chartPath} L298,120 L2,120 Z`;

const tickerItems = [
  "Guest post published on a relevant industry site",
  "Contextual backlink secured inside existing content",
  "Target keyword climbed into page-one results",
  "Technical audit completed — issues resolved",
];

const metrics = [
  { icon: TrendingUp, label: "Organic Visibility", value: "Trending Up" },
  { icon: Link2, label: "Placements", value: "Actively Live" },
  { icon: Search, label: "Keyword Coverage", value: "Fully Mapped" },
];

export function HeroDashboardPanel({
  rotateX,
  rotateY,
}: {
  rotateX?: MotionValue<number>;
  rotateY?: MotionValue<number>;
}) {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTickerIndex((i) => (i + 1) % tickerItems.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
      style={{ perspective: 1200 }}
    >
      <div
        className="animate-spin-slow pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.5),rgba(139,92,246,0.45),rgba(14,165,233,0.45),rgba(59,130,246,0.5))] opacity-40 blur-2xl"
        aria-hidden="true"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-ink-400">
            seograding.com/overview
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
            <Radio className="size-3 animate-pulse-soft" aria-hidden="true" />
            Live
          </span>
        </div>

        <div className="relative p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-ink-400">Organic Ranking Trend</p>
              <p className="mt-1 text-sm font-semibold text-white">Steady upward movement</p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
              <TrendingUp className="size-3" aria-hidden="true" />
              Improving
            </span>
          </div>

          <svg viewBox="0 0 300 120" className="mt-4 h-28 w-full" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroChartStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <motion.path
              d={chartAreaPath}
              fill="url(#heroChartFill)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
            />
            <motion.path
              d={chartPath}
              stroke="url(#heroChartStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          <div className="mt-1 grid grid-cols-3 gap-2.5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
              >
                <metric.icon className="size-3.5 text-primary-400" aria-hidden="true" />
                <p className="mt-1.5 text-[11px] leading-tight text-ink-400">{metric.label}</p>
                <p className="text-xs font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center gap-2.5 border-t border-white/10 bg-white/[0.02] px-5 py-3">
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary-400" />
          </span>
          <div className="h-4 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={tickerIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="truncate text-xs text-ink-300"
              >
                {tickerItems[tickerIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
