export const site = {
  name: 'Fade & Trim Barbers',
  shortName: 'Fade & Trim',
  tagline: 'Sharp Cuts. Classic Service.',
  location: 'Stone, Dartford',
  // Year shop opened — verify with owner; placeholder until confirmed.
  established: 2018,
  description:
    "Stone, Dartford's neighbourhood barbershop — modern fades, classic cuts, beard work and hot-towel shaves. Walk-ins welcome, open seven days.",
  seo: {
    title: 'Fade & Trim Barbers — Stone, Dartford | Modern Fades & Classic Cuts',
    description:
      "Traditional barbering on London Road, Stone. Skin fades, scissor cuts, beard trims, and hot-towel shaves. 4.7 stars from 47 reviews. Walk-ins welcome — open 7 days.",
  },
  rating: {
    score: 4.7,
    count: 47,
    source: 'Google',
  },
  contact: {
    phone: '07990 232186',
    phoneHref: 'tel:+447990232186',
    email: 'hello@fadeandtrimbarbers.co.uk',
    address: {
      line1: '60 London Road',
      city: 'Stone, Dartford',
      postcode: 'DA2 6AN',
      country: 'United Kingdom',
    },
    instagram: '@fadeandtrimbarber',
    instagramUrl: 'https://www.instagram.com/fadeandtrimbarber',
    facebookUrl:
      'https://www.facebook.com/people/FadeTrim-Barbers/100085845297297/',
    googleMapsEmbed:
      'https://www.google.com/maps?q=60+London+Road+Stone+Dartford+DA2+6AN&output=embed',
    googleMapsLink:
      'https://maps.google.com/?q=Fade+%26+Trim+Barbers+60+London+Road+Stone+Dartford+DA2+6AN',
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
    heading: "A proper barbershop on London Road.",
    body: [
      "Fade & Trim is Stone's neighbourhood barbershop — a small team led by Kardo, doing one thing properly: cutting hair the way you want it cut.",
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
        'From the moment I walked in, the team was welcoming, professional, and attentive to detail.',
      author: 'Google review',
    },
    {
      quote:
        "The quality of the haircut exceeded my expectations — it's clear the staff take great pride in their work.",
      author: 'Google review',
    },
    {
      quote:
        'Not only is the service excellent, but the pricing is also very reasonable for the level of care and expertise.',
      author: 'Google review',
    },
    {
      quote: 'Kardo was an excellent barber. Highly recommend this place.',
      author: 'Google review',
    },
    {
      quote: 'Best friendly place and professional barbers.',
      author: 'Google review',
    },
  ],
  hero: {
    images: [
      { src: 'images/0.webp', alt: 'Lead barber Kardo cutting a long-time customer at Fade & Trim Barbers' },
      { src: 'images/1.webp', alt: 'Patient cut for a young customer at Fade & Trim Barbers' },
      { src: 'images/2.webp', alt: 'Barbering tools laid out on the counter' },
    ],
  },
  gallery: [
    { src: 'images/3.webp', label: 'The Shop', alt: 'Inside Fade & Trim — chairs, mirrors and pendant lighting' },
    { src: 'images/4.webp', label: 'Skin Fade', alt: 'Skin fade in progress at Fade & Trim Barbers' },
    { src: 'images/5.webp', label: 'Sharp Finish', alt: 'Fresh skin fade with the classic barber pole reflected behind' },
    { src: 'images/6.webp', label: 'Fresh Cut', alt: 'Customer with a fresh cut at Fade & Trim Barbers' },
    { src: 'images/7.webp', label: 'Clean Lines', alt: 'Back view of a fresh skin fade with neat finish' },
  ],
  bookingNote: 'Call the shop or message us on Instagram to book.',
} as const;

export type Service = (typeof site.services)[number];
