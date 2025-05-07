import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <div className="disclaimer-page">
        <h1>Disclaimer</h1>
        <section>
          <h2>Terms of Use</h2>
          <p>
            By using Yoga Balance, you signify your assent to these terms of use. If you do not agree to these terms of use, please do not use this site.
          </p>
        </section>
        <section>
          <h2>Restrictions on Use of Materials</h2>
          <p>
            The content on Yoga Balance&apos;s website is for informational purposes only. While we strive for accuracy, we make no warranties regarding the completeness or reliability of the information. Yoga Balance is not liable for any errors or omissions or for the results obtained from the use of this information.
          </p>
        </section>
        <section>
          <h2>Linked Sites</h2>
          <p>
            Our website may contain links to external sites that are not provided or maintained by Yoga Balance. We do not endorse and are not responsible for the content or practices of any third-party sites.
          </p>
        </section>
        <section>
          <h2>Disclaimer</h2>
          <p>
            Yoga Balance provides yoga-related content for educational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition. Yoga Balance is not responsible for any health issues that may arise from the use of our content.
          </p>
        </section>
        <section>
          <h2>Yoga Exercise Class</h2>
          <p>
            Yoga Balance&apos;s classes and exercises are designed to help improve physical and mental well-being. However, participation is at your own risk. Consult your healthcare provider before beginning any new exercise program. We are not liable for any injuries or health issues that may result from participating in our classes.
          </p>
        </section>
        <section>
          <h2>Changes to Disclaimer</h2>
          <p>
            We may update our Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page. You are advised to review this Disclaimer periodically for any changes.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at: <a href="mailto:info@yogabalance.com">info@yogabalance.com</a>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Disclaimer;
