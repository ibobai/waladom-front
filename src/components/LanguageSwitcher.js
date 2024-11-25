// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Store language in localStorage
  };

  return (
    <div className="language-switcher">
      {/* Change button text dynamically based on the current language */}
      <button onClick={() => switchLanguage(i18n.language === 'ar' ? 'en' : 'ar')}>
        {i18n.language === 'ar' ? 'English' : 'العربية'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
