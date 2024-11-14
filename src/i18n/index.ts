import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import testPageKa from "@/i18n/ka/pages/test.json";
import testPageEn from "@/i18n/en/pages/test.json";

import aboutPageKa from "@/i18n/ka/pages/about.json";
import aboutPageEn from "@/i18n/en/pages/about.json";

const options = {
  // order and from where user language should be detected
  order: ["path", "subdomain"],

  // keys or params to lookup language from
  lookupQuerystring: "lang",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
};

const lngDetector = new LanguageDetector();

i18n
  .use(lngDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      ka: {
        translation: { "test-page": testPageKa, "about-page": aboutPageKa },
      },
      en: {
        translation: { "test-page": testPageEn, "about-page": aboutPageEn },
      },
    },
    lng: "ka",
    // fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
