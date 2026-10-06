import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function CTASection({
  title = "Ready to Build a Stronger Backlink Profile?",
  description = "Tell us about your website, goals, and target keywords we'll put together a strategy tailored to your niche.",
  primaryLabel = "Get Free Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className = "",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}) {
  return (
    <section className={`bg-white py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary-600/40 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-primary-500/20 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.6rem]">
                  {title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">{description}</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Button href={primaryHref} size="lg">
                  {primaryLabel}
                </Button>
                {secondaryLabel && secondaryHref && (
                  <Button href={secondaryHref} variant="outline-light" size="lg" icon={false}>
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
