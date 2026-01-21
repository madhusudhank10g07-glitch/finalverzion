"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Cinematic Reel 2024",
    category: "Motion Graphics",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/Xuwa2j77cMhUGnkdEzBHgWI-5.png",
    description: "High-end motion graphics for global brands.",
  },
  {
    title: "Brand Identity in Motion",
    category: "Video Editing",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/x9Dxoxt30u6IOv0jEDngzIAeU-6.png",
    description: "Dynamic video editing that tells a compelling story.",
  },
  {
    title: "Abstract Visuals",
    category: "3D Animation",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/zqhHZQV7DWtomLZuKx1za6twNZg-7.png",
    description: "Cutting-edge 3D animations and visual effects.",
  },
  {
    title: "Future of Tech",
    category: "Production",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/BlPb4ok9B9DeMAahAboTSubwsoM-3.png",
    description: "Production-grade video content for tech pioneers.",
  },
];

const WorkCarousel = () => {
  return (
    <section className="w-full bg-background py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden" id="work">
      <motion.div 
        className="max-w-[1200px] w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-primary">Masterpieces</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated selection of high-value video editing and motion graphics projects.
          </p>
        </div>

        <div className="relative w-full px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-secondary/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-primary font-semibold text-sm mb-2">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all" />
            </div>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkCarousel;
