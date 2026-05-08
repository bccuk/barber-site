// Sample barbershop data — generic content used as a marketing demo for
// Bytecode Studio prospects. Every value here is fictional. The Fade & Trim
// build is preserved on the `fade-and-trim` branch in case that customer
// returns.

export const site = {
  name: 'The Cut Co.',
  shortName: 'The Cut Co.',
  tagline: 'Sharp Cuts. Classic Service.',
  location: 'London',
  established: 2019,
  description:
    "A traditional barbershop in the heart of the city — modern fades, classic cuts, beard work and hot-towel shaves. Walk-ins welcome, open seven days.",
  seo: {
    title: 'The Cut Co. — London | Modern Fades & Classic Cuts',
    description:
      "Traditional barbering on London's High Street. Skin fades, scissor cuts, beard trims, and hot-towel shaves. Walk-ins welcome — open 7 days.",
  },
  rating: {
    score: 4.8,
    count: 53,
    source: 'Google',
  },
  contact: {
    phone: '020 0000 0000',
    phoneHref: 'tel:+442000000000',
    email: 'hello@thecutco.co.uk',
    address: {
      line1: '12 High Street',
      city: 'London',
      postcode: 'EC1A 1BB',
      country: 'United Kingdom',
    },
    instagram: '@thecutco_london',
    instagramUrl: 'https://instagram.com/thecutco_london',
    facebookUrl: 'https://facebook.com/thecutco',
    googleMapsEmbed:
      'https://www.google.com/maps?q=High+Street+London+EC1A&output=embed',
    googleMapsLink: 'https://maps.google.com/?q=The+Cut+Co+London',
  },
  hours: [
    { day: 'Monday', hours: '09:00 – 19:00' },
    { day: 'Tuesday', hours: '09:00 – 19:00' },
    { day: 'Wednesday', hours: '09:00 – 19:00' },
    { day: 'Thursday', hours: '09:00 – 19:00' },
    { day: 'Friday', hours: '09:00 – 19:00' },
    { day: 'Saturday', hours: '08:00 – 18:00' },
    { day: 'Sunday', hours: '10:00 – 16:00' },
  ],
  services: [
    {
      name: 'Signature Cut',
      price: 18,
      description: 'Consultation, scissor & clipper cut, finished sharp.',
      duration: '30 min',
    },
    {
      name: 'Cut & Wash',
      price: 22,
      description: 'Signature cut with hair wash and styling.',
      duration: '40 min',
    },
    {
      name: 'Skin Fade',
      price: 20,
      description: 'Bald, low, mid or high fade — finished razor-sharp.',
      duration: '40 min',
    },
    {
      name: 'Beard Trim & Shape',
      price: 12,
      description: 'Razor lines, neat shape, beard oil finish.',
      duration: '15 min',
    },
    {
      name: 'Cut & Beard Combo',
      price: 28,
      description: 'Full service. Best value — most popular.',
      duration: '45 min',
      featured: true,
    },
    {
      name: 'Hot Towel Shave',
      price: 18,
      description: 'Cut-throat shave, hot towels, soothing balm.',
      duration: '40 min',
    },
    {
      name: 'Senior Cut (65+)',
      price: 14,
      description: 'Mon to Thu only.',
      duration: '30 min',
    },
    {
      name: 'Children (under 12)',
      price: 12,
      description: 'Patient with first-cut nerves.',
      duration: '20 min',
    },
  ],
  about: {
    eyebrow: 'About the shop',
    heading: "A proper barbershop. No frills, no fuss.",
    body: [
      "The Cut Co. has been cutting hair on the High Street since 2019 — a small team doing one thing properly: cutting hair the way you want it cut.",
      "Whether it's a sharp skin fade, a classic side-part, a beard tidy or a full hot-towel shave, you'll get a real consultation, a fresh towel, and a finish you can be proud of. No rush, no upsells — just a good cut at a fair price, seven days a week.",
    ],
    bullets: [
      'Walk-ins welcome — call ahead on Saturdays',
      'Open 7 days, including Sundays 10 – 4',
      'Cash or card on every chair',
    ],
  },
  testimonials: [
    {
      quote:
        'From the moment I walked in, the team was welcoming, professional, and attentive to detail. Best fade I have had in years.',
      author: 'Tom B.',
    },
    {
      quote:
        "The quality of the haircut exceeded my expectations — you can tell the staff take real pride in their work.",
      author: 'James L.',
    },
    {
      quote:
        'Reasonable prices for the level of care and expertise. The chair feels like a proper old-school barbershop, run by people who know what they are doing.',
      author: 'Daniel R.',
    },
    {
      quote: 'Sharp finish every visit. No rush, no nonsense — just a great cut.',
      author: 'Marcus W.',
    },
    {
      quote: 'Friendly, professional, and the cut is always spot on. Highly recommend.',
      author: 'Sam P.',
    },
  ],
  hero: {
    images: [
      { src: 'images/0.webp', alt: 'A customer getting a careful scissor cut at The Cut Co.' },
      { src: 'images/1.webp', alt: 'A customer in the chair at The Cut Co.' },
      { src: 'images/2.webp', alt: 'Beard work in progress — black and white' },
    ],
  },
  gallery: [
    { src: 'images/3.webp', label: 'The Shop', alt: 'Inside The Cut Co. — chairs, mirrors and pendant lighting' },
    { src: 'images/4.webp', label: 'Skin Fade', alt: 'Skin fade in progress at The Cut Co.' },
    { src: 'images/5.webp', label: 'Sharp Finish', alt: 'A barber finishing a sharp cut at The Cut Co.' },
    { src: 'images/6.webp', label: 'Fresh Cut', alt: 'Customer with a fresh cut at The Cut Co.' },
    { src: 'images/7.webp', label: 'Clean Lines', alt: 'Clipper work for clean line-ups' },
  ],
  bookingNote: 'Call the shop or message us on Instagram to book.',
} as const;

export type Service = (typeof site.services)[number];
