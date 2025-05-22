import React from 'react';
import './About.css';
import mercImage from '../../img/merc.png';
import porscheImage from '../../img/prosche.png';
import evoImage from '../../img/evo.png';
import amgImage from '../../img/amg.png'; // Import AMG logo

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-text">
              <p>
                Welcome to <strong>GLOSSY RIDES!</strong> 🚗✨ We're thrilled to
                finally bring my passion for car detailing into my own
                independent business. While I'm new to running my own shop, my
                enthusiasm for making vehicles look their absolute best runs
                deep. I'm excited to be part of this amazing industry and to
                offer a fresh, dedicated approach to car care.
              </p>
               <p>
                I combine big-brand expertise with personalized, one-on-one
                service you won't find at larger shops. Whether you need a
                simple refresh or a complete transformation, you can trust that
                your vehicle will be treated with the highest level of care and
                precision. Your car deserves to shine! 💎🚘
              </p>
              <p>
                Before launching, I had the privilege of working hands-on with
                some of the world's most prestigious automotive brands,
                including
                <img
                  src={mercImage}
                  alt="Mercedes-Benz"
                  className="inline-logo"
                />
                Mercedes-Benz,
                <img
                  src={porscheImage}
                  alt="Porsche"
                  className="inline-logo"
                />{' '}
                Porsche, and
                <img src={evoImage} alt="Evo by BCAA" className="evo-logo" />
                Evo by BCAA.
                🏎️✨ Through these experiences, I mastered meticulous
                detailing, high-end paint correction, and interior restoration
                — skills I now bring directly to every car I touch.
              </p>
              <p>
                <p>Previous Brand Associations:</p>
                <span className="logo-line">
                  <img
                    src={mercImage}
                    alt="Mercedes-Benz"
                    className="logo-item"
                  />
                   <img
                    src={amgImage}
                    alt="AMG"
                    className="logo-item"
                  />
                  <img
                    src={porscheImage}
                    alt="Porsche"
                    className="logo-item"
                  />
                  <img src={evoImage} alt="Evo by BCAA" className="logo-item" />
                </span>
              </p>
            </div>
            {/* <button className="btn btn-secondary">Learn More</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;