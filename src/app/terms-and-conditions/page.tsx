import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Terms & Conditions";
const description = `Read the ${siteConfig.name} terms and conditions covering our SEO, guest posting, link building, and digital marketing services.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Terms & Conditions", href: "/terms-and-conditions" },
          ])
        )}
      />

      <LegalLayout
        title="Terms & Conditions"
        lastUpdated="September 11, 2026"
        breadcrumbLabel="Terms & Conditions"
        breadcrumbHref="/terms-and-conditions"
      >
        <p className="text-sm leading-relaxed text-ink-600">
          These Terms and Conditions govern your access to our website and your use of our SEO,
          guest posting, link building, and digital marketing services.
        </p>
        <p className="text-sm leading-relaxed text-ink-600">
          By accessing our website or purchasing our services, you agree to comply with these
          Terms and Conditions. If you do not agree with these terms, please do not use our
          website or services.
        </p>

        <LegalSection heading="1. Our Services">
          <p>{siteConfig.name} provides SEO and digital marketing services that may include:</p>
          <ul>
            <li>Guest posting services</li>
            <li>On-page SEO</li>
            <li>Off-page SEO</li>
            <li>Link insertion and niche edits</li>
            <li>Technical SEO</li>
            <li>White label SEO services</li>
            <li>Link building solutions</li>
            <li>Content-related SEO services</li>
            <li>Other services agreed upon with the client</li>
          </ul>
          <p>
            The scope, deliverables, and timelines of each project may vary depending on the
            selected service and the agreement with the client.
          </p>
        </LegalSection>

        <LegalSection heading="2. Service Requirements">
          <p>
            To provide our services effectively, we may request information such as your website
            URL, target keywords, preferred landing pages, business details, content guidelines,
            target locations, or other project requirements.
          </p>
          <p>
            Clients are responsible for ensuring that all information provided to us is accurate,
            complete, and up to date.
          </p>
        </LegalSection>

        <LegalSection heading="3. Guest Posting Services">
          <p>
            Guest post placements depend on the availability, editorial standards, publishing
            policies, and decisions of third-party websites.
          </p>
          <p>
            Although we make reasonable efforts to provide suitable placements, we cannot
            guarantee that every placement will remain available permanently.
          </p>
          <p>
            Third-party website owners may update, remove, modify, or relocate published content
            or links. Such actions are outside our direct control.
          </p>
        </LegalSection>

        <LegalSection heading="4. Link Insertion and Niche Edits">
          <p>
            Link insertion and niche edit campaigns are subject to the availability and approval
            of third-party website owners.
          </p>
          <p>
            Placement opportunities may vary according to website relevance, editorial
            requirements, industry, and other factors.
          </p>
          <p>
            We do not guarantee specific search engine rankings, traffic levels, leads, sales, or
            revenue as a result of link placements.
          </p>
        </LegalSection>

        <LegalSection heading="5. SEO Performance and Results">
          <p>
            SEO performance can be influenced by many factors, including search engine algorithms,
            competition, website quality, content, technical conditions, industry changes, and
            actions taken by third parties.
          </p>
          <p>
            For this reason, we do not guarantee specific rankings, organic traffic levels, leads,
            conversions, or revenue.
          </p>
          <p>
            Our services are intended to support and improve a website&apos;s overall SEO strategy,
            but actual results may differ from one website or campaign to another.
          </p>
        </LegalSection>

        <LegalSection heading="6. Client Responsibilities">
          <p>
            Clients are responsible for providing accurate information and materials required to
            complete a project.
          </p>
          <p>
            You must ensure that you have the legal right to use any content, images, trademarks,
            logos, or other materials supplied to us.
          </p>
          <p>
            Clients are also responsible for ensuring that their websites, businesses, and content
            comply with applicable laws and relevant third-party policies.
          </p>
          <p>
            Delays caused by incomplete information, late responses, or changes in requirements
            may affect project timelines.
          </p>
        </LegalSection>

        <LegalSection heading="7. Content and Publishing Requirements">
          <p>
            Where content creation is included, clients may provide topics, keywords, website
            information, brand guidelines, or other instructions.
          </p>
          <p>
            We reserve the right to decline content or projects involving unlawful, fraudulent,
            misleading, defamatory, abusive, or infringing material.
          </p>
          <p>
            Third-party publishers may also reject or request changes to submitted content
            according to their editorial policies.
          </p>
        </LegalSection>

        <LegalSection heading="8. White Label SEO Services">
          <p>
            Where white label services are purchased, the client may provide the agreed
            deliverables to their own customers under their brand, subject to the applicable
            service agreement.
          </p>
          <p>
            Clients are responsible for their communication with end customers, including pricing,
            service descriptions, timelines, and expectations.
          </p>
          <p>
            Unless specifically agreed otherwise, {siteConfig.name} does not communicate directly
            with the client&apos;s end customers.
          </p>
        </LegalSection>

        <LegalSection heading="9. Payments and Additional Services">
          <p>
            Service fees and payment requirements will be communicated before work begins or
            according to the agreed project terms.
          </p>
          <p>Work outside the original scope may require additional fees.</p>
          <p>
            If project requirements change substantially after work has started, the timeline and
            pricing may also be adjusted accordingly.
          </p>
        </LegalSection>

        <LegalSection heading="10. Cancellations and Refunds">
          <p>
            Cancellation and refund eligibility depends on the type of service and the stage at
            which cancellation is requested.
          </p>
          <p>
            Some SEO and publishing services involve work with third-party websites and may become
            non-refundable once work has started, an order has been processed, or a placement has
            been secured.
          </p>
          <p>
            Any applicable refund will be handled according to the specific agreement between the
            client and {siteConfig.name}.
          </p>
        </LegalSection>

        <LegalSection heading="11. Intellectual Property">
          <p>Clients are responsible for ensuring that materials they provide to us can legally be used.</p>
          <p>
            Unless otherwise agreed, ownership and permitted use of completed deliverables will be
            determined by the applicable service agreement and payment status.
          </p>
          <p>
            Our internal strategies, processes, systems, templates, methodologies, and proprietary
            materials remain the property of {siteConfig.name}, unless expressly agreed otherwise
            in writing.
          </p>
        </LegalSection>

        <LegalSection heading="12. Prohibited Activities">
          <p>
            You must not use our website or services for unlawful, fraudulent, malicious,
            deceptive, or abusive activities.
          </p>
          <p>
            You must not attempt to interfere with our website, servers, systems, security, or
            normal business operations.
          </p>
          <p>
            We reserve the right to refuse or terminate services if we reasonably believe that a
            project violates these Terms or applicable law.
          </p>
        </LegalSection>

        <LegalSection heading="13. Third-Party Platforms and Websites">
          <p>
            Some of our services involve third-party websites, publishers, search engines, or
            other platforms that we do not own or control.
          </p>
          <p>
            We are not responsible for changes to third-party policies, algorithms, website
            availability, content removal, link removal, ranking fluctuations, or other actions
            outside our reasonable control.
          </p>
        </LegalSection>

        <LegalSection heading="14. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, {siteConfig.name} will not be
            liable for indirect, incidental, consequential, or unexpected losses arising from the
            use of our website or services.
          </p>
          <p>
            Nothing in these Terms is intended to exclude or limit liability where such exclusion
            or limitation is prohibited by applicable law.
          </p>
        </LegalSection>

        <LegalSection heading="15. Changes to These Terms">
          <p>We may revise these Terms and Conditions from time to time.</p>
          <p>
            Updated terms will be published on this page and will become effective from the date
            stated in the updated version.
          </p>
          <p>
            Your continued use of our website or services after changes are published constitutes
            acceptance of the revised terms.
          </p>
        </LegalSection>

        <LegalSection heading="16. Contact Information">
          <p>For questions regarding these Terms and Conditions, please contact us:</p>
          <ul>
            <li>
              Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              Website: <a href={siteConfig.url}>{siteConfig.url.replace("https://", "")}</a>
            </li>
          </ul>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
