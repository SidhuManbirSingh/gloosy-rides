import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../img/logo-navbar.png'; // Import your logo image

const Navbar = ({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToServices, 
  scrollToGallery, 
  scrollToBlog, 
  scrollToBooking, 
  scrollToContact 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Close mobile menu after clicking a link
  const handleNavLinkClick = (scrollFunction) => {
    scrollFunction();
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavLinkClick(scrollToHome)}>
          <img src={logo} alt="GLOSSY RIDES" className="logo-image" /> {/* Use the logo image */}
        </div>
        
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleNavLinkClick(scrollToHome)}>Home</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleNavLinkClick(scrollToAbout)}>About</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleNavLinkClick(scrollToServices)}>Services</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleNavLinkClick(scrollToGallery)}>Gallery</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleNavLinkClick(scrollToBlog)}>Blog</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleNavLinkClick(scrollToBooking)}>Book</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleNavLinkClick(scrollToContact)}>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;