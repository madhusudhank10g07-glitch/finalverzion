"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar component for the Final Verzion website.
 * Features a dynamic layout that shifts from a full-width "thin" bar to a centered 
 * glassmorphism pill-shaped design upon scrolling.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    
    { name: 'Case Study', href: '/case-study' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="flex justify-center transition-all duration-500 ease-in-out">
        <motion.nav 
          initial={false}
          animate={{
            width: isScrolled ? "auto" : "100%",
            maxWidth: isScrolled ? "900px" : "100%",
            marginTop: isScrolled ? "1.5rem" : "0",
            paddingLeft: isScrolled ? "1.5rem" : "3rem",
            paddingRight: isScrolled ? "1.5rem" : "3rem",
            borderRadius: isScrolled ? "9999px" : "0px",
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0)",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
            borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
            border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          }}
          className="pointer-events-auto flex items-center justify-between min-h-[64px] py-2 gap-8 relative transition-colors duration-300"
          style={{
            boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.2)" : "none",
          }}
        >
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <a href="#hero" className="relative block h-[72px] w-[240px] transition-transform duration-300">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/cd2dbe6d-c060-4169-a10e-7b8ca2eea9f2/final-logo-2-1767516633547.png?width=8000&height=8000&resize=contain" 
                alt="Final Verzion Logo" 
                fill
                priority
                className="object-contain"
              />
            </a>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[14px] font-medium text-white/80 transition-colors duration-200 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button Section */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-200 hover:scale-[1.05] active:scale-[0.95] toxic-glow"
            >
              <span>Get in Touch</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-[0.5px]"
              >
                <path 
                  d="M1 7H13M13 7L7 1M13 7L7 13" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.nav>
      </div>

      <style jsx global>{`
        .toxic-glow {
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.2);
        }
        .toxic-glow:hover {
          box-shadow: 0 0 30px rgba(74, 222, 128, 0.4);
        }
      `}</style>
    </header>
  );
}
