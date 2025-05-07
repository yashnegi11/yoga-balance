import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero/img1.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Yoga Background" className="hero-image" />
      <div className="hero-content">
        <h1>Transform Your Life with Yoga and Meditation</h1>
        <p>Balance Your Body, Balance Your Life.</p>
        <a href="#learn-more" className="hero-btn">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
