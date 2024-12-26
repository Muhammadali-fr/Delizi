import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
// import MenuItems from './components/MenuItems';
import ResetPassword from './components/ResetPassword';
import AboutUs from './components/AboutUs';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import OrderOnline from './components/Orderonline';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    console.log('Adding item to cart:', item);
    setCartItems([...cartItems, item]);
    };

    const NotifySucces = () => {
        toast.success("Success!!!", {
          position: "top-right"
        });
        
    };

    const NotifyError = () => {
      toast.error("error", {
          position: "top-right"
        });
    }

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  

  const removeItemFromCart = (index) => {
    if (index === null) {
      // Clear the entire cart
      setCartItems([]);
    } else {
      // Remove the item at the given index
      const updatedCart = [
        ...cartItems.slice(0, index),
        ...cartItems.slice(index + 1),
      ];
      setCartItems(updatedCart);
    }
  };
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home cartItems={cartItems} addItemToCart={addItemToCart} NotifySucces={NotifySucces} />} />
          <Route path='/login' element={<Login   NotifyError={NotifyError} NotifySucces={NotifySucces} />} />
          <Route path='/signup' element={<Signup   NotifyError={NotifyError} NotifySucces={NotifySucces} />} />
          <Route path='/resetPassword' element={<ResetPassword  NotifySucces={NotifySucces} NotifyError={NotifyError} />} />
          <Route path='/about' element={<AboutUs cartItems={cartItems}  />} />
          <Route path='/reservation' element={<Reservation cartItems={cartItems}  />} />
          <Route path='/contact' element={<Contact cartItems={cartItems}  NotifySucces={NotifySucces} />} />
          <Route path='/orderonline' element={<OrderOnline cartItems={cartItems}  NotifySucces={NotifySucces} addItemToCart={addItemToCart} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} NotifySucces={NotifySucces} NotifyError={NotifyError} />} />
          <Route path='/checkout' element={<Checkout cartItems={cartItems} removeItemFromCart={removeItemFromCart} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
