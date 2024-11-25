// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

const storedLang = localStorage.getItem('language') || 'en'; // Default to 'en' if no language is saved

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation }
    },
    lng: storedLang, // Set the language to what is saved in localStorage
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
