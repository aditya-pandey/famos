import BlogCard from './BlogCard.jsx';

export default function RelatedPosts({ posts = [] }) {
  if (!posts.length) return null;

  return (
    <section className="border-t border-teal-700/10 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700 sm:text-sm">Related reading</p>
          <h2 className="font-display text-2xl font-bold leading-tight text-teal-900 sm:text-3xl">More from this topic</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
