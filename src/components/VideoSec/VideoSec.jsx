import React from 'react';
import './VideoSec.css';
import { FaPlay, FaShieldAlt, FaHeadset, FaLock, FaHandsHelping } from 'react-icons/fa';

const VideoSec = () => {
  return (
    <section className="video-section position-relative">
      {/* Animated Play Button */}
      <div className="play-button-top">
        <div className="play-button-circle">
          <FaPlay className="play-icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="video-content text-center mx-auto">
        <h2 className="video-heading">Discover the Essence of Ayurveda</h2>
        <p className="video-subheading">
          Watch our introduction to holistic healing and ancient wellness.
        </p>
        <button className="video-btn mt-3">Watch Video</button>
      </div>

      {/* Black Bottom Strip */}
      <div className="bottom-strip"></div>

      {/* Feature Icons Row */}
      <div className="video-features d-flex justify-content-around align-items-center text-white text-center px-3">
        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <p>Trusted Company</p>
        </div>
        <div className="feature-item">
          <FaHeadset className="feature-icon" />
          <p>Premium Support</p>
        </div>
        <div className="feature-item">
          <FaLock className="feature-icon" />
          <p>Safety Payment</p>
        </div>
        <div className="feature-item">
          <FaHandsHelping className="feature-icon" />
          <p>Help Center</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;
