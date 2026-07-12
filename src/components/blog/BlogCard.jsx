import { Link } from 'react-router-dom';
import Button from '../Button.jsx';
import { Card } from '../Section.jsx';
import { getReadingTime, formatDate } from '../../utils/blog';
import { urlForImage } from '../../services/sanity';

export default function BlogCard({ post }) {
  const image = post.featuredImage
    ? urlForImage(post.featuredImage)?.width(900).height(620).fit('crop').auto('format').url()
    : '';

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      {image ? (
        <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
          <img
            className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.03]"
            src={image}
            alt={post.featuredImage?.alt || post.title}
            loading="lazy"
            width="900"
            height="620"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-700">
          {post.category?.title ? <span>{post.category.title}</span> : null}
          <span className="text-teal-700/35">/</span>
          <span>{getReadingTime(post.readingTime)}</span>
        </div>
        <h2 className="font-display text-xl font-bold leading-tight text-teal-900">
          <Link to={`/blog/${post.slug}`} className="transition hover:text-teal-700">
            {post.title}
          </Link>
        </h2>
        {post.excerpt ? <p className="mt-3 line-clamp-3 leading-7 text-muted">{post.excerpt}</p> : null}
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted">
          {post.publishedAt ? <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> : null}
        </div>
        <Button to={`/blog/${post.slug}`} variant="secondary" className="mt-6 w-full sm:w-fit">
          Read more
        </Button>
      </div>
    </Card>
  );
}
