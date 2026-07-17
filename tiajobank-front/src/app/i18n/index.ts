import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpBackend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
.use(HttpBackend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: "es",
    debug: import.meta.env.DEV,

    supportedLngs: ["es","en","fr","ja","zh","pt"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",

    ns: [],
    defaultNS: "inicio",

    interpolation: {
        escapeValue: false
    },

    backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
        queryStringParams: { v: import.meta.env.VITE_APP_VERSION ?? "1" },
    },

    detection: {
        order: ["path","localStorage","navigator","htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
        lookupFromPathIndex: 0,
    },

    react: {
        useSuspense: true
    },

    saveMissing: false,
    missingKeyHandler: import.meta.env.DEV
        ? (lng, ns, key) => {
            console.warn(`[i18n] Falta traducción: [${lng}] ${ns}:${key}`);
        } : undefined,
});
export default i18n;