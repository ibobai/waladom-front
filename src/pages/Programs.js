import React from 'react';
import { useTranslation } from 'react-i18next';

const Programs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('programs')}</h1>
      <p>Learn more about our ongoing programs and initiatives.</p>
    </div>
  );
};

export default Programs;
