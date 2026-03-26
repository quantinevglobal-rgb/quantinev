import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Get a Quote | Quantinev',
  description:
    'Contact Quantinev for SAP consulting, custom software development, AI integration, and cloud services.',
};

const contactDetails = [
  { icon: MapPin, label: 'Office', value: COMPANY_INFO.address },
  { icon: Phone, label: 'Phone', value: COMPANY_INFO.phone },
  { icon: Mail, label: 'Email', value: COMPANY_INFO.email },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's Build Together"
        description="Tell us about your project. Our solutions architects will respond within 24 hours with a tailored proposal."
      />

      <section className="section-padding bg-gray-50/50">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="heading-sm text-navy-950 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-xl bg-navy-900 text-white">
                <h4 className="text-lg font-semibold mb-2">Prefer a quick call?</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Schedule a 15-minute introductory call with our team.
                </p>
                <a
                  href="/#meeting"
                  className="inline-flex items-center gap-2 text-accent-blue text-sm font-semibold hover:underline"
                >
                  Book a Meeting →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
