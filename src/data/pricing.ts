// Sales / pricing page content for the small-business website service.
// Lives separately from site.ts (which is Fade & Trim's customer data).
// When this page is extracted to its own repo at websites.bytecodeconsulting.com,
// this file moves with it.

export const pricing = {
  brand: {
    name: 'Bytecode Consulting',
    tagline: 'AI & software studio · Dartford',
    domain: 'bytecodeconsulting.com',
    email: 'admin@bytecodeconsulting.com',
    phoneHref: 'tel:+447990000000', // placeholder — replace with real
  },

  hero: {
    eyebrow: 'Built in Dartford',
    headline: 'A proper website for your business —\nwithout the agency price tag.',
    sub: 'Premium small-business websites, built to order in 48 hours. Founder pricing for the first five customers.',
    priceFrom: { setup: 99, monthly: 19 },
    primaryCta: 'Get started',
    secondaryCta: 'See a live example',
    secondaryCtaHref: 'https://barbers.bytecodeconsulting.com/',
  },

  trust: {
    location: 'Dartford, Kent',
    line: "We're a new local AI & software studio. Built and supported within reach — happy to meet for a coffee.",
  },

  audiences: [
    { label: 'Barbers', icon: 'scissors' },
    { label: 'Builders', icon: 'tool' },
    { label: 'Electricians', icon: 'plug' },
    { label: 'Salons', icon: 'sparkle' },
    { label: 'Cafés', icon: 'cup' },
    { label: 'Gyms', icon: 'dumbbell' },
    { label: 'Cleaners', icon: 'spray' },
    { label: 'Mechanics', icon: 'wrench' },
  ] as const,

  benefits: [
    {
      title: 'Mobile-first, fast on 3G',
      body: 'Your customers find you on their phone. Lighthouse-grade performance from day one.',
    },
    {
      title: 'Ranks on Google',
      body: 'LocalBusiness schema, reviews badge, location signals — set up properly so Google shows you, not your competitor.',
    },
    {
      title: 'Designed around your brand',
      body: 'Your logo, your colours, your photos. Not a Wix template that 10,000 other shops use.',
    },
    {
      title: 'Hosting, SSL & domain — included',
      body: "Cloudflare-grade hosting, secure HTTPS, your custom domain — none of it on a separate bill.",
    },
    {
      title: 'Updates handled for you',
      body: 'Need to change a price, swap a photo, add a service? Message us — typically live within a couple of hours.',
    },
    {
      title: 'A real human in Dartford',
      body: "No tickets, no offshore call centre. You message us, we reply. We can also meet in person.",
    },
  ],

  steps: [
    {
      n: '01',
      title: 'Apply',
      body: 'Fill in the form below. Takes two minutes.',
    },
    {
      n: '02',
      title: 'We build in 48 hours',
      body: "We research your business — Google reviews, opening hours, services, photos — and ship a draft within two days. You review, we tweak, we go live.",
    },
    {
      n: '03',
      title: 'Launch & relax',
      body: "Your site is live. Need a change later? Message us. £19/month covers updates, hosting, and your domain renewal.",
    },
  ],

  plans: {
    founder: {
      tag: 'Founder · first 5 customers',
      tagline: 'Locked-in price for the early adopters',
      setup: 99,
      monthly: 19,
      annual: 199,
      annualSaving: 29,
      featured: true,
    },
    standard: {
      tag: 'Standard',
      tagline: 'After the first five customers',
      setup: 149,
      monthly: 29,
      annual: 299,
      annualSaving: 49,
    },
  },

  // Itemised "what's in the £99 setup" — categorised for the breakdown table
  setupBreakdown: [
    {
      category: 'Design & build',
      items: [
        { name: 'Custom design from your brand', detail: 'Your colours, logo, fonts and tone — not a Wix template.' },
        { name: 'Up to 6 sections', detail: 'Hero · services & prices · gallery · about · hours · contact.' },
        { name: 'Mobile, tablet & desktop', detail: 'Looks sharp on every screen size — phones first.' },
        { name: 'Photo gallery (up to 10 photos)', detail: "We help you stage and optimise the photos you've got." },
        { name: 'Polished motion & typography', detail: 'Premium feel — Playfair + Inter, considered animations.' },
      ],
    },
    {
      category: 'Domain & hosting',
      items: [
        { name: 'Custom domain registration', detail: 'yourbusiness.co.uk (or similar) — bought and configured for you.' },
        { name: 'Cloudflare-grade hosting', detail: 'Fast everywhere, no monthly server bill, never goes down.' },
        { name: 'HTTPS / SSL certificate', detail: 'Encrypted, auto-renewing — Google penalises sites without it.' },
        { name: 'DNS configuration', detail: 'CNAMEs, MX, all the bits — handled.' },
      ],
    },
    {
      category: 'Get found on Google',
      items: [
        { name: 'LocalBusiness schema', detail: 'Rich results — your stars and hours show in Google search.' },
        { name: 'Meta tags & Open Graph', detail: 'Your link looks polished when shared on WhatsApp / Facebook.' },
        { name: 'Sitemap & robots.txt', detail: 'Search engines index every page properly.' },
        { name: 'Analytics dashboard', detail: 'Plausible-style — see who visits, when, from where. No cookie banners.' },
      ],
    },
    {
      category: 'Modern & legal',
      items: [
        { name: 'PWA — installable as an app', detail: 'Customers can add your site to their phone home screen.' },
        { name: 'Performance optimisation', detail: 'Lighthouse 95+ scores. Loads in under a second on 4G.' },
        { name: 'Privacy & T&Cs pages', detail: 'GDPR-friendly boilerplate, written for your business.' },
        { name: 'Accessibility basics', detail: 'Alt text, semantic HTML, contrast — works for everyone.' },
      ],
    },
  ],

  monthlyBreakdown: [
    'Hosting, SSL & domain renewals (everything stays online)',
    'Content updates whenever you ask — typically within a couple of hours',
    'Real human support, in Dartford',
    'Backups, monitoring & framework upgrades',
    'No surprise bills, no contracts',
  ],

  included: [
    'Single-page website with up to 6 sections',
    'Mobile-first responsive design',
    'Custom domain + SSL (your own .co.uk or similar)',
    'Hosting and infrastructure',
    'Google Search SEO basics + LocalBusiness schema',
    'Photo gallery, services, hours, contact, reviews',
    'Sign-up / contact form (your enquiries → your inbox)',
    'Content updates within reason (a few per month)',
    'Real human support — message or meet in person',
  ],

  // "Why a website?" — direct comparison with relying on Instagram alone
  whyWebsite: {
    eyebrow: 'Why a website',
    heading: "Instagram is brilliant. It's just not your website.",
    intro: "Instagram works — for people who already follow you. A website is what every other potential customer expects to find.",
    rows: [
      {
        gap: "Doesn't show up on Google",
        instagram: 'Instagram pages rarely rank for "barber near me" or "electrician Dartford".',
        website: "You're the first thing people see when they search for your trade in your area.",
      },
      {
        gap: "Customers need an account",
        instagram: 'Half your potential customers — older locals, busy families — don\'t use Instagram daily.',
        website: 'Anyone with a phone and a browser. No login, no app required.',
      },
      {
        gap: 'Limited info display',
        instagram: 'Hours, prices, services and location are buried in posts and bios.',
        website: 'Everything visible in one scroll. Hours, prices, photos, reviews, location, contact.',
      },
      {
        gap: "You don't own it",
        instagram: 'Algorithm changes, account bans, platform shutdowns — Meta calls the shots.',
        website: 'Yours forever. Your domain, your content, your audience.',
      },
      {
        gap: "Doesn't build search authority",
        instagram: "Reviews on Instagram don't help your Google rankings.",
        website: 'Reviews schema, local SEO, structured data — Google rewards proper websites.',
      },
    ],
    closer: "Best move: keep posting on Instagram. Add a website. The two feed each other — your website is the front door, Instagram is the day-to-day shop window.",
  },

  // Bytecode Consulting showcase — what we do beyond small business websites
  bytecode: {
    eyebrow: 'About the studio',
    heading: 'More than websites.',
    intro: "Bytecode Consulting is a Dartford-based AI & software studio. Small-business websites are one of several things we ship — alongside our own AI products and platforms for grassroots sports clubs.",
    portfolio: [
      {
        name: 'GabbleAI',
        logo: 'images/portfolio/gabbleai-logo.webp',
        href: 'https://bytecodeconsulting.com/products/gabbleai',
        tag: 'Our product · launched April 2026',
        body: 'AI-powered GCSE speaking practice for French, Spanish, German and Chinese — instant feedback and progress tracking for students.',
      },
      {
        name: 'ClubOS',
        logo: 'images/portfolio/clubos-logo-dark.svg',
        href: 'https://bytecodeconsulting.com/products/clubos',
        tag: 'Our product · launching June 2026',
        body: 'Multi-sport, multi-tenant operating platform for grassroots clubs — fixtures, members, payments, comms, all in one place.',
      },
      {
        name: 'GNG Cricket Club',
        logo: 'images/portfolio/gng-logo.webp',
        href: 'https://gngcc.uk',
        tag: 'Client · website + 2026 season sponsor',
        body: "We built their website and back them as 2026 season sponsor. Grassroots cricket is close to our hearts.",
      },
    ],
    services: [
      'AI Automation Sprints (workflow audit → secure handover)',
      'Cloud Product Sprints (serverless MVPs)',
      'Website Lead Engine Sprints (this — for small businesses)',
      'AI & Cloud consulting, software delivery, training',
    ],
    cta: {
      label: 'Visit bytecodeconsulting.com',
      href: 'https://bytecodeconsulting.com',
    },
  },

  notIncluded: [
    'E-commerce / online ordering (different product)',
    'Custom photoshoot (available as add-on)',
    'Booking system integration (available as add-on)',
    'Marketing campaigns or paid ads',
    'Social media management',
    'Logo or branding from scratch (available as add-on)',
  ],

  addOns: [
    {
      name: 'Photo shoot at your premises',
      price: 150,
      unit: 'one-off',
      blurb: 'Up to 20 professional photos of your shop, your team and your work — used in your gallery and hero.',
    },
    {
      name: 'Logo design or refresh',
      price: 200,
      unit: 'one-off',
      blurb: 'Custom logo + favicon + simple brand palette. Three concepts, two rounds of revisions.',
    },
    {
      name: 'Extra page',
      price: 79,
      unit: 'one-off',
      blurb: 'Need a dedicated services, blog, or about page? £79 each.',
    },
    {
      name: 'Online booking integration',
      price: 150,
      unit: 'one-off',
      blurb: 'Embed Fresha, Booksy, Setmore or your existing booking system directly on your site.',
    },
    {
      name: 'Branded email setup',
      price: 49,
      unit: 'setup',
      monthly: 4,
      blurb: 'you@yourbusiness.co.uk inbox via Google Workspace or similar. £4/month per mailbox after.',
    },
    {
      name: 'Migration from existing site',
      price: 99,
      unit: 'one-off',
      blurb: 'Got a tired old Wix or WordPress site? We move the content over and redirect your old URLs.',
    },
  ],

  faqs: [
    {
      q: 'How long does it take?',
      a: '48 hours from a confirmed order to a live draft, in most cases. Then 1–3 days for tweaks before final launch. Photoshoot add-on adds about a week to schedule and shoot.',
    },
    {
      q: 'Do I own the website?',
      a: 'Yes. You own all your content, photos, copy, and your domain. The underlying template / code is licensed for your use while you remain a customer. If you ever leave, your domain is yours to take to another provider.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel any month, no minimum term, no exit fees. Your site comes down within 7 days of cancellation. Your domain transfers to you at-cost (a tenner or so depending on the registrar).',
    },
    {
      q: 'Why is there a monthly fee at all?',
      a: 'Hosting, SSL certificates, your domain renewal, ongoing updates, and real human support cost time and money to provide. £19/month keeps the lights on and keeps your site fresh — it works out to one extra haircut a month for a barber, or a single hour of an electrician\'s time.',
    },
    {
      q: 'What if I don\'t have professional photos?',
      a: 'Most small businesses don\'t. We can use stock or your phone snaps for the launch, or you can add the £150 photo shoot for proper photography. The site looks great either way.',
    },
    {
      q: 'Do I get a custom design or a template?',
      a: 'Custom. We start from a polished design system — typography, layout, motion — but each site is styled to your brand: your colours, your logo, your photos, your tone. No two sites look the same.',
    },
    {
      q: 'Can we meet in person?',
      a: 'Yes — we\'re based in Dartford. Happy to meet for a coffee anywhere within a reasonable drive. Most customers are perfectly served by message and email, but the option is there.',
    },
    {
      q: 'What about Google ranking and SEO?',
      a: 'Every site ships with the technical SEO basics done properly: title tags, meta descriptions, LocalBusiness schema for Google rich results, fast load times, mobile-first design, sitemap, and a clean URL structure. Ongoing SEO campaigns (link building, content marketing) are not included — that\'s a different service.',
    },
    {
      q: 'Can I update the site myself?',
      a: 'No — and that\'s deliberate. DIY editors create messy sites. Instead, you message us with what you want changed, and we typically update it within a couple of hours during business hours. That\'s what the £19/month covers.',
    },
    {
      q: 'What if I want to add e-commerce later?',
      a: "We don't currently build full e-commerce stores — that's a different product. If you eventually need a shop, we'll happily migrate you to Shopify or similar and your domain comes with you.",
    },
  ],

  form: {
    title: 'Tell us about your business',
    sub: "We'll reply within one working day with next steps. No salesy follow-up.",
    // Replace with your Formspree endpoint after registering at https://formspree.io/
    actionUrl: 'https://formspree.io/f/xbdwkvqj',
    fallbackEmail: 'admin@bytecodeconsulting.com',
    businessTypes: [
      'Barber',
      'Builder / tradesperson',
      'Electrician',
      'Plumber',
      'Salon / beauty',
      'Café / restaurant',
      'Gym / fitness',
      'Cleaner',
      'Mechanic',
      'Other',
    ],
  },
} as const;
