import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content container">
        <div className="footer-section about">
          <h3>Ayurveda Retreat</h3>
          <p>
            A harmony of nature and science for rejuvenation, healing, and peace of mind.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: info@ayurveda.com</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Location: Galle, Sri Lanka</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Ayurveda Retreat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
