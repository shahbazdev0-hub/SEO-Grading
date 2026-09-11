import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
  dark = false,
}: {
  items: { name: string; href: string }[];
  dark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className={`size-3.5 ${dark ? "text-white/40" : "text-ink-400"}`}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className={dark ? "text-white/70" : "text-ink-500"}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={
                    dark
                      ? "text-white/90 hover:text-white"
                      : "text-ink-700 hover:text-primary-600"
                  }
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
