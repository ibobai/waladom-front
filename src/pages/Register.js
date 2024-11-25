import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Use i18next for translations
import '../styles/Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation(); // Access the translation function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.password) {
      console.log('Registered:', formData);
      navigate('/login');
    } else {
      setErrorMessage(t('register.error_message'));
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>{t('register.title')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder={t('register.full_name_placeholder')}
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder={t('register.email_placeholder')}
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder={t('register.password_placeholder')}
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="register-btn">
            {t('register.register_button')}
          </button>
        </form>
        <p className="login-link">
          {t('register.login_link')}
        </p>
      </div>
    </div>
  );
};

export default Register;
