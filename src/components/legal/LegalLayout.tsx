import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Breadcrumbs } from "../ui/Breadcrumbs";

export function LegalLayout({
  title,
  lastUpdated,
  breadcrumbLabel,
  breadcrumbHref,
  children,
}: {
  title: string;
  lastUpdated: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="relative overflow-hidden rounded-b-[2rem] bg-ink-950 sm:rounded-b-[2.5rem]">
        <div className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative pt-10 pb-14 sm:pt-12 sm:pb-16">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: breadcrumbLabel, href: breadcrumbHref },
            ]}
            dark
          />
          <h1 className="mt-8 text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-primary-300">
            Last Updated: {lastUpdated}
          </p>
        </Container>
      </div>
      <Container className="py-14 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 [&>section+section]:border-t [&>section+section]:border-ink-200 [&>section+section]:pt-10">{children}</div>
      </Container>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-ink-950 sm:text-2xl">{heading}</h2>
      <div className="mt-3 flex flex-col gap-3 text-[15px] leading-[1.75] text-ink-600 [&_a]:font-medium [&_a]:text-primary-600 [&_a]:hover:underline [&_li]:list-disc [&_li]:ml-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
        {children}
      </div>
    </section>
  );
}
