import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Logomarks Vol.1",
    category: "Coming Soon",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/BlPb4ok9B9DeMAahAboTSubwsoM-3.png",
    link: "https://dhrumilkherde.com",
  },
  {
    title: "Product Update",
    category: "Thumbnail",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/Xuwa2j77cMhUGnkdEzBHgWI-5.png",
    link: "https://dribbble.com/shots/24263652",
  },
  {
    title: "Card in Motion",
    category: "Animation",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/x9Dxoxt30u6IOv0jEDngzIAeU-6.png",
    link: "https://dhrumilkherde.com",
  },
  {
    title: "SWIVEL",
    category: "Visual Identity",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/zqhHZQV7DWtomLZuKx1za6twNZg-7.png",
    link: "https://dhrumilkherde.com",
  },
];

const nameCardBg = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2-dznr-framer-website/assets/images/tkKcEnekvsvspHyM8YCGRRnvs-4.png";

const PortfolioGrid = () => {
  return (
    <section 
      className="w-full bg-[#050505] py-[120px] px-6 md:px-12 flex flex-col items-center" 
      id="work"
    >
      <div className="max-w-[1200px] w-full">
        {/* Header Section */}
        <div className="mb-[60px] text-center md:text-left">
          <p className="text-[24px] md:text-[32px] font-semibold text-white tracking-tight">
            Quick look at <span className="text-[#4ade80]">My Work.</span>
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full aspect-[1.12/1] rounded-[24px] overflow-hidden border border-white/10 bg-[#0a0a0a]"
            >
              {/* Image Container with Glow Background */}
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-transparent to-[#4ade80]/5 transition-all duration-500 group-hover:scale-105">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Name Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8 h-[90px] md:h-[100px] rounded-[20px] overflow-hidden border border-white/10 flex items-center px-6 transition-transform duration-500 group-hover:translate-y-[-8px]">
                {/* Background image for the name card */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={nameCardBg} 
                    alt="card layout" 
                    fill 
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-[18px] md:text-[20px] font-semibold text-white tracking-tight">
                      {project.title}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-[#999999] mt-1">
                      {project.category}
                    </p>
                  </div>
                  
                  {/* Decorative element or secondary icon/text can go here if needed per original layout */}
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 opacity-0 transition-opacity group-hover:opacity-100">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* Subtle bottom shine/stroke */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;