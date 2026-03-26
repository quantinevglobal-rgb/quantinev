'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface IndustryCardProps {
  title: string;
  icon: string;
  headline: string;
  description: string;
  highlights: readonly string[];
  delay: number;
}

export function IndustryCard({
  title,
  icon,
  headline,
  description,
  highlights,
  delay,
}: IndustryCardProps) {
  const IconComp = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon];

  return (
    <FadeIn delay={delay}>
      <div className="group rounded-2xl border border-gray-100 bg-white p-8 md:p-10 hover:shadow-2xl hover:border-accent-blue/20 transition-all duration-300 h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
            {IconComp && <IconComp className="w-7 h-7" />}
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
            {title}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-navy-950 mb-3 group-hover:text-accent-blue transition-colors">
          {headline}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        <ul className="space-y-2.5 mb-8">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <Button href="/contact" variant="ghost" size="sm" className="group-hover:text-accent-blue">
          Discuss {title} Solutions <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </FadeIn>
  );
}
