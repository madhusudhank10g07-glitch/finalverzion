import { Youtube, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1f1a] text-white pt-20 pb-10 relative z-10 overflow-hidden mt-10">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-6 text-white/90">Turn complex software into simple stories</h3>
            <div className="flex items-center gap-3">
              {[Youtube, Twitter, Instagram].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/10">
                  <Icon className="w-5 h-5 text-white/70" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              {['Home','Services','How it works','Pricing','Testimonials',"FAQ's"].map(l => (
                <a key={l} href="#" className="text-white/70 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {['2D Animation','3D Animation','Live Action','Scriptwriting','Voiceover','Sound Design'].map(l => (
                <a key={l} href="#" className="text-white/70 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {['Portfolio','Contact','Blog','Privacy Policy','Terms & Condition'].map(l => (
                <a key={l} href="#" className="text-white/70 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mb-16">
          {/* <span className="text-white/60 text-sm border border-white/10 px-3 py-1 rounded-full mb-4 md:mb-0">Created by VidSaaS</span> */}
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="w-full flex justify-center overflow-hidden">
          <h1 className="text-[15vw] font-serif font-bold leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
            Final Verzion
          </h1>
        </div>
      </div>
    </footer>
  )
}