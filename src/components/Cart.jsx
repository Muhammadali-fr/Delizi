import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Prompt from './Prompt.jsx';

function Cart({ cartItems, removeItemFromCart, NotifySucces, NotifyError }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [vaucherCode, setVaucherCode] = useState(0); // Using state for Voucher Code
  const inputRef = useRef("");
  const navigate = useNavigate();

  const handleVacher = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "SA") {
      setVaucherCode(-10); // Set the discount value in state
      NotifySucces();
    } else {
      NotifyError();
    }
    inputRef.current.value = "";
  };

  const handleConfirm = () => {
    if (itemToRemove !== null) {
      removeItemFromCart(itemToRemove); // Remove specific item
      setItemToRemove(null);
    }
    setShowPrompt(false);
  };

  const deleteAll = () => {
    removeItemFromCart(null); // Clear the entire cart
  };

  const handleCancel = () => {
    setItemToRemove(null);
    setShowPrompt(false);
  };

  const requestRemoveItem = (index) => {
    setItemToRemove(index);
    setShowPrompt(true);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0) + vaucherCode; // Use voucherCode state here

  return (
    <div className="cart-container">
      <Header cartItems={cartItems} />
      <div className="wrap-cart-menu-order">
        <div className="wrap-order">
          <div className="cart-container-title">
            <h1>Order List</h1>
          </div>
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <h1>Your cart is empty</h1>
              <p>Looks like you haven’t added anything to your cart yet.</p>
            </div>
          ) : (
            <ul className="wrap-order-ul">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <b>{item.name}</b>
                  <span>${item.price}</span>
                  <img className="wrap-order-ul-img" src={item.image} alt="error in cart" />
                  <button
                    className="wrap-order-remove-btn"
                    onClick={() => requestRemoveItem(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cartItems.length !== 0 && (
          <div className="wrap-all-vacher">
            <div className="wrap-vaucher-total-price">
              <form>
                <input ref={inputRef} type="text" placeholder="Voucher Code..." />
                <button type="button" onClick={handleVacher}>Submit</button>
              </form>
              <div className="total-price">
                <h3>Total Price: <span>${totalPrice.toFixed(2)}</span></h3>
              </div>
            </div>
            <button onClick={deleteAll} className='cart-delete-all'>Delete All</button>
          </div>
        )}
      </div>
      {cartItems.length !== 0 && (
        <div className="wrap-checkout-btn">
          <button className='checkout-btn' onClick={() => navigate('/checkout')}>Checkout</button>
        </div>
      )}

      {showPrompt && (
        <Prompt
          message="Are you sure you want to remove this item from the cart?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <Footer />
    </div>
  );
}

export default Cart;
