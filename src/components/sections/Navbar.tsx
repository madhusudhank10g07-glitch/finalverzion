'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, X, Menu } from 'lucide-react' 
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
  return (
    <header className="w-full relative z-50">
      <nav className="w-full flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative z-20 bg-[#f5f2eb]/80 backdrop-blur-sm border-b border-[#e5e2db]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
  <Image
    src="/logofinal.png" // place your logo inside /public folder
    alt="Logo"
    width={32}
    height={32}
    className="object-cover w-full h-full"
  />
</div>
          <span className="text-xl font-semibold tracking-tight">Final Verzion</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#008c73] transition-colors">Home</Link>
          <a href="/#portfolio" className="hover:text-[#008c73] transition-colors">Portfolio</a>
          <a href="/#services" className="hover:text-[#008c73] transition-colors">Services</a>
          {/* <a href="/#pricing" className="hover:text-[#008c73] transition-colors">Pricing</a> */}
          <a href="/#about" className="hover:text-[#008c73] transition-colors">About Us</a>
          <Link href="/blog" className="hover:text-[#008c73] transition-colors font-semibold">Blogs</Link>
          <Link href="/contact" className="hover:text-[#008c73] transition-colors font-semibold">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
        <Link
  href="/book-a-call"
  className="bg-[#008c73] hover:bg-[#007a64] text-white px-5 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 mt-2 w-full"
>
  Book a Call<ChevronDown className="w-4 h-4 -rotate-90" />
</Link>
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#f5f2eb] border-b border-[#e5e2db] shadow-lg z-10 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-base font-medium text-gray-700">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#008c73] transition-colors py-2 border-b border-gray-200">Home</Link>
              <a href="/#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#008c73] py-2 border-b border-gray-200">Portfolio</a>
              <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#008c73] py-2 border-b border-gray-200">Services</a>
              <a href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#008c73] py-2 border-b border-gray-200">Pricing</a>
              <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#008c73] py-2 border-b border-gray-200">About Us</a>
              <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#008c73] py-2 border-b border-gray-200 font-semibold">Blogs</Link>
               <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#008c73] py-2 border-b border-gray-200 font-semibold">Contact</Link>
             <Link
  href="/book-a-call"
  className="bg-[#008c73] hover:bg-[#007a64] text-white px-5 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 mt-2 w-full"
>
  Book a Call <ChevronDown className="w-4 h-4 -rotate-90" />
</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}