import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'; // Use i18next for translations
import '../styles/Login.css'

const Login = () => {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation(); // Access the translation function

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = login(input, password);
    if (loginSuccess) {
      toast.success(t('login.success_message'), {
        autoClose: 2000,
      });
      navigate('/profile');
    } else {
      setErrorMessage(t('login.error_message'));
      toast.error(t('login.error_message'), {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{t('login.title')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder={t('login.email_or_id_placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder={t('login.password_placeholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-btn">
            {t('login.login_button')}
          </button>
        </form>

        <div className="login-links">
          <Link to="/register" className="register-link">
            {t('login.register_link')}
          </Link>
          <Link to="/forgot-password" className="forgot-password-link">
            {t('login.forgot_password_link')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
