import React from 'react';
import Llave from '../assets/llave.jpg';
import './Landing.css';

const LandingPageImg = () => {
  return (
    <div className="landing-img-container">
      <img className="landing-img" src={Llave} alt="llave"></img>
    </div>
  );
};

export default LandingPageImg;
