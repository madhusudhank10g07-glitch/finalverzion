"use client";

import { Play } from "lucide-react";
import MuxPlayer from "@mux/mux-player-react";
export default function VideoSection() {
  return (
   <section
      className="w-full max-w-5xl mx-auto px-4 mt-12 relative z-20"
      aria-label="Featured Video"
    >
      <h2 className="sr-only">SaaS Explainer Video Example</h2>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col aspect-video relative group">
        
        <MuxPlayer
          playbackId="AT8Am6017g0082Y0101ORlgu00uMwky02Hqy6P00oElKjzaAcs"
          metadataVideoTitle="Final verzion Intro"
          className="w-full h-full object-cover"
          
          /* Applying your specific branding colors */
          primaryColor="#147639"   // Controls the play button and progress bar
          secondaryColor="#070303" // Background for controls
          
          // Your custom poster image
          poster="/thumb.png"
        />

        {/* I deleted the <div className="absolute inset-0..."> block from here. 
          Mux now handles the play button directly! 
        */}

      </div>
    </section>
  );
}