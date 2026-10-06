"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Category filter over pre-rendered blog cards (cards are rendered on the server). */
export function BlogGrid({
  categories,
  cards,
}: {
  categories: string[];
  cards: { category: string; key: string; node: ReactNode }[];
}) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? cards : cards.filter((c) => c.category === active);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
              active === cat
                ? "border-ink-950 bg-ink-950 text-white"
                : "border-ink-200 bg-white text-ink-700 hover:border-primary-400 hover:text-primary-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((c) => (
            <motion.div
              key={c.key}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              {c.node}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
