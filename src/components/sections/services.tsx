// ServicesSection.tsx
"use client";

import React from "react";
import Image from "next/image";

const servicesContent = [
  {
    title: "Motion Graphics",
    description: "We create stunning motion graphics that captivate your audience and communicate your brand message with impact.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/2R9rUNcmab6NwzjSmoMdGSC2SzY-1.png",
    alt: "Motion Graphics Production",
  },
  {
    title: "Video Production",
    description: "We produce high-converting video content that transforms leads into customers and drives measurable business results.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/Ficg9wuj1NW2APkoA7G3EfatecY-2.png",
    alt: "Video Production Work",
  },
  {
    title: "Brand Videos",
    description: "We craft compelling brand stories that connect emotionally with your target audience and elevate your market presence.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/Xuwa2j77cMhUGnkdEzBHgWI-5.png",
    alt: "Brand Video Production",
  },
  {
    title: "Social Media Content",
    description: "We create scroll-stopping social media videos optimized for engagement and conversions across all platforms.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/x9Dxoxt30u6IOv0jEDngzIAeU-6.png",
    alt: "Social Media Video Content",
  },
];

export default function ServicesSection() {
  return (
    <section id="service" className="w-full bg-[#050505] py-12 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-semibold text-white leading-tight">
            What <span className="text-[#4ade80]">Services</span> do we provide?
          </h2>
          <p className="text-[#bdbdbd] mt-4 max-w-2xl mx-auto md:mx-0">We specialize in B2B video production that helps businesses convert leads into sales through powerful visual storytelling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesContent.map((s, idx) => (
            <article key={idx} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-white/5">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-semibold text-white">{s.title}</h4>
                <p className="text-[#bdbdbd] mt-3 max-w-lg">{s.description}</p>
              </div>

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[rgba(74,222,128,0.2)] transition-all" />
            </article>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[700px] opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, rgba(74,222,128,0.35) 0%, transparent 70%)" }} />
      </div>
    </section>
  );
}