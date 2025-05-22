import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Configure axios defaults for the email endpoint
const emailAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Booking API endpoints
export const bookingAPI = {
  create: async (bookingData) => {
    try {
      // Store booking data in Firebase
      const docRef = await addDoc(collection(db, "bookings"), {
        ...bookingData,
        createdAt: new Date()
      });
      
      // Send email notification through proxy
      await emailAxios.post('/api/send-email', {
        to: 'manbirs285@gmail.com',
        subject: `New Booking Request: ${bookingData.service}`,
        html: `
          <h2>New Booking Details:</h2>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          <p><strong>Date:</strong> ${bookingData.date}</p>
          <p><strong>Service:</strong> ${bookingData.service}</p>
          <p><strong>Message:</strong> ${bookingData.message || "No additional message"}</p>
        `
      });
      
      return {
        success: true,
        id: docRef.id
      };
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  }
};

// Contact API endpoints
export const contactAPI = {
  create: async (contactData) => {
    try {
      // Store contact message in Firebase
      const docRef = await addDoc(collection(db, "contact"), {
        ...contactData,
        createdAt: new Date()
      });
      
      // Send email notification through proxy
      await emailAxios.post('/api/send-email', {
        to: 'manbirs285@gmail.com',
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Message:</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Message:</strong> ${contactData.message}</p>
        `
      });
      
      return {
        success: true,
        id: docRef.id
      };
    } catch (error) {
      console.error("Error submitting contact message:", error);
      throw error;
    }
  }
};