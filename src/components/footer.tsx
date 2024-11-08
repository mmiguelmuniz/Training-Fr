import React from "react";
import "./nav.css";
import Form from "./form";
import "./form.css";
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="footer-content">
          <div className="about">
            <h3>About IT Training</h3>
            <p>
            We are an IT training platform from the American School of Recife. We want to help you stay up to date with all the technologies offered by EAR for a better experience and performance.
            </p>
          </div>
          <Form />
          <div className="follow">
            <h3>IT Support</h3>
            <p>
            </p>
            <div className="contact-info">
              <p><i className="fas fa-phone-alt"></i> <a href="https://wa.me/+5581994065078" className="text-white">(81) 99406-5078</a></p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:it@ear.com.br" className="text-white">it@ear.com.br</a></p>
            </div>
          </div>
        </div>
        <p>&copy; 2024 All rights reserved by American School Of Recife.</p>
      </div>
    </footer>
  );
};

export default Footer;  
