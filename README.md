# BRAR DETAILS Frontend

This is the frontend for the BRAR DETAILS car detailing website. It's a single-page application (SPA) built with React.

## Technologies Used

- React 18
- React Hooks
- Axios for API calls
- CSS for styling

## Features

- Responsive design for all device sizes
- Smooth scrolling navigation
- Interactive service cards
- Gallery with expandable view
- Blog section with API integration
- Booking form with validation
- Contact form with Google Maps integration

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd brar-details-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

```bash
npm start
# or
yarn start
```

The application will start on port 3000 by default and will proxy API requests to the backend running on port 8080.

## Project Structure

- `src/components/` - React components organized by section
- `src/styles/` - Global CSS styles
- `src/api/` - API service functions for backend communication

## Backend Integration

The frontend communicates with the Spring Boot backend through RESTful API endpoints:

- `/api/bookings` - For booking appointments
- `/api/contact` - For contact messages
- `/api/blog-posts` - For blog content

## Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will create a `build` directory with optimized production files. 