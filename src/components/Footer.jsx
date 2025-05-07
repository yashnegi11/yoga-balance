import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        <Link to="/">
          <img src={logo} alt="Yoga Balance Logo" />
        </Link>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/socials">Socials</Link></li>
            <li><Link to="/join">Register</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/donate">Support Our Program</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Yoga Balance. All Rights Reserved</p>
        <ul>
          <li><Link to="/disclaimer">Disclaimer/Terms</Link></li>
          <li><Link to="/policy">Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
