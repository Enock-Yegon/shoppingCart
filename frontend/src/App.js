import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart"
import { CartProvider } from "react-use-cart";
import {Routes,Route} from "react-router-dom";
import Search from './components/Search';
import LoginForm from './components/LoginForm';
import CheckOut from './components/CheckOut';


function App() {
  return (
    <>
    <CartProvider>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/loginform" element={<LoginForm/>} />
        

       ... ...
      </Routes>
    </CartProvider>
    </>
  );
}

export default App;
