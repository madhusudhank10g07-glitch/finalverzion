"use client";

import {
  Star,
  Rocket,
  Brain,
  Video,
  Users,
  DollarSign,
  RefreshCw,
  Zap,
  Check,
} from "lucide-react";

const rows = [
  {
    feature: "Premium 2D/3D Animation",
    icon: <Video className="w-4 h-4 text-gray-500" />,
    other: "--",
    freelance: "Limited",
    us: "Yes",
  },
  {
    feature: "Dedicated Creative Director",
    icon: <Users className="w-4 h-4 text-gray-500" />,
    other: "--",
    freelance: "--",
    us: "Yes",
  },
  {
    feature: "Transparent Fixed Pricing",
    icon: <DollarSign className="w-4 h-4 text-gray-500" />,
    other: "Manual",
    freelance: "Manual",
    us: "Automatic",
  },
  {
    feature: "Unlimited Revisions",
    icon: <RefreshCw className="w-4 h-4 text-gray-500" />,
    other: "--",
    freelance: "--",
    us: "Yes",
  },
  {
    feature: "Fast Turnaround Times",
    icon: <Zap className="w-4 h-4 text-gray-500" />,
    other: "--",
    freelance: "--",
    us: "Yes",
  },
];

export default function ComparisonSection() {
  return (
    <section className="w-full bg-[#fcfbf9] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#008c73] font-medium text-sm mb-4">
              <div className="w-2 h-1 bg-[#008c73] rounded-full"></div>
              Comparison
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight">
              Smarter Than <br />{" "}
              <span className="italic">Other agencies</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-sm pb-2">
            See how VidSaaS compares on quality, speed, and creative intelligence.
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[800px] border border-gray-200 rounded-2xl overflow-hidden bg-white">
            <div className="grid grid-cols-4 border-b border-gray-200 bg-[#fcfbf9]">
              <div className="p-6 flex items-center gap-2 font-semibold text-lg">
                <Star className="w-5 h-5" /> Features
              </div>
              <div className="p-6 flex items-center justify-center gap-2 font-semibold text-lg border-l border-gray-200">
                <Rocket className="w-5 h-5" /> Other Agencies
              </div>
              <div className="p-6 flex items-center justify-center gap-2 font-semibold text-lg border-l border-gray-200">
                <Brain className="w-5 h-5" /> Freelancers
              </div>
              <div className="p-6 flex items-center justify-center gap-2 font-semibold text-lg bg-[#1a3b34] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00d4af] to-transparent"></div>
                <div className="relative z-10 flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#00d4af] rounded flex items-center justify-center text-[#1a3b34] text-xs font-bold">
                    V
                  </div>
                  VidSaaS
                </div>
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 border-b border-gray-100 ${
                  i % 2 === 0 ? "bg-[#f5f2eb]/30" : "bg-white"
                }`}
              >
                <div className="p-6 flex items-center gap-3 font-medium text-gray-800">
                  {row.icon} {row.feature}
                </div>
                <div className="p-6 flex items-center justify-center text-gray-500 border-l border-gray-100">
                  {row.other}
                </div>
                <div className="p-6 flex items-center justify-center text-gray-500 border-l border-gray-100">
                  {row.freelance}
                </div>
                <div className="p-6 flex items-center justify-center font-semibold bg-[#1a3b34] text-white">
                  {row.us === "Yes" ? (
                    <span className="flex items-center gap-2 text-[#00d4af]">
                      <Check className="w-4 h-4" /> Yes
                    </span>
                  ) : (
                    row.us
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}