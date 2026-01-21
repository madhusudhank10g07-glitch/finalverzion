"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import WorkReel from "@/components/sections/work-reel";
import ServicesSection from "@/components/sections/services";
import WorkCarousel from "@/components/sections/work-carousel";
import FeaturesShowcase from "@/components/sections/features-showcase";
import ProcessSection from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import FooterCTA from "@/components/sections/footer-cta";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Navbar />
      
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <WorkReel />
      </AnimatedSection>
      
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <FeaturesShowcase />
      </AnimatedSection>
      
      <AnimatedSection>
        <WorkCarousel />
      </AnimatedSection>
      
      <AnimatedSection>
        <ProcessSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
      
      <AnimatedSection>
        <FooterCTA />
      </AnimatedSection>
    </main>
  );
}
