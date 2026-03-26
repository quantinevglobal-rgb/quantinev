'use client';

import { SERVICE_PILLARS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { FadeIn } from '@/components/ui/FadeIn';

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <FadeIn>
          <SectionHeading
            label="What We Build"
            title="AI, Software & Cloud — at Enterprise Scale"
            description="We don't just consult. We design, engineer, and ship digital products that move industries forward."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_PILLARS.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
