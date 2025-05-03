# WorldWise

A modern React application that helps users track and visualize their global travels, built with React, Context API, React Router, and CSS Modules.

![WorldWise App](public/screenshot.png)

## Overview

WorldWise is a feature-rich travel tracking application that allows users to mark cities they've visited on a world map. Users can add new cities, view details about visited locations, and organize their travels by country. The application features a clean, responsive UI with an interactive map.

## Features

- **User Authentication**: Secure login to access personal travel data
- **Interactive Map**: Visualize visited cities on a world map
- **City Management**: Add new cities to your travel history
- **City Details**: View information about each visited location
- **Country Filtering**: Organize and view cities by country
- **Protected Routes**: Secure access to user data
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Performance Optimized**: Uses code splitting and lazy loading

## Project Structure

The project follows a component-based architecture:

```
worldwise/
├── public/           # Static files
├── src/
│   ├── components/   # Reusable UI components
│   ├── contexts/     # React Context providers
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Page components
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
└── ...
```

### Key Components

- **AppLayout**: Main layout wrapper with sidebar, map, and user info
- **CityList**: Displays all cities the user has visited
- **Map**: Interactive map showing visited locations
- **City**: Shows detailed information about a selected city
- **Form**: Interface for adding new cities to the travel history
- **ProtectedRoute**: Higher-order component that secures app routes

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhs27/WorldWise.git
   cd worldwise
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Start the backend server (required for app functionality):

   ```bash
   npm run server
   # or
   yarn server
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
# or
yarn build
```

## Technologies Used

- **React**: UI library
- **React Router**: Navigation and routing
- **Context API**: State management
- **CSS Modules**: Component-scoped styling
- **Lazy Loading**: Performance optimization technique
- **Vite**: Build tool and development server

## API Integration

The application communicates with a local REST API:

- API base URL: `http://localhost:8000`
- Endpoints:
  - GET `/cities`: Retrieve all visited cities
  - GET `/cities/:id`: Get details for a specific city
  - POST `/cities`: Add a new city
  - DELETE `/cities/:id`: Remove a city from the history

## Context Structure

The application state is managed through React Context:

- **CitiesContext**: Manages the cities data with the following state:

  - `cities`: Array of all visited cities
  - `currentCity`: Currently selected city details
  - `isLoading`: Loading state indicator
  - `error`: Error state message

- **AuthContext**: Handles user authentication with:
  - `user`: Current user information
  - `isAuthenticated`: Authentication status
  - `login`: Login function
  - `logout`: Logout function

## Authentication

For demonstration purposes, the app uses a fake authentication system with the following credentials:

- Email: shubhanan@example.com
- Password: qwerty

## Performance Optimization

The application utilizes code splitting and lazy loading for improved performance:

- Main pages are lazy-loaded using React's `lazy` and `Suspense`
- The bundle size is significantly reduced (from ~508KB to ~350KB)

## Future Enhancements

- Implement persistent storage with a real backend
- Add user registration functionality
- Enable note-taking for each city
- Add date tracking for visits
- Support for uploading travel photos
- Trip planning features
- Social sharing capabilities

## Acknowledgments

- This project is part of Jonas Schmedtmann's Udemy course - The Ultimate React Course 2025
- All assets and UI components are inspired by the course material.
