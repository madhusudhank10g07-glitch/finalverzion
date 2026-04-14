"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Plus, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to produce a video?",
    a: "Typically 4-6 weeks from kickoff to final delivery, depending on the style (2D vs 3D) and length of the video.",
  },
  {
    q: "What is your pricing structure?",
    a: "We offer fixed-price packages based on video length and animation style. Contact us for a detailed quote tailored to your specific needs.",
  },
  {
    q: "Do you write the script?",
    a: "Yes, our expert copywriters handle the scriptwriting process. We work closely with you to ensure your message is clear, compelling, and accurate.",
  },
  {
    q: "Can we provide our own voiceover?",
    a: "Absolutely! We can work with your provided audio or source professional voice talent for you from our extensive network.",
  },
  {
    q: "What if we need revisions?",
    a: "Our standard packages include 2 rounds of revisions at each major stage (script, storyboard, animation) to ensure you are completely satisfied with the final product.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 py-24  flex flex-col lg:flex-row gap-16"
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
          Everything You Need <span className="italic">know</span>
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Clear answers about our production process, pricing, timelines, and
          deliverables.
        </p>

        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
          Contact Us <ChevronDown className="w-4 h-4 -rotate-90" />
        </button>
      </div>

      <div className="lg:w-2/3 flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`border border-[#e5e2db] rounded-xl overflow-hidden transition-colors ${
                isOpen ? "bg-white shadow-sm" : "bg-[#fcfbf9]"
              }`}
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-serif text-2xl font-medium text-gray-900">
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

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 text-lg">
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