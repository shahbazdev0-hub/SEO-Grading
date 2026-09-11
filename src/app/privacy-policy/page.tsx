import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Privacy Policy";
const description = `Read the ${siteConfig.name} privacy policy to understand what information we collect, how we use it, and the choices you have.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/privacy-policy" },
          ])
        )}
      />

      <LegalLayout title="Privacy Policy" lastUpdated="September 11, 2026" breadcrumbLabel="Privacy Policy" breadcrumbHref="/privacy-policy">
        <p className="text-sm leading-relaxed text-ink-600">
          Your privacy is important to us. We promise to process your personal information
          responsibly and transparently. This Privacy Policy describes what information we
          collect, why we collect it, how we use that information, and the choices you can make
          when you visit our website or request SEO services and digital marketing services.
        </p>
        <p className="text-sm leading-relaxed text-ink-600">
          By accessing or using {siteConfig.url.replace("https://", "")}, you acknowledge the
          practices described in this Privacy Policy.
        </p>

        <LegalSection heading="1. Information We Collect">
          <p>
            We may collect information that you voluntarily provide when you contact us, request
            a quotation, purchase a service, or communicate with our team.
          </p>
          <p>Depending on your interaction with us, this may include:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Company or business name</li>
            <li>Website URL</li>
            <li>Contact information</li>
            <li>SEO requirements and campaign details</li>
            <li>Target keywords and pages</li>
            <li>Information included in your messages</li>
            <li>Any other information you choose to provide</li>
          </ul>
          <p>
            We may also collect a limited amount of technical data automatically when you visit
            our site. This may include your IP address, browser type, device type, operating
            system, pages visited, referring website, and other general information regarding
            website usage.
          </p>
        </LegalSection>

        <LegalSection heading="2. How We Use Your Information">
          <p>We collect information for business and service-related purposes only, including to:</p>
          <ul>
            <li>Respond to inquiries and requests</li>
            <li>Prepare quotations and proposals</li>
            <li>Deliver guest posting and SEO services</li>
            <li>Manage SEO campaigns and projects</li>
            <li>Communicate about orders and services</li>
            <li>Provide customer support</li>
            <li>Improve our website and services</li>
            <li>Understand website usage and performance</li>
            <li>Maintain business records</li>
            <li>Prevent unauthorized or fraudulent activity</li>
            <li>Meet applicable legal and regulatory requirements</li>
          </ul>
          <p>
            We do not use personal information for purposes that are unrelated to the reason it
            was collected unless permitted or required by applicable law.
          </p>
        </LegalSection>

        <LegalSection heading="3. Information Related to SEO Services">
          <p>
            Clients are asked for their business information, website URLs, target keywords,
            landing pages, content requirements, or campaign details to receive any of our
            services.
          </p>
          <p>
            This information is used to provide guest posting, link insertion, niche edits,
            on-page SEO, off-page SEO, technical SEO, and white label SEO services.
          </p>
          <p>
            If you give us information to provide a service, we treat that as your business&apos;s
            confidential information and use it only in connection with that service as reasonably
            necessary.
          </p>
        </LegalSection>

        <LegalSection heading="4. Cookies and Similar Technologies">
          <p>
            Our website may use cookies and similar technologies to improve functionality,
            understand visitor behavior, remember preferences, and analyze website traffic.
          </p>
          <p>
            We may also use third-party analytics or website services. These providers may collect
            information according to their own privacy policies.
          </p>
          <p>
            You can manage or disable cookies through your browser settings. Please note that
            disabling certain cookies may affect the functionality of some parts of our website.
          </p>
        </LegalSection>

        <LegalSection heading="5. How We Share Information">
          <p>
            We do not sell or rent your personal information. We may share limited information
            with trusted third-party service providers when necessary to operate our business or
            deliver requested services. These providers may assist with hosting, website
            management, analytics, communications, payment processing, or other business
            functions.
          </p>
          <p>
            We may also disclose information where required by law, legal process, government
            authority, or where reasonably necessary to protect our rights, users, website, or
            business.
          </p>
        </LegalSection>

        <LegalSection heading="6. Data Security">
          <p>
            We take reasonable technical and organizational measures to protect the information we
            hold from unauthorized access, misuse, loss, alteration, or disclosure.
          </p>
          <p>
            However, no online transmission or electronic storage system is completely secure.
            Therefore, while we take reasonable precautions, we cannot guarantee absolute security
            of information transmitted over the internet.
          </p>
        </LegalSection>

        <LegalSection heading="7. Third-Party Websites">
          <p>
            Our website or services may contain links to third-party websites. These websites
            operate independently and have their own privacy policies and practices.
          </p>
          <p>
            We are not responsible for the privacy, security, content, or practices of third-party
            websites. We recommend reviewing their privacy policies before providing personal
            information.
          </p>
        </LegalSection>

        <LegalSection heading="8. Data Retention">
          <p>
            We retain personal information only for as long as reasonably necessary to provide
            services, maintain business records, resolve disputes, enforce agreements, and meet
            legal or regulatory obligations.
          </p>
          <p>The period for which information is retained may vary depending on its nature and purpose.</p>
        </LegalSection>

        <LegalSection heading="9. Your Privacy Rights">
          <p>
            Depending on your location and applicable privacy laws, you may have certain rights
            regarding your personal information. These may include requesting access to,
            correction of, or deletion of your information.
          </p>
          <p>
            If you would like to make a privacy-related request, please contact us using the
            contact information provided below.
          </p>
        </LegalSection>

        <LegalSection heading="10. Children's Privacy">
          <p>
            Our website and services are primarily intended for businesses, professionals,
            website owners, and marketing agencies.
          </p>
          <p>
            We do not knowingly collect personal information from children where such collection
            is prohibited by applicable law.
          </p>
          <p>
            If you believe that a child has provided personal information to us, please contact us
            so that we can take appropriate action.
          </p>
        </LegalSection>

        <LegalSection heading="11. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy periodically to reflect changes to our services,
            business practices, technology, or applicable laws.
          </p>
          <p>
            When changes are made, the updated version will be published on this page with a
            revised &ldquo;Last Updated&rdquo; date.
          </p>
        </LegalSection>

        <LegalSection heading="12. Contact Us">
          <p>If you have questions about this Privacy Policy or how we handle your information, please contact us:</p>
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
