import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://judoka104.github.io/portfolio',
  base: '/portfolio',
  prefetch: true
});
