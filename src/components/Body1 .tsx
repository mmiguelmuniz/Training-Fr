import React, { useRef } from 'react';
import './body.css';
import _estudos from './estudos.png';
import BodyPart2 from './Body2 ';

const BodyPart1: React.FC = () => {
  const bodyPart2Ref = useRef<HTMLDivElement>(null);

  const handleLearnMoreClick = () => {
    if (bodyPart2Ref.current) {
      bodyPart2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-1">
              <h1 className="display-4">Develop your takskills</h1>
              <p className="lead">Unlock your potential with our trainings.</p>
              <button className="btn btn-primary btn-custom" onClick={handleLearnMoreClick}>
                Learn more »
              </button>
            </div>
            <div className="col-md-5">
              <img src={_estudos} alt="estudos" className="img-img" />
            </div>
          </div>
        </div>
      </section>
      
      <div ref={bodyPart2Ref}>
        <BodyPart2 />
      </div>
    </>
  );
};

export default BodyPart1;
