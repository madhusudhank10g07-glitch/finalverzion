"use client";

import { useState } from "react";
import { Zap, Crown, Flame, ChevronRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: <Zap className="w-5 h-5 text-white fill-white" />,
    price: "$0",
    period: "/ per month",
    desc: "Perfect for individuals capturing and summarizing meetings with AI.",
    features: [
      "Live meeting recording",
      "Audio & video uploads",
      "AI transcription",
      "Smart summaries",
      "Basic exports",
      "Limited monthly minutes",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro Plan",
    icon: <Crown className="w-5 h-5 text-white fill-white" />,
    price: "$49",
    period: "/ per month",
    desc: "Ideal for power users who rely on meetings and need automation.",
    features: [
      "Increased meeting minutes",
      "Speaker identification",
      "Decision detection",
      "Semantic search",
      "Multi-language transcription",
      "Advanced exports",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Business Plan",
    icon: <Flame className="w-5 h-5 text-white fill-white" />,
    price: "$99",
    period: "/ per month",
    desc: "Designed for teams that need collaboration, control, and insights.",
    features: [
      "Unlimited meeting minutes",
      "Team workspaces",
      "Role & access control",
      "Shared meeting libraries",
      "Analytics & meeting insights",
      "Integrations (Slack, Jira, Asana)",
    ],
    buttonText: "Get Started",
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="w-full relative py-24 bg-[#fdfbf7] overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 8px)",
        }}
      ></div>

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-white border border-gray-200 rounded-xl shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                !isYearly
                  ? "bg-[#1a1a1a] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                isYearly
                  ? "bg-[#1a1a1a] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {plans.map((plan, i) => (
              <div key={i} className="flex flex-col p-6">
                {/* Top Card Area */}
                <div className="bg-[#f5f3ee] rounded-2xl p-8 mb-8 flex-grow-0">
                  <div className="w-12 h-12 bg-[#008c73] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    {plan.icon}
                  </div>

                  <h3 className="text-[28px] font-serif text-gray-900 mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-800 text-[15px] leading-relaxed mb-6 h-12">
                    {plan.desc}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-[44px] font-serif text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-[15px] text-gray-800 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  <button className="w-full py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 bg-[#008c73] hover:bg-[#007a64] text-white">
                    {plan.buttonText} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-5 px-2 pb-4 flex-grow">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-[15px] font-medium text-gray-900"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}