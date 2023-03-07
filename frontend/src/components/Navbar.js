import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Shopping Cart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/" aria-current="page">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
              <Link className="nav-link" to="/checkout">CheckOut</Link>
              <Link className="nav-link" to="/search">Search</Link>
              <Link className="nav-link" to="/loginform">LoginForm</Link>
          
            </div>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;