import { useState, useEffect } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('berckley-language') as 'es' | 'en';
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: 'es' | 'en') => {
    setCurrentLanguage(lang);
    localStorage.setItem('berckley-language', lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    languages,
  };
};