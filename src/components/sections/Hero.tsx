"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { generateWave, waves } from "@/lib/wave";

export default function Hero() {
  return (
    <section className="w-full relative pt-20 pb-10 flex flex-col items-center text-center px-4 z-10 overflow-hidden">
      {/* Premium Glowing Orb */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00d4af] opacity-20 blur-[100px] rounded-full pointer-events-none -z-20" />

      {/* Background Flowing Data Stream / Waveform */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] h-[600px] -z-10 pointer-events-none opacity-80">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="premium-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#008c73" stopOpacity="0" />
              <stop offset="20%" stopColor="#008c73" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00d4af" stopOpacity="1" />
              <stop offset="80%" stopColor="#008c73" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#008c73" stopOpacity="0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {waves.map((wave, i) => (
            <motion.g
              key={`wave-group-${i}`}
              animate={{ x: [-800 + wave.phase, wave.phase] }}
              transition={{ duration: wave.duration, repeat: Infinity, ease: "linear" }}
            >
              {/* Faint background track */}
              <path
                d={generateWave(wave.y, wave.amp)}
                stroke="#008c73"
                strokeWidth="2"
                strokeOpacity="0.15"
                strokeLinecap="round"
              />

              {/* Continuous flowing glowing pulse */}
              <motion.path
                d={generateWave(wave.y, wave.amp)}
                stroke="url(#premium-gradient)"
                strokeWidth={i === 2 ? "6" : "3"}
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ strokeDashoffset: 1600, strokeDasharray: "300 1300" }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: wave.pulseDuration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ opacity: 0.7 + (i % 2) * 0.3 }}
              />
            </motion.g>
          ))}
        </svg>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-3 bg-[#1a3b34] p-1 pr-4 rounded-full mb-8 shadow-sm"
      >
        <span className="bg-white text-[#1a3b34] text-xs font-semibold px-3 py-1 rounded-full">
          New
        </span>
        <span className="text-[#a0d8ce] text-sm font-medium">
          3D Animation Services Now Available
        </span>
      </motion.div> */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] max-w-4xl leading-[1.1] mb-6"
      >
        Explain Your SaaS in
        <br />
        Under 60 Seconds
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-gray-600 text-lg max-w-2xl mb-10"
      >
        We craft high-converting explainer videos that simplify complex
        software, engage your target audience, and drive more signups.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
      >
        <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
          Get a Free Quote <ChevronDown className="w-4 h-4 -rotate-90" />
        </button>
        <button className="w-full sm:w-auto bg-[#e8e4db] hover:bg-[#dfdbd1] text-[#1a1a1a] px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
          View Portfolio
        </button>
      </motion.div>
    </section>
  );
}