"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";
import { Highlight } from "./Highlight";

const ease = [0.22, 1, 0.36, 1] as const;

function renderTitle(title: ReactNode) {
  if (typeof title !== "string") return title;
  const words = title.split(" ");
  const cut = Math.max(1, words.length - (words.length > 6 ? 3 : 2));
  return (
    <>
      {words.slice(0, cut).join(" ")} <Highlight delay={0.35}>{words.slice(cut).join(" ")}</Highlight>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta = { label: "Get Free Consultation", href: "/contact" },
  secondaryCta,
  image,
  imageAlt = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumbs: { name: string; href: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-ink-950 sm:rounded-b-[2.5rem]">
      <div className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[40rem] rounded-full bg-primary-600/25 blur-[120px]"
        aria-hidden="true"
      />

      <Container
        className={`relative grid grid-cols-1 items-center gap-12 pt-10 pb-16 sm:pt-12 sm:pb-20 ${image ? "lg:grid-cols-[1.1fr_1fr] lg:gap-16" : ""}`}
      >
        <div className="max-w-2xl">
          <Breadcrumbs items={breadcrumbs} dark />

          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mt-8"
            >
              <Eyebrow dark>{eyebrow}</Eyebrow>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mt-5 text-balance text-[2.25rem] font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {renderTitle(title)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-6 text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline-light" size="lg" icon={false}>
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative hidden pr-4 pb-4 sm:block"
          >
            <div className="absolute right-0 bottom-0 h-2/3 w-2/3 rounded-2xl bg-primary-600" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border-[6px] border-white/10 bg-navy-800 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/3]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
