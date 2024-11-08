import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo branco.png';
import './nav.css';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation(); // Usa o hook useTranslation para acessar t e i18n

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-white d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="70"
            height="50"
            className="d-inline-block align-text-top"
          />
          <span className="ms-3">{t('IT Training')}</span> {/* Traduz o texto do logo */}
        </Link>

        {/* Dropdown Button - Dropstart */}
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-outline-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t('Language')} {/* Traduz o texto do botão de idioma */}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>EN - English</button></li>
            <li><button className="dropdown-item" onClick={() => changeLanguage('pt')}>PT - Português</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
