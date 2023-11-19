// src/context/AuthContext.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext();

// Hardcoded credentials for demonstration
const fakeCredentials = {
  username: "test",
  password: "password",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (
      username === fakeCredentials.username &&
      password === fakeCredentials.password
    ) {
      const fakeUser = { id: 1, name: "Ty", username: "admin" };
      setUser(fakeUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  AuthProvider.propTypes = {
    children: PropTypes.node,
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
