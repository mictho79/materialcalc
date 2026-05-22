import type { Lang, UIStrings } from './types';
import { en } from './en';
import { es } from './es';

const dicts: Record<Lang, UIStrings> = { en, es };

export const getStrings = (lang: Lang = 'en'): UIStrings => dicts[lang];
export type { Lang, UIStrings } from './types';
