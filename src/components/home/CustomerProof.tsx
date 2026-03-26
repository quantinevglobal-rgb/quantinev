'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';

const clientLogos = [
  'TechCorp Global',
  'Innovex Systems',
  'Atlas Financial',
  'Meridian Health',
  'PrimeLogix',
  'Apex Industries',
];

const testimonials = [
  {
    quote:
      'Quantinev delivered our S/4HANA migration flawlessly — on time, on budget, and with zero business disruption.',
    author: 'VP of IT, Fortune 500 Manufacturing',
  },
  {
    quote:
      'Their AI integration into our existing SAP workflows increased forecast accuracy by 35%. Truly transformative.',
    author: 'CDO, Global Retail Enterprise',
  },
  {
    quote:
      'The team\'s depth in both SAP and modern web development is unmatched. A true end-to-end technology partner.',
    author: 'CTO, Financial Services Firm',
  },
];

export function CustomerProof() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <FadeIn>
          <SectionHeading
            label="Trusted Partners"
            title="Trusted by Industry Leaders"
            description="Enterprises across industries trust Quantinev for mission-critical technology initiatives."
          />
        </FadeIn>

        {/* Client logos */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-20 rounded-xl border border-gray-100 bg-gray-50/50 px-4"
              >
                <span className="text-sm font-semibold text-gray-400 text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50/30 p-8 h-full flex flex-col">
                <blockquote className="text-gray-700 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-navy-900">
                  — {t.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              'SAP Certified Partner',
              'AWS Advanced Consulting',
              'ISO 27001 Compliant',
              'SOC 2 Type II',
            ].map((cert) => (
              <span
                key={cert}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-white"
              >
                {cert}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
