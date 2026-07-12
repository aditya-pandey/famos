export const blogCategories = [
  'Parenting',
  'Teen Mental Health',
  'Relationships',
  'Schools',
  'Counselling',
  'Research',
  'Product Updates',
];

export const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.famosnetwork.com';

export function formatDate(date) {
  if (!date) return '';

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export function getReadingTime(minutes) {
  const value = Math.max(1, Math.round(Number(minutes) || 1));
  return `${value} min read`;
}

export function slugify(value = '') {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getPlainText(blocks = []) {
  return blocks
    .filter((block) => block?._type === 'block')
    .map((block) => block.children?.map((child) => child.text).join('') || '')
    .join(' ');
}

export function getTableOfContents(blocks = []) {
  return blocks
    .filter((block) => block?._type === 'block' && ['h2', 'h3'].includes(block.style))
    .map((block) => {
      const text = block.children?.map((child) => child.text).join('') || '';
      return {
        id: slugify(text),
        text,
        level: block.style,
      };
    })
    .filter((item) => item.text);
}

export function matchesSearch(post, query) {
  if (!query) return true;
  const search = query.toLowerCase();
  const haystack = [
    post.title,
    post.excerpt,
    post.bodyText,
    post.category?.title,
    post.author?.name,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(search);
}

export function buildArticleJsonLd(post, imageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: post.author?.name
      ? {
          '@type': 'Person',
          name: post.author.name,
          url: post.author.linkedin,
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'famos',
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };
}
