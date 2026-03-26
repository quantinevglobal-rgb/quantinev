'use client';

import { TECH_STACK } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';

const allTech = [
  ...TECH_STACK.enterprise,
  ...TECH_STACK.frontend,
  ...TECH_STACK.backend,
  ...TECH_STACK.ai,
];

function TechBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-gray-100 shadow-sm shrink-0 hover:border-accent-blue/30 hover:shadow-md transition-all duration-300">
      <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center text-navy-700 font-bold text-xs">
        {name.slice(0, 2).toUpperCase()}
      </div>
      <span className="text-sm font-medium text-navy-900 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechStackTicker() {
  const doubled = [...allTech, ...allTech];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-max mx-auto">
        <FadeIn>
          <SectionHeading
            label="Technology"
            title="Our Technology Ecosystem"
            description="Enterprise-grade technologies spanning SAP, modern web, cloud infrastructure, and AI."
          />
        </FadeIn>
      </div>

      {/* Ticker row 1 */}
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex gap-4 animate-ticker">
          {doubled.map((tech, i) => (
            <TechBadge key={`${tech}-${i}`} name={tech} />
          ))}
        </div>
      </div>

      {/* Category labels */}
      <div className="container-max mx-auto mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(
            [
              { label: 'Enterprise', items: TECH_STACK.enterprise },
              { label: 'Frontend', items: TECH_STACK.frontend },
              { label: 'Backend & Cloud', items: TECH_STACK.backend },
              { label: 'AI Integration', items: TECH_STACK.ai },
            ] as const
          ).map((group) => (
            <FadeIn key={group.label} delay={0.1}>
              <div className="p-4 rounded-xl bg-gray-50">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-blue mb-2">
                  {group.label}
                </h4>
                <p className="text-sm text-gray-600">{group.items.join(', ')}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
