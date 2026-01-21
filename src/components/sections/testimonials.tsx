"use client";

import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    author: "Sarah Chen",
    role: "CMO, TechScale Inc.",
    quote: '"Final Verzion transformed our product launch with a video that drove 3x more conversions than our previous campaigns. Their understanding of B2B messaging is exceptional."',
  },
  {
    author: "Michael Rodriguez",
    role: "VP Marketing, CloudSync Solutions",
    quote: '"Working with Final Verzion was seamless. They delivered high-quality motion graphics that perfectly captured our brand essence and resonated with our enterprise clients."',
  },
  {
    author: "Jennifer Walsh",
    role: "Director of Growth, DataFlow Analytics",
    quote: '"The team at Final Verzion doesn\'t just create videos—they create conversion machines. Our lead generation increased by 150% after launching their video content."',
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  return (
    <section className="relative w-full py-[120px] bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Testimonial Header */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-[48px] md:text-[64px] font-semibold tracking-tight">
            Client <span className="text-[#4ade80]">Results.</span>
          </h2>
          <p className="text-[#999999] text-[18px] mt-4 max-w-[500px] mx-auto">
            See what business leaders say about working with Final Verzion.
          </p>
        </div>

        <div className="relative flex items-center justify-center w-full max-w-[1000px]">
          {/* Navigation - Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-60px] md:left-0 z-10 p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors hidden md:flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-[600px] aspect-[16/8] bg-[#0a0a0a] rounded-[24px] border border-white/10 p-8 flex flex-col justify-center overflow-hidden">
             {/* Green Accent Lighting / Glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-[#4ade80] opacity-[0.12] blur-[60px] pointer-events-none rounded-full" />
             
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden border border-white/10 bg-[#4ade80]/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-semibold leading-tight">
                      {TESTIMONIALS[activeIndex].author}
                    </h4>
                    <p className="text-[#999999] text-[14px]">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  </div>
                </div>

                <div className="max-w-[500px]">
                  <p className="text-white text-[18px] leading-[1.4] font-normal tracking-tight">
                    {TESTIMONIALS[activeIndex].quote}
                  </p>
                </div>
             </div>
          </div>

          {/* Navigation - Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-[-60px] md:right-0 z-10 p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors hidden md:flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2.5 mt-10">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#4ade80]" : "bg-[#4ade80]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
