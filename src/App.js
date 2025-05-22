import React, { useRef } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // Create refs for each section for smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const blogRef = useRef(null);
  const bookingRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToGallery={() => scrollToSection(galleryRef)}
        scrollToBlog={() => scrollToSection(blogRef)}
        scrollToBooking={() => scrollToSection(bookingRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      
      <div ref={homeRef}>
        <Home scrollToBooking={() => scrollToSection(bookingRef)} />
      </div>
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <div ref={servicesRef}>
        <Services />
      </div>
      
      <div ref={galleryRef}>
        <Gallery />
      </div>
      
      <div ref={blogRef}>
        <Blog />
      </div>
      
      <div ref={bookingRef}>
        <Booking />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      
      <Footer 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToGallery={() => scrollToSection(galleryRef)}
        scrollToBlog={() => scrollToSection(blogRef)}
        scrollToBooking={() => scrollToSection(bookingRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
    </div>
  );
}

export default App; 