import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "dark" | "outline" | "outline-light" | "white";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-600 text-white shadow-[0_8px_24px_-10px_rgba(31,79,224,0.7)] hover:bg-primary-700 hover:shadow-[0_12px_28px_-10px_rgba(31,79,224,0.8)]",
  dark: "bg-ink-950 text-white hover:bg-navy-800",
  outline: "border border-ink-300 bg-white text-ink-900 hover:border-ink-950",
  "outline-light": "border border-white/30 text-white hover:border-white hover:bg-white/5",
  white: "bg-white text-ink-950 hover:bg-primary-50",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `group/btn inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ease-out-soft hover:-translate-y-px active:translate-y-0 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
