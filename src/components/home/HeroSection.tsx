'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-navy-700/20 rounded-full blur-[150px]" />
        <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-[100px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/80" />
      </div>

      <div className="relative container-max mx-auto section-padding pt-36 pb-24">
        <div className="max-w-5xl">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              Digital Products &middot; AI &middot; Enterprise Evolution
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ignite Innovation.
            <br />
            <span className="gradient-text">Engineer the Future.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Pushing the boundaries of technology, unleashing limitless innovation
            for a smarter future. Quantinev delivers high-performance digital
            products and AI-driven enterprise evolution.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Button href="/services" size="lg">
              What We Build <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="#book-meeting" variant="outline" size="lg">
              Book a Call
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/[0.06] pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {[
              { value: '50+', label: 'Enterprise Clients' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '12', label: 'Industries Served' },
              { value: '98%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
