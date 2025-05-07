import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Pranayama.css';
import benefitsImage from '../../assets/hero/img7.jpg'; // Ensure the path is correct
import tryPranayamaImage from '../../assets/hero/img8.jpg'; // Ensure the path is correct

const Pranayama = () => {
  return (
    <div>
      <Navbar />
      <div className="pranayama-content">
        <h1>What is Pranayama?</h1>
        <p>
          Pranayama consists of breathing exercises that focus on controlling the breath to enhance physical and mental well-being.
        </p>
        <p>
          Regular practice of pranayama techniques improves respiratory efficiency, reduces stress, and promotes relaxation.
        </p>
        <button className="join-button">Join</button>
      </div>
      <div className="benefits-section">
        <img src={benefitsImage} alt="Benefits of Pranayama" />
        <h2>Benefits of Pranayama</h2>
        <div className="benefits-list">
          <ul>
            <li>Enhances respiratory function</li>
            <li>Reduces stress and anxiety</li>
            <li>Promotes relaxation and calmness</li>
            <li>Improves focus and concentration</li>
            <li>Boosts immune system</li>
            <li>Supports overall well-being</li>
          </ul>
          <ul>
            <li>Increases energy levels</li>
            <li>Balances emotions</li>
            <li>Enhances mental clarity</li>
            <li>Supports detoxification</li>
            <li>Improves sleep quality</li>
            <li>Helps in controlling emotions</li>
          </ul>
        </div>
      </div>
      <div className="try-pranayama-section">
        <img src={tryPranayamaImage} alt="Try Pranayama Classes" />
        <div className="overlay-text">Try Our Pranayama Classes</div>
        <button className="join-button">Join</button>
      </div>
      <Footer />
    </div>
  );
};

export default Pranayama;
