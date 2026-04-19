import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Final Verzion - Explain Your SaaS in Under 60 Seconds",
  description:
    "We craft high-converting explainer videos that simplify complex software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dot-pattern relative overflow-hidden flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-PZ21G7CZZB" />
      </body>
    </html>
  );
}