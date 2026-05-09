import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const styles = {
  primary:
    'bg-teal-700 text-white shadow-soft hover:-translate-y-0.5 hover:bg-teal-900 focus-visible:outline-teal-700',
  secondary:
    'border border-teal-700/20 bg-white/80 text-teal-900 hover:-translate-y-0.5 hover:border-teal-700/50 hover:bg-teal-50 focus-visible:outline-teal-700',
  warm:
    'bg-orange-300 text-teal-900 hover:-translate-y-0.5 hover:bg-orange-100 focus-visible:outline-orange-500',
};

export default function Button({ children, to, href, variant = 'primary', className = '', icon = true, ...props }) {
  const classes = `motion-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={17} strokeWidth={2.4} /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
