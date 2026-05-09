import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const links = [
  ['Why famos', '/why-famos'],
  ['Parents', '/for-parents'],
  ['Teens', '/for-teens'],
  ['Counsellors', '/for-counsellors'],
  ['Schools', '/schools'],
  ['About', '/about-us'],
];

export default function Footer() {
  return (
    <footer className="border-t border-teal-700/10 bg-teal-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-12">
        <div>
          <Logo markClassName="h-11 w-36 border border-white/10 shadow-none" />
          <p className="mt-4 max-w-xl text-sm leading-7 text-teal-50/80">
            A relationship operating system for modern families, designed to make emotional intelligence practical, daily, and shared.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:justify-items-end lg:self-center">
          {links.map(([label, to]) => (
            <Link key={to} to={to} className="text-sm font-semibold text-teal-50/80 transition hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-4 py-6 text-xs text-teal-50/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} famos. All rights reserved.</span>
        <span>Built for trust, care, and better conversations.</span>
      </div>
    </footer>
  );
}
