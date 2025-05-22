import React from 'react';
import './Home.css';
import mustangImage from "../../img/gallery/mustang.jpg"; // Adjust the path as needed

const Home = ({ scrollToBooking }) => {
  return (
    <section
      className="home dark-bg" // Added dark-bg class
      style={{ backgroundImage: `url(${mustangImage})` }}
    >
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="home-title">GLOSSY RIDES</h1>
          <p className="home-subtitle">New to the Industry, Passionate About Perfection</p>
          <button className="btn btn-primary" onClick={scrollToBooking}>
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;