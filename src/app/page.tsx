// "use client";

// import { motion } from "framer-motion";
// import Navbar from "@/components/sections/navbar";
// import HeroSection from "@/components/sections/hero";
// import WorkReel from "@/components/sections/work-reel";
// import ServicesSection from "@/components/sections/services";
// import ProcessSection from "@/components/sections/process";
// import Testimonials from "@/components/sections/testimonials";
// import FAQSection from "@/components/sections/faq";
// import ContactForm from "@/components/sections/contact-form";
// import FooterCTA from "@/components/sections/footer-cta";

// const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 0.8, ease: "easeOut" }}
//   >
//     {children}
//   </motion.div>
// );

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
//       <Navbar />
      
//       <AnimatedSection>
//         <HeroSection />
//       </AnimatedSection>
      
//       <AnimatedSection>
//         <WorkReel />
//       </AnimatedSection>
      
//       <AnimatedSection>
//         <ServicesSection />
//       </AnimatedSection>
      
    
      
//       <AnimatedSection>
//         <ProcessSection />
//       </AnimatedSection>
      
//       <AnimatedSection>
//         <Testimonials />
//       </AnimatedSection>
      
//       <AnimatedSection>
//         <FAQSection />
//       </AnimatedSection>
      
//       <AnimatedSection>
//         <ContactForm />
//       </AnimatedSection>
      
//       <AnimatedSection>
//         <FooterCTA />
//       </AnimatedSection>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import WorkReel from "@/components/sections/work-reel";
import ServicesSection from "@/components/sections/services";
import ProcessSection from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import FooterCTA from "@/components/sections/footer-cta";
import LeadModal from "@/components/modal/lead-modal"; // Import the new modal

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
  const [showModal, setShowModal] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Trigger function: Opens modal only if it hasn't opened before
  const handleWorkReelView = () => {
    if (!hasOpened) {
      setShowModal(true);
      setHasOpened(true);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      
      {/* The Modal Component */}
      <LeadModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <Navbar />
      
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      
      {/* WRAPPER FOR SCROLL TRIGGER 
         When this div enters the viewport, the modal opens.
      */}
      <motion.div 
        onViewportEnter={handleWorkReelView} 
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is visible
      >
        <AnimatedSection>
          <WorkReel />
        </AnimatedSection>
      </motion.div>
      
      <AnimatedSection>
        <ServicesSection />
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