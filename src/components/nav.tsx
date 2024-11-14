import React from 'react';
import { Link } from 'react-router-dom';
import logo from './EAR_eagle_white_PNG.png';
import brasil from './bandeira-do-brasil.png';
import eua from './bandeira-estados-unidos.png'
import './nav.css';
import { useTranslation } from 'react-i18next';


const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation(); 

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
          <span className="mr-2"> IT Training</span>
        </Link>

        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-outline-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          Language
          </button>
          
          <ul className="dropdown-menu">
            <li>
            <button className="dropdown-item" onClick={() => changeLanguage('en')}>
            <img 
            src={eua}
            alt="bandeira.eua" 
            style={{width:'32px', marginRight: "8px"}}
            />
            English
            </button></li>
            <li>
            <button className="dropdown-item" onClick={() => changeLanguage('en')}>
            <img 
            src={brasil}
            alt="bandeira.eua" 
            style={{width:'32px', marginRight: "8px"}}
            />
            Português
            </button></li>   
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
