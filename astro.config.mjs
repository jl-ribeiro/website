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

  // 2. CONFIGURAÇÃO DE i18n LIMPA
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: true, // <-- ALTERADO AQUI
    },
  },
});
