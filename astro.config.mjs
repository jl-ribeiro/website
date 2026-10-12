import { URL } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jairribeiro.dev',
  trailingSlash: 'always',

  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ['*'],
      },
    }),
    sitemap({
      filter: (url) => /^\/(pt|en)\//.test(new URL(url).pathname),
      serialize: (item) => {
        const rest = new URL(item.url).pathname.replace(/^\/(pt|en)/, '');
        item.links = [
          {
            lang: 'pt-BR',
            url: new URL('/pt' + rest, 'https://jairribeiro.dev').href,
          },
          {
            lang: 'en',
            url: new URL('/en' + rest, 'https://jairribeiro.dev').href,
          },
          {
            lang: 'x-default',
            url: new URL('/pt' + rest, 'https://jairribeiro.dev').href,
          },
        ];
        return item;
      },
    }),
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
