
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import all locale files
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';
import caTranslations from '../locales/ca.json';

// Define available languages
export type AvailableLocale = 'en' | 'es' | 'ca';

// Map of language codes to their full names
export const localeNames: Record<AvailableLocale, string> = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
};

// Translation dictionary type
export type Translations = {
  [key: string]: string | string[] | Translations;
};

// Map of language codes to their translation files
const translationsMap: Record<AvailableLocale, Translations> = {
  en: enTranslations,
  es: esTranslations,
  ca: caTranslations,
};

// Context type
type LocaleContextType = {
  locale: AvailableLocale;
  setLocale: (locale: AvailableLocale) => void;
  t: (key: string) => string | string[];
  translations: Translations;
};

// Create locale context
const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Hook for components to easily access locale context
export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

// Locale provider component
export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get the saved language from local storage, default to browser language or Spanish
  const getInitialLocale = (): AvailableLocale => {
    const savedLocale = localStorage.getItem('locale') as AvailableLocale;
    if (savedLocale && ['en', 'es', 'ca'].includes(savedLocale)) {
      return savedLocale;
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') return 'en';
    if (browserLang === 'ca') return 'ca';
    
    // Default to Spanish
    return 'es';
  };

  const [locale, setLocale] = useState<AvailableLocale>(getInitialLocale());
  const [translations, setTranslations] = useState<Translations>(translationsMap[locale]);

  // Update translations when locale changes
  useEffect(() => {
    setTranslations(translationsMap[locale]);
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  // Translation function to get nested keys using dot notation (e.g. "header.home")
  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result?.[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      result = result[k];
    }
    
    return result;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, translations }}>
      {children}
    </LocaleContext.Provider>
  );
};
