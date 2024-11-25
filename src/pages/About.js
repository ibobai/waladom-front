import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about')}</h1>
      <p>Welcome to the About Us page. {t('programs')}</p>
    </div>
  );
};

export default About;
