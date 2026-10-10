import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jairribeiro.dev',

  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ['*'],
      },
    }),
    sitemap(),
  ],

  // Preserve localized routes; Portuguese is the primary language.
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
