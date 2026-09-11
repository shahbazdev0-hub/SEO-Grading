export function AuroraBackground({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const gridOpacity = variant === "dark" ? "opacity-[0.12]" : "opacity-[0.35]";
  const gridColor = variant === "dark" ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.35)";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={`absolute inset-0 ${gridOpacity}`}
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
      <div className="animate-aurora absolute -top-40 left-[6%] h-[30rem] w-[30rem] rounded-full bg-primary-500/30 blur-[120px]" />
      <div className="animate-aurora-slow absolute top-1/3 right-[2%] h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-[130px]" />
      <div className="animate-aurora absolute bottom-[-12rem] left-[30%] h-[24rem] w-[24rem] rounded-full bg-accent-500/20 blur-[130px] [animation-delay:-8s]" />
    </div>
  );
}
