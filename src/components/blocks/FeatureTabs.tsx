"use client";

import { ReactNode, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

export interface FeatureTab {
  /** Small icon element (pre-rendered on the server). */
  icon: ReactNode;
  /** Large decorative icon element shown in the panel corner. */
  watermark: ReactNode;
  title: string;
  description: string;
  bullets?: string[];
}

const ease = [0.22, 1, 0.36, 1] as const;

function Panel({ row }: { row: FeatureTab }) {
  return (
    <>
      <p className="text-base leading-[1.75] text-ink-700 sm:text-[17px]">{row.description}</p>
      {row.bullets && row.bullets.length > 0 && (
        <ul
          className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-ink-200 pt-6 ${row.bullets.length > 3 ? "sm:grid-cols-2" : ""}`}
        >
          {row.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-[15px] text-ink-700">
              <Check className="mt-0.5 size-4 shrink-0 text-primary-600" strokeWidth={2.75} aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/** Tabbed feature explorer on desktop, accordion on mobile keeps long content scannable. */
export function FeatureTabs({ rows }: { rows: FeatureTab[] }) {
  const [active, setActive] = useState(0);
  const desktopIndex = Math.max(active, 0);
  const current = rows[desktopIndex];

  return (
    <Reveal>
      {/* Desktop: vertical tabs + panel */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]">
        <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-2">
          {rows.map((row, index) => {
            const selected = index === desktopIndex;
            return (
              <button
                key={row.title}
                type="button"
                role="tab"
                id={`feature-tab-${index}`}
                aria-selected={selected}
                aria-controls="feature-panel"
                onClick={() => setActive(index)}
                className={`relative flex items-center gap-4 overflow-hidden rounded-xl border px-5 py-4 text-left transition-colors duration-200 ${
                  selected
                    ? "border-ink-950 bg-ink-950 text-white"
                    : "border-ink-200 bg-white text-ink-950 hover:border-primary-300"
                }`}
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    selected ? "bg-primary-600 text-white" : "bg-primary-50 text-primary-600"
                  }`}
                >
                  {row.icon}
                </span>
                <span className="flex-1 text-[15px] font-semibold">{row.title}</span>
                <span className={`font-mono text-xs ${selected ? "text-primary-300" : "text-ink-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {selected && (
                  <motion.span
                    layoutId="feature-tab-bar"
                    className="absolute inset-y-0 left-0 w-1 bg-primary-500"
                    transition={{ duration: 0.3, ease }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          id="feature-panel"
          role="tabpanel"
          aria-labelledby={`feature-tab-${desktopIndex}`}
          className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-8 xl:p-10"
        >
          <span className="pointer-events-none absolute -right-6 -bottom-6 text-primary-50">{current.watermark}</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={desktopIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease }}
              className="relative"
            >
              <p className="font-mono text-xs font-semibold text-primary-600">
                {String(desktopIndex + 1).padStart(2, "0")} / {String(rows.length).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-ink-950">{current.title}</h3>
              <div className="mt-4">
                <Panel row={current} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile / tablet: accordion */}
      <div className="flex flex-col gap-3 lg:hidden">
        {rows.map((row, index) => {
          const open = index === active;
          return (
            <div
              key={row.title}
              className={`overflow-hidden rounded-xl border bg-white transition-colors ${open ? "border-primary-300" : "border-ink-200"}`}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setActive(open ? -1 : index)}
                className="flex w-full items-center gap-3.5 px-5 py-4 text-left"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  {row.icon}
                </span>
                <span className="flex-1 font-display text-base font-bold text-ink-950">{row.title}</span>
                <ChevronDown
                  className={`size-4 text-ink-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <div className="border-t border-ink-100 px-5 pt-4 pb-5">
                      <Panel row={row} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

