import eslint from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';

export default [
  eslint.configs.recommended,
  ...astroPlugin.configs['flat/recommended'],
  {
    ignores: ['node_modules/', 'dist/', '.astro/', 'public/'],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
];

