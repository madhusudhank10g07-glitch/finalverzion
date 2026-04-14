"use client";

import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 mt-12 relative z-20"
      aria-label="Featured Video"
    >
      <h2 className="sr-only">SaaS Explainer Video Example</h2>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col aspect-video relative group">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          aria-label="Example SaaS Explainer Video"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity group-hover:bg-black/30">
          <div className="w-20 h-20 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
            <Play className="w-8 h-8 text-white ml-1 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}