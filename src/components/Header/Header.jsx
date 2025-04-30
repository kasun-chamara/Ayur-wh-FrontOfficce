// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  custom-navbar fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h3 className='text-white'>LOGO</h3>
          {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
          </ul>
          <div className="d-flex">
          <button className="mt-3 ms-5 custom-btn">Read More</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
