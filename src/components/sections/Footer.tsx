import { Youtube, Twitter, Instagram } from 'lucide-react'
import Image from "next/image";
export default function Footer() {
  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/' },
    { icon: Twitter, href: 'https://twitter.com/' },
    { icon: Instagram, href: 'https://www.instagram.com/' },
  ]

  const navLinks1 = [
    // { label: 'Home', href: '/' },
    // { label: 'Services', href: '/services' },
    // { label: 'How it works', href: '/how-it-works' },
    // { label: 'Pricing', href: '/pricing' },
    // { label: 'Testimonials', href: '/testimonials' },
    // { label: "FAQ's", href: '/faq' },
  ]

  const navLinks2 = [
    { label: '2D Animation', href: '/2d-animation' },
    { label: '3D Animation', href: '/3d-animation' },
    { label: 'Live Action', href: '/live-action' },
    { label: 'Scriptwriting', href: '/scriptwriting' },
    { label: 'Voiceover', href: '/voiceover' },
    { label: 'Sound Design', href: '/sound-design' },
  ]

  const navLinks3 = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Condition', href: '/terms' },
  ]

  return (
    <footer className="w-full bg-[#0a1f1a] text-white pt-20 pb-10 relative overflow-hidden mt-10">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Left Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-6 text-white/90">
              Turn complex software into simple stories
            </h3>
 <div className="flex justify-center sm:justify-start">
      <a
        href="https://clutch.co/profile/final-verzion"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-105 transition-transform duration-300"
      >
        <Image
          src="/clutch.png" // replace with actual clutch badge
          alt="Clutch 5 Star Reviews"
          width={180}
          height={60}
           className="object-contain rounded-lg"
        />
      </a>
    </div>
            {/* <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Icon className="w-5 h-5 text-white/70" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Right Links */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {[navLinks1, navLinks2, navLinks3].map((group, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                {group.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mb-16">
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Brand */}
        <div className="w-full flex justify-center overflow-hidden">
          <h1
            className="text-[15vw] font-serif font-bold leading-none text-transparent tracking-tighter"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            Final Verzion
          </h1>
        </div>
      </div>
    </footer>
  )
}