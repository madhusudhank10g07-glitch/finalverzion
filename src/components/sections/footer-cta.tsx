import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Mail, Linkedin, Video } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="w-full bg-[#050505] pt-[120px] pb-[40px] px-6 md:px-12 flex flex-col items-center">
      <div className="container max-w-[1200px] w-full">
        {/* Top Header Card */}
        <div className="w-full mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-[48px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1]">
            Ready to <span className="text-[#4ade80]">convert more leads?</span>
          </h2>
          <a
            href="https://dhrumilk.lemonsqueezy.com/buy/64bb66ee-25b7-4a33-a6fe-7569bd9dedc6"
            className="mt-8 md:mt-0 flex items-center gap-2 bg-[#4ade80] text-[#050505] px-8 py-5 rounded-full font-semibold text-[16px] hover:scale-105 transition-transform duration-300 toxic-glow"
          >
            Book a Discovery Call
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-20">
          {/* Left Large Column (About Company) */}
          <div className="md:col-span-8 relative min-h-[500px] rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#050505] group">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#4ade80]/30 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-[#4ade80]/20 rounded-full blur-[80px]" />
            </div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">
                  About Us
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#4ade80] transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="relative">
                <h3 className="text-[60px] md:text-[80px] font-bold text-white leading-none opacity-20 select-none">
                  B2B VIDEO
                </h3>
                <h3 className="text-[60px] md:text-[80px] font-bold text-[#4ade80] leading-none -mt-4">
                  PRODUCTION
                </h3>
                <p className="text-[#999999] text-[18px] mt-6 max-w-[500px] leading-relaxed">
                  Final Verzion is a B2B video production company dedicated to helping businesses convert leads into sales through powerful motion graphics and video content.
                </p>
              </div>
            </div>
          </div>

          {/* Right Smaller Column (Info & Contacts) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Company Stats Card */}
            <div className="bg-[#0a0a0a] rounded-[24px] border border-white/10 p-8 flex flex-col items-center text-center justify-center flex-grow">
              <div className="w-16 h-16 rounded-full bg-[#4ade80]/20 flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-[#4ade80]" />
              </div>
              <p className="text-[#999999] text-sm mb-2">
                Trusted by
              </p>
              <p className="text-white text-[32px] font-bold">50+</p>
              <p className="text-[#999999] text-sm">
                B2B Companies Worldwide
              </p>
            </div>

            {/* Sub Grid for Contacts */}
            <div className="grid grid-cols-2 gap-6">
              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com" 
                className="bg-[#0a0a0a] rounded-[24px] border border-white/10 p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group"
              >
                <Linkedin className="w-8 h-8 text-[#4ade80] mb-2" />
                <span className="text-[#999999] text-sm group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              {/* Email Link */}
              <a 
                href="mailto:hello@finalverzion.com" 
                className="bg-[#0a0a0a] rounded-[24px] border border-white/10 p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#4ade80]" />
                </div>
                <span className="text-[#999999] text-sm group-hover:text-white transition-colors">E-mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-10">
          <p className="text-[#999999] text-sm mb-4 md:mb-0">
            © 2024 Final Verzion. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#hero" className="text-[#999999] text-sm hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-[#999999] text-sm hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
