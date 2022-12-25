import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store';
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import BondOffer from "./components/BondOffer";
import Cart from "./components/Cart";
import Signup from "./components/Signup";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={store} >
    <Router>
      <App />
    </Router>
      
  </Provider>

);

