import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // 1. ADICIONE A URL FINAL DO SEU SITE AQUI
  // Isso força o Astro a criar caminhos absolutos para CSS, JS, etc.
  site: 'https://jairribeiro.com.br', // SUBSTITUA PELO SEU DOMÍNIO REAL

  integrations: [
    tailwind(), 
    icon({
      include: {
        mdi: ['*']
      }
    })
  ],
  
  // 2. CONFIGURAÇÃO DE i18n LIMPA
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'], // É uma boa prática listar o idioma padrão aqui também
    routing: {
      prefixDefaultLocale: false
    }
  }
});