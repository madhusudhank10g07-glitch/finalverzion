"use client";

import React from 'react';

const ProcessSection = () => {
  const processes = [
    {
      number: "1.",
      description: "We start by understanding your business goals, target audience, and the specific outcomes you want to achieve with your video content."
    },
    {
      number: "2.",
      description: "Our team schedules a discovery call to dive deep into your project requirements, brand guidelines, and messaging strategy."
    },
    {
      number: "3.",
      description: "We deliver a comprehensive proposal with project scope, timeline, and investment details tailored to your business needs."
    },
    {
      number: "4.",
      description: "Once approved, our production team begins crafting your video. You'll receive regular updates and milestone reviews throughout the process."
    },
    {
      number: "5.",
      description: "After delivery, we gather feedback and provide optimization recommendations to ensure your video achieves maximum conversion results."
    }
  ];

  return (
    <section 
      className="relative w-full py-[120px] bg-[#050505] overflow-hidden" 
      id="process"
    >
      <div className="container mx-auto px-6 max-w-[1248px]">
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="text-[64px] font-semibold tracking-tight text-white leading-[1.1]">
            Our Production <span className="text-[#4ade80]">Process.</span>
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-8 no-scrollbar scroll-smooth snap-x">
          {processes.map((process, index) => (
            <div 
              key={index}
              className="group relative flex-shrink-0 w-[400px] min-h-[280px] snap-start"
            >
              {/* Card Container with subtle border */}
              <div className="relative h-full p-8 rounded-[24px] border border-white/10 bg-[#0a0a0a] transition-all duration-300 hover:border-[#4ade80]/30 overflow-hidden">
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[48px] font-bold text-[#4ade80] mb-6 leading-none tracking-tighter">
                    {process.number}
                  </span>
                  <p className="text-[18px] text-[#999999] leading-[1.6] font-normal">
                    {process.description}
                  </p>
                </div>

                {/* Subtle Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#4ade80]/5 blur-[80px]" />
                </div>
              </div>

              {/* Outer Stroke Layer (Optional: Matches the Framer hierarchy if needed for visual parity) */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Background radial glow matching the design system */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#4ade80]/5 blur-[120px] pointer-events-none -z-10" />

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
