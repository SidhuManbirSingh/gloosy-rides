import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields.'
      });
      return;
    }
    
    try {
      setFormStatus({
        submitting: true,
        success: false,
        error: null
      });
      
      // Add timestamp to the form data
      const messageData = {
        ...formData,
        timestamp: new Date(),
      };

      // Save to Firestore
      await addDoc(collection(db, 'messages'), messageData);
      
      setFormStatus({
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          success: false
        }));
      }, 5000);
      
    } catch (err) {
      console.error('Error submitting contact message:', err);
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Failed to submit message. Please try again later.'
      });
    }
  };
  
  return (
    <div className="contact dark-bg"> {/* Added dark-bg class */}
      <section className="contact section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-detail">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Address</h3>
                  <p>104-7999 King George Blvd</p>
                  <p>Surrey, BC</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p>778 956 1186</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>manbirs285@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary contact-btn"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus.success && (
                  <div className="form-success">
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="form-error">
                    {formStatus.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        <div className="contact-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.638012822184!2d-122.84847812362663!3d49.147702279217035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9888c2ea74b%3A0x910223dec877c84c!2s7999%20King%20George%20Blvd%20%23104%2C%20Surrey%2C%20BC%20V3W%205B3!5e0!3m2!1sen!2sca!4v1682803447178!5m2!1sen!2sca"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GLOSSY RIDES Location"
                ></iframe>
              </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;