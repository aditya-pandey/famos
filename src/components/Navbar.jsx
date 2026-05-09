import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button.jsx';
import Logo from './Logo.jsx';

const navItems = [
  { label: 'Why famos', to: '/why-famos' },
  { label: 'For Parents', to: '/for-parents' },
  { label: 'For Teens', to: '/for-teens' },
  { label: 'For Counsellors', to: '/for-counsellors' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Schools', to: '/schools' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition lg:px-3 ${
      isActive ? 'bg-teal-50 text-teal-900' : 'text-muted hover:bg-white hover:text-teal-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-teal-700/10 bg-mist/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8" aria-label="Main navigation">
        <Logo onClick={() => setOpen(false)} />

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to="/#contact" icon={false}>Get early access</Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-teal-700/15 bg-white text-teal-900 lg:hidden"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-teal-700/10 bg-mist px-4 py-4 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button to="/#contact" className="mt-3" icon={false} onClick={() => setOpen(false)}>
              Get early access
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
