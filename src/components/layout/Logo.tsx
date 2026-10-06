import Link from "next/link";

export function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 font-display text-lg font-extrabold ${dark ? "text-white" : "text-ink-950"} ${className}`}
      aria-label="SEO Grading — Home"
    >
      <span
        className="flex size-9 items-center justify-center rounded-lg bg-primary-600 text-white transition-transform duration-300 ease-out-soft group-hover:-rotate-6"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path
            d="M4 16L9.5 10L13.5 14L20 6.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6H20V11"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        SEO <span className={dark ? "text-primary-400" : "text-primary-600"}>Grading</span>
      </span>
    </Link>
  );
}
