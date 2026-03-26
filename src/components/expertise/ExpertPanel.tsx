'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EXPERT_PANEL } from '@/lib/constants';
import { Award } from 'lucide-react';

function ExpertModule({
  title,
  experience,
  specialization,
  delay,
}: {
  title: string;
  experience: string;
  specialization: string;
  delay: number;
}) {
  const isSenior = experience.includes('20');

  return (
    <FadeIn delay={delay}>
      <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 hover:bg-white/10 hover:border-accent-blue/30 transition-all duration-300 h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isSenior
                ? 'bg-accent-gold/20 text-accent-gold'
                : 'bg-accent-blue/15 text-accent-blue'
            }`}
          >
            {experience}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Specializing in {specialization}
        </p>
      </div>
    </FadeIn>
  );
}

export function ExpertPanel() {
  return (
    <section className="section-padding gradient-navy">
      <div className="container-max mx-auto">
        <FadeIn>
          <SectionHeading
            label="Expert Panel"
            title="The Quantinev Expert Panel"
            description="Senior-level specialists across SAP, cloud, AI, and modern development — bringing decades of enterprise experience to every project."
            dark
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERT_PANEL.map((expert, i) => (
            <ExpertModule
              key={expert.title}
              title={expert.title}
              experience={expert.experience}
              specialization={expert.specialization}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
