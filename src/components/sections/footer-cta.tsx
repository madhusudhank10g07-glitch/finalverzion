// FooterCTA.tsx
import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Linkedin, Video } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="w-full bg-[#050505] pt-12 md:pt-20 pb-8 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* CTA header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
            Ready to <span className="text-[#4ade80]">convert more leads?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-6 md:p-10 min-h-[220px]">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-6 left-6 w-44 h-44 bg-[#4ade80]/30 rounded-full blur-3xl" />
              <div className="absolute bottom-6 right-6 w-36 h-36 bg-[#4ade80]/20 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3 bg-black/30 px-3 py-1 rounded-full border border-white/10 text-white text-sm">
                  About Us
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#4ade80]/10 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mt-6 leading-none opacity-90">
                B2B VIDEO <span className="block text-[#4ade80] -mt-4">PRODUCTION</span>
              </h3>

              <p className="text-[#bdbdbd] mt-6 max-w-xl">
                Final Verzion is a B2B video production company dedicated to helping businesses convert leads into sales through powerful motion graphics and video content.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#4ade80]/20 flex items-center justify-center mb-3 mx-auto">
                <Video className="w-7 h-7 text-[#4ade80]" />
              </div>
              <p className="text-[#bdbdbd] text-sm">Trusted by</p>
              <p className="text-white text-2xl font-bold">50+</p>
              <p className="text-[#bdbdbd] text-sm">B2B Companies Worldwide</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/company/final-verzion/"
                className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-[#4ade80]" />
                <span className="text-[#bdbdbd] text-sm">LinkedIn</span>
              </a>

              <a
                href="mailto:contact@finalverzion.com"
                className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <Mail className="w-6 h-6 text-[#4ade80]" />
                <span className="text-[#bdbdbd] text-sm">E-mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#bdbdbd] text-sm">© {new Date().getFullYear()} Final Verzion. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#hero" className="text-[#bdbdbd] text-sm hover:text-white">Contact</a>
            <a href="#" className="text-[#bdbdbd] text-sm hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}