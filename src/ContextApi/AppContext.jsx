// AppContext.js
import React, { createContext, useState,  useContext } from 'react';

// Create a context with a default value
const AppContext = createContext();


// Create a provider component
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
     email: '',
     username: '',
     id: '',
  });

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
    setUser
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

const  useAppContext = ()=> useContext(AppContext);

export { AppProvider, useAppContext };
