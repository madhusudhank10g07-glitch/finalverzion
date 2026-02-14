"use client";

import React from 'react';

const VIDEOS = [
  {
    type: 'vimeo',
    id: '776819258',
    hash: '06aaffc6b5',
    title: 'Motion Graphics Showreel',
  },
  // {
  //   type: 'youtube',
  //   id: 'kZPX4xBq7A0',
  //   title: 'Zendesk Demo: The Basics',
  // },
  {
    type: 'vimeo',
    id: '1125850625',
    hash: '2ae8c84c95',
    title: 'Product Animation',
  },
  {
    type: 'vimeo',
    id: '1051141040',
    hash: '29901d2445',
    title: 'Brand Video',
  },
  {
    type: 'vimeo',
    id: '925756415',
    hash: '864b8496c4',
    title: '2d Explainer Illustrated Video',  
  },
];

export default function WorkReel() {
  return (
    <section id="work" className="w-full bg-[#050505] py-[120px] px-6">
      <div className="container mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-[48px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1]">
            Our <span className="text-[#4ade80]">Work.</span>
          </h2>
          <p className="text-[#999999] text-[18px] mt-4 max-w-[600px] mx-auto">
            High-converting video content that transforms leads into customers.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-[20px] overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-[#4ade80]/30 transition-all duration-300"
            >
              {video.type === 'vimeo' ? (
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?h=${video.hash}&background=0&autoplay=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title={video.title}
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title={video.title}
                />
              )}
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-4 bg-[#4ade80]/5 blur-[40px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
