import { BackgroundGrid } from '../components/BackgroundGrid';
import { CentralStreak } from '../components/CentralStreak';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ScrollingTicker } from '../components/ScrollingTicker';
import { FeatureGrid } from '../components/FeatureGrid';
import { PartnersDetailSection } from '../components/PartnersDetailSection';
import { Methodology } from '../components/Methodology';
import { CTASection } from '../components/CTASection';

export default function Page() {
  return (
    <>
      <BackgroundGrid />
      <CentralStreak />
      <Navigation />
      <main className="relative z-10 pt-32 pb-20">
        <Hero />
        <ScrollingTicker />
        <Methodology />
        <FeatureGrid />
        <PartnersDetailSection />
        <CTASection />
      </main>
    </>
  );
}
