// Testimonials.tsx
"use client";

import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const TESTIMONIALS = [
  { author: "Hiten Shah", role: "Co-Founder, Crazy Egg", quote: "We used a simple animated explainer video to show how heatmaps work, and it became one of our most effective sales assets." },
  { author: "Todd Olson", role: "CEO, Pendo", quote: "Explaining complex software clearly is critical. Video helped us communicate our product vision faster to customers and investors." },
  { author: "Amit Bendov", role: "CEO, Gong", quote: "Video helped us communicate the value of conversation intelligence in a way slides never could." },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => setActiveIndex((p) => (p + 1) % TESTIMONIALS.length), []);
  const handlePrev = useCallback(() => setActiveIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  return (
    <section className="relative w-full py-12 md:py-24 bg-[#050505] overflow-hidden px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Client <span className="text-[#4ade80]">Results.</span></h2>
          <p className="text-[#bdbdbd] mt-3 max-w-2xl">See what business leaders say about working with Final Verzion.</p>
        </div>

        <div className="relative w-full max-w-3xl">
          {/* left control (visible on mobile too as smaller buttons) */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div className="mx-auto bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 md:p-10">
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-[#4ade80] opacity-10 blur-[60px] pointer-events-none rounded-full" />

              <div className="relative z-10 flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#4ade80]/10">
                    <Building2 className="w-6 h-6 text-[#4ade80]" />
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold">{TESTIMONIALS[activeIndex].author}</h4>
                  <p className="text-[#bdbdbd] text-sm mb-4">{TESTIMONIALS[activeIndex].role}</p>
                  <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">{TESTIMONIALS[activeIndex].quote}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex gap-2.5 mt-6">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${idx === activeIndex ? "bg-[#4ade80]" : "bg-[#4ade80]/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}