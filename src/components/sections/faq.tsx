// FAQSection.tsx
"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  { question: "What video production services do you offer?", answer: "We specialize in B2B video production including:\n• Motion Graphics & Animation\n• Brand Videos & Company Stories\n• Product Demos & Explainer Videos\n• Social Media Video Content\n• Sales & Marketing Videos" },
  { question: "Who do you work with?", answer: "We primarily partner with B2B companies, SaaS startups, and enterprise organizations looking to convert more leads into customers through high-quality video content." },
  { question: "Can we see examples of your previous work?", answer: "Absolutely! Check out our Work section above to see our portfolio of successful video projects across various industries." },
  { question: "How many revisions are included?", answer: "Our standard packages include two rounds of revisions. We work closely with you throughout the process to ensure the final product exceeds your expectations." },
  { question: "What's your pricing structure?", answer: "Our pricing is project-based and depends on complexity, length, and deliverables. We provide detailed proposals after understanding your specific needs during our discovery call." },
  { question: "What are the payment terms?", answer: "We typically work with 50% upfront to begin production and 50% upon final delivery. For larger projects, we can discuss milestone-based payment schedules." },
  { question: "Do you work with international clients?", answer: "Yes! We work with businesses globally. Our team is experienced in managing projects across different time zones with clear communication protocols." },
  { question: "How long does a typical project take?", answer: "Project timelines vary based on scope. A motion graphics video typically takes 2-4 weeks, while comprehensive brand video projects may take 4-8 weeks from concept to delivery." },
  { question: "What do you need from us to get started?", answer: "We'll need your brand guidelines, key messaging points, target audience information, and any existing assets. Our team will guide you through a comprehensive brief process." },
  { question: "How do you handle feedback and collaboration?", answer: "We use a dedicated project dashboard for seamless collaboration. You'll have access to project updates, can provide feedback directly on video drafts, and communicate with our team in real-time." },
];

export default function FAQSection() {
  return (
    <section id="faq" className="w-full bg-[#050505] py-12 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-left lg:text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Your Questions <span className="text-[#4ade80]">Answered.</span>
          </h2>
          <p className="text-[#bdbdbd] mt-4 max-w-2xl mx-0 lg:mx-auto">Everything you need to know about working with Final Verzion.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion.Root type="single" collapsible className="w-full">
            {FAQ_DATA.map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="border-b border-white/10">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-start justify-between gap-4 py-4 md:py-6 text-left outline-none">
                    <h3 className="text-base md:text-lg font-semibold text-white leading-snug max-w-[85%] group-data-[state=open]:text-[#4ade80]">{item.question}</h3>
                    <span className="flex items-center justify-center transform transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="w-5 h-5 text-[#bdbdbd] group-data-[state=open]:text-[#4ade80]" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="px-0 pb-6 text-[#bdbdbd] text-sm md:text-base leading-7">
                  <div className="whitespace-pre-line">{item.answer}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>

      {/* radial glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)" }} />
      </div>
    </section>
  );
}