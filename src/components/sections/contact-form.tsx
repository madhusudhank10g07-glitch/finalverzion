// ContactForm.tsx
"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
// deploy id AKfycbzi_C8335YizA2lvsB1NQ1tuIrM-TzTZqB4ICTAeEksHVN4J98WjYyJUfmryEohNx8
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzi_C8335YizA2lvsB1NQ1tuIrM-TzTZqB4ICTAeEksHVN4J98WjYyJUfmryEohNx8/exec";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}
type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("company", formData.company);
      data.append("message", formData.message);
      data.append("date", new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });

      // optional: send to Calendly for booking
      setTimeout(() => {
        window.location.href = "https://calendly.com/madhumk0709m/30min";
      }, 700);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#050505] py-12 md:py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Let's Create <span className="text-[#4ade80]">Together.</span>
            </h2>
            <p className="text-[#bdbdbd] text-base md:text-lg max-w-xl">
              Ready to transform your brand with high-converting video content?
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#4ade80]" />
                <div className="text-white/80 text-sm">Quick response within 24 hours</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#4ade80]" />
                <div className="text-white/80 text-sm">Free project consultation</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#4ade80]" />
                <div className="text-white/80 text-sm">No commitment required</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10">
              <div aria-live="polite" className="sr-only">
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                  ? "Message sent"
                  : status === "error"
                  ? "Error sending"
                  : "Form idle"}
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#4ade80]/20 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-[#4ade80]" />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Message Sent!</h3>
                  <p className="text-[#bdbdbd] text-sm">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex flex-col gap-2">
                      <span className="text-white/80 text-sm font-medium">Name <span className="text-[#4ade80]">*</span></span>
                      <input
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="text-white/80 text-sm font-medium">Email <span className="text-[#4ade80]">*</span></span>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-white/80 text-sm font-medium">Company</span>
                    <input
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-white/80 text-sm font-medium">Message <span className="text-[#4ade80]">*</span></span>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30 resize-none"
                    />
                  </label>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#4ade80] text-[#050505] px-4 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition transform disabled:opacity-70"
                    style={{ boxShadow: "0 0 20px rgba(74, 222, 128, 0.25)" }}
                    aria-disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#4ade80]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}