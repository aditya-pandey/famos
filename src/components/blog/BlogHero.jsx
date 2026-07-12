import Button from '../Button.jsx';

export default function BlogHero({ title, description, featuredPost }) {
  return (
    <section className="px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-teal-700/10 bg-white px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-900 shadow-soft sm:text-sm">
            famos journal
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-teal-900 sm:text-5xl lg:text-6xl">
            {title || 'Ideas for calmer, closer families.'}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {description || 'Research-backed notes on parenting, teen wellbeing, school partnerships, counselling, and everyday emotional connection.'}
          </p>
        </div>

        {featuredPost ? (
          <div className="mt-10 rounded-[2rem] border border-teal-700/10 bg-white p-5 shadow-soft sm:p-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:p-8">
            {featuredPost.featuredImageUrl ? (
              <img
                className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
                src={featuredPost.featuredImageUrl}
                alt={featuredPost.featuredImageAlt || featuredPost.title}
                width="960"
                height="600"
                fetchPriority="high"
              />
            ) : null}
            <div className="mt-6 flex flex-col justify-center lg:mt-0">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-700">Featured article</p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-teal-900 sm:text-3xl">
                {featuredPost.title}
              </h2>
              {featuredPost.excerpt ? <p className="mt-4 leading-7 text-muted">{featuredPost.excerpt}</p> : null}
              <Button to={`/blog/${featuredPost.slug}`} className="mt-6 w-full sm:w-fit">
                Read featured article
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
