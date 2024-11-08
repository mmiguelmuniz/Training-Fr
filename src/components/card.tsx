// src/components/Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

interface CardProps {
  imgSrc: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
  imgClass: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, text, link, linkText, imgClass }) => {
  return (
    <div className="card">
      <img src={imgSrc} className={`card-img-top ${imgClass}`} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={link} className="btn btn-primary card-button-left">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
