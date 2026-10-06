"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/caseStudies";
import { TrendChart } from "./TrendChart";

const ease = [0.22, 1, 0.36, 1] as const;

/** Featured case study viewer (one at a time) with prev/next controls and a summary strip. */
export function CaseStudyCarousel({ studies }: { studies: CaseStudy[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const study = studies[index];

  function go(step: 1 | -1) {
    setDirection(step);
    setIndex((i) => (i + step + studies.length) % studies.length);
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-500" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(studies.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous case study"
            className="flex size-11 items-center justify-center rounded-lg border border-ink-300 bg-white text-ink-950 transition-colors hover:border-ink-950"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next case study"
            className="flex size-11 items-center justify-center rounded-lg bg-ink-950 text-white transition-colors hover:bg-primary-600"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={study.slug}
            custom={direction}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.35, ease }}
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
          >
            <div className="flex flex-col p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-primary-50 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-700">
                  {study.industry}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">{study.duration}</span>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-ink-950 sm:text-[1.75rem]">{study.client}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{study.summary}</p>
              <div className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
                {study.metrics.slice(0, 2).map((m, i) => (
                  <div key={m.label}>
                    <p className={`font-display text-4xl font-extrabold sm:text-5xl ${i === 0 ? "text-primary-600" : "text-ink-950"}`}>
                      {m.value}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">{m.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group mt-8 inline-flex w-fit items-center gap-1.5 border-b-2 border-primary-600 pb-0.5 text-sm font-semibold text-ink-950"
              >
                Read the case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="flex items-center border-t border-ink-200 bg-mist p-5 sm:p-8 lg:border-t-0 lg:border-l">
              <div className="w-full rounded-xl border border-ink-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between px-1">
                  <p className="text-sm font-semibold text-ink-950">Organic traffic</p>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    {study.metrics[0].value}
                  </span>
                </div>
                <TrendChart values={study.trend} startIndex={study.startIndex} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border-t border-l border-ink-200 sm:grid-cols-2 lg:grid-cols-4">
        {studies.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-current={i === index}
            className={`flex items-center justify-between gap-3 border-r border-b border-ink-200 px-4 py-3.5 text-left text-sm transition-colors ${
              i === index ? "bg-ink-950 text-white" : "bg-mist text-ink-950 hover:bg-primary-50"
            }`}
          >
            <span className="truncate font-semibold">{s.client}</span>
            <span className={`shrink-0 font-mono text-xs ${i === index ? "text-primary-300" : "text-primary-600"}`}>
              {s.metrics[0].value}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
