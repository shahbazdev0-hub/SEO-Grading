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

export function NicheMarquee() {
  const loopItems = [...niches, ...niches];

  return (
    <div
      className="group relative overflow-hidden mask-fade-x"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-3 py-1 [animation-play-state:running] group-hover:[animation-play-state:paused]">
        {loopItems.map((niche, index) => (
          <span
            key={`${niche}-${index}`}
            className="flex shrink-0 items-center rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors duration-200 hover:border-primary-300 hover:text-primary-700"
          >
            {niche}
          </span>
        ))}
      </div>
    </div>
  );
}
