"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Precision Frame Editing",
    description: "Create stunning visuals effortlessly with our frame-by-frame precision and intuitive interface.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/Xuwa2j77cMhUGnkdEzBHgWI-5.png",
    color: "bg-blue-500/10",
  },
  {
    title: "Real-time Motion Preview",
    description: "Turn ideas into interactive motion prototypes without waiting for long render times.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/zqhHZQV7DWtomLZuKx1za6twNZg-7.png",
    color: "bg-amber-500/10",
  },
  {
    title: "Real-time Collaboration",
    description: "Work seamlessly with your team, get feedback, and ship high-value projects faster.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/x9Dxoxt30u6IOv0jEDngzIAeU-6.png",
    color: "bg-purple-500/10",
  },
];

const FeaturesShowcase = () => {
  return (
    <section className="w-full bg-background py-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-[1200px] w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            The ultimate workflow for <span className="text-primary">video & motion teams</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Everything you need to create, prototype, and collaborate—all in a single, easy-to-use platform.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group flex flex-col rounded-[32px] overflow-hidden border border-white/5 bg-secondary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Area */}
              <div className={`relative aspect-square w-full ${feature.color} flex items-center justify-center p-8`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
