import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../assets/styles/CartPage.scss";

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice, checkout } =
    useContext(CartContext);

  return (
    <div className="content-block">
      <h1>Cart</h1>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))}
          <div>
            <h3>Total Price: ${totalPrice}</h3>
            <button onClick={checkout} className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
