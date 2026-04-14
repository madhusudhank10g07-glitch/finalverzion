"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Play,
  MonitorPlay,
  Lightbulb,
  CheckSquare,
  Globe,
  Users,
  ChevronDown,
} from "lucide-react";
import { PieChart } from "lucide-react";
import LeadModal from "./LeadModal";

const portfolios = [
  {
    client: "AcmePay",
    clientImg:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    title: "Fintech App Explainer",
    desc: "How we helped AcmePay increase conversions by 40% with a 60-second 3D animation.",
    date: "Sep 29, 2025",
    time: "60 sec",
    thumbTitle: "Boost Conversions",
    thumbSubtitle: "Fintech",
    icon: <MonitorPlay className="w-8 h-8 text-white" />,
  },
  {
    client: "NexusAI",
    clientImg:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    title: "AI Workflow Platform",
    desc: "Simplifying complex AI concepts for non-technical users with engaging 2D motion graphics.",
    date: "Sep 21, 2026",
    time: "90 sec",
    thumbTitle: "Simplify AI",
    thumbSubtitle: "Automation",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
  },
  {
    client: "SecureShield",
    clientImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    title: "Cybersecurity Dashboard",
    desc: "Making data security visually engaging and easy to understand for enterprise clients.",
    date: "Oct 19, 2025",
    time: "45 sec",
    thumbTitle: "Secure Data",
    thumbSubtitle: "Cybersecurity",
    icon: <CheckSquare className="w-8 h-8 text-white" />,
  },
  {
    client: "CloudSync",
    clientImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    title: "Cloud Infrastructure",
    desc: "A dynamic mixed-media video explaining enterprise cloud migration strategies.",
    date: "Nov 12, 2025",
    time: "120 sec",
    thumbTitle: "Scale Faster",
    thumbSubtitle: "Infrastructure",
    icon: <Globe className="w-8 h-8 text-white" />,
  },
  {
    client: "DataFlow",
    clientImg:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    title: "Analytics Dashboard",
    desc: "Showcasing the power of real-time data visualization through sleek 2D animations.",
    date: "Dec 05, 2025",
    time: "75 sec",
    thumbTitle: "Visualize Data",
    thumbSubtitle: "Analytics",
    icon: <PieChart className="w-8 h-8 text-white" />,
  },
  {
    client: "TeamBridge",
    clientImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    title: "Collaboration Tool",
    desc: "A fun, character-driven explainer showing how remote teams can work better together.",
    date: "Jan 18, 2026",
    time: "90 sec",
    thumbTitle: "Work Together",
    thumbSubtitle: "Collaboration",
    icon: <Users className="w-8 h-8 text-white" />,
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showModal, setShowModal] = useState(false);
  const [hasPoppedUp, setHasPoppedUp] = useState(false);

  useEffect(() => {
    if (isInView && !hasPoppedUp) {
      const timer = setTimeout(() => {
        setShowModal(true);
        setHasPoppedUp(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasPoppedUp]);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col items-center z-10"
      aria-labelledby="portfolio-heading"
    >
      <div className="w-full text-center mb-12">
        <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-6">
          <div className="w-2 h-1 bg-primary rounded-full"></div>
          Our Work
        </div>
        <h2
          id="portfolio-heading"
          className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-6"
        >
          Featured <span className="italic">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our recent SaaS explainer videos that helped our clients
          simplify their message and drive growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
        {portfolios.map((item, i) => (
          <div
            key={i}
            className="bg-[#fcfbf9] border border-[#e5e2db] rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={item.clientImg}
                  alt={item.client}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <span className="font-semibold text-gray-900">
                  {item.client}
                </span>
              </div>
              <div className="w-8 h-8 bg-[#e8e4db] rounded flex items-center justify-center group-hover:bg-[#dfdbd1] transition-colors">
                <ArrowUpRight className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">{item.desc}</p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <span>{item.date}</span>
              <div className="flex items-center gap-1.5">
                <Play className="w-4 h-4" />
                <span>{item.time}</span>
              </div>
            </div>

            <div className="w-full aspect-[16/9] bg-primary rounded-xl relative overflow-hidden flex flex-col items-center justify-center text-white p-6 text-center">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <span className="font-serif italic text-lg opacity-90 mb-1">
                  {item.thumbSubtitle}
                </span>
                <span className="font-serif text-2xl font-medium">
                  {item.thumbTitle}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5 opacity-30">
                <div className="h-0.5 w-full bg-white rounded-full"></div>
                <div className="h-0.5 w-full bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-900 px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2">
        View All Work <ChevronDown className="w-4 h-4 -rotate-90" />
      </button>

      <AnimatePresence>
        {showModal && (
          <LeadModal isOpen={showModal} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}