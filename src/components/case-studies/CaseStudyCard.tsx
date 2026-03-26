'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: readonly string[];
  results: readonly string[];
  techStack: readonly string[];
  delay: number;
}

export function CaseStudyCard({
  slug,
  title,
  client,
  industry,
  services,
  results,
  techStack,
  delay,
}: CaseStudyCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={`/case-studies/${slug}`}
        className="group block rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-2xl hover:border-accent-blue/20 transition-all duration-300 h-full"
      >
        {/* Header band */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 px-8 py-6 relative">
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
          <span className="text-accent-blue text-xs font-semibold tracking-widest uppercase">
            {industry}
          </span>
          <h3 className="text-lg font-bold text-white mt-2 leading-snug group-hover:text-accent-blue transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{client}</p>
        </div>

        <div className="p-8">
          {/* Services tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {services.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Results */}
          <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Key Results
          </h4>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {results.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-navy-900 font-medium">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                {r}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-navy-50 text-[11px] font-semibold text-navy-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
