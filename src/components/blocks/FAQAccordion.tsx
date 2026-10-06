"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-ink-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `faq-${index}`;
        return (
          <div key={item.question} className="border-b border-ink-200">
            <h3>
              <button
                type="button"
                id={`${id}-q`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span
                  className={`font-display text-base font-bold transition-colors sm:text-[17px] ${
                    isOpen ? "text-primary-700" : "text-ink-950 group-hover:text-primary-700"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-primary-600 bg-primary-600 text-white"
                      : "border-ink-200 text-primary-600 group-hover:border-primary-300"
                  }`}
                >
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-a`}
                  role="region"
                  aria-labelledby={`${id}-q`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pr-12 pb-6 text-[15px] leading-relaxed text-ink-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
