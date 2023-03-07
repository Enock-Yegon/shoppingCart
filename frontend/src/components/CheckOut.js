import React from 'react';
import { useCart } from "react-use-cart";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const CheckOut = () =>{
    const { 
        cartTotal
    } = useCart();
    return(
        <>
        <Navbar/>
        <div className="checkout">
                    <p className="heading">Price Details</p>

                    <div className="price">
                        <p>Price: ${cartTotal.toLocaleString()}</p>
                    </div>

                    <div className="delivery">
                        <p>Delivery Charges:{cartTotal < 1000 ? ( <p>$100</p>) : (<p>Free</p>)}</p>
                    </div>

                    <div className="total">
                        <p>Total: ${cartTotal.toLocaleString()}</p>
                    </div>

                    <Link to="/cart" className="checkout-btn">Payment</Link>
                    <small>*Free Delivery for orders above $1000 </small>
                </div>
    </>
       );
    };
    
    export default CheckOut;