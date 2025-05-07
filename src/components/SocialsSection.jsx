import React from 'react';
import './SocialsSection.css';

const Socials = () => {
  return (
    <div className="socials-section">
      <h1>Connect with Us</h1>
      <p>Follow us on our social media channels to stay updated with the latest news and updates.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.youtube.com/YourChannel" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
          <i className="fab fa-youtube"></i> YouTube
        </a>
        <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="mailto:youremail@example.com" className="social-icon email">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://wa.me/YourNumber" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Socials;
