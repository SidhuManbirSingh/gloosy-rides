// components/Booking/Booking.js
import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
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

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.service) {
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

      const bookingData = {
        ...formData,
        timestamp: new Date()
      };

      await addDoc(collection(db, 'bookings'), bookingData);

      setFormStatus({
        submitting: false,
        success: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          success: false
        }));
      }, 5000);

    } catch (err) {
      console.error('Error submitting booking:', err);
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Failed to submit booking. Please try again later.'
      });
    }
  };

  return (
    <section className="booking section">
      <div className="container">
        <h2 className="section-title">Book Your Appointment</h2>

        <div className="booking-container">
          <form className="booking-form" onSubmit={handleSubmit}>
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
                placeholder="Enter your name"
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
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (123)-456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">Service *</label>
              <select
                id="service"
                name="service"
                className="form-control"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Exterior Detailing">Exterior Detailing</option>
                <option value="Interior Detailing">Interior Detailing</option>
                <option value="Complete Detail">Complete Detail Package</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Paint Protection">Paint Protection Film</option>
                <option value="Maintenance Wash">Maintenance Wash</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Additional Information</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary booking-btn"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Submitting...' : 'Book Now'}
            </button>

            {formStatus.success && (
              <div className="form-success">
                Your booking has been submitted successfully! We'll contact you soon to confirm.
              </div>
            )}

            {formStatus.error && (
              <div className="form-error">
                {formStatus.error}
              </div>
            )}
          </form>

          <div className="booking-info">
            <h3>Booking Information</h3>
            <p>
              Please fill out the form to schedule your detailing appointment.
              We'll contact you to confirm your booking and provide any additional information.
            </p>
            <div className="booking-details">
              <div className="booking-detail">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div className="booking-detail">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Contact</h4>
                  <p>Phone: (778) 956-1186</p>
                  <p>Email: manbirs285@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
