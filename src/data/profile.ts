// Contacts already published in the original repository. Never infer missing links.
export const profile = {
  name: 'Jair Ribeiro',
  email: 'jair.lima.ribeiro@gmail.com',
  linkedin: 'https://linkedin.com/in/jlribeiro',
  github: 'https://github.com/jl-ribeiro',
  resume: '/CV_Jair_Ribeiro.pdf',
};
export type Locale = 'pt' | 'en';
export const locales: Locale[] = ['pt', 'en'];
export const pageIds = [
  'sobre',
  'experiencia',
  'cases',
  'servicos',
  'contato',
] as const;
