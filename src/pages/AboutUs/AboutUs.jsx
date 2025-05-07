import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import './AboutUs.css';
import instructorPhoto from '../../assets/hero/img9.jpg';
import c1 from '../../assets/hero/c1.jpg';
import c2 from '../../assets/hero/c2.jpg';
import c3 from '../../assets/hero/c3.jpg';
import c4 from '../../assets/hero/c4.jpg';
import c5 from '../../assets/hero/c5.jpg';
import c6 from '../../assets/hero/c6.jpg';
import c7 from '../../assets/hero/c7.jpg';
import c8 from '../../assets/hero/c8.jpg';
import c9 from '../../assets/hero/c9.jpg';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <section className="instructor-section">
          <img src={instructorPhoto} alt="Yoga Instructor" className="instructor-photo" />
          <div className="instructor-info">
            <h2>About Our Instructor</h2>
            <p>Our esteemed Yoga Instructor is a dedicated professional recognized for their participation in international yoga festivals and significant research presentations. Notably, they secured 5th position for their paper on &apos;SUN MEDITATION&apos; at Banaras Hindu University, in collaboration with IIT Kanpur, and presented on &apos;YAGYOPATHY&apos; at AIIMS, Rishikesh. His expertise has been showcased during the Yog Shivir from June 15th to June 21st, 2022, on the occasion of the 8th International Yoga Day. Additionally, he has completed the Basic and Advanced Auricular Therapy Workshop from Shree Krishna Acupressure Treatment and Training Centre and served as a yoga trainer at the summer creative camp &apos;Learning With ULAR&apos;.</p>
            <p>With bachelor&apos;s and master&apos;s degrees in yoga from renowned universities, he possesses in-depth knowledge of yoga philosophy, anatomy and physiology, biomechanics and kinesiology, as well as therapeutic yoga. He has delivered over 80+ lectures during a two-month program in Surat, Gujarat. His professional internship at Arogyam Wellness Center allowed him to learn the basics of naturopathy and acupressure while coordinating activities for international groups. With over four years of experience teaching yoga both online and offline, he provides expert, personalized instruction to a diverse range of students, ensuring a comprehensive and enriching yoga experience.</p>
          </div>
        </section>
        <section className="about-yoga-balance-section">
          <h2>About Yoga Balance</h2>
          <p>At Yoga Balance, we believe in creating a harmonious space where the body, mind, and spirit unite. Our mission is to bring the ancient practice of yoga to people of all ages and abilities, fostering physical health, mental clarity, and spiritual growth. Our expert instructors, with years of experience and deep knowledge, provide personalized guidance to ensure each session is transformative and enriching. Whether you are a beginner or an advanced practitioner, our diverse range of classes, from asanas to pranayama and meditation, cater to your unique needs. Join us at Yoga Balance to embark on a journey towards inner peace and holistic well-being.</p>
        </section>
        <section className="instructor-carousel-section">
          <h2>Our Instructors in Action</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            interval={2500}
            centerMode={true}
            centerSlidePercentage={33.33}
          >
            <div>
              <img src={c2} alt="Instructor 1" />
            </div>
            <div>
              <img src={c3} alt="Instructor 2" />
            </div>
            <div>
              <img src={c4} alt="Instructor 3" />
            </div>
            <div>
              <img src={c5} alt="Instructor 4" />
            </div>
            <div>
              <img src={c6} alt="Instructor 5" />
            </div>
            <div>
              <img src={c7} alt="Instructor 6" />
            </div>
            <div>
              <img src={c8} alt="Instructor 7" />
            </div>
            <div>
              <img src={c9} alt="Instructor 8" />
            </div>
            <div>
              <img src={c1} alt="Instructor 9" />
            </div>
          </Carousel>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
