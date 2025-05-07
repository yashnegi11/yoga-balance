import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="Yoga Balance Logo" className="navbar-logo" />
        </Link>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/yoga-asanas">Yoga Asanas</Link></li>
            <li><Link to="/meditation">Meditation</Link></li>
            <li><Link to="/pranayama">Pranayama</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
          <div className="navbar-buttons">
            <a href="https://www.youtube.com/results?search_query=yoga" className="btn youtube-btn">
              <i className="fab fa-youtube" /> Yog Balance
            </a>
            <a href="join" className="btn register-btn">
              <i className="fas fa-user-plus" /> Register
            </a>
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
