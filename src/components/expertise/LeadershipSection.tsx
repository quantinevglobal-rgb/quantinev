'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { LEADERSHIP } from '@/lib/constants';
import { Sparkles } from 'lucide-react';

function LeaderCard({
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
      <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 hover:shadow-xl hover:border-accent-blue/20 transition-all duration-300 h-full">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center mb-6">
          <span className="text-2xl font-bold text-white">
            {name.split(' ').map((n) => n[0]).join('')}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-navy-950 mb-1">{name}</h3>
        <p className="text-accent-blue font-semibold mb-1">{role}</p>
        <p className="text-sm text-gray-500 mb-4">Focus: {focus}</p>
        <p className="text-gray-600 leading-relaxed">{bio}</p>
      </div>
    </FadeIn>
  );
}

export function LeadershipSection() {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-max mx-auto">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 mb-3 text-sm font-semibold tracking-widest uppercase text-accent-blue">
              <Sparkles className="w-4 h-4" /> Leadership
            </span>
            <h2 className="heading-lg text-navy-950">
              Visionary Leadership, Technical Excellence
            </h2>
            <p className="mt-4 body-lg">
              Our founders bring decades of combined experience in enterprise
              technology, SAP, and modern software engineering.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {LEADERSHIP.map((leader, i) => (
            <LeaderCard
              key={leader.name}
              name={leader.name}
              role={leader.role}
              focus={leader.focus}
              bio={leader.bio}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
