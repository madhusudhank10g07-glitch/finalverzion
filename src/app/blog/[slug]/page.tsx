// import type { Metadata } from "next";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { PortableText } from "@portabletext/react";
// import { client, urlFor } from "@/lib/sanity";
// import { postBySlugQuery, postsQuery } from "@/lib/queries";

// export const revalidate = 60;

// async function getPost(slug: string) {
//   return client.fetch(postBySlugQuery, { slug });
// }

// export async function generateStaticParams() {
//   const posts = await client.fetch(postsQuery);

//   return posts
//     .filter((post: any) => post.slug)
//     .map((post: any) => ({ slug: post.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const post = await getPost(slug);

//   if (!post) {
//     return { title: "Post not found" };
//   }

//   const ogImage = post.mainImage
//     ? urlFor(post.mainImage).width(1200).height(630).url()
//     : undefined;

//   return {
//     title: post.title,
//     description: post.excerpt || "",
//     alternates: {
//       canonical: `/blog/${post.slug}`,
//     },
//     openGraph: {
//       title: post.title,
//       description: post.excerpt || "",
//       url: `/blog/${post.slug}`,
//       type: "article",
//       publishedTime: post.publishedAt,
//       ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.excerpt || "",
//       ...(ogImage && { images: [ogImage] }),
//     },
//   };
// }

// export default async function BlogDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const post = await getPost(slug);

//   if (!post) return notFound();

//   return (
//     <main className="mx-auto max-w-4xl px-4 py-12">
//       <article>
//         {post.mainImage && (
//           <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
//             <Image
//               src={urlFor(post.mainImage).width(1400).height(800).url()}
//               alt={post.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         )}

//         <header className="mb-8">
//           <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
//             Blog
//           </p>
//           <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
//             {post.title}
//           </h1>
//           {post.publishedAt && (
//             <time
//               dateTime={post.publishedAt}
//               className="mt-2 block text-sm text-gray-500"
//             >
//               {new Date(post.publishedAt).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </time>
//           )}
//         </header>

//         <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">
//           <PortableText value={post.body} />
//         </div>
//       </article>
//     </main>
//   );
// }


import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity";
import { postBySlugQuery, postsQuery } from "@/lib/queries";

export const revalidate = 60;

const BASE_URL = "https://finalverzion.com";

async function getPost(slug: string) {
  return client.fetch(postBySlugQuery, { slug });
}

export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery);
  return posts
    .filter((post: any) => post.slug)
    .map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Post not found" };

  const title = post.seoTitle || post.title;
  const description = post.excerpt || "";
  const url = `${BASE_URL}/blog/${post.slug}`;
  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : `${BASE_URL}/og-default.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "en-GB": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.authorName ? [post.authorName] : undefined,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function ArticleJsonLd({ post }: { post: any }) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || "",
    url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: ogImage ? [ogImage] : undefined,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName }
      : { "@type": "Organization", name: "Final Verzion" },
    publisher: {
      "@type": "Organization",
      name: "Final Verzion",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <>
      <ArticleJsonLd post={post} />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <article>
          {post.mainImage && (
            <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.mainImage).width(1400).height(800).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <header className="mb-8">
            {post.categories?.length > 0 && (
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                {post.categories[0].title}
              </p>
            )}
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
              {post.authorName && <span>By {post.authorName}</span>}
              {post.publishedAt && (
                <>
                  {post.authorName && <span>·</span>}
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">
            <PortableText value={post.body} />
          </div>
        </article>
      </main>
    </>
  );
}