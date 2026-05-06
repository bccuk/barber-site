export const site = {
  name: 'Fade & Trim Barbers',
  shortName: 'Fade & Trim',
  tagline: 'Sharp Cuts. Classic Service.',
  location: 'Dartford',
  established: 2014,
  description:
    "Dartford's traditional barbershop — modern fades, classic cuts, and hot-towel shaves. Walk-ins welcome.",
  seo: {
    title: 'Fade & Trim Barbers — Dartford | Modern Fades & Classic Cuts',
    description:
      "Traditional barbering in the heart of Dartford. Skin fades, scissor cuts, beard trims, and hot-towel shaves. Walk-ins welcome — open 6 days.",
  },
  contact: {
    phone: '01322 000 000',
    phoneHref: 'tel:+441322000000',
    email: 'hello@fadeandtrimbarbers.co.uk',
    address: {
      line1: '12 High Street',
      city: 'Dartford',
      postcode: 'DA1 1AA',
      country: 'United Kingdom',
    },
    instagram: '@fadeandtrim_dartford',
    instagramUrl: 'https://instagram.com/fadeandtrim_dartford',
    facebookUrl: 'https://facebook.com/fadeandtrimdartford',
    googleMapsEmbed:
      'https://www.google.com/maps?q=Dartford+High+Street&output=embed',
    googleMapsLink: 'https://maps.google.com/?q=Dartford+High+Street',
  },
  hours: [
    { day: 'Monday', hours: '09:00 – 18:30' },
    { day: 'Tuesday', hours: '09:00 – 18:30' },
    { day: 'Wednesday', hours: '09:00 – 18:30' },
    { day: 'Thursday', hours: '09:00 – 19:30' },
    { day: 'Friday', hours: '09:00 – 19:30' },
    { day: 'Saturday', hours: '08:00 – 17:00' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  services: [
    {
      name: 'Signature Cut',
      price: 18,
      description: 'Consultation, wash, scissor & clipper cut, finished with style.',
      duration: '30 min',
    },
    {
      name: 'Skin Fade',
      price: 20,
      description: 'Bald, low, mid or high fade — finished razor-sharp.',
      duration: '40 min',
    },
    {
      name: 'Beard Trim & Shape',
      price: 10,
      description: 'Razor lines, neat shape, beard oil finish.',
      duration: '15 min',
    },
    {
      name: 'Cut & Beard Combo',
      price: 25,
      description: 'Full service. Best value — most popular.',
      duration: '45 min',
      featured: true,
    },
    {
      name: 'Hot Towel Shave',
      price: 25,
      description: 'Cut-throat shave with hot towels and balm.',
      duration: '40 min',
    },
    {
      name: 'Senior Cut (65+)',
      price: 14,
      description: 'Mon to Wed only.',
      duration: '30 min',
    },
    {
      name: 'Children (under 12)',
      price: 12,
      description: 'Patient with first-cut nerves.',
      duration: '20 min',
    },
    {
      name: 'Father & Son',
      price: 27,
      description: 'Cut for one parent and one child.',
      duration: '50 min',
    },
  ],
  about: {
    eyebrow: 'About the shop',
    heading: 'A proper barbershop. No frills, no fuss.',
    body: [
      'Fade & Trim has been cutting hair on Dartford High Street since 2014. We do one thing — we cut hair properly, and we take our time over it.',
      'Whether you want a sharp skin fade, a classic side-part, a beard tidy or a full hot-towel shave, you will sit in the chair, get a real consultation, and leave looking your best. No subscriptions, no upsells — just a good cut at a fair price.',
    ],
    bullets: [
      'Walk-ins welcome — bookings recommended for Saturdays',
      'Cash or card, contactless on every chair',
      'Tea, coffee and a chat — on the house',
    ],
  },
  gallery: [
    { label: 'Skin Fade', tone: 'from-neutral-800 to-neutral-950' },
    { label: 'Scissor Cut', tone: 'from-stone-800 to-stone-950' },
    { label: 'Beard Shape', tone: 'from-zinc-800 to-zinc-950' },
    { label: 'Hot Towel Shave', tone: 'from-neutral-700 to-neutral-900' },
    { label: 'Classic Side Part', tone: 'from-stone-700 to-stone-900' },
    { label: 'The Shop', tone: 'from-zinc-700 to-zinc-900' },
  ],
  bookingNote: 'Call the shop or message us on Instagram to book.',
} as const;

export type Service = (typeof site.services)[number];
