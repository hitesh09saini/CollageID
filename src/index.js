import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './ContextApi/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
);
