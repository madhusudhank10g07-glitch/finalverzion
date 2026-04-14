export interface Blog {
  id: string;
  author: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  imageText1: string;
  imageText2: string;
  authorRole: string;
}

export const blogs: Blog[] = [
  {
    id: "productivity-powered-by-ai",
    author: "Alex Morgan",
    authorRole: "AI Product Strategist",
    title: "Productivity Powered by AI",
    desc: "Turn conversations into insights with AI-powered workflows",
    date: "Sep 29, 2025",
    readTime: "09 min",
    imageText1: "Automate",
    imageText2: "Boost Productivity",
  },
  {
    id: "smarter-notes-with-ai",
    author: "Marcus Rivera",
    authorRole: "UX Research Lead",
    title: "Smarter Notes With AI",
    desc: "Explore how intelligent transcription and summaries improve meeting outcomes.",
    date: "Sep 21, 2026",
    readTime: "12 min",
    imageText1: "Clarity",
    imageText2: "Smarter Notes",
  },
  {
    id: "the-future-of-meetings",
    author: "Sophia Lee",
    authorRole: "Product Manager",
    title: "The Future of Meetings",
    desc: "Understand how AI is reshaping meetings, collaboration, and productivity workflows.",
    date: "Oct 19, 2025",
    readTime: "06 min",
    imageText1: "Reimagine",
    imageText2: "Meetings Reimagined",
  },
];