import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  dark?: boolean;
}

export function ServiceCard({ title, description, icon, href, dark = false }: ServiceCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon];

  return (
    <a
      href={href}
      className={cn(
        'group block rounded-2xl p-8 transition-all duration-300',
        dark
          ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-blue/30'
          : 'bg-white border border-gray-100 hover:border-accent-blue/30 hover:shadow-xl hover:shadow-accent-blue/5',
      )}
    >
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
        {IconComponent && <IconComponent className="w-7 h-7" />}
      </div>
      <h3
        className={cn(
          'heading-sm mb-3',
          dark ? 'text-white' : 'text-navy-950',
        )}
      >
        {title}
      </h3>
      <p className={cn('body-md', dark ? 'text-gray-400' : 'text-gray-600')}>
        {description}
      </p>
    </a>
  );
}
