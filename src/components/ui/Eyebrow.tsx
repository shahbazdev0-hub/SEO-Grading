export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${
        dark
          ? "border border-white/15 bg-white/[0.06] text-primary-200"
          : "border border-primary-200/70 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700"
      } ${className}`}
    >
      <span className={`size-1.5 rounded-full ${dark ? "bg-primary-400" : "bg-primary-600"}`} aria-hidden="true" />
      {children}
    </span>
  );
}
