export default function TermsPage() {
  return (
    <div className="w-full min-h-screen bg-[#fdfbf7] pt-32 pb-24 relative">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 8px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-[#008c73] font-medium text-sm mb-6">
            <div className="w-2 h-1 bg-[#008c73] rounded-full"></div>
            Legal
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-4">
            Terms of <span className="italic text-[#008c73]">Service</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Last updated: April 13, 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Final Verzion. By accessing our website and using our video
            production services, you agree to be bound by these Terms of Service.
          </p>

          <h2>2. Services Provided</h2>
          <p>
            Final Verzion provides professional video production services including
            animation, live-action, scriptwriting, and more.
          </p>

          <h2>3. Client Responsibilities</h2>
          <p>
            You agree to provide assets and feedback on time to ensure smooth
            project delivery.
          </p>

          <h2>4. Revisions and Approvals</h2>
          <p>
            Additional revisions beyond agreed scope will be billed separately.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            Upon full payment, you receive a license to use the final deliverables.
          </p>

          <h2>6. Payment Terms</h2>
          <p>
            Typically 50% upfront and 50% after completion.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Liability is limited to the amount paid for the service.
          </p>

          <h2>8. Contact</h2>
          <p>
            Contact us at{" "}
            <a href="mailto:contact@finalverzion.com">contact@finalverzion.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}