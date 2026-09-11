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
      <div className="border-b border-ink-200 bg-ink-50">
        <Container className="py-14 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: breadcrumbLabel, href: breadcrumbHref },
            ]}
          />
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-500">Last Updated: {lastUpdated}</p>
        </Container>
      </div>
      <Container className="py-14 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">{children}</div>
      </Container>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink-900">{heading}</h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-ink-600 [&_a]:font-medium [&_a]:text-primary-600 [&_a]:hover:underline [&_li]:list-disc [&_li]:ml-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
        {children}
      </div>
    </section>
  );
}
