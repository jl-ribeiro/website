import pt from './pt';
import en from './en';
import type { Locale } from '../data/profile';
export const translations = { pt, en };
export const getLocale = (value: string | undefined): Locale =>
  value === 'en' ? 'en' : 'pt';
