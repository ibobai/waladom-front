import React from 'react';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('events')}</h1>
      <p>Check out our upcoming events and activities.</p>
    </div>
  );
};

export default Events;
