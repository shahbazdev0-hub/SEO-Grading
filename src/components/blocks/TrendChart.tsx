"use client";

import { useId } from "react";
import { motion } from "framer-motion";

const W = 520;
const H = 220;
const PAD = { top: 18, right: 14, bottom: 26, left: 14 };

/** Organic-traffic trend with a "campaign started" marker; line draws in on first view. */
export function TrendChart({
  values,
  startIndex,
  dark = false,
  label = "SEO Grading started here",
}: {
  values: number[];
  startIndex: number;
  dark?: boolean;
  label?: string;
}) {
  const gradientId = useId();
  const max = Math.max(...values) * 1.1;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const x = (i: number) => PAD.left + (i / (values.length - 1)) * innerW;
  const y = (v: number) => PAD.top + innerH - (v / max) * innerH;

  const line = values.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(values.length - 1)},${PAD.top + innerH} L${x(0)},${PAD.top + innerH} Z`;
  const sx = x(startIndex);

  const grid = dark ? "rgba(255,255,255,0.08)" : "#e1e6ef";
  const text = dark ? "#97a0b5" : "#67728c";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Organic traffic trend before and after the campaign started">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a68ec" stopOpacity={dark ? 0.45 : 0.25} />
          <stop offset="100%" stopColor="#3a68ec" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75, 1].map((f) => (
        <line key={f} x1={PAD.left} x2={W - PAD.right} y1={PAD.top + innerH * f} y2={PAD.top + innerH * f} stroke={grid} />
      ))}

      <rect x={sx} y={PAD.top} width={W - PAD.right - sx} height={innerH} fill={dark ? "rgba(58,104,236,0.08)" : "#eef3fe"} />

      <motion.path
        d={area}
        fill={`url(#${gradientId})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="#1f4fe0"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <line x1={sx} x2={sx} y1={PAD.top} y2={PAD.top + innerH} stroke="#1f4fe0" strokeDasharray="4 4" strokeWidth="1.5" />
      <circle cx={sx} cy={y(values[startIndex])} r="5" fill="#fff" stroke="#1f4fe0" strokeWidth="2.5" />
      <g transform={`translate(${Math.min(sx + 8, W - 180)}, ${PAD.top + 6})`}>
        <rect width="168" height="24" rx="5" fill="#1f4fe0" />
        <text x="84" y="16" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="var(--font-inter)">
          {label}
        </text>
      </g>

      <text x={PAD.left} y={H - 6} fontSize="11" fill={text} fontFamily="var(--font-jetbrains)">
        Month 1
      </text>
      <text x={W - PAD.right} y={H - 6} fontSize="11" fill={text} textAnchor="end" fontFamily="var(--font-jetbrains)">
        Month {values.length}
      </text>
    </svg>
  );
}
