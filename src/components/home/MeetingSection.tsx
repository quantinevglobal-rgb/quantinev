'use client';

import { Calendar, Clock, Video } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';

export function MeetingSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com';

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <FadeIn direction="left">
            <div>
              <SectionHeading
                label="Book a Call"
                title="Let's Discuss Your Project Today"
                description="Schedule a 15-minute introductory call with our solutions experts. No commitment, no pressure — just a conversation about how we can help."
                align="left"
              />

              <div className="space-y-4 mt-8">
                {[
                  { icon: Clock, text: '15-minute introductory session' },
                  { icon: Video, text: 'Video call with a solutions expert' },
                  { icon: Calendar, text: 'Pick a time that suits your schedule' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Calendly embed */}
          <FadeIn direction="right">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="660"
                frameBorder="0"
                title="Schedule a meeting with Quantinev"
                className="w-full"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
