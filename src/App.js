import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Landing from './Landing';

function App() {
  return (
    <Router> {/* Wrap your components inside Router */}
      <div>
        <Landing />
      </div>
    </Router>
  );
}

export default App;
