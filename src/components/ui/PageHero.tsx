"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { Button } from "./Button";
import { AuroraBackground } from "./AuroraBackground";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta = { label: "Get Free Consultation", href: "/contact" },
  secondaryCta,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumbs: { name: string; href: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const ref = useRef<HTMLElement>(null);
  const spotX = useMotionValue(75);
  const spotY = useMotionValue(10);
  const spotBackground = useMotionTemplate`radial-gradient(560px circle at ${spotX}% ${spotY}%, rgba(59,130,246,0.18), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section ref={ref} onMouseMove={handleMouseMove} className="relative overflow-hidden bg-ink-950">
      <AuroraBackground variant="dark" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: spotBackground }}
        aria-hidden="true"
      />
      <div className="bg-grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={breadcrumbs} dark />

        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-300 backdrop-blur-sm"
            >
              <Sparkles className="size-3.5" aria-hidden="true" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-balance text-lg leading-relaxed text-ink-300 sm:text-xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={primaryCta.href} size="lg" magnetic>
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline-light" size="lg" icon={false}>
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
