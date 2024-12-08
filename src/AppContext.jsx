// AppContext.js
import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const AppContext = createContext();

// 2. Create the provider
export function AppProvider({ children }) {
  const [user, setUser] = useState(null);

  // Login function (you can extend this as needed)
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

// 3. Custom hook to use context easily
export function useAppContext() {
  return useContext(AppContext);
}
