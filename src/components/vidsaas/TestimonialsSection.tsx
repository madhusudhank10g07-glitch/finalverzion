"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Collins",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    quote:
      "The video perfectly captured our complex SaaS product. Conversions are up 30% since we put it on our landing page.",
  },
  {
    name: "Daniel Brooks",
    role: "Startup Founder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    quote:
      "Incredible 3D animation quality. They delivered on time, communicated clearly, and exceeded our expectations.",
  },
  {
    name: "Michael Reed",
    role: "Growth Lead",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    quote:
      "Finally, an explainer video company that actually understands B2B software. The script was spot on.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 py-24 z-10"
      aria-labelledby="testimonials-heading"
    >
      <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-6">
        <div className="w-2 h-1 bg-primary rounded-full"></div>
        Testimonials
      </div>

      <h2
        id="testimonials-heading"
        className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-16"
      >
        What Our Clients <span className="italic">say</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#fcfbf9] border border-[#e5e2db] rounded-2xl p-8 flex flex-col shadow-sm relative"
          >
            <div className="absolute top-8 right-8 w-10 h-10 bg-[#e8e4db] rounded flex items-center justify-center text-primary">
              <Quote className="w-5 h-5 fill-current" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-lg object-cover border border-gray-200"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-orange-400 fill-current" />
              ))}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}