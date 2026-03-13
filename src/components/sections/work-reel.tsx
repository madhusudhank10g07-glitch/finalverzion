// WorkReel.tsx
"use client";

import React from "react";

const VIDEOS = [
  { type: "vimeo", id: "776819258", hash: "06aaffc6b5", title: "Motion Graphics Showreel" },
  { type: "vimeo", id: "1125850625", hash: "2ae8c84c95", title: "Product Animation" },
  { type: "vimeo", id: "1051141040", hash: "29901d2445", title: "Brand Video" },
  { type: "vimeo", id: "724789978", hash: "1b21fa7fa6", title: "2d Explainer Illustrated Video" },
  { type: "vimeo", id: "925756415", hash: "864b8496c4", title: "2d Explainer Illustrated Video" },
];

export default function WorkReel() {
  return (
    <section id="work" className="w-full bg-[#050505] py-12 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Our <span className="text-[#4ade80]">Work.</span></h2>
          <p className="text-[#bdbdbd] mt-3 max-w-2xl mx-auto">High-converting video content that transforms leads into customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((v, i) => (
            <div key={i} className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              {v.type === "vimeo" ? (
                <iframe
                  src={`https://player.vimeo.com/video/${v.id}?h=${v.hash}&background=0&autoplay=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title={v.title}
                  loading="lazy"
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title={v.title}
                  loading="lazy"
                />
              )}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-4 bg-[#4ade80]/5 blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}