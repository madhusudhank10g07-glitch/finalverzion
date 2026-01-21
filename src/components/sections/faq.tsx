"use client";

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What video production services do you offer?",
    answer: "We specialize in B2B video production including:\n• Motion Graphics & Animation\n• Brand Videos & Company Stories\n• Product Demos & Explainer Videos\n• Social Media Video Content\n• Sales & Marketing Videos"
  },
  {
    question: "Who do you work with?",
    answer: "We primarily partner with B2B companies, SaaS startups, and enterprise organizations looking to convert more leads into customers through high-quality video content."
  },
  {
    question: "Can we see examples of your previous work?",
    answer: "Absolutely! Check out our Work section above to see our portfolio of successful video projects across various industries."
  },
  {
    question: "How many revisions are included?",
    answer: "Our standard packages include two rounds of revisions. We work closely with you throughout the process to ensure the final product exceeds your expectations."
  },
  {
    question: "What's your pricing structure?",
    answer: "Our pricing is project-based and depends on complexity, length, and deliverables. We provide detailed proposals after understanding your specific needs during our discovery call."
  },
  {
    question: "What are the payment terms?",
    answer: "We typically work with 50% upfront to begin production and 50% upon final delivery. For larger projects, we can discuss milestone-based payment schedules."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with businesses globally. Our team is experienced in managing projects across different time zones with clear communication protocols."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. A motion graphics video typically takes 2-4 weeks, while comprehensive brand video projects may take 4-8 weeks from concept to delivery."
  },
  {
    question: "What do you need from us to get started?",
    answer: "We'll need your brand guidelines, key messaging points, target audience information, and any existing assets. Our team will guide you through a comprehensive brief process."
  },
  {
    question: "How do you handle feedback and collaboration?",
    answer: "We use a dedicated project dashboard for seamless collaboration. You'll have access to project updates, can provide feedback directly on video drafts, and communicate with our team in real-time."
  }
];

export default function FAQSection() {
  return (
    <section 
      id="faq" 
      className="w-full bg-[#050505] py-[120px] px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="max-width-[1200px] w-full flex flex-col items-start lg:items-center">
        {/* Section Heading */}
        <div className="mb-[64px] w-full text-left lg:text-center">
          <h2 className="text-[32px] md:text-[64px] font-semibold tracking-tight text-white leading-[1.1]">
            Your Questions <span className="text-[#4ade80]">Answered.</span>
          </h2>
          <p className="text-[#999999] text-[18px] mt-4 max-w-[500px] mx-auto">
            Everything you need to know about working with Final Verzion.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full max-w-[800px]">
          <Accordion.Root type="single" collapsible className="w-full flex flex-col gap-0">
            {FAQ_DATA.map((item, index) => (
              <Accordion.Item 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[rgba(255,255,255,0.1)] overflow-hidden transition-all duration-300"
              >
                <Accordion.Header className="flex w-full">
                  <Accordion.Trigger className="group flex flex-1 items-center justify-between py-8 text-left outline-none transition-all">
                    <h5 className="text-[18px] md:text-[22px] font-semibold text-white group-data-[state=open]:text-[#4ade80] transition-colors leading-snug max-w-[90%]">
                      {item.question}
                    </h5>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-5 w-5 text-[#999999] group-data-[state=open]:text-[#4ade80]" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                
                <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-[16px] md:text-[18px] text-[#999999] leading-[1.6]">
                  <div className="pb-10 whitespace-pre-line">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>

      {/* Background radial glow effect as seen in high_level_design and screenshots */}
      <div 
        className="absolute w-[800px] h-[800px] -z-10 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.15) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)'
        }}
      />
    </section>
  );
}
