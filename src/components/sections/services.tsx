import React from 'react';
import Image from 'next/image';

const servicesContent = [
  {
    title: 'Motion Graphics',
    description: 'We create stunning motion graphics that captivate your audience and communicate your brand message with impact.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/2R9rUNcmab6NwzjSmoMdGSC2SzY-1.png',
    alt: 'Motion Graphics Production'
  },
  {
    title: 'Video Production',
    description: 'We produce high-converting video content that transforms leads into customers and drives measurable business results.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/Ficg9wuj1NW2APkoA7G3EfatecY-2.png',
    alt: 'Video Production Work'
  },
  {
    title: 'Brand Videos',
    description: 'We craft compelling brand stories that connect emotionally with your target audience and elevate your market presence.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/Xuwa2j77cMhUGnkdEzBHgWI-5.png',
    alt: 'Brand Video Production'
  },
  {
    title: 'Social Media Content',
    description: 'We create scroll-stopping social media videos optimized for engagement and conversions across all platforms.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/x9Dxoxt30u6IOv0jEDngzIAeU-6.png',
    alt: 'Social Media Video Content'
  }
];

export default function ServicesSection() {
  return (
    <section 
      id="service" 
      className="w-full bg-[#050505] py-[120px] px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="container max-w-[1200px] w-full">
        {/* Section Heading */}
        <div className="mb-[60px] text-center md:text-left transition-all duration-500 ease-in-out">
          <h2 className="text-[32px] md:text-[64px] font-semibold tracking-[-0.02em] leading-[1.1] text-white">
            What <span className="text-[#4ade80]">Services</span> do we provide?
          </h2>
          <p className="text-[18px] text-[#999999] mt-6 max-w-[600px]">
            We specialize in B2B video production that helps businesses convert leads into sales through powerful visual storytelling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {servicesContent.map((service, index) => (
            <div 
              key={index}
              className="group relative flex flex-col bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-[24px] overflow-hidden transition-all duration-300 hover:border-[rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.1)]"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-[rgba(255,255,255,0.1)]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                {/* Bottom Mask/Gradient to blend into content */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
              </div>

              {/* Text Content */}
              <div className="p-8 md:p-10 flex flex-col gap-4">
                <h4 className="text-[24px] md:text-[32px] font-semibold text-white leading-tight">
                  {service.title}
                </h4>
                <p className="text-[18px] text-[#999999] leading-[1.6] max-w-[400px]">
                  {service.description}
                </p>
              </div>

              {/* Subtle accent line that glows on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(74,222,128,0)] to-transparent group-hover:via-[rgba(74,222,128,0.5)] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Background radial glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.4) 0%, transparent 70%)',
          zIndex: 0
        }}
      />
    </section>
  );
}
