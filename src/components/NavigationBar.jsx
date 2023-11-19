import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import "./NavigationBar.scss";

const NavigationBar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </li>
        <li>
          <Link to="/datasets">
            <span className="material-symbols-outlined">analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && <span>({cartCount})</span>}
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span className="material-symbols-outlined">passkey</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
