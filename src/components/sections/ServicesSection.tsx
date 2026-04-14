"use client";

import { MonitorPlay, Globe, Film, FileText } from "lucide-react";

const services = [
  {
    title: "2D Motion Graphics",
    desc: "Sleek, modern vector animations perfect for explaining abstract software concepts and UI workflows.",
    icon: <MonitorPlay className="w-6 h-6 text-primary" />,
  },
  {
    title: "3D Animation",
    desc: "Premium, high-fidelity 3D visuals that make your product stand out and grab attention instantly.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "Live Action & Mixed Media",
    desc: "Combine real human talent with UI overlays to build trust and show real-world use cases.",
    icon: <Film className="w-6 h-6 text-primary" />,
  },
  {
    title: "Scriptwriting",
    desc: "Persuasive, conversion-focused scripts that distill your complex SaaS into a simple, compelling story.",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full max-w-7xl mx-auto px-4 py-24 z-10"
      aria-labelledby="services-heading"
    >
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-6">
            <div className="w-2 h-1 bg-primary rounded-full"></div>
            Our Services
          </div>
          <h2
            id="services-heading"
            className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-6"
          >
            Everything You <span className="italic">Need</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            From concept to final render, we handle the entire production
            process so you can focus on growing your SaaS.
          </p>
          <button className="bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
            View All Services
          </button>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e2db] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#f5f2eb] rounded-xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}