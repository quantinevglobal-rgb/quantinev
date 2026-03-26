'use client';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {label && (
        <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-accent-blue">
          {label}
        </span>
      )}
      <h2 className={cn('heading-lg', dark ? 'text-white' : 'text-navy-950')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 body-lg', dark ? 'text-gray-400' : 'text-gray-600')}>
          {description}
        </p>
      )}
    </div>
  );
}
