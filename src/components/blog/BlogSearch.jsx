import { Search } from 'lucide-react';

export default function BlogSearch({ value, onChange }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search articles</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" aria-hidden="true" size={20} />
      <input
        className="min-h-12 w-full rounded-full border border-teal-700/15 bg-white py-3 pl-12 pr-4 text-base font-medium text-ink outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title, topic, author, or category"
      />
    </label>
  );
}
