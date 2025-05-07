import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './YogaAsanas.css';
import benefitsImage from '../../assets/hero/img5.jpg'; // Ensure the path is correct
import tryYogaImage from '../../assets/hero/img8.jpg'; // Ensure the path is correct

const YogaAsanas = () => {
  return (
    <div>
      <Navbar />
      <div className="yoga-asanas-content">
        <h1>What is Yoga Asana?</h1>
        <p>
          Yoga asanas, or postures, are ancient practices that integrate physical movements with mindfulness and breath control. They are designed to harmonize the body, mind, and spirit.
        </p>
        <p>
          Practicing yoga asanas enhances flexibility, builds strength, and promotes inner balance. These postures support physical health, improve mental clarity, and foster emotional stability, contributing to overall well-being.
        </p>
        <button className="join-button">Join</button>
      </div>
      <div className="benefits-section">
        <img src={benefitsImage} alt="Benefits of Yoga Asanas" />
        <h2>Benefits of Yoga Asanas</h2>
        <div className="benefits-list">
          <ul>
            <li>Enhances flexibility</li>
            <li>Strengthens muscles</li>
            <li>Increases endurance</li>
            <li>Promotes joint health</li>
            <li>Reduces stiffness</li>
            <li>Boosts circulation and cardiovascular health</li>
          </ul>
          <ul>
            <li>Improves balance and stability</li>
            <li>Reduces stress and anxiety</li>
            <li>Enhances mental focus</li>
            <li>Fosters relaxation and calmness</li>
            <li>Encourages mindful breathing</li>
            <li>Supports overall physical and mental well-being</li>
          </ul>
        </div>
      </div>
      <div className="try-yoga-section">
        <img src={tryYogaImage} alt="Try Yoga Classes" />
        <div className="overlay-text">Try Our Yoga Classes</div>
        <button className="join-button">Join</button>
      </div>
      <Footer />
    </div>
  );
};

export default YogaAsanas;
