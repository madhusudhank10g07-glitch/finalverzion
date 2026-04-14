"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-24 relative z-10 bg-white border-y border-[#e5e2db]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative">
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#1a3b34] text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
            <div className="text-4xl font-serif font-medium mb-2">10+</div>
            <div className="text-white/80 text-sm">
              Years of experience explaining complex software to the world.
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-6">
            <div className="w-2 h-1 bg-primary rounded-full"></div>
            About Us
          </div>
          <h2
            id="about-heading"
            className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-6"
          >
            We Speak <span className="italic">Software</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Most video agencies don&apos;t understand B2B SaaS. They get bogged
            down in technical jargon or create fluffy videos that don&apos;t
            convert.
          </p>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            We&apos;re a team of marketers, animators, and tech nerds who know
            how to distill your complex product into a simple, compelling story
            that your target audience actually wants to watch.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-serif font-medium text-primary mb-2">
                500+
              </div>
              <div className="text-gray-600 text-sm">Videos Produced</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-medium text-primary mb-2">
                $50M+
              </div>
              <div className="text-gray-600 text-sm">Client Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}