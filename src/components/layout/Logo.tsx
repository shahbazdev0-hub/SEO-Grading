import Link from "next/link";

export function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink-900"} ${className}`}
      aria-label="SEO Grading — Home"
    >
      <span
        className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm shadow-primary-600/30 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105"
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
        SEO{" "}
        <span className={dark ? "text-primary-400" : "text-primary-600"}>
          Grading
        </span>
      </span>
    </Link>
  );
}
