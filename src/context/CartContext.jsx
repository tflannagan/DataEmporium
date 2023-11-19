import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
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

  // Call calculateTotalPrice() whenever you need the updated total
  const totalPrice = calculateTotalPrice();

  const checkout = () => {
    // Implement checkout logic
    console.log("Proceeding to checkout with items:", cartItems);
    // Clear the cart after checkout
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
