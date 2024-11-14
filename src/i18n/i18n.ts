import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../i18n/locales/en/translationes.json';
import ptTranslation from '../i18n/locales/pt/translationpt.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: true 
  }
});

export default i18n;
