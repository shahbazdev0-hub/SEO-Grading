"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

/** Blue block behind key words in a heading; sweeps in from the left on first view. */
export function Highlight({ children, delay = 0.15 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.span
      className="highlight-box"
      style={{ color: "#fff" }}
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.span>
  );
}
