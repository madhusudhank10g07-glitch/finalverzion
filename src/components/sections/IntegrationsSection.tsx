"use client";

import {
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Globe,
  Presentation,
  Smartphone,
  Tv,
  Film,
} from "lucide-react";

const platforms = [
  { icon: <Youtube className="w-8 h-8 text-[#FF0000]" />, color: "bg-red-50" },
  { icon: <Linkedin className="w-8 h-8 text-[#0A66C2]" />, color: "bg-blue-50" },
  { icon: <Twitter className="w-8 h-8 text-[#1DA1F2]" />, color: "bg-sky-50" },
  { icon: <Instagram className="w-8 h-8 text-[#E4405F]" />, color: "bg-pink-50" },
  { icon: <Facebook className="w-8 h-8 text-[#1877F2]" />, color: "bg-blue-50" },
  { icon: <Globe className="w-8 h-8 text-gray-700" />, color: "bg-gray-100" },
  { icon: <Presentation className="w-8 h-8 text-orange-500" />, color: "bg-orange-50" },
  { icon: <Smartphone className="w-8 h-8 text-green-600" />, color: "bg-green-50" },
];

export default function IntegrationsSection() {
  return (
    <section
      className="w-full py-24 relative   overflow-hidden bg-[#f5f2eb]"
      aria-labelledby="integrations-heading"
    >
      {/* Top row of platforms */}
      <div className="w-full flex justify-center gap-4 md:gap-8 mb-16 opacity-80 px-4 flex-wrap">
        {platforms.slice(0, 5).map((p, i) => (
          <div
            key={i}
            className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-sm border border-gray-200/50 ${p.color}`}
          >
            {p.icon}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-6">
          <div className="w-2 h-1 bg-primary rounded-full"></div>
          Distribution
        </div>

        <h2
          id="integrations-heading"
          className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] leading-[1.1] mb-6"
        >
          Optimized for Every
          <br />
          Platform <span className="italic">seamlessly</span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Deliver your message seamlessly across all your marketing channels,
          from your landing page to social media and sales presentations.
        </p>

        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
          Get a Free Quote
        </button>
      </div>

      {/* Bottom row of platforms */}
      <div className="w-full flex justify-center gap-4 md:gap-8 mt-16 opacity-80 px-4 flex-wrap">
        {platforms.slice(5).map((p, i) => (
          <div
            key={i}
            className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-sm border border-gray-200/50 ${p.color}`}
          >
            {p.icon}
          </div>
        ))}
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-sm border border-gray-200/50 bg-purple-50 hidden md:flex">
          <Tv className="w-8 h-8 text-purple-600" />
        </div>
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-sm border border-gray-200/50 bg-rose-50 hidden md:flex">
          <Film className="w-8 h-8 text-rose-600" />
        </div>
      </div>

      {/* Background decorative lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      ></div>
    </section>
  );
}