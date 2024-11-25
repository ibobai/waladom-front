import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Use i18next for translations
import '../styles/NotFound.css'

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Access the translation function

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">{t('notfound.title')}</h1>
        <p className="not-found-message">{t('notfound.message')}</p>
        <button className="go-home-button" onClick={goHome}>
          {t('notfound.button')}
        </button>
      </div>
      <div className="not-found-animation">
        <div className="circle"></div>
        <div className="circle small"></div>
        <div className="circle large"></div>
      </div>
    </div>
  );
};

export default NotFound;
