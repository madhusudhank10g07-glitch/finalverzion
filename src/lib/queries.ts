export const postsQuery = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,

    body,

    "authorName": author->name,
    "authorImage": author->image,

    "categories": categories[]->{
      _id,
      title
    }
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,

    body,

    "authorName": author->name,
    "authorImage": author->image,

    "categories": categories[]->{
      _id,
      title
    }
  }
`;