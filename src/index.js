import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store';
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={store} >
    <Router>
      <App />
    </Router>
      
  </Provider>

);

