import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { localeCodes, localeResources } from "./constants/locales";

const DETECTION_OPTIONS = {
  order: ['querystring', 'localStorage', 'navigator'],
  caches: ['localStorage'],
};

const defaultLang = 'en';

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    returnNull: false,
    detection: DETECTION_OPTIONS,
    resources: localeResources,
    supportedLngs: localeCodes,
    fallbackLng: defaultLang,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
