'use client';

import { Cpu, Layers, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const edgePoints = [
  {
    icon: Cpu,
    title: 'AI Meets Enterprise',
    text: 'We wire GPT, predictive models, and custom ML directly into your SAP workflows, ERPs, and legacy systems — turning old data into new intelligence.',
  },
  {
    icon: Layers,
    title: 'Modern Interfaces, Legacy Depth',
    text: 'Beautiful React & Next.js frontends backed by enterprise-grade APIs that pull from SAP, cloud, and AI in a single seamless experience.',
  },
];

export function QuantinevEdge() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px]" />

      <div className="relative container-max mx-auto">
        <FadeIn>
          <SectionHeading
            label="The Quantinev Edge"
            title="Where Innovation Connects to Enterprise"
            description="Most agencies build apps. Most consultancies optimize ERP. We do both — and connect them. That's our edge."
            dark
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {edgePoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full hover:border-accent-blue/30 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-blue/10 text-accent-blue mb-6">
                  <point.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">{point.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Button href="/enterprise-core" variant="outline" size="lg">
              Explore SAP Ecosystem <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
