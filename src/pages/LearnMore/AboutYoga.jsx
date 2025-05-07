import React from 'react';
import Navbar from '../../components/Navbar';
import './AboutYoga.css';

const AboutYoga = () => {
  return (
    <>
        <Navbar />
        <section className="about-yoga">
        <div className="about-container">
            <h1>The Ancient Art of Yoga</h1>
            
            {/* Origins Section */}
            <div className="about-section">
            <h2>How Yoga Started</h2>
            <p>
                Yoga originated in ancient India over 5,000 years ago. The word "yoga" comes from the Sanskrit root "yuj," meaning "to unite" – symbolizing the union of mind, body, and spirit. 
                The earliest mentions appear in the <strong>Rig Veda</strong>, but it was <strong>Patanjali</strong> who systematized yoga into the "Yoga Sutras" around 400 CE.
            </p>
            <img 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Ancient yoga scriptures" 
                className="about-image"
            />
            </div>

            {/* Benefits Section */}
            <div className="about-section">
            <h2>Benefits of Yoga</h2>
            <div className="benefits-grid">
                <div className="benefit-card">
                <h3>🧘‍♀️ Stress Relief</h3>
                <p>Reduces cortisol levels and promotes relaxation.</p>
                </div>
                <div className="benefit-card">
                <h3>💪 Strength & Flexibility</h3>
                <p>Builds muscle tone and improves joint mobility.</p>
                </div>
                <div className="benefit-card">
                <h3>🧠 Mental Clarity</h3>
                <p>Enhances focus and reduces anxiety.</p>
                </div>
                <div className="benefit-card">
                <h3>❤️ Heart Health</h3>
                <p>Lowers blood pressure and improves circulation.</p>
                </div>
            </div>
            </div>

            <a href="/" className="back-btn">← Back to Home</a>
        </div>
        </section>
    </>
  );
};

export default AboutYoga;