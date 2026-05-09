import Reveal from './Reveal.jsx';

export function Section({ eyebrow, title, body, children, className = '', centered = false, id, inverted = false }) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || body) && (
          <Reveal className={`mb-8 max-w-3xl sm:mb-10 ${centered ? 'mx-auto text-center' : ''}`}>
            {eyebrow ? <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm ${inverted ? 'text-orange-300' : 'text-orange-700'}`}>{eyebrow}</p> : null}
            {title ? <h2 className={`font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${inverted ? 'text-white' : 'text-teal-900'}`}>{title}</h2> : null}
            {body ? <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${inverted ? 'text-teal-50/80' : 'text-muted'}`}>{body}</p> : null}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = '' }) {
  return (
    <div className={`motion-card rounded-card border border-teal-700/10 bg-white p-5 shadow-soft transition duration-300 sm:p-6 lg:p-7 ${className}`}>
      {children}
    </div>
  );
}
