'use client';

import { useState, useEffect } from 'react';
import { BackgroundGrid } from '../components/BackgroundGrid';
import { CentralStreak } from '../components/CentralStreak';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ScrollingTicker } from '../components/ScrollingTicker';
import { FeatureGrid } from '../components/FeatureGrid';
import { PartnersDetailSection } from '../components/PartnersDetailSection';
import { Methodology } from '../components/Methodology';
import { CTASection } from '../components/CTASection';
import { SocialProofSection } from '../components/SocialProofSection';

export default function Page() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [ChatModal, setChatModal] = useState<React.ComponentType<{
    isOpen: boolean;
    onClose: () => void;
  }> | null>(null);

  useEffect(() => {
    // Dynamically import ChatModal only on client side
    import('../components/ChatModal').then((module) => {
      setChatModal(() => module.ChatModal);
    });
  }, []);

  return (
    <>
      <BackgroundGrid />
      <CentralStreak />
      <Navigation onChatOpen={() => setIsChatOpen(true)} />
      <main className="relative z-10 pt-32 pb-20">
        <Hero onChatOpen={() => setIsChatOpen(true)} />
        <ScrollingTicker />
        <Methodology />
        <SocialProofSection />
        <FeatureGrid />
        <PartnersDetailSection />
        <CTASection onChatOpen={() => setIsChatOpen(true)} />
      </main>
      {ChatModal && (
        <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      )}
    </>
  );
}
