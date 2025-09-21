import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate subtotal for each item
  const calculateItemSubtotal = (item) => {
    const unitPrice = parseFloat(item.cost.substring(1)); // remove "$"
    return unitPrice * item.quantity;
  };

  // Calculate total cost
  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) => total + calculateItemSubtotal(item),
      0
    );
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item, i) => (
            <div key={i} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: {item.cost}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${calculateItemSubtotal(item).toFixed(2)}</p>

                <div className="cart-actions">
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>
          <div className="cart-buttons">
            <button onClick={onContinueShopping}>Continue Shopping</button>
            <button onClick={handleCheckoutShopping}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
