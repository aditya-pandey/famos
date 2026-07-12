import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button.jsx';
import PortableContent from '../components/blog/PortableContent.jsx';
import ReadingTime from '../components/blog/ReadingTime.jsx';
import RelatedPosts from '../components/blog/RelatedPosts.jsx';
import ShareButtons from '../components/blog/ShareButtons.jsx';
import TableOfContents from '../components/blog/TableOfContents.jsx';
import { usePost } from '../hooks/usePost';
import { usePageView, useScrollDepthTracking, trackBlogEvent } from '../hooks/useAnalytics';
import { urlForImage } from '../services/sanity';
import { applySeo } from '../utils/seo';
import { buildArticleJsonLd, formatDate, getTableOfContents, siteUrl } from '../utils/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const { post, relatedPosts, previous, next, loading, error } = usePost(slug);
  const articleUrl = `${siteUrl}/blog/${slug}`;
  const toc = getTableOfContents(post?.body || []);
  const hasToc = toc.length > 0;
  const heroImage = post?.featuredImage
    ? urlForImage(post.featuredImage)?.width(1400).fit('max').auto('format').url()
    : '';
  const ogImage = post?.openGraphImage
    ? urlForImage(post.openGraphImage)?.width(1200).height(630).fit('crop').auto('format').url()
    : heroImage;

  usePageView(`/blog/${slug}`, post?.title || 'Blog article');
  useScrollDepthTracking(post?.title || slug);

  useEffect(() => {
    if (!post) return;

    applySeo({
      title: `${post.metaTitle || post.title} | famos`,
      description: post.metaDescription || post.excerpt,
      image: ogImage,
      url: post.canonicalUrl || articleUrl,
      type: 'article',
      jsonLd: buildArticleJsonLd(post, ogImage),
    });
  }, [articleUrl, ogImage, post]);

  if (loading) {
    return <div className="mx-auto max-w-7xl px-4 py-20 text-muted sm:px-6 lg:px-8">Loading article...</div>;
  }

  if (error || !post) {
    return (
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-card border border-teal-700/10 bg-white p-8 text-center shadow-soft">
          <h1 className="font-display text-3xl font-bold text-teal-900">Article not found</h1>
          <p className="mt-3 text-muted">{error || 'This article is not published yet or the link is incorrect.'}</p>
          <Button to="/blog" className="mt-6">Back to blog</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <article>
        <header className="px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link to="/blog" className="text-sm font-bold uppercase tracking-[0.16em] text-orange-700">
              famos journal
            </Link>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-teal-900 sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            {post.excerpt ? <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">{post.excerpt}</p> : null}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-muted">
              {post.category?.title ? <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-900">{post.category.title}</span> : null}
              {post.publishedAt ? <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> : null}
              <ReadingTime minutes={post.readingTime} />
            </div>
            <div className="mt-6">
              <ShareButtons title={post.title} url={articleUrl} />
            </div>
          </div>
        </header>

        {heroImage ? (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <img
                className="max-h-[420px] w-full rounded-[1.5rem] border border-teal-700/10 bg-white object-contain p-3 shadow-soft sm:max-h-[480px] sm:p-5"
                src={heroImage}
                alt={post.featuredImage?.alt || post.title}
                width="1400"
                height="700"
                fetchPriority="high"
              />
            </div>
          </div>
        ) : null}

        <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className={`mx-auto grid max-w-7xl gap-8 lg:items-start lg:justify-center ${hasToc ? 'lg:grid-cols-[260px_minmax(0,760px)]' : 'lg:grid-cols-[minmax(0,760px)]'}`}>
            {hasToc ? <TableOfContents items={toc} /> : null}
            <div className="min-w-0 rounded-[1.5rem] bg-white px-5 py-7 shadow-soft sm:px-8 sm:py-9 lg:px-10">
              <PortableContent value={post.body} />
            </div>
          </div>
        </section>
      </article>

      <section className="bg-teal-900 px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-300">Build the rhythm at home</p>
            <h2 className="mt-3 max-w-4xl font-display text-2xl font-bold leading-tight sm:text-3xl">Help your family talk before things become heavy.</h2>
          </div>
          <Button
            href="/#contact"
            variant="warm"
            className="w-full sm:w-fit"
            onClick={() => trackBlogEvent('blog_cta_click', post.title)}
          >
            Get early access
          </Button>
        </div>
      </section>

      <RelatedPosts posts={relatedPosts} />

      <nav className="border-t border-teal-700/10 px-4 py-10 sm:px-6 lg:px-8" aria-label="Article navigation">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2">
          {previous ? (
            <Link className="rounded-card border border-teal-700/10 bg-white p-5 shadow-soft transition hover:-translate-y-1" to={`/blog/${previous.slug}`}>
              <span className="text-sm font-bold text-muted">Previous</span>
              <p className="mt-2 font-display text-xl font-bold text-teal-900">{previous.title}</p>
            </Link>
          ) : <span />}
          {next ? (
            <Link className="rounded-card border border-teal-700/10 bg-white p-5 text-right shadow-soft transition hover:-translate-y-1" to={`/blog/${next.slug}`}>
              <span className="text-sm font-bold text-muted">Next</span>
              <p className="mt-2 font-display text-xl font-bold text-teal-900">{next.title}</p>
            </Link>
          ) : null}
        </div>
      </nav>
    </>
  );
}
