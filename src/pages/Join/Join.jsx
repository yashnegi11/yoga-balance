import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SocialsSection from '../../components/SocialsSection';
import './Join.css';
import bgImage from '../../assets/hero/img10.jpg';

const Join = () => {
  return (
    <div className="join-page">
      <Navbar />
      <div className="join-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="join-content">
          <h2>The Easy Start & Stick With It Plan</h2>
          <ol>
            <li>Contact Us on Whatsapp: +91XXXXXXXXX and book the class. FEE structure will be discussed there only</li>
            <li>Login to Zoom and Join the Class</li>
            <li>Start your Practice. We are always there to support and motivate you to achieve your aim.</li>
          </ol>
          <SocialsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Join;