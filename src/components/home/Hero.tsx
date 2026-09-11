"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  useTransform,
  useSpring,
  useScroll,
  type Variants,
} from "framer-motion";
import { CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";
import { AuroraBackground } from "../ui/AuroraBackground";
import { HeroDashboardPanel } from "./HeroDashboardPanel";

const headlineWords = ["Backlinks", "and", "SEO", "That", "Actually"];

const rotatingPhrases = ["Move Rankings", "Build Authority", "Drive Traffic", "Earn Trust"];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(30);
  const spotBackground = useMotionTemplate`radial-gradient(600px circle at ${spotX}% ${spotY}%, rgba(59,130,246,0.16), transparent 70%)`;

  const rotateY = useSpring(useTransform(spotX, [0, 100], [-6, 6]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateX = useSpring(useTransform(spotY, [0, 100], [6, -6]), {
    stiffness: 120,
    damping: 20,
  });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-ink-950"
    >
      <AuroraBackground variant="dark" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: spotBackground }}
        aria-hidden="true"
      />
      <div className="bg-grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container>
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative grid grid-cols-1 items-center gap-16 py-24 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:py-32"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-300 backdrop-blur-sm"
            >
              <Sparkles className="size-3.5" aria-hidden="true" />
              Guest Posting &amp; SEO Services
            </motion.span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="flex flex-wrap">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={wordVariants}
                    className="mr-3.5 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <motion.span
                custom={headlineWords.length}
                initial="hidden"
                animate="show"
                variants={wordVariants}
                className="relative mt-1 block h-[1.2em] overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <GradientText animated className="inline-block">
                      {rotatingPhrases[phraseIndex]}
                    </GradientText>
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-300 sm:text-xl"
            >
              SEO Grading builds authority through manual outreach, niche-relevant guest posts,
              contextual link insertions, and full-funnel on-page, off-page, and technical SEO —
              with transparent reporting at every step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" size="lg" magnetic>
                Get Free Consultation
              </Button>
              <Button href="#services" variant="outline-light" size="lg" icon={false}>
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3"
            >
              {["100% manual outreach", "White-hat only", "Transparent reporting"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-ink-300"
                >
                  <CheckCircle2 className="size-3.5 text-primary-400" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <HeroDashboardPanel rotateX={rotateX} rotateY={rotateY} />
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative hidden justify-center pb-8 sm:flex"
      >
        <motion.a
          href="#services"
          aria-label="Scroll to services"
          className="flex flex-col items-center gap-1.5 text-ink-400 transition-colors hover:text-ink-200"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="size-4" aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
}
