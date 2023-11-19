import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const cartItem = { ...item, price: Number(item.price) };
    setCartItems([...cartItems, cartItem]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    console.log("Cart Items:", cartItems); // Debug: log cart items
    const total = cartItems.reduce((total, item) => total + item.price, 0);
    console.log("Total Price:", total); // Debug: log total price
    return total;
  };

  const totalPrice = calculateTotalPrice();

  const checkout = () => {
    console.log("Proceeding to checkout with items:", cartItems);

    setCartItems([]);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        checkout,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
