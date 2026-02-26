// // components/model/lead-model.tsx

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Mic2, Send, CheckCircle2 } from "lucide-react";

// interface LeadModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
//   const [step, setStep] = useState(1); // 1 = Form, 2 = Success
//   const [budget, setBudget] = useState(5000);

//   // Form State
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Logic to send data to your backend goes here
//     console.log("Form Submitted:", { ...formData, budget });
//     setStep(2); // Show success message
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Dark Overlay with Blur */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//           />

//           {/* Modal Container - "Modern Box" */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 20 }}
//             className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#0a0a0a] border border-green-900/50 shadow-2xl shadow-green-900/20"
//           >
//             {/* Green Gradient Top Bar */}
//             <div className="h-1 w-full bg-gradient-to-r from-green-600 via-emerald-500 to-green-600" />

//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors z-10"
//             >
//               <X size={20} />
//             </button>

//             <div className="p-8">
//               {step === 1 ? (
//                 <>
//                   {/* Header with Mic Icon */}
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="p-3 bg-green-900/20 rounded-full border border-green-500/20">
//                       <Mic2 className="text-green-500" size={24} />
//                     </div>
//                     <div>
//                       <h2 className="text-2xl font-bold text-white">Let's Record.</h2>
//                       <p className="text-zinc-400 text-sm">Tell us about your project.</p>
//                     </div>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {/* Inputs Grid */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-1">
//                         <label className="text-xs text-zinc-500 uppercase tracking-wider">Name</label>
//                         <input
//                           required
//                           type="text"
//                           placeholder="John Doe"
//                           className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
//                           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         />
//                       </div>
//                       <div className="space-y-1">
//                         <label className="text-xs text-zinc-500 uppercase tracking-wider">Company</label>
//                         <input
//                           type="text"
//                           placeholder="Acme Inc."
//                           className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
//                           onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-1">
//                         <label className="text-xs text-zinc-500 uppercase tracking-wider">Email</label>
//                         <input
//                           required
//                           type="email"
//                           placeholder="john@example.com"
//                           className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
//                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         />
//                       </div>
//                       <div className="space-y-1">
//                         <label className="text-xs text-zinc-500 uppercase tracking-wider">Phone</label>
//                         <input
//                           type="tel"
//                           placeholder="+1 (555) 000-0000"
//                           className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
//                           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                         />
//                       </div>
//                     </div>

//                     {/* Modern Range Slider for Budget */}
//                     <div className="pt-2 space-y-3">
//                       <div className="flex justify-between items-end">
//                         <label className="text-xs text-zinc-500 uppercase tracking-wider">Budget Range</label>
//                         <span className="text-green-400 font-mono font-bold">${budget.toLocaleString()}+</span>
//                       </div>
//                       <input
//                         type="range"
//                         min="1000"
//                         max="20000"
//                         step="500"
//                         value={budget}
//                         onChange={(e) => setBudget(Number(e.target.value))}
//                         className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
//                       />
//                       <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
//                         <span>$1k</span>
//                         <span>$20k+</span>
//                       </div>
//                     </div>

//                     {/* Message */}
//                     <div className="space-y-1">
//                       <label className="text-xs text-zinc-500 uppercase tracking-wider">Message</label>
//                       <textarea
//                         rows={3}
//                         placeholder="What are we building?"
//                         className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700 resize-none"
//                         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       type="submit"
//                       className="w-full group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium py-3 rounded-lg mt-2 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
//                     >
//                       Start Project
//                       <Send size={16} className="group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </form>
//                 </>
//               ) : (
//                 /* Success State */
//                 <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
//                   <div className="p-4 bg-green-500/10 rounded-full text-green-500 mb-2">
//                     <CheckCircle2 size={48} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
//                   <p className="text-zinc-400 max-w-xs">
//                     We've received your details. Our team will review your budget and get back to you within 24 hours.
//                   </p>
//                   <button
//                     onClick={onClose}
//                     className="text-sm text-green-500 hover:text-green-400 font-medium mt-4"
//                   >
//                     Close Window
//                   </button>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }
// components/model/lead-model.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic2, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// 👇 PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL INSIDE THE QUOTES BELOW
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzaG3KJ1VoYaHdOgecVerVwx2Z9DGbJnx9LioMSFrSSfwpsHGVkmEIzpHoGaV3h6Y6I/exec";

type FormStatus = "idle" | "loading" | "success" | "error";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [budget, setBudget] = useState(5000);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Build FormData — same approach as the ContactForm
      const data = new FormData();
      data.append("name", formData.name);
      data.append("company", formData.company);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("budget", `$${budget.toLocaleString()}+`);
      data.append("date", new Date().toISOString());

      // mode: 'no-cors' is required for Google Apps Script — we won't get a
      // readable response back, so we assume success if no network error occurs.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "" });
      setBudget(5000);
    } catch (error) {
      console.error("Form Error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");

      // Auto-reset error state after 5 s
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Overlay with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#0a0a0a] border border-green-900/50 shadow-2xl shadow-green-900/20"
          >
            {/* Green Gradient Top Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-green-600 via-emerald-500 to-green-600" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {status === "success" ? (
                /* ── Success State ── */
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="p-4 bg-green-500/10 rounded-full text-green-500 mb-2">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-zinc-400 max-w-xs">
                    We've received your details. Our team will review your budget
                    and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="text-sm text-green-500 hover:text-green-400 font-medium mt-4"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                /* ── Form State ── */
                <>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-green-900/20 rounded-full border border-green-500/20">
                      <Mic2 className="text-green-500" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Let's Record.</h2>
                      <p className="text-zinc-400 text-sm">Tell us about your project.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name + Company */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-zinc-500 uppercase tracking-wider">
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-zinc-500 uppercase tracking-wider">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Inc."
                          value={formData.company}
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-zinc-500 uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-zinc-500 uppercase tracking-wider">
                          Phone
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-zinc-700"
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Budget Slider */}
                    <div className="pt-2 space-y-3">
                      <div className="flex justify-between items-end">
                        <label className="text-xs text-zinc-500 uppercase tracking-wider">
                          Budget Range
                        </label>
                        <span className="text-green-400 font-mono font-bold">
                          ${budget.toLocaleString()}+
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="20000"
                        step="500"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                      <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                        <span>$1k</span>
                        <span>$20k+</span>
                      </div>
                    </div>

                    {/* Error Message */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-[14px]">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium py-3 rounded-lg mt-2 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Start Project
                          <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}