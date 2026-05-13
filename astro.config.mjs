import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  site: 'https://ajmd-site-uamy.vercel.app',
});
