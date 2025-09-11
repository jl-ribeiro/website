import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // <-- TEM QUE TER ESSA LINHA

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()] // <-- E ESSA AQUI
});