import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
// import LogoTicker from '@/components/vidsaas/LogoTicker'
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PortalIntroSection from "@/components/sections/PortalIntrosection";
import PortalDashboardSection from "@/components/sections/PortalDashboardSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main className="flex-grow flex flex-col items-center w-full">
      <Hero />
      <VideoSection />
      {/* <LogoTicker /> */}
      <ServicesSection />
      <PortfolioSection />
      <IntegrationsSection />
      <AboutSection />
      <TestimonialsSection />
      {/* <PortalIntroSection />
      <PortalDashboardSection /> */}
      {/* <ComparisonSection /> */}
      {/* <PricingSection /> */}
      <FAQSection />
      <CTASection />
    </main>
  );
}
