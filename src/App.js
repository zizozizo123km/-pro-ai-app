import React from 'react';
import AppRouter from './router/AppRouter';

/**
 * App component serves as the root container, handling global styling,
 * context providers (if they were defined), and mounting the main router.
 */
function App() {
  return (
    // Set the overall application background and text color to mimic the dark Netflix theme
    // min-h-screen ensures it always takes up at least the full viewport height.
    <div className="min-h-screen bg-gray-900 text-white antialiased">
      {/*
        In a real application, Context Providers (Auth, State Management, Caching)
        would typically wrap the AppRouter here.
      */}
      <AppRouter />
    </div>
  );
}

export default App;