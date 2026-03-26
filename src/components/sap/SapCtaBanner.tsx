'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function SapCtaBanner() {
  return (
    <section className="section-padding gradient-navy">
      <div className="container-max mx-auto text-center">
        <FadeIn>
          <h2 className="heading-lg text-white mb-4">
            Ready to Optimize Your SAP Landscape?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Get a free consultation with our SAP architects. We&apos;ll assess your current
            setup and recommend a roadmap for transformation.
          </p>
          <Button href="/contact" size="lg">
            Start Your SAP Journey <ArrowRight className="w-5 h-5" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
