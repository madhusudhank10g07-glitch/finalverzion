import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { client, urlFor } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles, updates, and insights.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Latest articles, updates, and insights.",
    url: "/blog",
    type: "website",
  },
};

async function getPosts() {
  return client.fetch(postsQuery);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Blog
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          Latest Articles
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Read the latest insights, guides, and updates.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts
          .filter((post: any) => post.slug)
          .map((post: any) => (
            <article
              key={post._id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`}>
                {post.mainImage && (
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={urlFor(post.mainImage).width(900).height(560).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-5 text-sm font-medium text-black">
                    Read more →
                  </div>
                </div>
              </Link>
            </article>
          ))}
      </div>
    </main>
  );
}