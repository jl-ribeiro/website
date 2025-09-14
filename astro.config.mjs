import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    icon({
      include: {
        mdi: ['*'] // Permite o uso de QUALQUER ícone do set 'mdi'
      }
    })
  ]
});