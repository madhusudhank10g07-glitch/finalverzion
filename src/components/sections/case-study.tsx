"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { motion, useInView } from "framer-motion";

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ─── Reusable Fade-In ─── */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Green Gradient Text ─── */
const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

export default function CaseStudy() {
  return (
    <div className="w-full">
      {/* Wistia Scripts */}
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/8ocllv51kj.js" strategy="lazyOnload" type="module" />

      {/* ════════════════════════════════════════════
          HERO SECTION
         ════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#050505] pt-[140px] pb-[100px] px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/10 via-green-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-[1000px] text-center relative z-10">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8 tracking-wide">
              CASE STUDY
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold text-white leading-[1.08] tracking-tight mb-6 normal-case">
              How an AI CRO Explainer Increased Conversions by{" "}
              <GradientText>37% in 60 Days</GradientText>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#999] text-[17px] sm:text-[19px] max-w-[680px] mx-auto mb-10 leading-relaxed">
              We helped a SaaS company clarify value, reduce bounce rate, and increase demo bookings using conversion-focused video strategy.
            </p>
          </FadeIn>

            {/* Embedded Video — Wistia */}
            <FadeIn delay={0.3}>
              <div className="relative max-w-[800px] mx-auto mb-12">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 via-green-500/10 to-teal-500/20 rounded-[28px] blur-[30px] pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                  {/* @ts-expect-error — Wistia custom element */}
                  <wistia-player
                    media-id="8ocllv51kj"
                    aspect="1.7777777777777777"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              </div>
            </FadeIn>

          {/* Metrics Bar */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
              {[
                { label: "Conversion Rate", value: 37, prefix: "+", suffix: "%" },
                { label: "Bounce Rate", value: 22, prefix: "-", suffix: "%" },
                { label: "Demo Bookings", value: 41, prefix: "+", suffix: "%" },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm min-w-[200px]"
                >
                  <span className="text-[28px] sm:text-[32px] font-bold text-white">
                    <AnimatedCounter target={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                  </span>
                  <span className="text-[#888] text-sm">{metric.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-black font-semibold text-[16px] hover:shadow-[0_0_40px_rgba(74,222,128,0.3)] transition-all duration-300 hover:scale-105"
              >
               Want a video that get more revenue contact us 
              </a>
              {/* <a
                href="#work"
                className="px-8 py-4 rounded-full border border-white/10 text-white font-medium text-[16px] hover:border-white/30 transition-all duration-300"
              >
                View More Case Studies
              </a> */}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          THE PROBLEM SECTION
         ════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#050505] py-[100px] px-6">
        {/* Gradient divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="container mx-auto max-w-[1100px]">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
              THE PROBLEM
            </span>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left — Problem description */}
            <FadeIn delay={0.1}>
              <h3 className="text-[28px] sm:text-[36px] font-bold text-white leading-[1.15] mb-6">
                Their product was great. Their{" "}
                <GradientText>messaging wasn&apos;t converting.</GradientText>
              </h3>
              <p className="text-[#999] text-[17px] leading-relaxed">
                The client had a powerful SaaS platform, but their landing page failed to communicate value within the first 8 seconds. Visitors were bouncing before understanding what the product could do for them. Traditional explainer videos felt generic and lacked conversion psychology.
              </p>
            </FadeIn>

            {/* Right — Pain points */}
            <FadeIn delay={0.2}>
              <div className="space-y-5">
                {[
                  "Landing page bounce rate was above 68%",
                  "Demo booking rate below 2.1%",
                  "Visitors couldn't understand the product value fast enough",
                  "Existing video content felt generic and uninspiring",
                  "No clear hook or CTA strategy in visual assets",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7L6 11L12 3" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[#ccc] text-[16px] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STRATEGY BREAKDOWN (TIMELINE)
         ════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#050505] py-[100px] px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="container mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                OUR STRATEGY
              </span>
              <h3 className="text-[32px] sm:text-[44px] font-bold text-white leading-[1.1]">
                A 3-Phase <GradientText>Conversion Blueprint</GradientText>
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Research & CRO Audit",
                desc: "Deep-dive into user behavior, heatmaps, and conversion funnels. Identified the exact 8-second window where visitors dropped off.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Script Framework Built for Retention",
                desc: "Crafted a conversion-first script using hook patterns, value stacking, and objection handling — engineered to keep viewers watching.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "AI-Enhanced Visual Storytelling",
                desc: "Used AI-driven motion graphics, dynamic data visualizations, and cinematic transitions to make complex features feel simple and exciting.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative group h-full">
                  {/* Gradient border glow */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <span className="text-emerald-400/60 text-sm font-mono font-semibold mb-2 block">{item.step}</span>
                    <h4 className="text-white text-[20px] font-bold mb-3">{item.title}</h4>
                    <p className="text-[#888] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          THE VIDEO SECTION
         ════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#050505] py-[100px] px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-[1100px] relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                THE VIDEO
              </span>
              <h3 className="text-[32px] sm:text-[44px] font-bold text-white leading-[1.1] mb-4">
                Engineered for <GradientText>Maximum Retention</GradientText>
              </h3>
              <p className="text-[#999] text-[17px] max-w-[600px] mx-auto">
                Every frame is designed with conversion psychology — from the opening hook to the final CTA placement.
              </p>
            </div>
          </FadeIn>

            {/* Full-width Video — Wistia */}
            <FadeIn delay={0.2}>
              <div className="relative max-w-[960px] mx-auto mb-14">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-green-500/15 rounded-[32px] blur-[40px] pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                  {/* @ts-expect-error — Wistia custom element */}
                  <wistia-player
                    media-id="8ocllv51kj"
                    aspect="1.7777777777777777"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              </div>
            </FadeIn>

          {/* Psychology Points */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[960px] mx-auto">
              {[
                { label: "Hook Pattern", desc: "Attention captured in 2.5 seconds" },
                { label: "Pattern Interrupt", desc: "Visual breaks every 12 seconds" },
                { label: "Value Stacking", desc: "3 benefits before the CTA" },
                { label: "CTA Placement", desc: "Strategic ask at peak engagement" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
                >
                  <p className="text-white font-semibold text-[15px] mb-1">{item.label}</p>
                  <p className="text-[#777] text-[13px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          RESULTS SECTION
         ════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#050505] py-[120px] px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="container mx-auto max-w-[1100px] text-center relative z-10">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
              THE RESULTS
            </span>
          </FadeIn>

          {/* Large Animated Numbers */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-16">
              {[
                { value: 37, prefix: "+", suffix: "%", label: "Conversion Rate" },
                { value: 22, prefix: "-", suffix: "%", label: "Drop-off Rate" },
                { value: 41, prefix: "+", suffix: "%", label: "Demo Requests" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[56px] sm:text-[72px] md:text-[88px] font-bold leading-none">
                    <GradientText>
                      <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </GradientText>
                  </div>
                  <p className="text-[#888] text-[16px] mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Testimonial Glass Card */}
          <FadeIn delay={0.2}>
            <div className="max-w-[700px] mx-auto p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <svg className="w-8 h-8 text-emerald-500/40 mb-4 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white text-[18px] sm:text-[20px] leading-relaxed mb-6 italic">
                &ldquo;Final Verzion didn&apos;t just make us a video — they engineered a conversion system. Our demo bookings went through the roof within the first month.&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-[16px]">Sarah Chen</p>
                <p className="text-[#777] text-[14px]">VP of Marketing, CloudStack AI</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHY THIS WORKS SECTION
         ════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#050505] py-[100px] px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="container mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                OUR METHODOLOGY
              </span>
              <h3 className="text-[32px] sm:text-[44px] font-bold text-white leading-[1.1]">
                Why <GradientText>AI + CRO</GradientText> Works
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Behavioral Triggers",
                desc: "We embed psychological micro-cues — urgency, social proof, and authority signals — directly into the visual narrative to drive action.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Z" /><path d="M8.5 21h7" /><path d="M12 17v4" />
                  </svg>
                ),
              },
              {
                title: "Story Compression",
                desc: "Complex SaaS features distilled into 60-90 second narratives. Every second earns the next — no filler, no fluff, pure conversion fuel.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="m9 8 6 4-6 4Z" />
                  </svg>
                ),
              },
              {
                title: "Visual Hierarchy",
                desc: "AI-optimized layouts guide the eye in the exact sequence needed to build understanding, desire, and urgency before the CTA appears.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18" /><path d="M3 9h14" /><path d="M3 15h10" /><path d="M3 21h6" />
                  </svg>
                ),
              },
              {
                title: "CTA Reinforcement",
                desc: "Strategic placement of calls-to-action at peak emotional moments, backed by data on when viewers are most likely to convert.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 15h.01" /><path d="M11 15h.01" /><path d="M7 15h.01" /><rect x="3" y="5" width="18" height="14" rx="2" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative h-full">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/20 via-green-500/5 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/15 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5">
                      {item.icon}
                    </div>
                    <h4 className="text-white text-[20px] font-bold mb-3">{item.title}</h4>
                    <p className="text-[#888] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA SECTION
         ════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#050505] py-[120px] px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-emerald-500/8 via-green-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-[800px] text-center relative z-10">
          <FadeIn>
            <h3 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.08] mb-6 normal-case">
              Turn Your Product Into a{" "}
              <GradientText>Conversion Machine</GradientText>
            </h3>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-[#999] text-[17px] sm:text-[19px] max-w-[560px] mx-auto mb-10 leading-relaxed">
              Let us build you a video that doesn&apos;t just explain — it sells. Backed by data, powered by AI, designed to convert.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a
              href="/#contact"
              className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-black font-bold text-[17px] hover:shadow-[0_0_60px_rgba(74,222,128,0.35)] transition-all duration-300 hover:scale-105"
            >
              Get Your Video
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
