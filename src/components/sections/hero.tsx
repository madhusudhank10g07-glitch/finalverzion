"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/*
  Tailwind-converted Hero Section — mobile responsive improvements
  - Mobile-first: smaller paddings, stacked buttons, smaller collage on phones
  - Touch support for card hover (onTouchStart / onTouchEnd)
  - Keep existing visual inline styles where needed
*/

const STATS = [
  { value: "150+", label: "Videos" },
  { value: "$12M+", label: "ROI" },
  { value: "92%", label: "Retention" },
];

const CARDS = [
  { id: "explainer", type: "video", span: "col-span-2 row-span-1", tag: "Explainer Video", tagColor: "#22c55e", accent: "#22c55e", title: "Product Story Film", sub: "2:45 · Narrative-driven", gradient: "linear-gradient(140deg,#071a0e 0%,#030d05 60%,#050f06 100%)", bars: 18 },
  { id: "product-demo", type: "video", span: "col-span-1 row-span-2", tag: "Product Demo", tagColor: "#4ade80", accent: "#4ade80", title: "SaaS Walkthrough", sub: "1:20 · Conversion", gradient: "linear-gradient(160deg,#0a1a0c 0%,#060d07 100%)", bars: 9 },
  { id: "motion", type: "design", span: "col-span-1 row-span-1", tag: "Motion Design", tagColor: "#86efac", accent: "#86efac", title: "Logo Reveal", sub: "AE · Cinema 4D", gradient: "linear-gradient(150deg,#070f08 0%,#040a05 100%)", bars: 0 },
  { id: "social", type: "reel", span: "col-span-1 row-span-1", tag: "Social Reels", tagColor: "#22c55e", accent: "#22c55e", title: "Reel Package", sub: "9:16 · 12 cuts", gradient: "linear-gradient(145deg,#071208 0%,#030805 100%)", bars: 0 },
  { id: "corporate", type: "video", span: "col-span-2 row-span-1", tag: "Corporate Film", tagColor: "#4ade80", accent: "#4ade80", title: "Annual Brand Documentary", sub: "4:10 · Cinematic doc", gradient: "linear-gradient(135deg,#05100b 0%,#081a0d 100%)", bars: 18 },
  { id: "brand-id", type: "design", span: "col-span-1 row-span-1", tag: "Brand Identity", tagColor: "#86efac", accent: "#86efac", title: "Style Frames", sub: "Figma · Mograph", gradient: "linear-gradient(155deg,#060d07 0%,#040904 100%)", bars: 0 },
] as const;

type Card = (typeof CARDS)[number];

function Waveform({ accent, count, hovered }: { accent: string; count: number; hovered: boolean }) {
  return (
    <div className="flex items-end gap-1 h-9" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const h = Math.round(6 + Math.abs(Math.sin(i * 0.85) * 16 + Math.cos(i * 1.6) * 10));
        const bg = hovered
          ? `linear-gradient(to top, ${accent}, ${accent}50)`
          : `linear-gradient(to top, ${accent}70, ${accent}18)`;
        return (
          <div
            key={i}
            style={{ width: "3px", height: `${h}px`, minHeight: "4px", background: bg, borderRadius: "1px" }}
            className="transition-all duration-300"
          />
        );
      })}
    </div>
  );
}

function DotsGrid({ accent, hovered }: { accent: string; hovered: boolean }) {
  return (
    // responsive width: smaller on xs devices
    <div className="grid grid-cols-4 gap-1 w-[56px] md:w-[68px]" aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => {
        const bg = i % 4 === 0 ? `${accent}35` : i % 3 === 0 ? `${accent}18` : `${accent}08`;
        const border = `${accent}${hovered ? "30" : "12"}`;
        return (
          <div
            key={i}
            style={{ width: 13, height: 13, borderRadius: (i === 5 || i === 10) ? 9999 : 2, background: bg, border: `1px solid ${border}` }}
          />
        );
      })}
    </div>
  );
}

function Filmstrip({ accent, hovered }: { accent: string; hovered: boolean }) {
  return (
    <div className="flex flex-col gap-1" aria-hidden>
      {[0,1,2].map(row => (
        <div key={row} className="flex gap-1">
          {[0,1,2,3].map(col => (
            <div
              key={col}
              style={{ width: 14, height: 10, background: (row + col) % 2 === 0 ? `${accent}22` : `${accent}08`, border: `1px solid ${accent}${hovered?"28":"10"}` }}
              className="rounded-[2px]"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function CollageCard({ card, delay }: { card: Card; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      // keep original card span semantics. On very small screens the parent grid has 2 cols
      className={`${card.span} relative overflow-hidden rounded-md transition-transform duration-300 transform ${hovered ? "-translate-y-1 scale-[1.012]" : "translate-y-0"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // touch support for mobile: tap to reveal hover state while touching
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      style={{
        background: card.gradient,
        border: `1px solid ${hovered ? card.accent + "38" : "rgba(34,197,94,0.07)"}`,
        boxShadow: hovered
          ? `0 22px 60px rgba(0,0,0,0.75),0 0 0 1px ${card.accent}25,inset 0 1px 0 ${card.accent}12`
          : `0 8px 28px rgba(0,0,0,0.55)`,
        animationDelay: `${delay}ms`,
      }}
    >
      {/* grain overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[length:80px]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* scan lines */}
      <div className="absolute inset-0 z-0 opacity-3 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(34,197,94,0.12)_2px,rgba(34,197,94,0.12)_3px)]" />

      {/* bloom */}
      <div style={{ top: '-30%', left: '-10%', width: '120%', height: '80%' }} className={`absolute z-0 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <div style={{ background: `radial-gradient(ellipse at 50% 0%, ${card.accent}15 0%, transparent 65%)`, width: '100%', height: '100%' }} />
      </div>

      {/* content */}
      <div className="relative z-10 p-3 flex flex-col justify-between h-full min-h-[90px]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] tracking-widest uppercase font-mono" style={{ color: card.tagColor, background: card.accent + '10', padding: '3px 8px', borderRadius: 2, border: `1px solid ${card.accent}22` }}>{card.tag}</span>

          {card.type === 'video' && (
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ border: `1px solid ${card.accent}45`, background: `${card.accent}0e`, transform: hovered ? 'scale(1.18)' : undefined, transition: 'transform 0.3s ease' }}>
              <svg width="8" height="9" viewBox="0 0 8 9" fill="none"><path d="M1 0.5L7.5 4.5L1 8.5V0.5Z" fill={card.accent} /></svg>
            </div>
          )}
          {card.type === 'design' && <span className="text-[15px]" style={{ color: `${card.accent}55` }}>◈</span>}
          {card.type === 'reel' && <span className="text-[13px]" style={{ color: `${card.accent}55` }}>⬡</span>}
        </div>

        <div className="flex items-center justify-center flex-1 py-2">
          {card.type === 'video' && card.bars > 0 && <Waveform accent={card.accent} count={card.bars} hovered={hovered} />}
          {card.type === 'design' && <DotsGrid accent={card.accent} hovered={hovered} />}
          {card.type === 'reel' && <Filmstrip accent={card.accent} hovered={hovered} />}
        </div>

        <div>
          <div className={`font-semibold ${card.span.includes('col-span-2') ? 'text-sm' : 'text-[11px]'} font-sans text-[rgba(230,248,230,0.88)] leading-tight`}>{card.title}</div>
          <div className="text-[8px] font-mono text-[rgba(255,255,255,0.24)] tracking-widest">{card.sub}</div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 h-[2px] z-20 transition-all duration-500`} style={{ width: hovered ? '100%' : '0%', background: `linear-gradient(to right, ${card.accent}, ${card.accent}40)` }} />
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      setMouse({ x: ((e.clientX - r.left) / r.width  - 0.5) * 12, y: ((e.clientY - r.top)  / r.height - 0.5) * 8 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={heroRef} aria-label="FinalVerzion — Cinematic Video Production Company" className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-[#040604]">

      {/* decorative orbs + grain */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute blur-3xl opacity-20" style={{ width: 480, height: 480, top: '-14%', left: '32%', borderRadius: '9999px', background: 'radial-gradient(circle,#22c55e 0%,transparent 70%)' }} />
        <div className="absolute blur-3xl opacity-16" style={{ width: 320, height: 320, bottom: '4%', right: '8%', borderRadius: '9999px', background: 'radial-gradient(circle,#16a34a 0%,transparent 70%)' }} />
        <div className="absolute inset-0 opacity-5 bg-[length:128px]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.88\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-11 items-center min-h-[80vh] md:min-h-screen">

        {/* LEFT */}
        <div className="flex flex-col justify-center py-10 md:py-28">
          <div className={`flex items-center gap-3 mb-6 transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.2)] animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#22c55e]/80">Video Production Company - Final Verzion</span>
            <div className="flex-1 h-[1px] max-w-[68px] bg-gradient-to-r from-[#22c55e]/12 to-transparent" />
          </div>

          <h1 className={`mb-6 transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block font-sans font-extrabold text-[clamp(36px,6.0vw,76px)] leading-[0.9] uppercase text-[#eef5ee]">Video That Converts</span>
            <span className="block font-serif italic text-[clamp(40px,7.0vw,86px)] font-light bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(34,197,94,0.22)]">Leads</span>
            <span className="block font-sans font-extrabold text-[clamp(36px,6.0vw,76px)] leading-[0.9] uppercase text-[#eef5ee]">To Sales</span>
          </h1>

          <p className={`max-w-lg mb-6 transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Premium explainer videos, SaaS product demos, and 2D animation for tech & startups - FinalVerzion
          </p>

          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-6 py-3 bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-black font-semibold uppercase tracking-wider rounded-md shadow-lg transform transition-transform hover:-translate-y-1">
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none"><path d="M1 0.5L8 5L1 8.5V0.5Z" fill="#030703"/></svg>
              </span>
              CASE STUDIES
            </button>

            <Link href="https://calendly.com/finalverzion-book-call/30min" className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-5 py-3 border border-[#0f2911] text-[#eef5ee] uppercase tracking-wider rounded-md hover:border-[#22c55e] hover:text-[#22c55e] transition">
              Book a Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div className={`flex flex-wrap gap-6 pt-6 border-t border-[#12220f] transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#22c55e] to-[#4ade80]">{s.value}</div>
                <div className="font-mono text-[10px] text-[#eef5ee]/60 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center py-6 md:py-24">
          <div className={`relative w-full max-w-[420px] sm:max-w-[720px] transition-transform`} style={{ transform: `perspective(1100px) rotateY(${ -mouse.x * 0.22 }deg) rotateX(${ mouse.y * 0.14 }deg)` }}>

            {/* ROI badge: safer positioning for mobile */}
            <div className={`absolute z-20 bg-black/80 backdrop-blur-md border border-[#123218] p-3 rounded-md text-center text-sm shadow-md -top-12 md:top-12 right-2 md:-right-10 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}`}>
              <div className="text-2xl">🎬</div>
              <div className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#22c55e] to-[#4ade80]">3.8×</div>
              <div className="font-mono text-[10px] text-[#eef5ee]/30 tracking-wider uppercase">Avg. ROI Lift</div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.2)] animate-pulse" />
                <div className="font-mono text-[10px] text-[#22c55e]/80 uppercase tracking-widest">Latest Works · 2025</div>
              </div>
              <div className="font-mono text-[10px] text-[#eef5ee]/60">06 / 06</div>
            </div>

            {/* responsive collage grid: 2 cols on xs, 3 on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[155px]">
              {CARDS.map((card, i) => (
                <div key={card.id}>
                  <CollageCard card={card as Card} delay={i * 75} />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}