import { HeroSection } from "@/components/home/HeroSection";
import { StatsStrip } from "@/components/home/StatsStrip";
import { DoctrineSection } from "@/components/home/DoctrineSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { TrainersSection } from "@/components/home/TrainersSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TransformationsSection } from "@/components/home/TransformationsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <DoctrineSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection />
      <TransformationsSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
