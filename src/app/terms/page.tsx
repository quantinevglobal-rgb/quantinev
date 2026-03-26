import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service | Quantinev',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        description="Terms governing use of Quantinev's website and services."
      />
      <section className="section-padding bg-white">
        <div className="container-max mx-auto max-w-3xl prose prose-gray prose-headings:text-navy-950">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Quantinev website, you agree to be bound by
            these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>Services</h2>
          <p>
            Quantinev provides technology consulting and software development
            services. Specific terms for individual engagements are governed by
            separate service agreements.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and
            software — is the property of Quantinev and protected by applicable
            intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Quantinev shall not be liable for any indirect, incidental, or
            consequential damages arising from use of this website or our services.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact{' '}
            <a href="mailto:legal@quantinev.com">legal@quantinev.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
