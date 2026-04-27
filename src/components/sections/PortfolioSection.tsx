

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
    embedCode: `<iframe id="js_video_iframe" src="https://jumpshare.com/embed/mM4YK1ZP187rJShdGLSg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>`,
  },
   { 
embedCode:`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe id="js_video_iframe" src="https://jumpshare.com/embed/PkH8w1C3a71GrmXxT3Ow" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
  },
  {
    embedCode:`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe id="js_video_iframe" src="https://jumpshare.com/embed/roBf8FAlPxmuR2g8NIei" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
  },
  {
    embedCode:`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe id="js_video_iframe" src="https://jumpshare.com/embed/AiNlVX01bqoYgFXgPCo3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
  }
  ,{
    embedCode:`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe id="js_video_iframe" src="https://jumpshare.com/embed/4sNaqf8zP9leSmlZWV8C" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
  },{
    embedCode:`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe id="js_video_iframe" src="https://jumpshare.com/embed/O6Y4ZFL7SfKjM3bB0hhS" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
  }

];

 
function VideoThumbnail({
  item,
}: {
  item: (typeof portfolios)[0];
}) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-black">
      <div
        className="absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:block [&>iframe]:border-0"
        dangerouslySetInnerHTML={{ __html: item.embedCode }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showModal, setShowModal] = useState(false);
  const [hasPoppedUp, setHasPoppedUp] = useState(false);

 

  return (
    <section
      id="portfolio"
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col items-center"
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
       
            <VideoThumbnail item={item} />
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
