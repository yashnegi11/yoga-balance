import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SocialsSection from '../../components/SocialsSection'; // Component for the social links

const Socials = () => {
  return (
    <>
      <Navbar />
      <div className="socials-page">
        <SocialsSection />
        </div>
      <Footer />
    </>
  );
}

export default Socials;
