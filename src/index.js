import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Assuming Tailwind CSS setup imports the base styles here
import App from './App';

// Root element to render the application
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element with ID 'root'.");
}