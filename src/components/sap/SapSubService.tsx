'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { cn } from '@/lib/utils';

interface SubServiceProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export function SapSubService({ id, title, description, features, index }: SubServiceProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={id}
      className={cn('section-padding', isEven ? 'bg-white' : 'bg-gray-50/50')}
    >
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction={isEven ? 'left' : 'right'}>
            <div>
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-accent-blue">
                SAP Service
              </span>
              <h2 className="heading-lg text-navy-950 mb-4">{title}</h2>
              <p className="body-lg mb-8">{description}</p>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction={isEven ? 'right' : 'left'} delay={0.15}>
            <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 p-10 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <span className="text-6xl font-bold gradient-text">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-gray-400 mt-3 text-sm font-medium">{title}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
