export default function PrivacyPolicyPage() {
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
            Privacy <span className="italic text-[#008c73]">Policy</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Last updated: April 13, 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal data such as name, email, phone number, and
            project details.
          </p>

          <h2>2. How We Use Information</h2>
          <p>
            Used to improve services, communicate, and process transactions.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell your personal data.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement security measures to protect your data.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your data.
          </p>

          <h2>6. Changes</h2>
          <p>
            Policy may be updated periodically.
          </p>

          <h2>7. Contact</h2>
          <p>
            Contact us at{" "}
            <a href="mailto:privacy@vidsaas.com">contact@finalverzion.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}