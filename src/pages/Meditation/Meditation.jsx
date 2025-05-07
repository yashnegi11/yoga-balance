import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Meditation.css';
import img6 from '../../assets/hero/img6.jpg';
import img8 from '../../assets/hero/img8.jpg';

const Meditation = () => {
  return (
    <div>
      <Navbar />
      <div className="meditation-content">
        <h1>What is Meditation?</h1>
        <p>Meditation is a centuries-old practice that fosters mental clarity, emotional calm, and spiritual insight. It involves focused attention and mindfulness techniques.</p>
        <p>Meditation reduces stress, enhances concentration, and promotes inner peace. It supports emotional well-being, improves sleep quality, and cultivates a deep sense of self-awareness and tranquility.</p>
        <button className="join-button">Join</button>
      </div>
      <div className="benefits-section">
      <img src={img6} alt="Benefits of Meditation" />
        <h2>Benefits of Meditation</h2>
        <div className="benefits-list">
          <ul>
            <li>Reduces stress</li>
            <li>Enhances emotional well-being and resilience</li>
            <li>Improves concentration and attention span</li>
            <li>Cultivates mindfulness and self-awareness</li>
            <li>Promotes inner peace and tranquility</li>
            <li>Reduces anxiety and depression</li>
          </ul>
          <ul>
            <li>Enhances creativity</li>
            <li>Better sleep quality</li>
            <li>Boosts immune function</li>
            <li>Balances blood pressure and heart rate</li>
            <li>Increases self-compassion and empathy</li>
            <li>Facilitates spiritual growth and personal transformation</li>
          </ul>
        </div>
      </div>
      <div className="try-meditation-section">
        <img src={img8} alt="Try Meditation Classes" />
        <div className="overlay-text">Try Our Meditation Classes</div>
        <button className="join-button">Join</button>
      </div>
      <Footer />
    </div>
  );
};

export default Meditation;
