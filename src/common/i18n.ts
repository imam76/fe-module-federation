import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "../assets/locales/en/translations.json";
import translationES from "../assets/locales/es/translations.json";
import translationID from "../assets/locales/id/translations.json";
import { isProduction } from "./utils";

export const defaultNS = "translations";
export const resources = {
	en: { translations: translationEN },
	es: { translations: translationES },
	id: { translations: translationID },
} as const;

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init(
		{
			defaultNS,
			ns: [defaultNS],
			debug: !isProduction,
			fallbackLng: "en",
			interpolation: {
				escapeValue: false, // not needed for react as it escapes by default
			},
			backend: {
				loadPath: isProduction
					? "locales/{{lng}}/translations.json"
					: "src/assets/locales/{{lng}}/translations.json",
			},
		}
	);

export default i18n;