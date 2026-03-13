import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "Final Verzion",
  description: "Final Verzion B2B Video production explainer video services company we serve explainer videos , product demo ,premium looking marketing video ads for startups, tech companies across all size across all foreign countries from india   ",
viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden w-full max-w-[100vw]">
        {children}
         <GoogleAnalytics gaId="G-PZ21G7CZZB" />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
