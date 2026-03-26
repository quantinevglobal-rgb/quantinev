'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LEADERSHIP, EXPERT_PANEL } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Award } from 'lucide-react';

function FounderCard({
  name,
  role,
  focus,
  bio,
  delay,
}: {
  name: string;
  role: string;
  focus: string;
  bio: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-8 md:p-10 hover:border-accent-blue/30 transition-all duration-300 h-full">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-blue to-blue-600 flex items-center justify-center mb-6 ring-4 ring-white/5">
          <span className="text-2xl font-bold text-white">
            {name.split(' ').map((n) => n[0]).join('')}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
          {name}
        </h3>
        <p className="text-accent-blue font-semibold text-sm mt-1">{role}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 mb-4">{focus}</p>
        <p className="text-gray-400 leading-relaxed text-sm">{bio}</p>
      </div>
    </FadeIn>
  );
}

function ExpertBadge({
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
  const isMid = experience.includes('10');

  return (
    <FadeIn delay={delay}>
      <div className="group flex items-start gap-4 rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 hover:bg-white/[0.06] hover:border-accent-blue/20 transition-all duration-300">
        <div className="shrink-0">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isSenior
                ? 'bg-accent-gold/15 text-accent-gold'
                : isMid
                  ? 'bg-accent-blue/15 text-accent-blue'
                  : 'bg-white/10 text-gray-400'
            }`}
          >
            <Award className="w-5 h-5" />
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors">
              {title}
            </h4>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${
                isSenior
                  ? 'bg-accent-gold/15 text-accent-gold'
                  : isMid
                    ? 'bg-accent-blue/15 text-accent-blue'
                    : 'bg-white/10 text-gray-400'
              }`}
            >
              {experience}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{specialization}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export function HomeTeamSection() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative container-max mx-auto">
        <FadeIn>
          <SectionHeading
            label="The Team"
            title="Built by Senior Engineers"
            description="No juniors on your project. Every engagement is led by architects and engineers with 5–20+ years of deep specialization."
            dark
          />
        </FadeIn>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {LEADERSHIP.map((leader, i) => (
            <FounderCard
              key={leader.name}
              name={leader.name}
              role={leader.role}
              focus={leader.focus}
              bio={leader.bio}
              delay={i * 0.12}
            />
          ))}
        </div>

        {/* Expert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {EXPERT_PANEL.map((expert, i) => (
            <ExpertBadge
              key={expert.title}
              title={expert.title}
              experience={expert.experience}
              specialization={expert.specialization}
              delay={i * 0.06}
            />
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <Button href="/expertise" variant="outline" size="md">
              Full Team & Expertise <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
