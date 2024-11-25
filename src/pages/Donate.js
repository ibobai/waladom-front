import React from 'react';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('donate')}</h1>
      <p>Support our mission and make a difference in the lives of many.</p>
      <button>{t('donate')}</button>
    </div>
  );
};

export default Donate;
