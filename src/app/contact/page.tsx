"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    videoType: "",
    budget: "",
    source: "",
    otherSource: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new URLSearchParams();
      data.append("Full Name", formData.fullName);
      data.append("Work Email", formData.email);
      data.append("whatsapp number", formData.whatsapp);
      data.append("What type of video do you need?", formData.videoType);
      data.append("Budget range", formData.budget);
      data.append("How did you find us?", formData.source);
      if (formData.source === "Other") {
        data.append("Other Source", formData.otherSource);
      }

      await fetch(
        "https://script.google.com/macros/s/AKfycbzi_C8335YizA2lvsB1NQ1tuIrM-TzTZqB4ICTAeEksHVN4J98WjYyJUfmryEohNx8/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data.toString(),
          mode: "no-cors",
        }
      );

      router.push("/book-a-call");
    } catch (error) {
      console.error("Error submitting form", error);
      router.push("/book-a-call");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008c73] focus:ring-2 focus:ring-[#008c73]/20 outline-none transition-all bg-gray-50 focus:bg-white";

  return (
    <div className="w-full min-h-screen bg-[#fdfbf7] pt-32 pb-24 relative">
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 8px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#008c73] font-medium text-sm mb-6">
            <div className="w-2 h-1 bg-[#008c73] rounded-full" />
            Contact Us
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-6">
            Get in <span className="italic text-[#008c73]">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Whether you have a question about our services, pricing, or want to
            explore an upcoming project, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {/* Left: Contact Info + CTA */}
          <div className="flex flex-col gap-8"> 
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-8">
                Contact Information
              </h3>

              

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#008c73]/10 flex items-center justify-center shrink-0 text-[#008c73]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:contact@finalverzion.com" className="text-gray-600 text-sm hover:text-[#008c73] transition-colors block">
                      contact@finalverzion.com
                    </a>
                  
                  </div>
        

              
            </div>

            {/* Book a call CTA */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 text-white text-center flex flex-col items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
              <h3 className="font-serif text-2xl mb-4 relative z-10">
                Prefer to chat instead?
              </h3>
              <p className="text-white/70 text-sm mb-6 relative z-10">
                Skip the form and talk directly with our production team.
              </p>
              <Link
                href="/book-a-call"
                className="bg-[#00b395] hover:bg-[#008c73] text-white px-6 py-3 rounded-lg font-medium transition-colors relative z-10 w-full sm:w-auto inline-block"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-8 md:p-10 border-b border-gray-100 bg-[#fcfbf9]">
              <h3 className="font-serif text-2xl font-medium text-gray-900">
                Let&apos;s discuss your project
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Fill out the form below to get started.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-grow overflow-hidden"
            >
              <div className="p-8 md:p-10 overflow-y-auto flex-grow space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Video Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What type of video do you need? *
                  </label>
                  <select
                    required
                    name="videoType"
                    value={formData.videoType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Select video type</option>
                    <option value="2D Animation">2D Animation</option>
                    <option value="3D Animation">3D Animation</option>
                    <option value="Live Action">Live Action</option>
                    <option value="Mixed Media">Mixed Media</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    required
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="$1k - $5k">$1k – $5k</option>
                    <option value="$5k - $10k">$5k – $10k</option>
                    <option value="$10k - $25k">$10k – $25k</option>
                    <option value="$25k - $50k">$25k – $50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>
                </div>

                {/* Source */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you find us? *
                  </label>
                  <select
                    required
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Google search">Google search</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Referral">Referral</option>
                    <option value="Online ad">Online ad</option>
                    <option value="Blog / Article">Blog / Article</option>
                    <option value="Other">Other (specify)</option>
                  </select>
                </div>

                {/* Other source — animated reveal */}
                <AnimatePresence>
                  {formData.source === "Other" && (
                    <motion.div
                      key="otherSource"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Please specify *
                      </label>
                      <input
                        required
                        type="text"
                        name="otherSource"
                        value={formData.otherSource}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="How did you hear about us?"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit */}
              <div className="p-8 md:p-10 border-t border-gray-100 bg-gray-50">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#008c73] hover:bg-[#007a64] disabled:bg-[#008c73]/70 text-white font-medium py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowUpRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}