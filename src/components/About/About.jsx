import React from 'react';
import './About.css';
import aboutImg from '../../assets/about-right.svg';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section d-flex">
      <div className="about-left d-flex flex-column justify-content-center align-items-start p-5">
        <h2 className="about-heading">About PranaVeda</h2>
        <p className="about-text">
          PranaVeda is dedicated to promoting holistic well-being through the time-tested science of Ayurveda.
          We believe in natural healing and strive to provide the best Ayurvedic treatments and remedies to help
          you lead a healthy and balanced life.
        </p>

        <ul className="feature-list mt-3">
          <li><FaCheckCircle className="check-icon" /> Professional Therapist</li>
          <li><FaCheckCircle className="check-icon" /> Organic Herbal</li>
          <li><FaCheckCircle className="check-icon" /> Comprehensive Services</li>
          <li><FaCheckCircle className="check-icon" /> 24/7 Premium Support</li>
        </ul>

        <button className=" custom-btn mt-3">Learn More</button>
      </div>

      <div className="about-right d-flex justify-content-center align-items-center p-5">
        <img src={aboutImg} alt="About Illustration" className="img-fluid" />
      </div>
    </section>
  );
};

export default About;
