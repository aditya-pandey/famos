import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import ReactGA from 'react-ga4';
import BlogCard from '../components/blog/BlogCard.jsx';
import BlogCategories from '../components/blog/BlogCategories.jsx';
import BlogHero from '../components/blog/BlogHero.jsx';
import BlogSearch from '../components/blog/BlogSearch.jsx';
import Button from '../components/Button.jsx';
import { isSanityConfigured, urlForImage } from '../services/sanity';
import { usePosts } from '../hooks/usePosts';
import { applySeo } from '../utils/seo';
import { matchesSearch, siteUrl } from '../utils/blog';
import { usePageView } from '../hooks/useAnalytics';

const postsPerPage = 9;

export default function BlogList() {
  const { posts, categories, settings, loading, error } = usePosts();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [activeCategory, setActiveCategory] = useState('');
  const [page, setPage] = useState(1);

  const featuredPost = posts.find((post) => post.featured) || posts[0];
  const featuredImageUrl = featuredPost?.featuredImage
    ? urlForImage(featuredPost.featuredImage)?.width(1100).height(700).fit('crop').auto('format').url()
    : '';

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = activeCategory ? post.category?.title === activeCategory : true;
      return categoryMatch && matchesSearch(post, deferredQuery);
    });
  }, [activeCategory, deferredQuery, posts]);

  const visiblePosts = filteredPosts.slice(0, page * postsPerPage);
  const hasMore = visiblePosts.length < filteredPosts.length;

  usePageView('/blog', 'famos Blog');

  useEffect(() => {
    applySeo({
      title: `${settings?.blogTitle || 'famos Blog'} | famos`,
      description: settings?.blogDescription || 'Articles from famos on parenting, teen wellbeing, relationships, schools, counselling, and research.',
      url: `${siteUrl}/blog`,
      type: 'website',
    });
  }, [settings]);

  function handleSearch(value) {
    setQuery(value);
    setPage(1);
    if (value.trim().length > 2) {
      ReactGA.event('blog_search', {
        category: 'Blog',
        label: value.trim(),
      });
    }
  }

  function handleCategory(value) {
    setActiveCategory(value);
    setPage(1);
    if (value) {
      ReactGA.event('blog_category_filter', {
        category: 'Blog',
        label: value,
      });
    }
  }

  return (
    <>
      <BlogHero
        title={settings?.blogTitle}
        description={settings?.blogDescription}
        featuredPost={
          featuredPost
            ? {
                ...featuredPost,
                featuredImageUrl,
                featuredImageAlt: featuredPost.featuredImage?.alt,
              }
            : null
        }
      />

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {!isSanityConfigured ? (
            <div className="rounded-card border border-orange-300/40 bg-orange-100/60 p-5 text-teal-950">
              Add `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` in Vercel to connect the live blog.
            </div>
          ) : null}

          <div className="grid gap-4 rounded-[2rem] border border-teal-700/10 bg-cloud p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <BlogSearch value={query} onChange={handleSearch} />
            <BlogCategories categories={categories} activeCategory={activeCategory} onChange={handleCategory} />
          </div>

          {loading ? <p className="mt-10 text-muted">Loading articles...</p> : null}
          {error ? <p className="mt-10 text-orange-700">{error}</p> : null}

          {!loading && !filteredPosts.length ? (
            <div className="mt-10 rounded-card border border-teal-700/10 bg-white p-8 text-center shadow-soft">
              <h2 className="font-display text-2xl font-bold text-teal-900">No articles found</h2>
              <p className="mt-3 text-muted">Try a different search term or category.</p>
            </div>
          ) : null}

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          {hasMore ? (
            <div className="mt-10 flex justify-center">
              <Button onClick={() => setPage((current) => current + 1)} variant="secondary">
                Load more articles
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
