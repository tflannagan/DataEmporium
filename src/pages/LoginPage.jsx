// src/pages/LoginPage.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import LOGO from "../assets/logo.png";

const LoginPage = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(username, password);
    if (!success) {
      setError("Invalid username or password");
    }
  };

  // If the user is logged in, show a logged-in message and a logo
  if (user) {
    return (
      <div className={`login-page ${user ? "logged-in" : ""}`}>
        <img src={LOGO} alt="Logo" /> {/* Replace with your logo */}
        <h1>You are logged in...</h1>
        <p>Happy to have you here, {user.name}!</p>
        <button onClick={logout}>Sign out</button>
      </div>
    );
  }

  // Login form for users who are not logged in
  return (
    <div className={`login-page ${user ? "logged-in" : ""}`}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;
