// pages/Index.tsx
import Hero from "@/components/Hero";
import PlatformAvailability from "@/components/PlatformAvailability";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <>
      <Hero />
      <PlatformAvailability />
      <FeaturesShowcase />
      <Pricing />
      <CTA />
    </>
  );
};

export default Index;
