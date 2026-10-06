const niches = [
  "Technology",
  "SaaS",
  "Artificial Intelligence",
  "Digital Marketing",
  "Finance",
  "Cryptocurrency",
  "Real Estate",
  "Legal",
  "Healthcare",
  "Dental",
  "Fitness",
  "Education",
  "Travel",
  "Fashion",
  "Beauty",
  "Home Improvement",
  "Construction",
  "Automotive",
  "Gaming",
  "Food",
  "E-commerce",
  "Cybersecurity",
  "Web Development",
  "Cloud Computing",
  "Insurance",
  "HR & Recruiting",
  "Startups",
  "B2B",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex w-max gap-3 pr-3 group-hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {loop.map((niche, index) => (
          <span
            key={`${niche}-${index}`}
            className="flex shrink-0 items-center gap-2.5 rounded-lg border border-ink-200 bg-white px-5 py-3 font-display text-[15px] font-bold text-ink-950 transition-colors duration-200 hover:border-primary-600 hover:text-primary-700"
          >
            <span className="size-1.5 rounded-full bg-primary-600" aria-hidden="true" />
            {niche}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two counter-scrolling rows of niche chips. The full list is exposed once to screen readers. */
export function NicheMarquee() {
  const half = Math.ceil(niches.length / 2);
  return (
    <div className="group relative">
      <ul className="sr-only">
        {niches.map((niche) => (
          <li key={niche}>{niche}</li>
        ))}
      </ul>
      <div className="mask-fade-x flex flex-col gap-3" aria-hidden="true">
        <Row items={niches.slice(0, half)} />
        <Row items={niches.slice(half)} reverse />
      </div>
    </div>
  );
}
