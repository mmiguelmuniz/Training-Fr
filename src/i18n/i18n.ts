import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navbarTitle": "It Training",
      "contactUs": "Contact Us",
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "submit": "Submit",
      "scheduleTraining": "Schedule Training",
      "language": "Language",
      "english": "English",
      "portuguese": "Portuguese",
    }
  },
  pt: {
    translation: {
      "navbarTitle": "Treinamento de TI",
      "contactUs": "Contate-Nos",
      "name": "Nome",
      "email": "Email",
      "message": "Mensagem",
      "submit": "Enviar",
      "scheduleTraining": "Agendar Treinamento",
      "language": "Idioma",
      "english": "Inglês",
      "portuguese": "Português",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
