# Glossy Rides 

This is the frontend for the Glossy Rides car detailing website. It's a single-page application (SPA) built with React.

## Technologies Used

- React 18
- React Hooks
- Axios for API calls
- CSS for styling
- Firebase (for future features like authentication or database)

## Features

- Responsive design for all device sizes
- Smooth scrolling navigation
- Interactive service cards
- Gallery with expandable view
- Blog section with API integration
- Booking form with validation
- Contact form with Google Maps integration
- Dark mode toggle
- Improved UI/UX
- Optimized image loading

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- (Optional) `firebase-tools` if you plan to use Firebase emulators

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```powershell
   cd brar-details-frontend
   ```
3. Install dependencies:
   ```powershell
   npm install
   # or
   yarn install
   ```

### Running the Application

```powershell
npm start
# or
yarn start
```

The application will start on port 3000 by default and will proxy API requests to the backend. Ensure your backend is running and configured correctly.

**If using Firebase emulators (for development):**

1.  **Install Firebase tools (if not already installed):**
    ```powershell
    npm install -g firebase-tools
    ```
2.  **Login to Firebase:**
    ```powershell
    firebase login
    ```
3.  **Start the emulators (if applicable to your project):**
    ```powershell
    firebase emulators:start
    ```

## Project Structure

- `src/components/` - React components organized by section
- `src/styles/` - Global CSS styles
- `src/api/` - API service functions for backend communication
- `src/firebase/` - Firebase configuration and utility functions (if applicable)

## Backend Integration

The frontend communicates with the backend through RESTful API endpoints. The specific endpoints depend on your backend implementation. Example:

- `/api/bookings` - For booking appointments
- `/api/contact` - For contact messages
- `/api/blog-posts` - For blog content

**Important:** Make sure the frontend's API calls match the actual endpoints exposed by your backend.

## Deployment

To build the application for production:

```powershell
npm run build
# or
yarn build
```

This will create a `build` directory with optimized production files.
