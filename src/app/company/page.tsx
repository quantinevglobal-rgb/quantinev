import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Company | Quantinev',
  description:
    'Learn about Quantinev — our mission, values, and commitment to bridging enterprise core with next-gen innovation.',
};

const values = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To empower enterprises with technology that bridges their existing foundations to innovative digital futures — making complex, simple.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'A world where every enterprise, regardless of legacy complexity, can rapidly adopt and benefit from next-generation technology.',
  },
  {
    icon: Heart,
    title: 'Values',
    text: 'Excellence in execution. Transparency in partnerships. Deep expertise over surface-level support. Long-term outcomes over short-term fixes.',
  },
];

const milestones = [
  { year: '2018', event: 'Quantinev founded with a focus on SAP consulting' },
  { year: '2019', event: 'First Fortune 500 client engagement' },
  { year: '2020', event: 'Expanded into custom web development & cloud services' },
  { year: '2022', event: 'Launched AI & Data Integration practice' },
  { year: '2024', event: 'SAP S/4HANA Center of Excellence established' },
  { year: '2026', event: '50+ enterprise clients across 12 industries' },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Enterprise Technology, Reimagined"
        description="Quantinev was founded on a simple belief: enterprises deserve technology partners who understand both the depth of legacy systems and the power of modern innovation."
      />

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue mb-5">
                    <v.icon className="w-7 h-7" />
                  </div>
                  <h3 className="heading-sm text-navy-950 mb-3">{v.title}</h3>
                  <p className="body-md">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-max mx-auto">
          <FadeIn>
            <SectionHeading
              label="Our Journey"
              title="Building a Track Record of Excellence"
              description="Key milestones in Quantinev's growth from a specialized SAP consultancy to a full-spectrum enterprise technology partner."
            />
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.08}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-bold shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px h-full bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="text-gray-700 font-medium">{m.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
