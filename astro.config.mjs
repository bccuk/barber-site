import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site is served from a subpath on GitHub Pages: https://bccuk.github.io/barber-site/
// `base` is prefixed to every asset URL Astro emits.
// When you add a custom domain (Cloudflare Pages or similar), set `site` to that
// domain and remove `base`.
export default defineConfig({
  site: 'https://bccuk.github.io',
  base: '/barber-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
