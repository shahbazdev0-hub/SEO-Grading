import { ReactNode } from "react";

export function GradientText({
  children,
  className = "",
  from = "from-primary-400",
  via = "via-accent-400",
  to = "to-violet-400",
  animated = false,
}: {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animated?: boolean;
}) {
  return (
    <span
      className={`text-gradient bg-gradient-to-r ${from} ${via} ${to} ${animated ? "animate-gradient-x bg-[length:200%_auto]" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
