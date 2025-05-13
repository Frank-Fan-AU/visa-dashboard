'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'en' | 'zh';

interface I18nContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    let storedLang = localStorage.getItem('lang') as Lang | null;
    if (!storedLang) {
      const browserLang = navigator.language;
      storedLang = browserLang.startsWith('zh') ? 'zh' : 'en';
      localStorage.setItem('lang', storedLang);
    }
    setLangState(storedLang);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};