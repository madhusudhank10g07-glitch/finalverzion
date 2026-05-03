// import { MetadataRoute } from "next";
// import { getAllPosts } from "@/lib/posts";

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://finalverzion.com";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const posts = getAllPosts();

//   const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
//     url: `${SITE_URL}/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt || post.publishedAt),
//     changeFrequency: "monthly",
//     priority: post.featured ? 0.9 : 0.7,
//   }));

//   const staticPages: MetadataRoute.Sitemap = [
//     {
//       url: `${SITE_URL}/blog`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.8,
//     },
//     {
//       url: SITE_URL,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 1.0,
//     },
//   ];

//   return [...staticPages, ...blogEntries];
// }
import { client } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import type { MetadataRoute } from "next";

const BASE_URL = "https://finalverzion.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(postsQuery);

  const blogPosts = posts
    .filter((post: any) => post.slug)
    .map((post: any) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.8 },
    ...blogPosts,
  ];
}