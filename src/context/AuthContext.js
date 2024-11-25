import React, { createContext, useState, useEffect, useContext } from 'react';
import { login as authLogin, logout as authLogout, isLoggedIn } from '../utils/authUtils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedInState, setIsLoggedInState] = useState(isLoggedIn());
  
  const login = (input, password) => {
    if (authLogin(input, password)) {
      setIsLoggedInState(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    authLogout();
    setIsLoggedInState(false);
  };

  useEffect(() => {
    setIsLoggedInState(isLoggedIn());
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedInState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
