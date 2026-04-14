"use client";

import { ChevronRight } from "lucide-react";

export default function PortalIntroSection() {
  return (
    <section className="w-full relative overflow-hidden pt-24 pb-0 bg-[#fcfbf9]">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 pr-4 mb-8 shadow-sm">
          <span className="bg-[#1a3b34] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
            New
          </span>
          <span className="text-sm font-medium text-[#1a3b34]">
            Client Portal Access
          </span>
        </div>

        <h2 className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] mb-6 leading-tight">
          Manage Your Video <br /> Production Seamlessly
        </h2>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Track progress, review cuts, and manage assets all in one centralized
          platform without manual effort.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
          <button className="w-full sm:w-auto bg-[#008c73] hover:bg-[#007a64] text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            Client Login <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center">
            Book a demo
          </button>
        </div>
      </div>

      <div className="w-full h-48 md:h-64 mt-16 relative">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 L300,64 C400,64 450,256 550,256 L890,256 C990,256 1040,64 1140,64 L1440,64"
            fill="none"
            stroke="#00d4af"
            strokeWidth="8"
          />
          <path
            d="M0,80 L300,80 C400,80 450,272 550,272 L890,272 C990,272 1040,80 1140,80 L1440,80"
            fill="none"
            stroke="#00b395"
            strokeWidth="8"
          />
          <path
            d="M0,96 L300,96 C400,96 450,288 550,288 L890,288 C990,288 1040,96 1140,96 L1440,96"
            fill="none"
            stroke="#008c73"
            strokeWidth="8"
          />
          <path
            d="M0,112 L300,112 C400,112 450,304 550,304 L890,304 C990,304 1040,112 1140,112 L1440,112"
            fill="none"
            stroke="#1a3b34"
            strokeWidth="8"
          />
        </svg>
      </div>
    </section>
  );
}