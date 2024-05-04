import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/100GIGA_LOGO.jpeg" alt="Logo" /> {/* Assuming image is in the project's root */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Try Poshana</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Offer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;