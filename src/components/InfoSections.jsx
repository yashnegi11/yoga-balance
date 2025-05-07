import React from 'react';
import './InfoSections.css';

const InfoSections = () => {
  return (
    <>
      <section className="info-section left yoga-asanas">
        <div className="info-content">
          <h2>Yoga Asanas</h2>
          <p>
            Yoga asanas, or postures, are more than just exercises for the body. They are pathways to harmonize your physical, mental, and spiritual energies. Our classes focus on gentle progression, ensuring safety and mindfulness in every pose. From foundational stretches to advanced poses, each session at Yog Balance is infused with the essence of meditation, and relaxation techniques, nurturing holistic well-being.
          </p>
          <div className="info-buttons">
            <a href="yoga-asanas" className="btn info-btn">Learn More</a>
            <a href="join" className="btn info-btn">Join</a>
          </div>
        </div>
      </section>
      <section className="info-section right meditation">
        <div className="info-content">
          <h2>Meditation</h2>
          <p>
            Meditation is the art of calming the mind and exploring the depths of consciousness. At Yog Balance, meditation classes go beyond relaxation—they foster clarity, emotional balance, and profound self-awareness. Through guided practices, you will uncover insights into your inner world, cultivating peace and resilience that transcends daily challenges.
          </p>
          <div className="info-buttons">
            <a href="meditation" className="btn info-btn">Learn More</a>
            <a href="join" className="btn info-btn">Join</a>
          </div>
        </div>
      </section>
      <section className="info-section left pranayama">
        <div className="info-content">
          <h2>Pranayama</h2>
          <p>
            Pranayama, the science of breath control, is a vital aspect of yoga practice. Integral to yoga, pranayama techniques at Yoga Balance enhance lung capacity, improve circulation, and promote mental clarity. By mastering breathwork, you will unlock the transformative potential of each yoga session, integrating mind, body, and spirit in harmony.
          </p>
          <div className="info-buttons">
            <a href="pranayama" className="btn info-btn">Learn More</a>
            <a href="join" className="btn info-btn">Join</a>
          </div>
        </div>
      </section>
      <section className="quote-section">
        <div className="quote-content">
          <h2>योगश्चित्तवृत्तिनिरोधः</h2>
          <p>Yoga is the cessation of the fluctuations of the mind</p>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
