import { useRef, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WorkshopLearningSection } from '@/components/sections/Learning';
import { WhatYoullLearnSection } from '@/components/sections/WhatYoullLearnSection';
import { ActionStepsSection } from '@/components/sections/ActionStepsSection';
import { BonusesSection } from '@/components/sections/BonusesSection';
import { WhoIsThisForSection } from '@/components/sections/WhoIsThisForSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PastAttendeesSection } from '@/components/sections/PastAttendeesSection';
import { MentorSection } from '@/components/sections/MentorSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { TopOfferBanner } from '@/components/TopOfferBanner'; // Import the new Banner
import { DisclaimerFooter } from '@/components/sections/DisclaimerFooter';
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";
import { LearningPhilosophySection } from '@/components/sections/LearningPhilosophySection';
import { CelebsBeliefSection } from '@/components/sections/CelebsBeliefSection';
import { PhotoGallerySection } from '@/components/sections/PhotoGallerySection';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useFacebookPixel();

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0 pt-6 md:pt-0"> {/* Added pt-6 for mobile banner spacing */}
      
      {/* 1. TOP STICKY BANNER */}
      <TopOfferBanner />

      <div ref={heroRef}>
        <HeroSection />
      </div>
      
      <CelebsBeliefSection/>
      <MentorSection />
      <PhotoGallerySection />
      <LearningPhilosophySection/>
      <WhatYoullLearnSection />
      <WorkshopLearningSection />
      <PastAttendeesSection />
      <FAQSection />
      <FinalCTASection onCTAClick={scrollToHero} />
      <DisclaimerFooter />

      {/* 2. BOTTOM STICKY CTA */}
      <StickyMobileCTA onCTAClick={scrollToHero} />
      
    </main>
  );
};

export default Index;