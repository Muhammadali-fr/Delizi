import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import Header from './Header';
import Footer from './Footer';
import { FaAngleLeft } from "react-icons/fa6";

function Checkout({cartItems}) {
  const navigate = useNavigate();
  return (
    <div className='wrap-checkout'>
      <Header cartItems={cartItems} />
      <div className="checkout">

       <div className="checkout-title">
          <button onClick={()=>navigate('/Cart')} className="checkout-back"><FaAngleLeft /></button>
          <h1>Checkout</h1>
          <div className="checkout-hidden-btn"></div>
        </div>

        <div className="checkout-address">
          <h2>Shipping address</h2>
          <form className='checkout-address-form'>
            <input placeholder='Your Address...' type="text" />
            <button>Change</button>
          </form>
        </div>

        <div className="checkout-data">
          <h2>Order data</h2>

          <form className="order-form">

            <div className="form-row">
              <input type="text" name="firstName" placeholder="First name" className="form-input" />
              <input type="text" name="lastName" placeholder="Last name" className="form-input" />
            </div>

            <div className="form-row">
              <input type="text" name="phoneNumber" placeholder="Phone number" className="form-input" />
              <input type="email" name="email" placeholder="Email address" className="form-input" />
            </div>

            <textarea name="note" placeholder="Note" className="form-textarea"></textarea>

            <h3 className="section-title">Order time</h3>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="orderTime" value="now" /> Order now
              </label>
              <label className="radio-label">
                <input type="radio" name="orderTime" value="later" /> Order later
              </label>
            </div>

            <h3 className="section-title">Order method</h3>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="orderMethod" value="delivery" /> Delivery
              </label>
              <label className="radio-label">
                <input type="radio" name="orderMethod" value="takeaway" /> Take away
              </label>
            </div>

            <h3 className="section-title">Payment method</h3>
            <div className="grid">
              <label className="radio-label">
                <input type="radio" name="paymentMethod" value="cashOnDelivery" /> Cash On Delivery
              </label>
              <label className="radio-label">
                <input type="radio" name="paymentMethod" value="virtualAccount" /> BCA Virtual Account
              </label>
              <label className="radio-label">
                <input type="radio" name="paymentMethod" value="creditCard" /> Credit Card
              </label>
              <label className="radio-label">
                <input type="radio" name="paymentMethod" value="transferBank" /> Transfer Bank
              </label>
            </div>

            <div className="checkbox-container">
              <label className="checkbox-label">
                <input type="checkbox" name="agreeToTerms" />
                Choose to indicate that you have read and agree to our Terms of use & Privacy Policy.
              </label>
            </div>

            <div className="order-form-wrap-btn">
              <button type="submit" className="submit-button">Order now</button>
            </div>
          </form>

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
