import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import BondOffer from "./components/BondOffer";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from "./features/cart/cartSlice";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" exact element={<Hero/>} />
        <Route path="bond_offer" element={<BondOffer/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="signup" element={<Signup/>} />

      </Routes>

     

    </div>


  );
}

export default App;
