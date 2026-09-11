"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

function WidgetChip({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-950 p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

const barHeights = [30, 48, 40, 68, 58, 86];

export function MiniBarChart({ label }: { label: string }) {
  return (
    <WidgetChip>
      <div className="flex h-16 items-end gap-2">
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary-600 to-accent-400"
          />
        ))}
      </div>
      <p className="mt-3 text-[11px] font-medium text-ink-400">{label}</p>
    </WidgetChip>
  );
}

const linePath = "M2,44 L20,38 L38,40 L56,26 L74,30 L92,14 L110,18 L128,4";

export function MiniLineChart({ label }: { label: string }) {
  return (
    <WidgetChip>
      <svg viewBox="0 0 130 48" className="h-16 w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="miniLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <motion.path
          d={linePath}
          stroke="url(#miniLineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <p className="mt-3 text-[11px] font-medium text-ink-400">{label}</p>
    </WidgetChip>
  );
}

export function MiniRadialProgress({ label, icon }: { label: string; icon: ReactNode }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const fillRatio = 0.76;

  return (
    <WidgetChip>
      <div className="flex h-16 items-center justify-center">
        <svg viewBox="0 0 64 64" className="size-16 -rotate-90" aria-hidden="true">
          <circle cx="32" cy="32" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="url(#miniRadialGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - fillRatio) }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="miniRadialGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-primary-300">{icon}</span>
      </div>
      <p className="mt-3 text-center text-[11px] font-medium text-ink-400">{label}</p>
    </WidgetChip>
  );
}

const healthBars = [
  { label: "Crawl", value: 92 },
  { label: "Index", value: 84 },
  { label: "Speed", value: 70 },
];

export function MiniHealthBars({ label }: { label: string }) {
  return (
    <WidgetChip>
      <div className="flex h-16 flex-col justify-center gap-2.5">
        {healthBars.map((bar, i) => (
          <div key={bar.label} className="flex items-center gap-2.5">
            <span className="w-10 shrink-0 text-[10px] text-ink-500">{bar.label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.value}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] font-medium text-ink-400">{label}</p>
    </WidgetChip>
  );
}
