import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { CASE_STUDIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Case Studies | Quantinev',
  description:
    'Real-world impact — see how Quantinev delivers AI, custom software, and enterprise solutions across industries.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Real Work. Real Impact."
        description="We don't just talk about innovation — we ship it. Explore how we've solved high-stakes technology challenges for enterprise clients."
      />

      <section className="section-padding bg-gray-50/50">
        <div className="container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <CaseStudyCard
                key={study.slug}
                slug={study.slug}
                title={study.title}
                client={study.client}
                industry={study.industry}
                services={study.services}
                results={study.results}
                techStack={study.techStack}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
