import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../utils/authUtils';
import { useTranslation } from 'react-i18next'; // Use i18next for translations

const Profile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Access the translation function

  useEffect(() => {
    checkAuth(navigate);
  }, [navigate]);

  return (
    <div>
      <h1>{t('profile.title')}</h1>
      <p>{t('profile.welcome_message')}</p>
    </div>
  );
};

export default Profile;
