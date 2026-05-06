import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bccuk.github.io/barber-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
