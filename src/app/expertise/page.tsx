import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { LeadershipSection } from '@/components/expertise/LeadershipSection';
import { ExpertPanel } from '@/components/expertise/ExpertPanel';

export const metadata: Metadata = {
  title: 'Expertise & Team | Quantinev',
  description:
    'Meet the leadership and senior experts behind Quantinev — decades of experience in SAP, Cloud, AI, and modern software engineering.',
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        label="Our Expertise"
        title="Senior Talent. Deep Expertise."
        description="Our team combines decades of enterprise SAP experience with cutting-edge expertise in AI, cloud architecture, and modern web development."
      />
      <LeadershipSection />
      <ExpertPanel />
    </>
  );
}
