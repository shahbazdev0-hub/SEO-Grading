"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Carousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateArrows() {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous item"
          className="flex size-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all duration-200 hover:border-primary-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink-200 disabled:hover:text-ink-700"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next item"
          className="flex size-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all duration-200 hover:border-primary-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink-200 disabled:hover:text-ink-700"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <div
        ref={trackRef}
        className="mask-fade-x flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      data-carousel-item
      className={`w-[85vw] shrink-0 snap-start sm:w-[380px] ${className}`}
    >
      {children}
    </div>
  );
}
