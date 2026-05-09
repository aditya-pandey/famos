import familyImage from '../../stitch_famos_family_relationship_os/a_happy_indian_family_father_mother_and_two_children_sitting_together_on_a/screen.png';
import parentImage from '../../stitch_famos_family_relationship_os/an_indian_mother_and_father_sitting_at_a_dinner_table_with_their_young_son/screen.png';
import teenImage from '../../stitch_famos_family_relationship_os/an_indian_teenage_girl_smiling_while_looking_at_her_smartphone._she_looks/screen.png';
import counsellorImage from '../../stitch_famos_family_relationship_os/a_professional_indian_female_counselor_in_a_modern_bright_office_holding_a/screen.png';
import schoolImage from '../../stitch_famos_family_relationship_os/an_indian_male_teacher_and_an_indian_female_student_teenager_sitting_at_a_desk/screen.png';
import connectionImage from '../assets/why-us-hero.png';

export const images = {
  family: familyImage,
  parent: parentImage,
  teen: teenImage,
  counsellor: counsellorImage,
  school: schoolImage,
  connection: connectionImage,
};

export const stats = [
  ['1 in 4', 'school-age children show signs of emotional distress or isolation.'],
  ['12 min', 'of deep conversation is often all families manage on busy days.'],
  ['85%', 'of parents want better tools for mental health conversations.'],
  ['3-way', 'support between family, teen, and trusted guidance creates stronger outcomes.'],
];

export const pillars = [
  {
    title: 'Guided conversations',
    text: 'Prompts and rituals that help families talk before small frictions become big silences.',
  },
  {
    title: 'Shared emotional language',
    text: 'A simple vocabulary for feelings, needs, boundaries, and repair across generations.',
  },
  {
    title: 'Trusted support network',
    text: 'Parents, teens, counsellors, and schools get aligned without turning care into surveillance.',
  },
];

export const pageContent = [
  {
    slug: 'why-famos',
    path: '/why-famos',
    eyebrow: 'Why famos',
    title: 'Families do not need more control. They need better connection.',
    description:
      'famos exists because modern parenting has become too complex to run on instinct alone. We turn emotional intelligence into daily structure, shared rituals, and calm guidance.',
    image: connectionImage,
    alt: 'A father and daughter sitting near a bright window and talking warmly.',
    sections: [
      ['Built for the gap', 'The digital world moved faster than family systems. famos helps families rebuild common ground with prompts, check-ins, and care pathways that feel human.'],
      ['Proactive, not clinical', 'Support should not begin only during a crisis. famos helps families notice patterns early and create steady moments of repair.'],
      ['Warm technology', 'The product is designed to reduce shame, lower defensiveness, and help every person feel seen without being watched.'],
    ],
    cta: 'Start with a calmer family rhythm',
  },
  {
    slug: 'for-parents',
    path: '/for-parents',
    eyebrow: 'For Parents',
    title: 'Parenting support that respects your love, time, and emotional load.',
    description:
      'famos helps parents move from reactive firefighting to steady connection with tools for conversations, boundaries, routines, and repair.',
    image: parentImage,
    alt: 'Parents sitting at a dining table with their child in a warm home.',
    sections: [
      ['Clarity without judgment', 'Understand what your child may be signalling and how to respond with calm structure.'],
      ['Small rituals that stick', 'Build repeatable family habits that create safety without adding another heavy task to your day.'],
      ['Better moments after hard moments', 'Repair prompts help parents return to connection after conflict, stress, or missed signals.'],
    ],
    cta: 'Get parent early access',
  },
  {
    slug: 'for-teens',
    path: '/for-teens',
    eyebrow: 'For Teens',
    title: 'A private-feeling way to be understood without having to perform okay.',
    description:
      'famos gives teens language, reflection, and safe ways to share what matters, while keeping dignity and autonomy at the center.',
    image: teenImage,
    alt: 'A teenage girl smiling softly while looking at her smartphone.',
    sections: [
      ['Say it with less pressure', 'Guided prompts make it easier to express needs, moods, boundaries, and worries.'],
      ['No surveillance energy', 'The experience is built around trust and consent, not control or monitoring.'],
      ['Grow emotional confidence', 'Teens learn how to name patterns, ask for help, and build stronger relationships.'],
    ],
    cta: 'Create a safer way to share',
  },
  {
    slug: 'for-counsellors',
    path: '/for-counsellors',
    eyebrow: 'For Counsellors',
    title: 'Extend care beyond sessions with context families can actually use.',
    description:
      'famos helps counsellors support families with structured check-ins, shared language, and practical follow-through between touchpoints.',
    image: counsellorImage,
    alt: 'A counsellor in a bright office holding a notebook.',
    sections: [
      ['More signal between sessions', 'Patterns, reflections, and family context can become visible without increasing administrative burden.'],
      ['Practical continuity', 'Families receive gentle rituals and prompts that reinforce therapeutic work at home.'],
      ['Designed for trust', 'The tone stays warm, non-clinical, and respectful of privacy so families are more likely to engage.'],
    ],
    cta: 'Partner with famos',
  },
  {
    slug: 'about-us',
    path: '/about-us',
    eyebrow: 'About Us',
    title: 'We are building emotional infrastructure for the next generation of families.',
    description:
      'famos is grounded in a simple belief: when care is easier to practice every day, families become more resilient, honest, and connected.',
    image: familyImage,
    alt: 'A smiling family sitting together in a sunlit living room.',
    sections: [
      ['Human first', 'Our product decisions start with dignity, consent, and emotional safety.'],
      ['Modern by design', 'We combine elegant technology with grounded family psychology and school-ready workflows.'],
      ['Built in India, for modern families', 'The experience reflects the warmth, complexity, and ambition of families navigating a rapidly changing world.'],
    ],
    cta: 'Meet the famos mission',
  },
  {
    slug: 'schools',
    path: '/schools',
    eyebrow: 'Schools',
    title: 'A family engagement layer for schools that care about the whole child.',
    description:
      'famos helps schools turn wellbeing intent into parent partnership, early support, and healthier student conversations.',
    image: schoolImage,
    alt: 'A teacher and teenage student talking at a desk in a school setting.',
    sections: [
      ['Parent partnership', 'Give families a structured way to participate in wellbeing without relying only on meetings and circulars.'],
      ['Early support pathways', 'Help counsellors and school leaders spot needs earlier and guide families with care.'],
      ['A premium school experience', 'Modern, accessible, and warm enough to feel aligned with progressive education brands.'],
    ],
    cta: 'Bring famos to your school',
  },
];
