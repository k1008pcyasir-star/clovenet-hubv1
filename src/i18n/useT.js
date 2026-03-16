import { useLanguage } from "../context/LanguageContext";
import { translations } from "./translations";

export function useT() {
  const { language } = useLanguage();

  function t(path) {
    const keys = path.split(".");
    let value = translations[language];

    for (const key of keys) {
      value = value?.[key];
    }

    return value || path;
  }

  return { t, language };
}