export default function TableOfContents({ items = [] }) {
  if (!items.length) return null;

  return (
    <aside className="rounded-card border border-teal-700/10 bg-white p-5 shadow-soft lg:sticky lg:top-24">
      <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-700">In this article</p>
      <nav className="mt-4 grid gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            className={`text-sm font-semibold leading-6 text-muted transition hover:text-teal-900 ${item.level === 'h3' ? 'pl-3' : ''}`}
            href={`#${item.id}`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
