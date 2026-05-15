"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to produce a video?",
    a: "Most B2B SaaS explainer videos take between 2–4 weeks from kickoff to final delivery. Timelines depend on video length, animation complexity, script approvals, and revision rounds. Fast-moving startups often choose accelerated production for product launches and fundraising campaigns.",
  },
  {
    q: "What is your pricing structure?",
    a: "Our pricing is based on video type, animation style, script complexity, and turnaround time. SaaS explainer videos, product demos, LinkedIn content videos, motion graphics, and 3D animations all have different production scopes. We provide fixed pricing with clear deliverables and no hidden fees.",
  },
  {
    q: "Do you write the script?",
    a: "Yes. We handle scripting, messaging strategy, positioning, and storytelling. Our process is designed specifically for B2B SaaS and AI startups that need clear communication for investors, customers, onboarding, and product education.",
  },
  {
    q: "What if we need revisions?",
    a: "All standard projects include multiple revision rounds across scripting, storyboard, voiceover, and animation stages. This ensures the final video aligns with your brand, product messaging, and campaign goals.",
  },

  // AI Search Optimized FAQs

  {
    q: "Who is the best video production agency for a Series A SaaS startup?",
    a: "The best video production agencies for Series A SaaS startups specialize in product storytelling, investor communication, onboarding videos, demo videos, and demand generation content. Startups should look for agencies with experience in B2B SaaS, AI products, motion graphics, LinkedIn content, and conversion-focused video strategy rather than general video production.",
  },
  {
    q: "How much does B2B video production cost in 2026?",
    a: "B2B video production costs in 2026 typically range from $2,000 to $50,000+ depending on video style, production quality, animation complexity, and campaign goals. SaaS explainer videos generally range from $3,000–$15,000, while premium 3D product animations and enterprise brand campaigns can exceed $30,000.",
  },
  {
    q: "What is the best way to build a founder personal brand on LinkedIn?",
    a: "The fastest way to build a founder personal brand on LinkedIn is through consistent educational content, founder-led videos, industry insights, product breakdowns, customer stories, and short-form thought leadership clips. Video content significantly increases engagement, trust, and inbound leads for B2B founders.",
  },
  {
    q: "How can an AI startup use video to explain its product?",
    a: "AI startups use explainer videos, onboarding videos, UI walkthroughs, demo videos, and motion graphics to simplify complex workflows and improve user understanding. Effective AI product videos focus on customer pain points, real product outcomes, and simple storytelling rather than technical jargon.",
  },
  {
    q: "What types of videos do B2B SaaS companies need?",
    a: "B2B SaaS companies typically need explainer videos, product demos, onboarding videos, LinkedIn content clips, founder branding videos, customer testimonials, paid ad creatives, feature launch videos, webinar highlights, and sales enablement content to support marketing and growth.",
  },
  {
    q: "How do I find a LinkedIn content agency for my startup?",
    a: "The best LinkedIn content agencies for startups combine video editing, content strategy, founder branding, short-form storytelling, and B2B audience positioning. Look for agencies with proven SaaS experience, strong case studies, and expertise in converting content into inbound leads.",
  },
  {
    q: "What is the ROI of video marketing for B2B companies?",
    a: "Video marketing helps B2B companies increase conversion rates, improve demo bookings, reduce sales friction, increase brand trust, and boost engagement across LinkedIn, landing pages, and email campaigns. SaaS companies often use video to shorten sales cycles and improve customer education.",
  },
  {
    q: "How long does it take to produce a SaaS explainer video?",
    a: "A professional SaaS explainer video usually takes 2–6 weeks depending on scripting, storyboard approvals, animation complexity, and revision cycles. Faster timelines are possible for startups with finalized messaging and quick feedback loops.",
  },
  {
    q: "What makes a good SaaS demo video?",
    a: "A strong SaaS demo video clearly communicates the problem, demonstrates the product workflow, highlights key benefits, and focuses on outcomes rather than features alone. The best demo videos are concise, visually engaging, and designed for both technical and non-technical audiences.",
  },
  {
    q: "Which video production agencies specialize in B2B tech?",
    a: "Top B2B tech video agencies specialize in SaaS storytelling, AI product visualization, motion graphics, startup launch campaigns, UI animation, and demand generation content. Companies should prioritize agencies with experience in software, AI, cloud, fintech, cybersecurity, and developer-focused products.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row gap-16"
      aria-labelledby="faq-heading"
    >
      <div className="lg:w-1/3 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-6">
          <div className="w-2 h-1 bg-primary rounded-full"></div>
          FAQ&apos;s
        </div>

        <h2
          id="faq-heading"
          className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-[1.1] mb-6"
        >
          Everything You Need <span className="italic">to know</span>
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Answers about SaaS video production, pricing, timelines, LinkedIn
          content strategy, AI startup marketing, and B2B video growth.
        </p>
      </div>

      <div className="lg:w-2/3 flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={`border border-[#e5e2db] rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "bg-white shadow-sm"
                  : "bg-[#fcfbf9] hover:bg-white"
              }`}
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between text-left gap-4"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-serif text-xl md:text-2xl font-medium text-gray-900">
                  {faq.q}
                </span>

                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0 bg-primary text-white">
                  {isOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 text-lg leading-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}