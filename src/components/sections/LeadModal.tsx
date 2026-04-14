"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      data.append(
        "What type of video do you need?",
        formData.videoType
      );
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

      onClose();
      router.push("/book-a-call");
    } catch (error) {
      console.error("Error submitting form", error);
      onClose();
      router.push("/book-a-call");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 relative max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#fcfbf9]">
          <div>
            <h3 className="font-serif text-2xl font-medium text-gray-900">
              Let&apos;s discuss your project
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Fill out the form below to get started.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form
          id="lead-form"
          onSubmit={handleSubmit}
          className="flex flex-col flex-grow overflow-hidden"
        >
          <div className="p-6 overflow-y-auto flex-grow space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name *
              </label>
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Work Email *
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                WhatsApp Number{" "}
                {/* <span className="text-gray-400 font-normal">(Optional)</span> */}
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                What type of video do you need? *
              </label>
              <select
                required
                name="videoType"
                value={formData.videoType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
              >
                <option value="" disabled>
                  Select video type
                </option>
                <option value="2D Animation">2D Animation</option>
                <option value="3D Animation">3D Animation</option>
                <option value="Live Action">Live Action</option>
                <option value="Mixed Media">Mixed Media</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Budget Range *
              </label>
              <select
                required
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
              >
                <option value="" disabled>
                  Select budget range
                </option>
                <option value="$5k - $10k">$5k - $10k</option>
                <option value="$10k - $25k">$10k - $25k</option>
                <option value="$25k - $50k">$25k - $50k</option>
                <option value="$50k+">$50k+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                How did you find us? *
              </label>
              <select
                required
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
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

            {formData.source === "Other" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Please specify *
                </label>
                <input
                  required
                  type="text"
                  name="otherSource"
                  value={formData.otherSource}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="How did you hear about us?"
                />
              </motion.div>
            )}
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Submit Request <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}