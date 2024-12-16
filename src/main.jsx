import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import './apple.css'; // This seems unnecessary since you're already importing it
// import { BrowserRouter } from 'react-router-dom'; // Corrected import
import '../src/APPLE WEB BOOTSTRAP/apple.css';
import '../src/APPLE WEB BOOTSTRAP/bootstrap.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App />
    
  </StrictMode>
);
