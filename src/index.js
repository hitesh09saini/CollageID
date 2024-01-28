import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router} from 'react-router-dom';
import UserContextProvider from './context/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    // <UserContextProvider>
      <Router>
          <App />
      </Router>
    // </UserContextProvider>
);
