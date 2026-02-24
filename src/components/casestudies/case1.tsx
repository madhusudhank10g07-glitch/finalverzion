"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

interface TimelineStep {
  phase: string;
  title: string;
  description: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const stats: StatItem[] = [
  { value: "312", label: "Conversion Lift", suffix: "%" },
  { value: "4.7", label: "ROAS Achieved", suffix: "×" },
  { value: "2.1", label: "Million Views", suffix: "M" },
  { value: "89", label: "Lower CPL", suffix: "%" },
];

const timeline: TimelineStep[] = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    description:
      "Deep-dive into TechScale's ICP, existing funnel data, and competitive landscape. Identified the gap between awareness traffic and bottom-funnel conversion.",
  },
  {
    phase: "02",
    title: "Creative Development",
    description:
      "Scripted a narrative arc that led with pain-point empathy, transitioned through product proof, and closed on a ROI-driven CTA. Three concept routes were tested in animatics.",
  },
  {
    phase: "03",
    title: "Production",
    description:
      "Full motion-graphics production with custom 3-D assets, brand-aligned kinetic typography, and a bespoke sound design bed that elevated perceived quality.",
  },
  {
    phase: "04",
    title: "Delivery & Optimisation",
    description:
      "Cut-downs for LinkedIn (0:15, 0:30, 0:60) and a long-form homepage hero. A/B testing framework was set up with the client's paid media team for ongoing iteration.",
  },
];

// ─── Animated Counter ────────────────────────────────────────────────────────
function Counter({
  value,
  suffix,
  trigger,
}: {
  value: string;
  suffix?: string;
  trigger: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const isFloat = value.includes(".");

  useEffect(() => {
    if (!trigger) return;
    const target = parseFloat(value);
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toString());
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [trigger, value, isFloat]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function CaseStudyPage() {
  const statsRef = useInView(0.3);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #030a05;
          --off-black: #060f08;
          --card: #091410;
          --border: #0f2318;
          --muted: #122b1c;
          --text-dim: #2e6644;
          --text-mid: #6aad83;
          --text-main: #c8edd8;
          --white: #e8f7ee;
          --accent: #22f06b;
          --accent-2: #00e5a0;
          --accent-dim: #17b84f;
          --accent-glow: rgba(34,240,107,0.14);
          --green-mid: #0d9e50;
          --grad-1: linear-gradient(135deg, #22f06b 0%, #00e5a0 50%, #0fd672 100%);
          --grad-2: linear-gradient(180deg, #030a05 0%, #051a0d 50%, #030a05 100%);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--black);
          background-image:
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(22,120,60,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 60% 30% at 80% 80%, rgba(0,180,100,0.10) 0%, transparent 60%);
          color: var(--text-main);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* ── Grain overlay ── */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 9999;
        }

        /* ── Nav ── */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s, border-bottom 0.4s, padding 0.4s;
        }
        .nav.scrolled {
          background: rgba(8,8,8,0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border);
          padding: 14px 48px;
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          color: var(--white);
          text-decoration: none;
        }
        .nav-logo span { color: var(--accent); }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-mid);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--white); }
        .nav-cta {
          font-family: 'Syne', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--grad-1);
          border: none;
          padding: 10px 22px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .nav-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(34,240,107,0.3);
        }

        /* ── Hero ── */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 48px 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 65% 20%, rgba(34,240,107,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 15% 75%, rgba(0,229,160,0.07) 0%, transparent 60%),
            linear-gradient(180deg, rgba(3,10,5,0) 0%, rgba(3,10,5,0.6) 100%);
        }
        .hero-label {
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-label::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--grad-1);
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3.2rem, 8vw, 7.5rem);
          line-height: 0.93;
          letter-spacing: -0.04em;
          color: var(--white);
          max-width: 900px;
          margin-bottom: 40px;
        }
        .hero-title em {
          font-style: normal;
          background: var(--grad-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .green-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #22f06b 30%, #00e5a0 60%, transparent 100%);
          opacity: 0.35;
          margin: 0 48px;
        }
        .hero-meta {
          display: flex;
          gap: 64px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
          max-width: 900px;
        }
        .hero-meta-item label {
          display: block;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 6px;
        }
        .hero-meta-item p {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 400;
        }
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          right: 48px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-dim);
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, var(--text-dim), transparent);
          animation: scrollLine 2s ease-in-out infinite;
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        /* ── Section ── */
        .section {
          padding: 120px 48px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: var(--grad-1);
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: var(--white);
          margin-bottom: 24px;
        }
        .section-body {
          font-size: 1.05rem;
          color: var(--text-mid);
          max-width: 640px;
          line-height: 1.8;
        }
        .cta-title em {
          font-style: normal;
          background: var(--grad-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Video Section ── */
        .video-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: var(--off-black);
          border: 1px solid rgba(34,240,107,0.18);
          box-shadow: 0 0 60px rgba(34,240,107,0.07), inset 0 0 40px rgba(0,0,0,0.6);
          overflow: hidden;
        }
        .video-wrap iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .video-container {
          padding: 0 48px;
          max-width: 1400px;
          margin: 0 auto 0;
        }
        .video-caption {
          margin-top: 20px;
          font-size: 0.8rem;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── Stats ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          margin-top: 80px;
        }
        .stat-cell {
          background: var(--off-black);
          padding: 52px 40px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }
        .stat-cell::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--grad-1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .stat-cell:hover { background: var(--card); }
        .stat-cell:hover::after { transform: scaleX(1); }
        .stat-value {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          line-height: 1;
          color: var(--accent);
          letter-spacing: -0.04em;
          margin-bottom: 12px;
        }
        .stat-label {
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        /* ── Brief ── */
        .brief-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          margin-top: 64px;
        }
        .brief-cell {
          background: var(--off-black);
          padding: 48px 44px;
        }
        .brief-cell-label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 18px;
        }
        .brief-cell-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--white);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .brief-cell p {
          font-size: 0.95rem;
          color: var(--text-mid);
          line-height: 1.8;
        }

        /* ── Timeline ── */
        .timeline {
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid var(--border);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: 0;
          border-bottom: 1px solid var(--border);
          transition: background 0.3s;
        }
        .timeline-item:last-child { border-bottom: none; }
        .timeline-item:hover { background: var(--card); }
        .timeline-phase {
          padding: 40px 0 40px 40px;
          border-right: 1px solid var(--border);
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--accent);
          display: flex;
          align-items: flex-start;
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .timeline-item:hover .timeline-phase { opacity: 1; }
        .timeline-content {
          padding: 40px 44px;
        }
        .timeline-content h4 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--white);
          margin-bottom: 12px;
        }
        .timeline-content p {
          font-size: 0.93rem;
          color: var(--text-mid);
          line-height: 1.75;
          max-width: 560px;
        }

        /* ── Quote ── */
        .quote-section {
          background: linear-gradient(135deg, #051a0d 0%, #030a05 40%, #071a10 70%, #030a05 100%);
          border-top: 1px solid rgba(34,240,107,0.15);
          border-bottom: 1px solid rgba(34,240,107,0.15);
          padding: 100px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .quote-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,240,107,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .quote-mark {
          font-family: 'Syne', sans-serif;
          font-size: 6rem;
          line-height: 0.6;
          color: var(--accent);
          margin-bottom: 32px;
          opacity: 0.5;
        }
        .quote-text {
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: clamp(1.5rem, 3vw, 2.4rem);
          line-height: 1.35;
          color: var(--white);
          max-width: 820px;
          margin: 0 auto 40px;
          letter-spacing: -0.02em;
        }
        .quote-author {
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-dim);
        }
        .quote-author span { color: var(--accent); }

        /* ── Results highlight ── */
        .results-list {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid var(--border);
        }
        .result-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 40px;
          border-bottom: 1px solid var(--border);
          transition: background 0.25s;
        }
        .result-row:last-child { border-bottom: none; }
        .result-row:hover { background: var(--card); }
        .result-name {
          font-size: 0.9rem;
          color: var(--text-mid);
          letter-spacing: 0.02em;
        }
        .result-value {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--accent);
        }

        /* ── CTA ── */
        .cta-section {
          padding: 140px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 70% at 50% 50%, rgba(34,240,107,0.10) 0%, transparent 70%),
            radial-gradient(ellipse 30% 30% at 20% 20%, rgba(0,229,160,0.07) 0%, transparent 60%);
        }
        .cta-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 7vw, 6.5rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: var(--white);
          margin-bottom: 36px;
        }
        .cta-sub {
          font-size: 1.05rem;
          color: var(--text-mid);
          margin-bottom: 48px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        .cta-btn {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--grad-1);
          padding: 18px 44px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          opacity: 0.88;
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(34,240,107,0.3);
        }
        .cta-btn-ghost {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-mid);
          background: transparent;
          border: 1px solid var(--border);
          padding: 18px 44px;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          margin-left: 16px;
        }
        .cta-btn-ghost:hover {
          border-color: var(--white);
          color: var(--white);
        }

        /* ── Footer ── */
        .footer {
          border-top: 1px solid var(--border);
          padding: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--white);
          letter-spacing: -0.02em;
        }
        .footer-logo span {
          background: var(--grad-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-right {
          font-size: 0.78rem;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── Fade-in animation ── */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .nav { padding: 18px 24px; }
          .nav.scrolled { padding: 12px 24px; }
          .nav-links { display: none; }
          .hero { padding: 0 24px 64px; }
          .hero-meta { flex-wrap: wrap; gap: 32px; }
          .section { padding: 80px 24px; }
          .video-container { padding: 0 24px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .brief-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 100px 24px; }
          .footer { flex-direction: column; gap: 16px; text-align: center; padding: 32px 24px; }
          .timeline-item { grid-template-columns: 64px 1fr; }
          .timeline-phase { padding: 32px 0 32px 24px; font-size: 1.2rem; }
          .timeline-content { padding: 32px 24px; }
          .result-row { padding: 22px 24px; }
          .quote-section { padding: 72px 24px; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <a href="https://www.finalverzion.com" className="nav-logo">
          Final<span>Verzion</span>
        </a>
        <ul className="nav-links">
          <li><a href="https://www.finalverzion.com/#work">Work</a></li>
          <li><a href="https://www.finalverzion.com/#process">Process</a></li>
          <li><a href="https://www.finalverzion.com/case-study">Case Study</a></li>
          <li><a href="https://www.finalverzion.com/#contact">Contact</a></li>
        </ul>
        <a href="https://www.finalverzion.com/#contact" className="nav-cta">
          Get in Touch
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-label fade-up">Case Study</div>
        <h1 className="hero-title fade-up delay-1">
          How TechScale<br />
          Turned Video into<br />
          <em>312% More Sales</em>
        </h1>
        <div className="hero-meta fade-up delay-2">
          <div className="hero-meta-item">
            <label>Client</label>
            <p>TechScale Inc.</p>
          </div>
          <div className="hero-meta-item">
            <label>Industry</label>
            <p>B2B SaaS</p>
          </div>
          <div className="hero-meta-item">
            <label>Service</label>
            <p>Motion Graphics & Video</p>
          </div>
          <div className="hero-meta-item">
            <label>Year</label>
            <p>2025</p>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* ── GREEN DIVIDER ── */}
      <div className="green-divider" />

      {/* ── VIDEO ── */}
      <div className="video-container">
        <div className="video-wrap">
          <iframe
            title="TechScale Case Study — Final Verzion"
            src="https://player.vimeo.com/video/1129558076?h=9fe7b00c29&autoplay=0&loop=0&color=22f06b&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
          />
        </div>
        <p className="video-caption">
          Final deliverable — TechScale Hero Campaign · 2025
        </p>
      </div>

      {/* ── STATS ── */}
      <div
        className="video-container"
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <div
          className="stats-grid"
          ref={statsRef.ref}
          style={{ marginTop: 64 }}
        >
          {stats.map((s) => (
            <div className="stat-cell" key={s.label}>
              <div className="stat-value">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  trigger={statsRef.inView}
                />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── THE BRIEF ── */}
      <div className="section">
        <div className="section-label">The Brief</div>
        <h2 className="section-title">
          A funnel leaking<br />at the bottom.
        </h2>
        <p className="section-body">
          TechScale had strong top-of-funnel traffic but a demo-to-close rate
          that wasn't converting. Decision-makers were landing on the homepage
          and bouncing — the product's value wasn't landing fast enough.
        </p>

        <div className="brief-grid">
          <div className="brief-cell">
            <div className="brief-cell-label">The Challenge</div>
            <h3 className="brief-cell-title">
              Complex product, impatient buyers.
            </h3>
            <p>
              TechScale's platform solves a nuanced multi-stakeholder problem.
              Explaining it with static copy and screenshots wasn't cutting
              through. Prospects left before they saw the aha-moment.
            </p>
          </div>
          <div className="brief-cell">
            <div className="brief-cell-label">Our Mandate</div>
            <h3 className="brief-cell-title">
              Compress value recognition to 90 seconds.
            </h3>
            <p>
              We needed to craft a video experience that could communicate
              TechScale's ROI story, build credibility, and drive demo bookings
              — before a decision-maker's attention ran out.
            </p>
          </div>
          <div className="brief-cell">
            <div className="brief-cell-label">Audience</div>
            <h3 className="brief-cell-title">
              C-suite and VP-level B2B buyers.
            </h3>
            <p>
              Revenue leaders, CTOs, and Operations VPs at 200–2 000 person
              companies. Skeptical of vendor promises, data-driven, and
              short on time.
            </p>
          </div>
          <div className="brief-cell">
            <div className="brief-cell-label">Channels</div>
            <h3 className="brief-cell-title">
              LinkedIn ads, homepage hero, email sequence.
            </h3>
            <p>
              Content was produced in multiple formats optimised for paid
              social, organic nurture sequences, and the homepage — each cut
              tuned for context and intent.
            </p>
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-label">Our Process</div>
        <h2 className="section-title">How we built it.</h2>

        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.phase}>
              <div className="timeline-phase">{item.phase}</div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── QUOTE ── */}
      <div className="quote-section">
        <div className="quote-mark">&ldquo;</div>
        <blockquote className="quote-text">
          Final Verzion transformed our product launch with a video that drove
          3× more conversions than our previous campaigns. Their understanding
          of B2B messaging is exceptional.
        </blockquote>
        <p className="quote-author">
          Sarah Chen — <span>CMO, TechScale Inc.</span>
        </p>
      </div>

      {/* ── RESULTS ── */}
      <div className="section">
        <div className="section-label">The Results</div>
        <h2 className="section-title">Numbers that speak.</h2>
        <p className="section-body">
          Within 90 days of deploying across all channels, TechScale's pipeline
          metrics shifted materially — proving that when creative is matched to
          strategy, video becomes a revenue driver, not a cost centre.
        </p>

        <div className="results-list">
          {[
            ["Demo-request conversion rate", "+312% uplift"],
            ["LinkedIn paid video completion rate", "68% (vs. 24% industry avg)"],
            ["Homepage average session duration", "+140 seconds"],
            ["Cost per qualified lead (LinkedIn)", "↓ 89%"],
            ["Revenue attributed to video-influenced pipeline", "$4.2M in 90 days"],
            ["ROAS on paid video spend", "4.7×"],
          ].map(([name, value]) => (
            <div className="result-row" key={name}>
              <span className="result-name">{name}</span>
              <span className="result-value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="cta-section">
        <div className="cta-bg" />
        <h2 className="cta-title">
          Ready to convert<br />
          more <em>leads?</em>
        </h2>
        <p className="cta-sub">
          Let's build the video that finally closes your toughest deals.
          Free consultation, no commitment.
        </p>
        <div>
          <a href="https://www.finalverzion.com/#contact" className="cta-btn">
            Start a Project
          </a>
          <a href="https://www.finalverzion.com/case-study" className="cta-btn-ghost">
            More Case Studies
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-logo">
          Final<span>Verzion</span>
        </div>
        <div className="footer-right">
          © 2026 Final Verzion · All rights reserved
        </div>
      </footer>
    </>
  );
}