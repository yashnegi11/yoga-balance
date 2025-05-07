import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Donate.css';

const Donate = () => {
  const handleDonateClick = () => {
    window.location.href = 'https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID';
  };

  return (
    <>
      <Navbar />
      <div className="donate-page">
        <h1>Support Our Program</h1>
        <section className="program-description">
          <p>
            At Yoga Balance, we believe in making yoga accessible to everyone, especially to underprivileged children. Your generous donations help us provide free yoga classes to schools and communities in need. Together, we can make a difference in their lives by promoting physical and mental well-being.
          </p>
        </section>
        <section className="donation-section">
          <h2>Make a Donation</h2>
          <button onClick={handleDonateClick} className="donate-button">Donate Now</button>
        </section>
        <section className="call-to-action">
          <h2>Thank You for Your Support!</h2>
          <p>
            Your contribution helps us continue our mission to bring the benefits of yoga to those who need it most. Together, we can make a significant impact.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
