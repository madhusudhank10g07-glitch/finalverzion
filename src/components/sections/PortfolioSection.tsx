

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
  embedCode: `<iframe 
    src="https://www.youtube-nocookie.com/embed/1JHfnV-LebE?autoplay=1&loop=1&playlist=1JHfnV-LebE&rel=0&modestbranding=1&playsinline=1"
    title="Video player"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>`,
},
 { 
  embedCode: `<iframe 
    src="https://www.youtube-nocookie.com/embed/4dEIdypd2oQ?autoplay=1&loop=1&playlist=4dEIdypd2oQ&rel=0&modestbranding=1&playsinline=1"
    title="Video player"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>`,
},
{ 
  embedCode: `<iframe 
    src="https://www.youtube-nocookie.com/embed/i0e3nSzvePI?autoplay=1&loop=1&playlist=i0e3nSzvePI&rel=0&modestbranding=1&playsinline=1"
    title="Video player"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>`,
},
{ 
  embedCode: `<iframe 
    src="https://www.youtube-nocookie.com/embed/V1akK8nDgXk?autoplay=1&loop=1&playlist=V1akK8nDgXk&rel=0&modestbranding=1&playsinline=1"
    title="Video player"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>`,
},
{ 
  embedCode: `<iframe 
    src="https://www.youtube-nocookie.com/embed/KDkqO--faWM?autoplay=1&loop=1&playlist=KDkqO--faWM&rel=0&modestbranding=1&playsinline=1"
    title="Video player"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>`,
},
{ 
  embedCode: `<iframe 
    src="https://www.youtube-nocookie.com/embed/Fmh3OSDh9AI?autoplay=1&loop=1&playlist=Fmh3OSDh9AI&rel=0&modestbranding=1&playsinline=1"
    title="Video player"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>`,
},

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