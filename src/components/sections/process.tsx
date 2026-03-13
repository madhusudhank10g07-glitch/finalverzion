// ProcessSection.tsx
"use client";

import React from "react";

const ProcessSection = () => {
  const processes = [
    { number: "1.", description: "We start by understanding your business goals, target audience, and the specific outcomes you want to achieve with your video content." },
    { number: "2.", description: "Our team schedules a discovery call to dive deep into your project requirements, brand guidelines, and messaging strategy." },
    { number: "3.", description: "We deliver a comprehensive proposal with project scope, timeline, and investment details tailored to your business needs." },
    { number: "4.", description: "Once approved, our production team begins crafting your video. You'll receive regular updates and milestone reviews throughout the process." },
    { number: "5.", description: "After delivery, we gather feedback and provide optimization recommendations to ensure your video achieves maximum conversion results." },
  ];

  return (
    <section id="process" className="relative w-full py-12 md:py-24 bg-[#050505] overflow-hidden px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">Our Production <span className="text-[#4ade80]">Process.</span></h2>
        </div>

        {/* On small screens: horizontal scroll with snap. On md+: grid */}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-3">
            <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar snap-x">
              {processes.map((p, i) => (
                <article key={i} className="snap-start flex-shrink-0 md:flex-1 w-[320px] md:w-auto">
                  <div className="h-full p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-[#4ade80]/30 transition duration-300">
                    <span className="text-4xl md:text-5xl font-bold text-[#4ade80]">{p.number}</span>
                    <p className="text-[#bdbdbd] mt-4 leading-relaxed">{p.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* glow background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full blur-3xl opacity-10" style={{ background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)" }} />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ProcessSection;