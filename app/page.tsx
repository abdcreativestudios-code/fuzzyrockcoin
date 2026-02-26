import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProofOfRealitySection } from '@/components/sections/ProofOfRealitySection';
import { GlobalSpreadSection } from '@/components/sections/GlobalSpreadSection';
import { AntiRugSection } from '@/components/sections/AntiRugSection';
import { MomentumRoadmapSection } from '@/components/sections/MomentumRoadmapSection';
import { WhatIsFuzzySection } from '@/components/sections/WhatIsFuzzySection';
import { UtilitySection } from '@/components/sections/UtilitySection';
import { TokenSnapshotSection } from '@/components/sections/TokenSnapshotSection';
import { HowToJoinSection } from '@/components/sections/HowToJoinSection';
import { IRLProductSection } from '@/components/sections/IRLProductSection';
import { MiniFAQSection } from '@/components/sections/MiniFAQSection';

const TikTokSectionClient = dynamic(
  () => import('@/components/TikTokSectionClient'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <HeroSection />
      <TikTokSectionClient />
      <ProofOfRealitySection />
      <GlobalSpreadSection />
      <AntiRugSection />
      <MomentumRoadmapSection />
      <WhatIsFuzzySection />
      <UtilitySection />
      <TokenSnapshotSection />
      <HowToJoinSection />
      <IRLProductSection />
      <MiniFAQSection />
    </main>
  );
}
