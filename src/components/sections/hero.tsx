import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-[90vh] pt-[120px] pb-[80px] overflow-hidden text-center"
      style={{
        backgroundColor: '#050505',
        backgroundImage: 'radial-gradient(circle at top center, rgba(74, 222, 128, 0.15) 0%, transparent 70%)'
      }}
    >
      {/* Background Glow Element */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(50% 50% at 50% 0%, #4ade80 0%, transparent 100%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />

      <div className="container relative z-10 flex flex-col items-center">
          {/* Top-line Heading */}
          <div 
            className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
          >
            <h6 
              className="text-[16px] md:text-[18px] font-medium tracking-tight text-[#999999]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              B2B Video Production Company
            </h6>
          </div>

          {/* Main Hero Header */}
          <div 
            className="mb-8 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
          >
            <h1 
              className="text-[clamp(48px,8vw,120px)] font-bold leading-[0.95] tracking-[-0.04em] text-white uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Videos That Convert
            </h1>
            <h1 
              className="text-[clamp(48px,8vw,120px)] font-bold leading-[0.95] tracking-[-0.04em] text-white uppercase italic"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Leads to <span className="not-italic text-primary">SALES</span>
            </h1>
          </div>

          {/* Sub-line Description */}
          <div 
            className="max-w-[700px] mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 ease-out fill-mode-both"
          >
            <p 
              className="text-[16px] md:text-[20px] leading-[1.6] text-[#999999]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We help businesses scale with high-converting video content & motion graphics.<br className="hidden md:block" />
              Transform your brand message into powerful visual stories that drive results.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in zoom-in-95 duration-700 delay-500 ease-out fill-mode-both">
            <a
              href="#work"
              className="group flex items-center gap-2 text-[#4ade80] text-[18px] font-semibold tracking-tight transition-all duration-300 hover:opacity-80"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              See Our Work
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path 
                  d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </a>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
