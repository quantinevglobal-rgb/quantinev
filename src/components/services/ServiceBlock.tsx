'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface ServiceBlockProps {
  id: string;
  label: string;
  title: string;
  description: string;
  features: { icon: string; title: string; text: string }[];
  index: number;
}

export function ServiceBlock({ id, label, title, description, features, index }: ServiceBlockProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={id}
      className={cn('section-padding', isEven ? 'bg-white' : 'bg-gray-50/50')}
    >
      <div className="container-max mx-auto">
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-accent-blue">
              {label}
            </span>
            <h2 className="heading-lg text-navy-950 mb-4">{title}</h2>
            <p className="body-lg">{description}</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const IconComp = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[feat.icon];
            return (
              <FadeIn key={feat.title} delay={i * 0.08}>
                <div className="rounded-xl border border-gray-100 bg-white p-6 h-full hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                    {IconComp && <IconComp className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-950 mb-2">{feat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feat.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
