"use client";

import { Play, ChevronDown } from "lucide-react";
import Link from "next/link";
export default function CTASection() {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 py-12 z-10"
      aria-labelledby="cta-heading"
    >
      <div className="bg-primary rounded-3xl relative overflow-hidden flex flex-col items-center text-center py-20 px-4 shadow-xl">
        {/* Background dotted pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        {/* Decorative side elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#007a64] rounded-r-3xl border-y border-r border-white/10"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#007a64] rounded-l-3xl border-y border-l border-white/10"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
            <Play className="w-8 h-8 text-white fill-current ml-1" />
          </div>

          <div className="inline-flex items-center gap-2 text-white/90 font-medium text-sm mb-6">
            <div className="w-2 h-1 bg-white rounded-full"></div>
            Get Started
          </div>

          <h2
            id="cta-heading"
            className="font-serif text-5xl md:text-7xl font-medium text-white leading-[1.1] mb-6 max-w-3xl"
          >
            Turn Viewers Into <span className="italic">customers</span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mb-10">
            Engage your audience, simplify your message, and boost conversions
            with a premium SaaS explainer video.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/book-a-call" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-transparent border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
              Book a Call
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
}