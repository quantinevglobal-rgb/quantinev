'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function ServicesCta() {
  return (
    <section className="section-padding gradient-navy">
      <div className="container-max mx-auto text-center">
        <FadeIn>
          <h2 className="heading-lg text-white mb-4">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you need a custom web application, AI integration, or a
            cloud-native architecture — our team delivers enterprise-grade solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Start a Project <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/expertise" variant="outline" size="lg">
              Meet the Team
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
