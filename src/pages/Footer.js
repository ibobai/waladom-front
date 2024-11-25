// src/pages/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css'; // Adjusted for Footer styles
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-section footer-links">
          <h4>{t('footer.linksTitle')}</h4>
          <ul>
            {t('footer.links', { returnObjects: true }).map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link">
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section footer-social">
          <h4>{t('footer.socialMediaTitle')}</h4>
          <ul>
            <li>
              <a href={t('footer.socialMedia.facebook.href')} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
                <span>{t('footer.socialMedia.facebook.label')}</span>
              </a>
            </li>
            <li>
              <a href={t('footer.socialMedia.twitter.href')} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
                <span>{t('footer.socialMedia.twitter.label')}</span>
              </a>
            </li>
            <li>
              <a href={t('footer.socialMedia.instagram.href')} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
                <span>{t('footer.socialMedia.instagram.label')}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h4>{t('footer.contactTitle')}</h4>
          <p>
            <FaEnvelope className="contact-icon" />
            <span>{t('footer.contact.email.label')}: </span>
            <a href={`mailto:${t('footer.contact.email.value')}`}>
              {t('footer.contact.email.value')}
            </a>
          </p>
          <p>
            <FaPhone className="contact-icon" />
            <span>{t('footer.contact.phone.label')}: </span>
            {t('footer.contact.phone.value')}
          </p>
          <p>
            <FaMapMarkerAlt className="contact-icon" />
            <span>{t('footer.contact.address.label')}: </span>
            {t('footer.contact.address.value')}
          </p>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="footer-credits">
        {t('footer.footerNote')}
      </div>
    </footer>
  );
};

export default Footer;
