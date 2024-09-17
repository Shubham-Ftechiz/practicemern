import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Add Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Optionally, add Bootstrap JS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
