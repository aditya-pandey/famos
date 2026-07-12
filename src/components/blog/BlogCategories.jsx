import { blogCategories } from '../../utils/blog';

export default function BlogCategories({ categories = [], activeCategory, onChange }) {
  const categoryLabels = Array.from(
    new Set([...blogCategories, ...categories.map((category) => category.title).filter(Boolean)]),
  );

  return (
    <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Blog categories">
      {['All', ...categoryLabels].map((category) => {
        const isActive = activeCategory === category || (!activeCategory && category === 'All');
        return (
          <button
            key={category}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
              isActive
                ? 'border-teal-700 bg-teal-700 text-white'
                : 'border-teal-700/15 bg-white text-teal-900 hover:border-teal-700/40 hover:bg-teal-50'
            }`}
            type="button"
            onClick={() => onChange(category === 'All' ? '' : category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
