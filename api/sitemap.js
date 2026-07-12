import { createClient } from '@sanity/client';

const siteUrl = process.env.VITE_SITE_URL || 'https://www.famosnetwork.com';
const staticRoutes = [
  '/',
  '/why-famos',
  '/for-parents',
  '/for-teens',
  '/for-counsellors',
  '/about-us',
  '/schools',
  '/blog',
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(url, lastmod, priority = '0.8') {
  return `
  <url>
    <loc>${escapeXml(url)}</loc>
    ${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ''}
    <priority>${priority}</priority>
  </url>`;
}

async function getPosts() {
  const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';

  if (!projectId) return [];

  const client = createClient({
    projectId,
    dataset,
    apiVersion: process.env.VITE_SANITY_API_VERSION || '2026-07-11',
    useCdn: true,
  });

  return client.fetch(`*[
    _type == "post"
    && defined(slug.current)
    && defined(publishedAt)
    && publishedAt <= now()
  ]{
    "slug": slug.current,
    "lastmod": coalesce(_updatedAt, publishedAt)
  }`);
}

export default async function handler(request, response) {
  try {
    const posts = await getPosts();
    const staticUrls = staticRoutes.map((route) => urlEntry(`${siteUrl}${route}`, null, route === '/' ? '1.0' : '0.8'));
    const postUrls = posts.map((post) => urlEntry(`${siteUrl}/blog/${post.slug}`, post.lastmod, '0.7'));

    response.setHeader('Content-Type', 'application/xml; charset=utf-8');
    response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=86400');
    response.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...postUrls].join('\n')}
</urlset>`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    response.status(500).send('Failed to generate sitemap');
  }
}
