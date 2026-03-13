"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Case Study", href: "/case-study" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(8,8,10,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(14px)" : "blur(0px)",
          borderBottom: isScrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[60px] sm:h-[64px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm">
                Fv
              </span>
            </div>

            <span className="font-bold text-[15px] sm:text-[17px] text-white">
              FinalVerzion
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-[13px] xl:text-[14px] font-medium text-white/70 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* CTA */}
            <a
              href="https://calendly.com/finalverzion-book-call/30min"
              target="_blank"
              className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-[13px] font-bold hover:scale-[1.03] active:scale-[0.97] transition"
            >
              Book a Call
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
            >
              <div className="flex flex-col gap-[5px]">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0 }}
                  className="block w-5 h-[2px] bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-[2px] bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0 }}
                  className="block w-5 h-[2px] bg-white"
                />
              </div>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-[#0a0a0e] border-l border-white/10 z-50 flex flex-col"
            >

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="text-xs text-white/50 uppercase tracking-wider">
                  Menu
                </span>

                <button onClick={() => setMobileOpen(false)}>
                  ✕
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-4 py-4 gap-2 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-[15px] text-white/80 hover:bg-white/10 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-white/10">
                <a
                  href="https://calendly.com/finalverzion-book-call/30min"
                  className="flex items-center justify-center w-full bg-primary px-5 py-3 rounded-full text-[14px] font-bold"
                >
                  Book Strategy Call
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}