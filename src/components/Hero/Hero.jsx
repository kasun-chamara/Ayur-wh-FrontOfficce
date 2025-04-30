import React from 'react';
import './Hero.css';
import ratingIcon from '../../assets/rating.svg'; // Correct import for src/assets

const Hero = () => {
  return (
    <section className="hero-section d-flex">
      <div className="hero-left d-flex flex-column justify-content-center align-items-start">
        <div className="hero-content container">
          <p className='ms-5 text-white'>Welcome to Pranaveda</p>
          <h1 className='ms-5 custom-heading'>Transform Your Health Naturally.</h1>
          <p className='ms-5 text-white'>
            Experience Holistic Wellness with PranaVeda: Embrace the Power of Ayurveda for a Balanced Life.
          </p>
          <button className="mt-3 ms-5 custom-btn">Read More</button>
        </div>
      </div>

      <div className="hero-right d-flex justify-content-center align-items-center p-5 position-relative">
        <div className="hero-image-wrapper position-relative">
          <div className="play-button-container">
            <div className="play-button"></div>
          </div>
        </div>

        {/* Rating image at bottom-left */}
        <img src={ratingIcon} alt="Rating" className="rating-badge" />
      </div>
    </section>
  );
};

export default Hero;
