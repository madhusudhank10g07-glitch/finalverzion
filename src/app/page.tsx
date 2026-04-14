import Hero from '@/components/vidsaas/Hero'
import VideoSection from '@/components/vidsaas/VideoSection'
// import LogoTicker from '@/components/vidsaas/LogoTicker'
import ServicesSection from '@/components/vidsaas/ServicesSection'
import PortfolioSection from '@/components/vidsaas/PortfolioSection'
import IntegrationsSection from '@/components/vidsaas/IntegrationsSection'
import AboutSection from '@/components/vidsaas/AboutSection'
import TestimonialsSection from '@/components/vidsaas/TestimonialsSection'
import PortalIntroSection from '@/components/vidsaas/PortalIntrosection'
import PortalDashboardSection from '@/components/vidsaas/PortalDashboardSection'
import ComparisonSection from '@/components/vidsaas/ComparisonSection'
import PricingSection from '@/components/vidsaas/PricingSection'
import FAQSection from '@/components/vidsaas/FAQSection'
import CTASection from '@/components/vidsaas/CTASection'

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
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}