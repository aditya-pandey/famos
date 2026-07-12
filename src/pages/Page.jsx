import {
  Puzzle, CalendarClock, Brain,
  Link, Sparkles, ShieldCheck,
  Gamepad2, Gift, TrendingUp,
  UserCheck, FileText, Sliders,
  HeartCrack, InfinityIcon,
  Smile, Clock, LayoutDashboard,
  HeartHandshake, Compass, Check
} from 'lucide-react';

const iconMap = {
  'why-famos': [Puzzle, CalendarClock, Brain],
  'for-parents': [Link, Sparkles, ShieldCheck],
  'for-teens': [Gamepad2, Gift, TrendingUp],
  'for-counsellors': [UserCheck, FileText, Sliders],
  'about-us': [HeartCrack, Brain, InfinityIcon],
  'schools': [Smile, Clock, LayoutDashboard],
};
import { useEffect, lazy, Suspense } from 'react';
import Button from '../components/Button.jsx';
const ContactForm = lazy(() => import('../components/ContactForm.jsx'));
import Reveal from '../components/Reveal.jsx';
import { Card, Section } from '../components/Section.jsx';

export default function Page({ page }) {
  useEffect(() => {
    document.title = `${page.eyebrow} | famos`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', page.description);
  }, [page]);

  return (
    <>
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <Reveal>
            <p className="mb-4 inline-flex rounded-full border border-teal-700/10 bg-white px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-900 shadow-soft sm:text-sm">
              {page.eyebrow}
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-teal-900 sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{page.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" className="w-full sm:w-auto">{page.cta}</Button>
              <Button to="/" variant="secondary" className="w-full sm:w-auto">Back home</Button>
            </div>
            {page.slug === 'about-us' && (
              <p className="mt-4 text-sm text-muted">
                Or email us directly at{' '}
                <a href="mailto:hello@famosnetwork.com" className="font-semibold text-teal-700 hover:underline">
                  hello@famosnetwork.com
                </a>
              </p>
            )}
          </Reveal>
          <Reveal delay={140}>
            <img 
              className="premium-image aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-soft sm:rounded-[2rem]" 
              src={page.image} 
              alt={page.alt} 
              width="800"
              height="600"
              fetchPriority="high"
            />
          </Reveal>
        </div>
      </section>

      <Section className="bg-white" eyebrow="What changes" title="Designed to make support feel lighter, clearer, and more human.">
        <div className="grid gap-4 lg:grid-cols-3">
          {page.sections.map(([title, text], index) => {
            const Icon = (iconMap[page.slug] && iconMap[page.slug][index]) || Check;
            return (
              <Reveal key={title} delay={index * 80}>
              <Card className="h-full">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-orange-100 text-orange-700">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h2 className="font-display text-xl font-bold text-teal-900">{title}</h2>
                <p className="mt-4 leading-7 text-muted">{text}</p>
              </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-cloud" eyebrow="The famos approach" title="A product philosophy built around trust.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <HeartHandshake className="mb-5 text-teal-700" aria-hidden="true" size={30} />
            <h2 className="font-display text-2xl font-bold text-teal-900">Connection before correction</h2>
            <p className="mt-4 leading-7 text-muted">
              famos keeps the emotional goal visible: less blame, more understanding, and a simpler path back to one another.
            </p>
          </Card>
          <Card>
            <Compass className="mb-5 text-orange-700" aria-hidden="true" size={30} />
            <h2 className="font-display text-2xl font-bold text-teal-900">Guidance without overwhelm</h2>
            <p className="mt-4 leading-7 text-muted">
              The experience is intentionally calm, mobile-friendly, and focused on next best steps instead of endless content.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="contact" className="bg-teal-900 text-white" eyebrow="Start the conversation" title={page.cta} inverted>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div>
            <p className="max-w-xl text-base leading-7 text-teal-50/80 sm:text-lg sm:leading-8">
              Share a little about what you need. We will follow up with the most relevant famos pathway.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-teal-50/80 sm:text-lg sm:leading-8">
              Questions? Reach out to us at <a href="mailto:hello@famosnetwork.com" className="font-semibold text-teal-300 hover:underline">hello@famosnetwork.com</a>
            </p>
          </div>
          <Suspense fallback={<div className="p-5 sm:p-8 text-teal-50">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
