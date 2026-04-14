import { Check } from "lucide-react";

export const metadata = {
  title: "Book a Call - Final Verzion",
  description:
    "Schedule a call with our production team to discuss your video project.",
};

export default function BookACallPage() {
  return (
    <div className="w-full min-h-screen bg-[#fdfbf7] pt-32 pb-24 relative flex flex-col items-center">
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 8px)",
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 w-full text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 text-[#008c73] font-medium text-sm mb-6 bg-[#008c73]/10 px-4 py-1.5 rounded-full">
          <Check className="w-4 h-4" /> Request Received
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-medium text-[#1a1a1a] mb-6">
          Need your project done{" "}
          <span className="italic text-[#008c73]">faster?</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Book a call right now to skip the line and speak directly with our
          production team about your vision.
        </p>

        <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-[750px] relative">
          <iframe
            src="https://calendly.com/finalverzion-book-call/30min"
            width="100%"
            height="100%"
            title="Book a Call with VidSaaS"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}