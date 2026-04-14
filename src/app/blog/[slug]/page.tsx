"use client";
import { use } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Link2,
  Linkedin,
  Twitter,
  Facebook,
  Check,
} from "lucide-react";
import { blogs } from "@/lib/blogs";

interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}
export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = use(params);
  const [copied, setCopied] = useState(false);

  const blog = blogs.find(async (b) => b.id === (await params).id) ?? blogs[0];

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = blog.title;

  const handleShare = (platform: string) => {
    let url = "";
    if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    }
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#fdfbf7] pt-8 pb-24 relative">
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 8px)",
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-12 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blogs
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-gray-600 text-lg">{blog.desc}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm whitespace-nowrap">
              <span>{blog.date}</span>
              <div className="w-px h-4 bg-gray-200"></div>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full h-[400px] rounded-3xl bg-[#00b395] relative overflow-hidden flex flex-col items-center justify-center text-white p-8 mb-12">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full text-white"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-serif italic text-3xl mb-2">
              {blog.imageText1}
            </span>
            <span className="text-5xl font-bold">{blog.imageText2}</span>
          </div>
          {/* Bottom decorative lines */}
          <div className="absolute bottom-0 left-0 right-0 h-8 flex flex-col justify-end pb-4 px-8 gap-1.5">
            <div className="h-1 w-full bg-white/40"></div>
            <div className="h-1 w-full bg-white/40"></div>
          </div>
        </div>

        {/* Author + Share bar */}
        <div className="border-t border-b border-gray-200 py-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden shadow-sm">
              <img
                src={`https://i.pravatar.cc/150?u=${blog.author}`}
                alt={blog.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-gray-900">{blog.author}</div>
              <div className="text-sm text-gray-600">{blog.authorRole}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-lg bg-[#f5f3ee] flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors relative group"
              aria-label="Copy link"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#00b395]" />
              ) : (
                <Link2 className="w-4 h-4" />
              )}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {copied ? "Copied!" : "Copy link"}
              </span>
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <button
              onClick={() => handleShare("linkedin")}
              className="w-10 h-10 rounded-lg bg-[#f5f3ee] flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="w-10 h-10 rounded-lg bg-[#f5f3ee] flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="w-10 h-10 rounded-lg bg-[#f5f3ee] flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article content */}
        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="font-serif text-3xl text-gray-900 mb-6">
            Importance of Time Management in Research Teams
          </h2>

          <p className="mb-6 leading-relaxed">
            Research teams today operate in fast-moving environments where
            delays directly impact product decisions, customer understanding,
            and business outcomes. Managing time effectively has become one of
            the most critical challenges in qualitative research.
          </p>

          <p className="mb-6 leading-relaxed">
            Traditional research workflows rely heavily on manual
            processes—scheduling interviews, taking notes, reviewing recordings,
            and synthesizing insights. These steps consume valuable hours and
            slow down teams when speed matters most.
          </p>

          <p className="mb-12 leading-relaxed">
            AI-powered productivity tools change this approach by capturing
            conversations in real time and converting them into structured,
            searchable insights. Instead of revisiting recordings repeatedly,
            teams can immediately focus on patterns, themes, and decisions.
          </p>

          {/* Pull-quote card */}
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-12 mb-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            ></div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-32 flex flex-col justify-center gap-2">
              <div className="w-full h-1 bg-[#00b395]"></div>
              <div className="w-full h-1 bg-[#00b395]"></div>
              <div className="w-full h-1 bg-[#00b395]"></div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 flex flex-col justify-center gap-2">
              <div className="w-full h-1 bg-[#00b395]"></div>
              <div className="w-full h-1 bg-[#00b395]"></div>
              <div className="w-full h-1 bg-[#00b395]"></div>
            </div>

            <span className="font-serif italic text-2xl text-[#00b395] mb-2 relative z-10">
              Importance of
            </span>
            <h3 className="font-serif text-4xl text-gray-900 mb-8 relative z-10">
              Time Management
              <br />
              in <span className="italic">Research Teams</span>
            </h3>

            <div className="w-24 h-24 bg-[#1a3b34] rounded-2xl flex items-center justify-center shadow-xl rotate-[-10deg] relative z-10 border-4 border-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-12 h-12 text-white"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-gray-900 mb-6">
            Turning Conversations into Actionable Outputs
          </h2>
          <p className="mb-6 leading-relaxed">
            The true value of research lies in its application. By automating
            the tedious aspects of data collection and synthesis, teams can
            spend more time translating findings into actionable strategies.
          </p>
        </div>
      </div>
    </div>
  );
}