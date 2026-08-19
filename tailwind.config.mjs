/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        de: {
          bg: '#020617',
          panel: '#0b1220',
          line: '#1e293b',
          accent: '#22d3ee',
          accent2: '#5eead4',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: [
          'Outfit',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      boxShadow: {
        node: '0 0 0 1px rgba(34, 211, 238, 0.2), 0 0 20px rgba(34, 211, 238, 0.08)',
      },
    },
  },
  plugins: [],
};
