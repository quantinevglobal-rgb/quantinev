import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { IndustryCard } from '@/components/industries/IndustryCard';
import { INDUSTRIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Industries | Quantinev',
  description:
    'Quantinev delivers specialized technology solutions for Fintech, Healthcare, Real Estate, and Logistics.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Technology Built for Your Industry"
        description="Deep domain expertise paired with cutting-edge engineering. We build solutions that understand the nuances of your sector."
      />

      <section className="section-padding bg-gray-50/50">
        <div className="container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {INDUSTRIES.map((industry, i) => (
              <IndustryCard
                key={industry.slug}
                title={industry.title}
                icon={industry.icon}
                headline={industry.headline}
                description={industry.description}
                highlights={industry.highlights}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
