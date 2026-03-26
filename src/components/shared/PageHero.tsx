'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PageHero({ label, title, description, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="relative gradient-navy pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-blue/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-accent-blue">
            {label}
          </span>
          <h1 className="heading-xl text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">{description}</p>
          {ctaText && ctaHref && (
            <Button href={ctaHref} size="lg">
              {ctaText} <ArrowRight className="w-5 h-5" />
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
