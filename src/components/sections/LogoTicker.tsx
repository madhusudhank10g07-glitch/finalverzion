"use client";

import {
  LayoutDashboard,
  Settings,
  Lightbulb,
  Share,
  Users,
  FileText,
  CheckSquare,
  Bell,
} from "lucide-react";
import React from "react";

const logos = [
  { name: "Formix", icon: <LayoutDashboard /> },
  { name: "Webora", icon: <Settings /> },
  { name: "Designo", icon: <Lightbulb /> },
  { name: "Brandly", icon: <Share /> },
  { name: "Markivo", icon: <Users /> },
  { name: "Typely", icon: <FileText /> },
  { name: "Framex", icon: <CheckSquare /> },
  { name: "Ideava", icon: <Bell /> },
];

export default function LogoTicker() {
  return (
    <section
      className="w-full mt-16 pb-20 flex flex-col items-center relative z-10"
      aria-labelledby="trusted-by-heading"
    >
      <h2 id="trusted-by-heading" className="sr-only">
        Trusted by leading SaaS companies
      </h2>
      <div className="bg-white/50 backdrop-blur-sm border border-gray-200 px-6 py-2 rounded-full text-sm font-medium text-gray-600 mb-8 shadow-sm">
        Trusted by leading SaaS companies
      </div>

      <div className="w-full overflow-hidden flex border-y border-gray-200 bg-white/30 backdrop-blur-sm py-8">
        <div className="flex items-center gap-16 px-8 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {/* Double the logos for seamless scrolling */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-gray-500 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
            >
              {React.cloneElement(logo.icon as React.ReactElement, {
                className: "w-6 h-6",
              })}
              <span className="text-xl font-bold tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Made in Framer Badge */}
      <div className="fixed bottom-4 right-4 bg-white border border-gray-200 shadow-sm rounded-md px-3 py-1.5 flex items-center gap-2 text-xs font-medium z-50">
        <div className="w-3 h-3 bg-black rounded-sm flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-sm rotate-45"></div>
        </div>
        Made in Framer
      </div>
    </section>
  );
}