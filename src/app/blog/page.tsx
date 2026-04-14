import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog — VidSaaS",
  description: "Learn how AI is transforming meetings, notes, and team productivity.",
};

export default function BlogsPage() {
  return (
    <div className="w-full min-h-screen bg-[#fdfbf7] pt-24 pb-24 relative">
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 8px)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#008c73] font-medium text-sm mb-6">
            <div className="w-2 h-1 bg-[#008c73] rounded-full"></div>
            Blogs
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-4">
            Insights From <span className="italic">VidSaaS</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how AI is transforming meetings, notes, and team productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="group block bg-[#fcfbf9] rounded-3xl p-6 border border-gray-200 transition-transform hover:-translate-y-1 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?u=${blog.author}`}
                      alt={blog.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {blog.author}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#e8e4db] flex items-center justify-center text-gray-600 group-hover:bg-[#008c73] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-serif text-gray-900 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 h-10">{blog.desc}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <span>{blog.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {blog.readTime}
                </span>
              </div>

              <div className="w-full h-48 rounded-2xl bg-[#00b395] relative overflow-hidden flex flex-col items-center justify-center text-white p-6">
                {/* Halftone dot pattern overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-4">
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
                  <span className="font-serif italic text-xl mb-1">
                    {blog.imageText1}
                  </span>
                  <span className="text-2xl font-bold">{blog.imageText2}</span>
                </div>
                {/* Bottom decorative lines */}
                <div className="absolute bottom-0 left-0 right-0 h-4 flex flex-col justify-end pb-2 px-4 gap-1">
                  <div className="h-0.5 w-full bg-white/40"></div>
                  <div className="h-0.5 w-full bg-white/40"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}