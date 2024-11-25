import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Updated import
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css'; // Import the extracted Navbar.css

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { isLoggedIn } = useAuthContext(); // Updated usage

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        {t('header.home')}
      </Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        {t('header.about')}
      </Link>
      <Link to="/programs" className={location.pathname === '/programs' ? 'active' : ''}>
        {t('header.programs')}
      </Link>
      <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>
        {t('header.events')}
      </Link>
      <Link to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>
        {t('header.donate')}
      </Link>
      <Link to="/my-role" className={location.pathname === '/my-role' ? 'active' : ''}>
        {t('header.myRole')}
      </Link>

      {isLoggedIn && (
        <Link to="/my-id-card" className={location.pathname === '/my-id-card' ? 'active' : ''}>
          {t('header.myIdCard')}
        </Link>
      )}

      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
