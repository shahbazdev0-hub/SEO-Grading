"use client";

import Link from "next/link";
import { ReactNode, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-primary-500 to-primary-600 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-8px_rgba(37,99,235,0.55)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_14px_36px_-6px_rgba(37,99,235,0.65)] hover:brightness-[1.04]",
  secondary: "bg-ink-900 text-white hover:bg-ink-800 shadow-sm",
  ghost: "bg-transparent text-ink-900 hover:bg-ink-100",
  "outline-light":
    "bg-white/[0.03] text-white border border-white/25 backdrop-blur-sm hover:bg-white/10 hover:border-white/40",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.75 text-base",
};

function MagneticWrap({
  children,
  strength = 14,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  onClick,
  type,
  magnetic = false,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  magnetic?: boolean;
}) {
  const classes = `group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-200 ease-out active:scale-[0.97] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative inline-flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1"
            aria-hidden="true"
          />
        )}
      </span>
    </>
  );

  const button = href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {content}
    </button>
  );

  if (magnetic) {
    return <MagneticWrap>{button}</MagneticWrap>;
  }

  return button;
}
