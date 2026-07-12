// import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
// import Button from '../components/Button.jsx';
// import ContactForm from '../components/ContactForm.jsx';
// import Reveal from '../components/Reveal.jsx';
// import { Card, Section } from '../components/Section.jsx';
// import { images, pillars, stats } from '../data/site.js';

// const audiences = [
//   ['Parents', 'Move from pressure and guesswork to calm, structured connection.', '/for-parents'],
//   ['Teens', 'Share what is hard to say with dignity, privacy, and emotional language.', '/for-teens'],
//   ['Counsellors', 'Extend trusted guidance into the family moments where change happens.', '/for-counsellors'],
//   ['Schools', 'Build a modern wellbeing bridge between students, parents, and educators.', '/schools'],
// ];

// const icons = [HeartHandshake, Sparkles, ShieldCheck];

// export default function Home() {
//   return (
//     <>
//       <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:py-20">
//         <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
//           <Reveal>
//             <p className="mb-4 inline-flex rounded-full border border-teal-700/10 bg-white px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-900 shadow-soft sm:text-sm">
//               Relationship OS for modern families
//             </p>
//             <h1 className="max-w-4xl font-display text-[2.65rem] font-extrabold leading-[1.02] text-teal-900 sm:text-6xl lg:text-7xl">
//               A calmer way for families to talk, repair, and grow.
//             </h1>
//             <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
//               famos helps parents and teens replace guesswork with guided conversations, shared emotional language, and everyday moments of trust.
//             </p>
//             <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//               <Button href="#contact" className="w-full sm:w-auto">Get early access</Button>
//               <Button to="/why-famos" variant="secondary" className="w-full sm:w-auto">Why famos exists</Button>
//             </div>
//             <div className="stagger-list mt-8 grid gap-3 text-sm font-semibold text-teal-900 sm:grid-cols-3">
//               {['Private by design', 'Built for repair', 'School-ready support'].map((item, index) => (
//                 <div key={item} className="rounded-2xl border border-teal-700/10 bg-white/75 px-4 py-3" style={{ '--stagger-delay': `${index * 80 + 260}ms` }}>
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </Reveal>

//           <Reveal className="relative animate-float" delay={160}>
//             <div className="absolute inset-4 -z-10 rounded-[2rem] bg-teal-300/30 blur-3xl" />
//             <img
//               className="premium-image aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-soft sm:rounded-[2rem]"
//               src={images.family}
//               alt="A smiling family sitting together in a sunlit living room."
//             />
//             <div className="motion-card absolute bottom-3 left-3 right-3 rounded-card border border-white/60 bg-white/90 p-4 shadow-soft backdrop-blur sm:bottom-4 sm:left-auto sm:right-4 sm:w-72">
//               <p className="text-sm font-extrabold text-teal-900">Today’s rhythm</p>
//               <p className="mt-1 text-sm leading-6 text-muted">One check-in, one repair prompt, one shared moment that feels possible.</p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       <Section
//         eyebrow="The shift"
//         title="Families are connected by devices, but not always by understanding."
//         body="famos turns emotional care into a repeatable family practice with better prompts, better timing, and a warmer way to ask for help."
//         centered
//         className="bg-white"
//       >
//         <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           {stats.map(([value, label], index) => (
//             <Reveal key={value} delay={index * 70}>
//               <Card className="h-full shadow-none">
//               <p className="font-display text-2xl font-extrabold text-teal-700 sm:text-3xl">{value}</p>
//               <p className="mt-3 text-sm leading-6 text-muted">{label}</p>
//               </Card>
//             </Reveal>
//           ))}
//         </div>
//       </Section>

//       <Section eyebrow="How it helps" title="A calmer system for the everyday work of care.">
//         <div className="grid gap-4 lg:grid-cols-3">
//           {pillars.map((pillar, index) => {
//             const Icon = icons[index];
//             return (
//               <Reveal key={pillar.title} delay={index * 90}>
//               <Card className="h-full">
//                 <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-700">
//                   <Icon aria-hidden="true" size={24} />
//                 </div>
//                 <h3 className="font-display text-xl font-bold text-teal-900">{pillar.title}</h3>
//                 <p className="mt-4 leading-7 text-muted">{pillar.text}</p>
//               </Card>
//               </Reveal>
//             );
//           })}
//         </div>
//       </Section>

//       <Section className="bg-cloud" eyebrow="Built for every relationship" title="One connected layer for the people around a child.">
//         <div className="grid gap-4 md:grid-cols-2">
//           {audiences.map(([title, text, to], index) => (
//             <Reveal key={title} delay={index * 80}>
//             <Card className="group h-full">
//               <h3 className="font-display text-xl font-bold text-teal-900 sm:text-2xl">{title}</h3>
//               <p className="mt-3 leading-7 text-muted">{text}</p>
//               <Button to={to} variant="secondary" className="mt-5 w-full sm:w-auto">Explore</Button>
//             </Card>
//             </Reveal>
//           ))}
//         </div>
//       </Section>

//       <Section className="bg-white" eyebrow="Premium by design" title="Warm enough for families. Structured enough for institutions.">
//         <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
//           <Reveal>
//           <img
//             className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-soft sm:rounded-[2rem]"
//             src={images.connection}
//             alt="A parent and child sharing a quiet conversation by a window."
//           />
//           </Reveal>
//           <div className="space-y-3 sm:space-y-4">
//             {['Consent-led sharing', 'Accessible language', 'Mobile-first rituals', 'Counsellor-ready context'].map((item, index) => (
//               <Reveal key={item} delay={index * 70}>
//               <div className="motion-card rounded-card border border-teal-700/10 bg-mist p-4 sm:p-5">
//                 <p className="font-display text-lg font-bold text-teal-900">{item}</p>
//               </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </Section>

//       <Section id="contact" className="bg-teal-900 text-white" eyebrow="Get early access" title="Build a healthier family rhythm with famos." inverted>
//         <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
//           <div>
//             <p className="max-w-xl text-base leading-7 text-teal-50/80 sm:text-lg sm:leading-8">
//               Tell us who you are and what you are building toward. We will help you find the right famos pathway for your family, counselling practice, or school.
//             </p>
//           </div>
//           <ContactForm />
//         </div>
//       </Section>
//     </>
//   );
// }


import { useContext, lazy, Suspense, useEffect } from 'react';
import { ContentContext } from '../context/contentContext';
import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../components/Button.jsx';
const ContactForm = lazy(() => import('../components/ContactForm.jsx'));
import Reveal from '../components/Reveal.jsx';
import { Card, Section } from '../components/Section.jsx';
import { images } from '../data/site.js';

const audiences = [
  ['Parents', 'Move from pressure and guesswork to calm, structured connection.', '/for-parents'],
  ['Teens', 'Share what is hard to say with dignity, privacy, and emotional language.', '/for-teens'],
  ['Counsellors', 'Extend trusted guidance into the family moments where change happens.', '/for-counsellors'],
  ['Schools', 'Build a modern wellbeing bridge between students, parents, and educators.', '/schools'],
];

const icons = [HeartHandshake, Sparkles, ShieldCheck];

export default function Home() {
  // This pulls your live text data from the Google Sheet
  const { stats, pillars } = useContext(ContentContext);

  useEffect(() => {
    document.title = "famos | Relationship OS for modern families";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', "Emotionally intelligent tools that help families replace digital distance with trust, rhythm, and everyday connection.");
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
          <Reveal>
            <p className="mb-4 inline-flex rounded-full border border-teal-700/10 bg-white px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-900 shadow-soft sm:text-sm">
              Relationship OS for modern families
            </p>
            <h1 className="max-w-4xl font-display text-[2.65rem] font-extrabold leading-[1.02] text-teal-900 sm:text-5xl lg:text-6xl">
              Closing the gap between parents and their children through guidance, habit, and play.
            </h1> 
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              famos gives families the tools, guidance and daily rituals to stay connected in a world that keeps pulling them apart.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" className="w-full sm:w-auto">Get early access</Button>
              <Button to="/why-famos" variant="secondary" className="w-full sm:w-auto">Why famos exists</Button>
            </div>
            <div className="stagger-list mt-8 grid gap-3 text-sm font-semibold text-teal-900 sm:grid-cols-3">
              {['AI-guided bonding', 'Expert connect', 'Gamified chores'].map((item, index) => (
                <div key={item} className="rounded-2xl border border-teal-700/10 bg-white/75 px-4 py-3" style={{ '--stagger-delay': `${index * 80 + 260}ms` }}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative animate-float" delay={160}>
            <div className="absolute inset-4 -z-10 rounded-[2rem] bg-teal-300/30 blur-3xl" />
            <img
              className="premium-image aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-soft sm:rounded-[2rem]"
              src={images.family}
              alt="A smiling family sitting together in a sunlit living room."
              width="800"
              height="600"
              fetchPriority="high"
            />
            <div className="motion-card absolute bottom-3 left-3 right-3 rounded-card border border-white/60 bg-white/90 p-4 shadow-soft backdrop-blur sm:bottom-4 sm:left-auto sm:right-4 sm:w-72">
              <p className="text-sm font-extrabold text-teal-900">Today’s rhythm</p>
              <p className="mt-1 text-sm leading-6 text-muted">One check-in, one repair prompt, one shared moment that feels possible.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="The shift"
        title="Families are connected by devices, but not always by understanding."
        body="famos turns emotional care into a repeatable family practice with better prompts, better timing, and a warmer way to ask for help."
        centered
        className="bg-white"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <Reveal key={value} delay={index * 70}>
              <Card className="h-full shadow-none">
              <p className="font-display text-2xl font-extrabold text-teal-700 sm:text-3xl">{value}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it helps" title="A calmer system for the everyday work of care.">
        <div className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={pillar.title} delay={index * 90}>
              <Card className="h-full">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-teal-900">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-muted">{pillar.text}</p>
              </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-cloud" eyebrow="Built for every relationship" title="One connected layer for the people around a child.">
        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map(([title, text, to], index) => (
            <Reveal key={title} delay={index * 80}>
            <Card className="group h-full">
              <h3 className="font-display text-xl font-bold text-teal-900 sm:text-2xl">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
              <Button to={to} variant="secondary" className="mt-5 w-full sm:w-auto">Explore</Button>
            </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Premium by design" title="Warm enough for families. Structured enough for institutions.">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
          <img
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-soft sm:rounded-[2rem]"
            src={images.connection}
            alt="A parent and child sharing a quiet conversation by a window."
            width="800"
            height="600"
            loading="lazy"
          />
          </Reveal>
          <div className="space-y-3 sm:space-y-4">
            {['Consent-led sharing', 'Accessible language', 'Mobile-first rituals', 'Counsellor-ready context'].map((item, index) => (
              <Reveal key={item} delay={index * 70}>
              <div className="motion-card rounded-card border border-teal-700/10 bg-mist p-4 sm:p-5">
                <p className="font-display text-lg font-bold text-teal-900">{item}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" className="bg-teal-900 text-white" eyebrow="Get early access" title="Build a healthier family rhythm with famos." inverted>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div>
            <p className="max-w-xl text-base leading-7 text-teal-50/80 sm:text-lg sm:leading-8">
              Tell us who you are and what you are building toward. We will help you find the right famos pathway for your family, counselling practice, or school.
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
