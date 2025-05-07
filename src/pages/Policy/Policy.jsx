import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Policy.css';

const Policy = () => {
  return (
    <>
      <Navbar />
      <div className="policy-page">
        <h1>Privacy Policy</h1>
        <section>
          <h2>Introduction</h2>
          <p>
            At Yoga Balance, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website and services.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>
            We may collect various types of information, including:
            <ul>
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Payment information (credit card details, billing address, etc.)</li>
              <li>Usage data (pages visited, time spent on the site, etc.)</li>
            </ul>
          </p>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use the collected information for various purposes, including:
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </p>
        </section>
        <section>
          <h2>Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. We may share your information in the following situations:
            <ul>
              <li>With service providers to perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>To prevent or investigate possible wrongdoing in connection with our services</li>
              <li>To protect the personal safety of users of our services or the public</li>
            </ul>
          </p>
        </section>
        <section>
          <h2>Security of Your Information</h2>
          <p>
            The security of your personal information is important to us. We use administrative, technical, and physical security measures to protect your information. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
          </p>
        </section>
        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@yogabalance.com">info@yogabalance.com</a>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Policy;
