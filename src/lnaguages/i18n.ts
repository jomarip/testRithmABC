import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import ja from './locales/ja/translation.json';
import { ConvertedToFunctionsType } from './types';

const translationsJson = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
};

export type TranslationResource = typeof en;
export type LanguageKey = keyof TranslationResource;

export const translations: ConvertedToFunctionsType<TranslationResource> =
  {} as any;

/*
 * Converts the static JSON file into object where keys are identical
 * but values are functions that produces the same key as string.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */

/* eslint-disable */
const convertToFunctions = (obj: any, dict: {}, current?: string) => {
  Object.keys(obj).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      //@ts-ignore
      dict[key] = {};
      //@ts-ignore
      convertToFunctions(obj[key], dict[key], currentLookupKey);
    } else {
      //@ts-ignore
      dict[key] = () => currentLookupKey;
    }
  });
};

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources: translationsJson,
      fallbackLng: ['en', 'ja'],
      debug:
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test',

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    () => convertToFunctions(en, translations)
  );
