// src/context/AuthContext.jsx

import PropTypes from "prop-types";
import { createContext, useState } from "react";

// Create a context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login function
  const login = (username, password) => {
    // In a real app, here you would make an API call to your authentication service
    // For testing, we'll just simulate a successful login with a test user
    if (username === "testuser" && password === "testpassword") {
      const testUserData = { id: 1, username: "testuser", name: "Test User" };
      setUser(testUserData); // Set the user data in state
      return true;
    } else {
      return false; // Login failed
    }
  };

  // Logout function
  const logout = () => {
    setUser(null); // Clear the user data
  };

  // Context value
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
