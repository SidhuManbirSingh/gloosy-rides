import React from 'react';
import './Footer.css';

const Footer = ({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToServices, 
  scrollToGallery, 
  scrollToBlog, 
  scrollToBooking, 
  scrollToContact 
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>GLOSSY RIDES</h2>
            <p>New to the Industry, Passionate About Perfection</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><span onClick={scrollToHome}>Home</span></li>
              <li><span onClick={scrollToAbout}>About</span></li>
              <li><span onClick={scrollToServices}>Services</span></li>
              <li><span onClick={scrollToGallery}>Gallery</span></li>
              <li><span onClick={scrollToBlog}>Blog</span></li>
              <li><span onClick={scrollToBooking}>Book</span></li>
              <li><span onClick={scrollToContact}>Contact</span></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i>#104 7999 King George Blvd, Surrey, BC</p>
            <p><i className="fas fa-phone"></i><p className="footer-contact-details">+1 (778)-956-1186</p></p>
            <p><i className="fas fa-envelope"></i> manbirs285@gmail.com</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} GLOSSY RIDES. All Rights Reserved.</p>
          <p>
            <span>Privacy Policy</span> | <span>Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;