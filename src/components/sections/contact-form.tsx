"use client";

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong'
      );
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#050505] py-[120px] px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[48px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1]">
              Let's Create <span className="text-[#4ade80]">Together.</span>
            </h2>
            <p className="text-[#999999] text-[18px] leading-[1.6] max-w-[500px]">
              Ready to transform your brand with high-converting video content? 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <span className="text-white/80 text-[16px]">Quick response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <span className="text-white/80 text-[16px]">Free project consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <span className="text-white/80 text-[16px]">No commitment required</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-[#0a0a0a] rounded-[24px] border border-white/10 p-8 md:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#4ade80]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#4ade80]" />
                  </div>
                  <h3 className="text-white text-[24px] font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#999999] text-[16px]">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white/80 text-[14px] font-medium">
                      Name <span className="text-[#4ade80]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#050505] border border-white/10 rounded-[12px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white/80 text-[14px] font-medium">
                      Email <span className="text-[#4ade80]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#050505] border border-white/10 rounded-[12px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                    />
                  </div>

                  {/* Company Field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-white/80 text-[14px] font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full bg-[#050505] border border-white/10 rounded-[12px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-white/80 text-[14px] font-medium">
                      Message <span className="text-[#4ade80]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-[#050505] border border-white/10 rounded-[12px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4ade80]/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-[14px]">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#4ade80] text-[#050505] px-6 py-4 rounded-full font-semibold text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Background Glow */}
            <div 
              className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#4ade80]/10 rounded-full blur-[100px] pointer-events-none -z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
