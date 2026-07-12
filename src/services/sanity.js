import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2026-07-11',
  useCdn: true,
};

export const isSanityConfigured = Boolean(sanityConfig.projectId && sanityConfig.dataset);

export const sanityClient = isSanityConfigured ? createClient(sanityConfig) : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source) {
  return source && builder ? builder.image(source) : null;
}

export const postCardFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featured,
  publishedAt,
  "readingTime": coalesce(readingTime, round(length(pt::text(body)) / 5 / 180)),
  "bodyText": pt::text(body),
  "category": category->{title, "slug": slug.current, color},
  "author": author->{name, photo, bio, linkedin},
  featuredImage {
    ...,
    alt,
    caption
  }
`;

export const postFields = `
  ${postCardFields},
  body,
  metaTitle,
  metaDescription,
  canonicalUrl,
  openGraphImage {
    ...,
    alt
  }
`;

export async function fetchBlogSettings() {
  if (!isSanityConfigured) return null;

  return sanityClient.fetch(`*[_type == "settings"][0]{
    blogTitle,
    blogDescription,
    ctaText,
    ctaLink,
    socialLinks
  }`);
}

export async function fetchCategories() {
  if (!isSanityConfigured) return [];

  return sanityClient.fetch(`*[_type == "category"] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    color
  }`);
}

export async function fetchPosts() {
  if (!isSanityConfigured) return [];

  return sanityClient.fetch(`*[
    _type == "post"
    && defined(slug.current)
    && defined(publishedAt)
    && publishedAt <= now()
  ] | order(publishedAt desc) {
    ${postCardFields}
  }`);
}

export async function fetchPostBySlug(slug) {
  if (!isSanityConfigured || !slug) return null;

  return sanityClient.fetch(`*[
    _type == "post"
    && slug.current == $slug
    && defined(publishedAt)
    && publishedAt <= now()
  ][0] {
    ${postFields}
  }`, { slug });
}

export async function fetchRelatedPosts(categorySlug, currentSlug) {
  if (!isSanityConfigured || !categorySlug) return [];

  return sanityClient.fetch(`*[
    _type == "post"
    && defined(slug.current)
    && slug.current != $currentSlug
    && category->slug.current == $categorySlug
    && defined(publishedAt)
    && publishedAt <= now()
  ] | order(publishedAt desc)[0...3] {
    ${postCardFields}
  }`, { categorySlug, currentSlug });
}

export async function fetchAdjacentPosts(publishedAt, slug) {
  if (!isSanityConfigured || !publishedAt) return { previous: null, next: null };

  return sanityClient.fetch(`{
    "previous": *[
      _type == "post"
      && defined(slug.current)
      && slug.current != $slug
      && publishedAt < $publishedAt
      && publishedAt <= now()
    ] | order(publishedAt desc)[0] {
      title,
      "slug": slug.current
    },
    "next": *[
      _type == "post"
      && defined(slug.current)
      && slug.current != $slug
      && publishedAt > $publishedAt
      && publishedAt <= now()
    ] | order(publishedAt asc)[0] {
      title,
      "slug": slug.current
    }
  }`, { publishedAt, slug });
}
