import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { AuroraBackground } from "../ui/AuroraBackground";

export function CTASection({
  title = "Ready to Build a Stronger Backlink Profile?",
  description = "Tell us about your website, goals, and target keywords — we'll put together a strategy tailored to your niche.",
  primaryLabel = "Get Free Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="bg-grain relative overflow-hidden rounded-3xl border border-white/10 bg-ink-950 px-8 py-16 text-center shadow-2xl shadow-primary-950/20 sm:px-16 sm:py-20">
            <AuroraBackground variant="dark" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
              <p className="mt-4 text-balance text-lg leading-relaxed text-ink-300">
                {description}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button href={primaryHref} size="lg" magnetic>
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
