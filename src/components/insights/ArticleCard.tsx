'use client';

import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  delay: number;
}

const categoryColors: Record<string, string> = {
  SAP: 'bg-navy-100 text-navy-800',
  AI: 'bg-purple-100 text-purple-800',
  Development: 'bg-emerald-100 text-emerald-800',
  Cloud: 'bg-sky-100 text-sky-800',
  DevOps: 'bg-orange-100 text-orange-800',
};

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  delay,
}: ArticleCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={`/insights/${slug}`}
        className="group block rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:border-accent-blue/20 transition-all duration-300 h-full"
      >
        {/* Placeholder image area */}
        <div className="h-48 bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,180,255,0.15),transparent_70%)]" />
          <span className="text-white/20 text-6xl font-bold">
            {category.slice(0, 2)}
          </span>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                categoryColors[category] ?? 'bg-gray-100 text-gray-700'
              }`}
            >
              {category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          <time className="block mt-4 text-xs text-gray-400">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </Link>
    </FadeIn>
  );
}
