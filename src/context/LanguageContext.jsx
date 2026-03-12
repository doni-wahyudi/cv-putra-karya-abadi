import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('site_lang') || 'ID';
  });

  useEffect(() => {
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'ID' ? 'EN' : 'ID'));
  };

  const t = (translations) => {
    return translations[lang] || translations['ID'];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
