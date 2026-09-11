"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "../ui/SpotlightCard";

export interface ProcessStep {
  title: string;
  description: string;
}

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute top-2 bottom-2 left-[21px] w-px bg-ink-200" aria-hidden="true" />
      <motion.div
        className="absolute top-2 left-[21px] w-px origin-top bg-gradient-to-b from-primary-500 via-accent-500 to-violet-500"
        style={{ bottom: "0.5rem" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -12, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-5 sm:gap-6"
          >
            <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-primary-200 bg-white text-sm font-bold text-primary-700 shadow-sm">
              {String(index + 1).padStart(2, "0")}
            </div>
            <SpotlightCard
              spotlightColor="rgba(37,99,235,0.08)"
              className="mb-1 flex-1 rounded-2xl border border-ink-200 bg-white p-5 transition-all duration-300 hover:border-primary-200/80 hover:shadow-lg hover:shadow-primary-600/[0.08] sm:p-6"
            >
              <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
