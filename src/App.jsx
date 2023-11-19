// src/main.jsx or src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import DatasetListPage from "./pages/DatasetListPage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import CartPage from "./pages/CartPage";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <NavigationBar />
      <div className="main-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/datasets"
            element={user ? <DatasetListPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={user ? <CartPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
