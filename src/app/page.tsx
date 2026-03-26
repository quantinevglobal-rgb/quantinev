import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';

const QuantinevEdge = dynamic(() => import('@/components/home/CoreEdgeSection').then(m => ({ default: m.QuantinevEdge })));
const TechStackTicker = dynamic(() => import('@/components/home/TechStackTicker').then(m => ({ default: m.TechStackTicker })));
const HomeTeamSection = dynamic(() => import('@/components/home/HomeTeamSection').then(m => ({ default: m.HomeTeamSection })));
const MeetingSection = dynamic(() => import('@/components/home/MeetingSection').then(m => ({ default: m.MeetingSection })));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <QuantinevEdge />
      <TechStackTicker />
      <HomeTeamSection />
      <MeetingSection />
    </>
  );
}
