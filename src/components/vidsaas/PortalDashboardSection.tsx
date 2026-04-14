"use client";

import {
  Search,
  LayoutDashboard,
  FolderKanban,
  Video,
  MessageSquare,
  PenTool,
  Image as ImageIcon,
  Download,
  Plus,
  FileText,
  Brain,
  PieChart,
  LineChart,
  Trophy,
} from "lucide-react";

export default function PortalDashboardSection() {
  return (
    <section className="w-full bg-[#fcfbf9] pt-12 pb-0">
      <div className="max-w-6xl mx-auto px-4 mb-0 relative z-10">
        <div className="bg-white rounded-t-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row h-[600px]">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-100 p-6 hidden md:flex flex-col">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-[#008c73] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="font-bold text-lg">VidSaaS</span>
            </div>

            <div className="mb-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#008c73]/20"
                />
              </div>
            </div>

            <div className="text-xs font-semibold text-gray-400 mb-3 mt-4">
              MAIN MENU
            </div>
            <nav className="flex flex-col gap-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-[#008c73] rounded-lg"
              >
                <FolderKanban className="w-4 h-4" /> Projects
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Video className="w-4 h-4" /> Assets
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <MessageSquare className="w-4 h-4" /> Revisions
              </a>
            </nav>

            <div className="text-xs font-semibold text-gray-400 mb-3 mt-8">
              TOOLS
            </div>
            <nav className="flex flex-col gap-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <PenTool className="w-4 h-4" /> Scriptwriter
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <ImageIcon className="w-4 h-4" /> Storyboarder
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 bg-[#fafafa] overflow-y-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold">Project Dashboard</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" /> Export Report
                </button>
                <button className="px-4 py-2 bg-[#008c73] text-white rounded-lg text-sm font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" /> New Project
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Videos", value: "86", desc: "Completed projects" },
                { label: "Active Projects", value: "14", desc: "Currently in production" },
                { label: "Pending Revisions", value: "32", desc: "Awaiting client feedback" },
                { label: "Assets Delivered", value: "58", desc: "Final files exported" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.desc}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-64 relative">
                <svg
                  viewBox="0 0 400 150"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,150 L0,120 L50,130 L100,90 L150,100 L200,60 L250,80 L300,30 L350,40 L400,10 L400,150 Z"
                    fill="url(#grad)"
                    opacity="0.2"
                  />
                  <path
                    d="M0,120 L50,130 L100,90 L150,100 L200,60 L250,80 L300,30 L350,40 L400,10"
                    fill="none"
                    stroke="#008c73"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#008c73" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-center">
                  <div className="text-xs text-gray-500">Total</div>
                  <div className="font-bold">4,289</div>
                </div>
              </div>
              <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-64">
                <h4 className="text-sm font-semibold mb-4">
                  Production Summary
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "Scripting", value: 42, color: "bg-pink-500", width: "80%" },
                    { label: "Animation", value: 52, color: "bg-orange-500", width: "60%" },
                    { label: "Rendering", value: 40, color: "bg-blue-500", width: "40%" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                          {item.label}
                        </span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`${item.color} h-full`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#00b395] relative z-20">
        <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-12 h-12 bg-[#1a3b34] rounded-xl flex items-center justify-center border-4 border-[#00b395] z-30 shadow-lg">
          <div className="w-6 h-6 bg-white rounded-sm opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto">
          {[
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Creative Insights",
              desc: "Track decisions, and creative direction across every project",
            },
            {
              icon: <PieChart className="w-6 h-6" />,
              title: "Project Analytics",
              desc: "Monitor key production milestones from every project",
            },
            {
              icon: <LineChart className="w-6 h-6" />,
              title: "Engagement Metrics",
              desc: "Measure video performance and impact from every campaign",
            },
            {
              icon: <Trophy className="w-6 h-6" />,
              title: "Team Collaboration",
              desc: "See the most important feedback and revisions instantly",
            },
          ].map((col, i) => (
            <div
              key={i}
              className={`p-10 text-white border-white/10 ${
                i !== 3 ? "border-b md:border-b-0 md:border-r" : ""
              } ${i % 2 === 0 ? "bg-[#00a388]" : "bg-[#00b395]"}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-white/90">{col.icon}</div>
                <h3 className="text-xl font-semibold mb-6">{col.title}</h3>
                <div className="w-full h-px bg-white/20 mb-6"></div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {col.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}