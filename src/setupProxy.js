const { createProxyMiddleware } = require('http-proxy-middleware');
const { Resend } = require('resend');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Resend
const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

module.exports = function(app) {
  // Parse JSON bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // Apply CORS specifically for Resend API endpoints
  app.use('/api/send-email', cors({
    origin: 'http://localhost:3000',
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

  // Debug middleware to log requests
  app.use('/api/send-email', (req, res, next) => {
    console.log('Request Body:', req.body);
    next();
  });

  // Email sending endpoint
  app.post('/api/send-email', async (req, res) => {
    try {
      const { to, subject, html } = req.body;
      
      console.log('Attempting to send email with:', { to, subject });

      const data = await resend.emails.send({
        from: 'Glossy Rides <onboarding@resend.dev>',
        to,
        subject,
        html
      });
      
      console.log('Email sent successfully:', data);
      res.json({ success: true, data });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message,
        details: error.response?.data || 'No additional details'
      });
    }
  });
};