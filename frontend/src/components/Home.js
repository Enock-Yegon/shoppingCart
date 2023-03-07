import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
        <Navbar/>
        <section>
            <div className="text-center mt-3">
                <div>
                    <h1>Everything you need. Delivered right to your door. We ship you happiness.</h1>
                    <p>We are Kenya's fastest growing Ecommerce Store.</p>
                    <Link to="/products">Shop Now</Link>
                </div>
                </div>
                </section>

                
        </>
    );
};

export default Home;
