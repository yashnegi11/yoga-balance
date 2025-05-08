import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import YogaAsanas from './pages/YogaAsanas/YogaAsanas';
import Meditation from './pages/Meditation/Meditation';
import Pranayama from './pages/Pranayama/Pranayama';
import ContactUs from './pages/ContactUs/ContactUs'; // Import ContactUs component
import PolicyPage from './pages/Policy/Policy';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Donate from './pages/Donate/Donate';
import Socials from './pages/Socials/Socials';
import Join from './pages/Join/Join';
import AboutYoga from './pages/LearnMore/AboutYoga';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <InfoSections />
              <Footer />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/yoga-asanas" element={<YogaAsanas />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/pranayama" element={<Pranayama />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path='/policy' element={<PolicyPage />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/socials' element={<Socials />} />
          <Route path='/join' element={<Join />} />
          <Route path="/learn-more" element={<AboutYoga />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
