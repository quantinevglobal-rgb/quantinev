import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy | Quantinev',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How Quantinev collects, uses, and protects your information."
      />
      <section className="section-padding bg-white">
        <div className="container-max mx-auto max-w-3xl prose prose-gray prose-headings:text-navy-950">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly — such as your name, email,
            company name, and project details when you submit an inquiry form or
            schedule a meeting.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your inquiries, provide
            requested services, and improve our offerings. We do not sell or share
            your personal data with third parties for marketing purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data,
            including encryption in transit and at rest, access controls, and
            regular security audits.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related inquiries, please contact us at{' '}
            <a href="mailto:privacy@quantinev.com">privacy@quantinev.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
